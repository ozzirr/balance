const WAITLIST_WEBHOOK_URL = 'https://n8n.2erre.online/webhook/waitlist';

document.addEventListener('DOMContentLoaded', () => {
    window.__waitlistT0 = Date.now();
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Navbar Glass Effect on Scroll (Enhancement)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.background = 'rgba(10, 12, 17, 0.9)';
            header.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
        } else {
            header.style.background = 'rgba(10, 12, 17, 0.75)';
            header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }

    // Leaderboard Fetch
    fetchContributors();

    // Initialize Carousels
    initCarousel('hero-carousel');
    initCarousel('wallet-carousel', { duration: 3000 });
    initCarousel('charts-carousel', { duration: 3500 });

    // Initialize Modal
    initModal();

    // Initialize Contact Form
    initContactForm();

    // Initialize Waitlist Form
    initWaitlistForm();

    // Initialize 3D iPhone interaction
    initIPhone3D();
});

function initCarousel(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide');
    const indicators = container.querySelectorAll('.indicator');
    if (slides.length === 0) return;

    let currentIndex = 0;
    let interval;
    const duration = options.duration || 4000;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        slides[index].classList.add('active');
        if (indicators[index]) indicators[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        let next = (currentIndex + 1) % slides.length;
        showSlide(next);
    }

    function startInterval() {
        stopInterval();
        interval = setInterval(nextSlide, duration);
    }

    function stopInterval() {
        if (interval) clearInterval(interval);
    }

    // Manual controls
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            showSlide(index);
            startInterval();
        });
    });

    const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) startInterval();
            else stopInterval();
        });
    }, { threshold: 0.1 });

    carouselObserver.observe(container);
    startInterval();
}

async function fetchContributors() {
    const listContainer = document.getElementById('leaderboard-list');
    if (!listContainer) return;

    const CACHE_KEY = 'balance_contributors_v1_0_1';
    const CACHE_TTL = 1 * 60 * 60 * 1000; // 1 hour
    const REPO = 'ozzirr/balance-app-v1';

    // Check Cache
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
            renderLeaderboard(data);
            return;
        }
    }

    try {
        const response = await fetch(`https://api.github.com/repos/${REPO}/contributors?per_page=20&t=${Date.now()}`);
        if (!response.ok) throw new Error('API Error');

        const data = await response.json();

        // Cache Result
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data: data
        }));

        renderLeaderboard(data);
    } catch (error) {
        console.error('Leaderboard error:', error);
        listContainer.innerHTML = `
            <div style="padding: 20px; text-align: center; color: var(--text-secondary);">
                <p>Impossibile caricare i contributors.</p>
            </div>
        `;
    }
}

function renderLeaderboard(contributors) {
    const listContainer = document.getElementById('leaderboard-list');
    listContainer.innerHTML = ''; // Clear skeleton

    if (!contributors || contributors.length === 0) {
        listContainer.innerHTML = '<p style="padding:20px; text-align:center">Nessun contributor trovato.</p>';
        return;
    }

    contributors.forEach((user, index) => {
        const rank = index + 1;
        const isTop3 = rank <= 3 ? 'top-3' : '';

        const row = document.createElement('a');
        row.href = user.html_url;
        row.target = '_blank';
        row.className = 'leaderboard-row';
        row.innerHTML = `
            <div class="leaderboard-rank ${isTop3}">#${rank}</div>
            <img src="${user.avatar_url}" alt="${user.login}" class="leaderboard-avatar">
            <div class="leaderboard-info">
                <span class="leaderboard-name">${user.login}</span>
                <span class="leaderboard-contributions">${user.contributions} contributi</span>
            </div>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.8rem; opacity: 0.5;"></i>
        `;
        listContainer.appendChild(row);
    });
}

// Modal Logic
function initModal() {
    const modal = document.getElementById('download-modal');
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.getElementById('modal-close');

    if (!modal || !openBtns.length) return;

    const overlay = modal.querySelector('.modal-overlay');

    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    };

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-message');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Anti-bot check (Honeypot)
        const honeypot = form.querySelector('#honeypot').value;
        if (honeypot) {
            console.warn('Bot detected!');
            return;
        }

        // Simulate submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Invio in corso...';

        setTimeout(() => {
            form.style.display = 'none';
            successMsg.style.display = 'block';
            console.log('Message sent:', new FormData(form));
        }, 1500);
    });
}

function parseQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        src: params.get('src') || '',
        screen: params.get('screen') || '',
        variant: params.get('variant') || '',
        platform: params.get('platform') || '',
        locale: params.get('locale') || ''
    };
}

