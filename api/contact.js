'use strict';

const MIN_SUBMIT_MS = Number(process.env.CONTACT_MIN_SUBMIT_MS || 4000);
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 3000;
const MAX_REASON_LENGTH = 80;
const DEFAULT_N8N_CONTACT_WEBHOOK_URL_PRODUCTION = 'https://n8n.2erre.online/webhook/balance-support-v1';
const DEFAULT_N8N_CONTACT_WEBHOOK_URL_TEST = 'https://n8n.2erre.online/webhook-test/balance-support-v1';

function json(res, statusCode, payload) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(payload));
}

function getAllowedOrigins() {
    return (process.env.CONTACT_ALLOWED_ORIGINS || '')
        .split(',')
        .map(item => item.trim())
        .filter(Boolean);
}

function getRequestOrigin(req) {
    const origin = req.headers.origin;
    return typeof origin === 'string' ? origin : '';
}

function getRequestHost(req) {
    const forwardedHost = req.headers['x-forwarded-host'];
    if (typeof forwardedHost === 'string' && forwardedHost.length > 0) {
        return forwardedHost.split(',')[0].trim().toLowerCase();
    }

    const host = req.headers.host;
    return typeof host === 'string' ? host.toLowerCase() : '';
}

function isLocalRequest(req) {
    const origin = getRequestOrigin(req).toLowerCase();
    const host = getRequestHost(req);

    return origin.includes('localhost') ||
        origin.includes('127.0.0.1') ||
        host.includes('localhost') ||
        host.includes('127.0.0.1');
}

function getWebhookUrl(req) {
    if (isLocalRequest(req)) {
        return process.env.N8N_CONTACT_WEBHOOK_URL_TEST ||
            process.env.N8N_CONTACT_WEBHOOK_URL ||
            DEFAULT_N8N_CONTACT_WEBHOOK_URL_TEST;
    }

    return process.env.N8N_CONTACT_WEBHOOK_URL_PRODUCTION ||
        process.env.N8N_CONTACT_WEBHOOK_URL ||
        DEFAULT_N8N_CONTACT_WEBHOOK_URL_PRODUCTION;
}

function setCorsHeaders(res, origin, allowedOrigins) {
    if (!origin) return;
    if (allowedOrigins.length > 0 && !allowedOrigins.includes(origin)) return;

    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

async function readRawBody(req) {
    const chunks = [];

    for await (const chunk of req) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }

    return Buffer.concat(chunks).toString('utf8');
}

async function parseBody(req) {
    if (req.body && typeof req.body === 'object') return req.body;

    if (typeof req.body === 'string' && req.body.length > 0) {
        try {
            return JSON.parse(req.body);
        } catch (error) {
            return {};
        }
    }

    const rawBody = await readRawBody(req);
    if (!rawBody) return {};

    try {
        return JSON.parse(rawBody);
    } catch (error) {
        return {};
    }
}

function normalizeField(value, maxLength) {
    if (typeof value !== 'string') return '';
    return value.trim().slice(0, maxLength);
}

function getClientIp(req) {
    const forwardedFor = req.headers['x-forwarded-for'];
    if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
        return forwardedFor.split(',')[0].trim();
    }

    const realIp = req.headers['x-real-ip'];
    return typeof realIp === 'string' ? realIp : '';
}

function validatePayload(payload) {
    const reason = normalizeField(payload.reason, MAX_REASON_LENGTH);
    const name = normalizeField(payload.name, MAX_NAME_LENGTH);
    const email = normalizeField(payload.email, MAX_EMAIL_LENGTH).toLowerCase();
    const message = normalizeField(payload.message, MAX_MESSAGE_LENGTH);
    const honeypot = normalizeField(payload.honeypot, 255);
    const formStart = Number(payload.formStart || payload.form_start || 0);

    if (honeypot) {
        return { blocked: true };
    }

    if (!Number.isFinite(formStart) || Date.now() - formStart < MIN_SUBMIT_MS) {
        return { error: 'Invio troppo veloce. Attendi qualche secondo e riprova.', status: 429 };
    }

    if (!reason || !name || !email || !message) {
        return { error: 'Compila tutti i campi richiesti.', status: 400 };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return { error: 'Inserisci un indirizzo email valido.', status: 400 };
    }

    return {
        value: {
            reason,
            name,
            email,
            message,
            formStart
        }
    };
}

async function forwardToN8N(payload, req) {
    const webhookUrl = getWebhookUrl(req);

    if (!webhookUrl) {
        throw new Error('N8N contact webhook URL is not configured.');
    }

    const headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'balance-contact-proxy/1.0'
    };

    if (process.env.N8N_CONTACT_WEBHOOK_SECRET) {
        headers['X-Balance-Webhook-Secret'] = process.env.N8N_CONTACT_WEBHOOK_SECRET;
    }

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            ...payload,
            source: 'balance-website',
            submittedAt: new Date().toISOString(),
            origin: getRequestOrigin(req),
            ip: getClientIp(req),
            userAgent: typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : ''
        })
    });

    if (!response.ok) {
        const body = await response.text();
        throw new Error(`Webhook forward failed with status ${response.status}: ${body.slice(0, 300)}`);
    }
}

module.exports = async (req, res) => {
    const allowedOrigins = getAllowedOrigins();
    const origin = getRequestOrigin(req);

    setCorsHeaders(res, origin, allowedOrigins);

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (req.method !== 'POST') {
        json(res, 405, { error: 'Method not allowed.' });
        return;
    }

    if (allowedOrigins.length > 0 && origin && !allowedOrigins.includes(origin)) {
        json(res, 403, { error: 'Origin not allowed.' });
        return;
    }

    try {
        const body = await parseBody(req);
        const validation = validatePayload(body);

        if (validation.blocked) {
            json(res, 200, { ok: true });
            return;
        }

        if (validation.error) {
            json(res, validation.status || 400, { error: validation.error });
            return;
        }

        await forwardToN8N(validation.value, req);
        json(res, 200, { ok: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Contact API error:', message);

        if (message.includes('N8N contact webhook URL')) {
            json(res, 500, {
                error: 'Configura il webhook n8n del form contatti prima di usare questa pagina.'
            });
            return;
        }

        if (message.includes('status 401')) {
            json(res, 502, {
                error: 'n8n ha rifiutato la richiesta. Verifica che `N8N_CONTACT_WEBHOOK_SECRET` su Vercel coincida con il secret del workflow.'
            });
            return;
        }

        if (message.includes('status 404')) {
            json(res, 502, {
                error: 'Webhook n8n non trovato. Verifica URL, workflow attivo e differenza tra endpoint test e production.'
            });
            return;
        }

        json(res, 502, {
            error: 'Impossibile inoltrare il messaggio in questo momento. Riprova tra poco.'
        });
    }
};
