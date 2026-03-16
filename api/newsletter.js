const { prisma } = require("../lib/prisma");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SOURCES = new Set(["website-newsletter", "website-pro-page"]);

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    sendJson(res, 405, { error: "Method not allowed." });
    return;
  }

  let body = req.body || {};

  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      sendJson(res, 400, { error: "Payload non valido." });
      return;
    }
  }

  if (body.company) {
    sendJson(res, 200, { ok: true });
    return;
  }

  const email = String(body.email || "").trim().toLowerCase();
  const consent = body.consent === true;
  const wantsTrialUpdates = body.wantsTrialUpdates !== false;
  const source = ALLOWED_SOURCES.has(body.source)
    ? body.source
    : "website-newsletter";

  if (!EMAIL_REGEX.test(email)) {
    sendJson(res, 400, { error: "Inserisci un indirizzo email valido." });
    return;
  }

  if (!consent) {
    sendJson(res, 400, { error: "Il consenso e obbligatorio." });
    return;
  }

  try {
    await prisma.newsletterSubscriber.create({
      data: {
        email,
        consent: true,
        wantsTrialUpdates,
        source,
        status: "subscribed"
      }
    });

    sendJson(res, 200, { ok: true });
  } catch (error) {
    if (error && error.code === "P2002") {
      sendJson(res, 200, { ok: true, alreadySubscribed: true });
      return;
    }

    console.error("Newsletter signup failed:", error);
    sendJson(res, 500, {
      error: "Errore durante il salvataggio della tua email."
    });
  }
};