function initWaitlistForm() {
    const form = document.getElementById('waitlistForm');
    if (!form) return;

    const message = document.getElementById('form-status') || document.getElementById('waitlistMessage');
    const submitBtn = document.getElementById('waitlistSubmit');
    const emailInput = document.getElementById('waitlistEmail');
    const consentInput = document.getElementById('waitlistConsent');
    const honeypotInput = document.getElementById('waitlistHp');
    const turnstileContainer = document.getElementById('turnstile-container');

    const SUCCESS_TEXT = 'Iscrizione completata. Ti avviseremo al lancio.';
    const LOADING_TEXT = 'Invio in corso…';
    const ERROR_TEXT = 'Qualcosa è andato storto. Riprova.';
    const ENDPOINT_URL = WAITLIST_WEBHOOK_URL;
    const defaultSubmitText = submitBtn ? submitBtn.textContent : 'Avvisami al lancio';
    const TURNSTILE_SITE_KEY = '0x4AAAAAACWvRx6pVs6jea25';
    const DEBUG_WAITLIST = false;

    let turnstileToken = '';
    let turnstileWidgetId = null;

    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const setDebugLog = (...args) => {
        if (!DEBUG_WAITLIST) return;
        console.debug(...args);
    };

    const setMessage = (text, type) => {
        if (!message) return;
        message.textContent = text || '';
        message.classList.remove('success', 'error', 'loading');
        if (type) {
            message.classList.add(type);
        }
    };

    const setLoading = (isLoading) => {
        if (!submitBtn) return;
        submitBtn.disabled = isLoading;
        submitBtn.classList.toggle('loading', isLoading);
        submitBtn.textContent = isLoading ? LOADING_TEXT : defaultSubmitText;
    };

    const resetTurnstile = () => {
        if (window.turnstile && typeof window.turnstile.reset === 'function' && turnstileWidgetId !== null) {
            window.turnstile.reset(turnstileWidgetId);
        }
        turnstileToken = '';
    };

    const renderTurnstile = () => {
        if (!turnstileContainer || !window.turnstile || turnstileWidgetId !== null) return false;
        turnstileWidgetId = window.turnstile.render(turnstileContainer, {
            sitekey: TURNSTILE_SITE_KEY,
            callback: (token) => {
                turnstileToken = token || '';
            },
            'expired-callback': () => {
                turnstileToken = '';
            },
            'error-callback': () => {
                turnstileToken = '';
            }
        });
        return true;
    };

    const ensureTurnstile = () => {
        if (!turnstileContainer) return;
        if (window.turnstile) {
            renderTurnstile();
            return;
        }
        let tries = 0;
        const maxTries = 60;
        const interval = setInterval(() => {
            tries += 1;
            if (window.turnstile && renderTurnstile()) {
                clearInterval(interval);
            } else if (tries >= maxTries) {
                clearInterval(interval);
            }
        }, 200);
    };

    ensureTurnstile();

    const ERROR_MESSAGES = {
        invalid_email: 'Inserisci un’email valida.',
        missing_consent: 'Devi accettare la Privacy Policy.',
        bot_detected: 'Verifica anti-bot non riuscita. Riprova.',
        too_fast: 'Troppo veloce. Riprova tra un attimo.',
        turnstile_failed: 'Verifica anti-bot non riuscita. Riprova.',
        generic_error: ERROR_TEXT
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput ? emailInput.value.trim() : '';
        const consent = consentInput ? consentInput.checked : false;
        const hp = honeypotInput ? honeypotInput.value.trim() : '';

        if (hp) {
            setMessage(ERROR_MESSAGES.bot_detected, 'error');
            return;
        }

        if (!email || !isValidEmail(email)) {
            setMessage(ERROR_MESSAGES.invalid_email, 'error');
            return;
        }

        if (!consent) {
            setMessage(ERROR_MESSAGES.missing_consent, 'error');
            return;
        }

        if (!turnstileToken) {
            setMessage('Completa la verifica anti-bot.', 'error');
            ensureTurnstile();
            return;
        }

        const payload = {
            email: email,
            consent: consent,
            hp: hp,
            elapsedMs: Date.now() - (window.__waitlistT0 || Date.now()),
            turnstileToken: turnstileToken,
            meta: {
                src: 'pro-waitlist',
                screen: 'waitlist',
                variant: 'pro',
                platform: navigator.platform || '',
                locale: navigator.language || '',
                referrer: document.referrer || '',
                userAgent: navigator.userAgent || '',
                pageUrl: window.location.href || ''
            }
        };

        setLoading(true);
        setMessage(LOADING_TEXT, 'loading');

        try {
            setDebugLog('Waitlist submit: fetch start');
            const response = await fetch(ENDPOINT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            setDebugLog('Waitlist submit: response status', response.status);
            let responseData = null;
            try {
                responseData = await response.json();
            } catch (parseError) {
                responseData = null;
            }

            if (!response.ok) {
                const apiError = responseData && typeof responseData === 'object' ? responseData.error : '';
                throw new Error(apiError || 'generic_error');
            }

            setMessage(SUCCESS_TEXT, 'success');
            if (emailInput) emailInput.value = '';
            if (consentInput) consentInput.checked = false;
            resetTurnstile();
        } catch (error) {
            const errorKey = error && error.message ? error.message : 'generic_error';
            setMessage(ERROR_MESSAGES[errorKey] || ERROR_MESSAGES.generic_error, 'error');
            resetTurnstile();
        } finally {
            setLoading(false);
        }
    });
}

function initIPhone3D() {
    const phones = document.querySelectorAll('[data-iphone]');

    phones.forEach(phone => {
        const wrap = phone;
        const parent = wrap.closest('.split-visual, .hero-visual');
        const mascots = parent ? parent.querySelectorAll('.mascot-decoration, .mascot-large') : [];

        if (!parent) return;

        parent.addEventListener('mousemove', (e) => {
            const rect = parent.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Subtle rotation for a premium feel
            const rotateX = (centerY - y) / 15;
            const rotateY = (x - centerX) / 15;

            wrap.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            // Parallax for mascots
            mascots.forEach(mascot => {
                const moveX = (centerX - x) / 20;
                const moveY = (centerY - y) / 20;
                // Preserve existing scaleX if it's mascot-pos-2
                const scaleX = mascot.classList.contains('mascot-pos-2') ? -1 : 1;
                mascot.style.transform = `translate(${moveX}px, ${moveY}px) scaleX(${scaleX})`;
            });
        });

        parent.addEventListener('mouseleave', () => {
            wrap.style.transform = `rotateX(0deg) rotateY(0deg)`;
            mascots.forEach(mascot => {
                const scaleX = mascot.classList.contains('mascot-pos-2') ? -1 : 1;
                mascot.style.transform = `translate(0, 0) scaleX(${scaleX})`;
            });
        });
    });
}
