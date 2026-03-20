document.addEventListener('DOMContentLoaded', () => {
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

    // Initialize Carousels
    initCarousel('hero-carousel');
    initCarousel('wallet-carousel', { duration: 3000 });
    initCarousel('charts-carousel', { duration: 3500 });

    // Feature Detail Switcher
    initFeatureDetail();

    // Initialize Contact Form
    initContactForm();

    // Initialize 3D iPhone interaction
    initIPhone3D();

    // Sync sticky offsets for composed nav/trust bar layout
    initLandingLayout();

    // Pricing toggle
    initPricingToggle();
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

function initLandingLayout() {
    const trustBar = document.querySelector('.trust-bar');
    if (!trustBar) return;

    const root = document.documentElement;
    let frameId = null;

    const syncTrustOffset = () => {
        if (frameId) cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(() => {
            const height = Math.ceil(trustBar.getBoundingClientRect().height);
            root.style.setProperty('--trust-bar-height', `${height}px`);
        });
    };

    syncTrustOffset();
    window.addEventListener('resize', syncTrustOffset);

    if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(syncTrustOffset);
        resizeObserver.observe(trustBar);
    }
}

function initPricingToggle() {
    const pricingSection = document.querySelector('.section-pricing');
    const proCard = pricingSection?.querySelector('.pricing-card.pro');
    const buttons = Array.from(pricingSection?.querySelectorAll('.pricing-switch-btn') || []);

    if (!pricingSection || !proCard || buttons.length === 0) return;

    const swapTargets = [
        { element: proCard.querySelector('.pricing-save-pill'), type: 'text' },
        { element: proCard.querySelector('.pricing-billing-caption'), type: 'text' },
        { element: proCard.querySelector('.pricing-price'), type: 'html' },
        { element: proCard.querySelector('.pricing-value-chip'), type: 'text' },
        { element: proCard.querySelector('.pricing-alt-price'), type: 'text' },
        { element: proCard.querySelector('.pricing-note'), type: 'text' }
    ];
    const launchBadge = proCard.querySelector('.pricing-launch-badge');

    let currentBilling = pricingSection.dataset.billing || buttons.find(button => button.classList.contains('is-active'))?.dataset.billing || 'annual';

    const applyBilling = (billing) => {
        currentBilling = billing;
        pricingSection.dataset.billing = billing;

        buttons.forEach(button => {
            const isActive = button.dataset.billing === billing;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        swapTargets.forEach(({ element, type }) => {
            const value = element?.dataset?.[billing];
            if (!element || !value) return;
            if (type === 'html') {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        });

        if (launchBadge) {
            launchBadge.classList.toggle('is-hidden', billing !== 'annual');
        }
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.billing === currentBilling) return;
            applyBilling(button.dataset.billing);
        });
    });

    applyBilling(currentBilling);
}

function initFeatureDetail() {
    const detail = document.getElementById('feature-detail');
    const cards = Array.from(document.querySelectorAll('.feature-card[data-feature]'));
    if (!detail || cards.length === 0) return;

    const detailTitle = detail.querySelector('.feature-detail-title');
    const detailText = detail.querySelector('.feature-detail-text');
    const detailList = detail.querySelector('.feature-detail-list');
    const detailStep = detail.querySelector('.feature-detail-step');
    const detailRail = detail.querySelector('.feature-detail-rail');
    const desktopQuery = window.matchMedia('(min-width: 901px)');
    let activeKey = null;
    let observer = null;
    let animTimer = null;
    const SWAP_DELAY = 140;
    const HYSTERESIS_PX = 28;
    const ACTIVATION_RATIO = 0.45;

    const defaultDetailMap = {
        snapshot: {
            icon: 'fa-camera',
            title: 'Net worth snapshots',
            text: 'Save snapshots whenever you want and review how your net worth evolves over time without exporting data or opening spreadsheets.',
            bullets: [
                'Save an updated total in a few seconds.',
                'Compare different dates and quickly see what changed.',
                'Track net worth, investments, and cash with a clear timeline.'
            ]
        },
        wallet: {
            icon: 'fa-wallet',
            title: 'Separate wallets',
            text: 'Each part of your wealth has its own place: bank accounts, brokers, crypto, cash, and other assets.',
            bullets: [
                'Keep everything organized in separate, readable wallets.',
                'Stay clear even if you use multiple banks or platforms.',
                'Use a structure that matches how you really manage money.'
            ]
        },
        dashboard: {
            icon: 'fa-chart-line',
            title: 'Net worth dashboard',
            text: 'The dashboard shows what you own and where it sits in one clear glance.',
            bullets: [
                'Total net worth is always visible.',
                'Cash, investments, and assets stay readable without clutter.',
                'Built to help you check everything in a few seconds.'
            ]
        },
        privacy: {
            icon: 'fa-shield-halved',
            title: 'Real privacy',
            text: 'Balance is offline-first by design: no login, no proprietary servers, and no bank sync.',
            bullets: [
                'Your data stay on your device.',
                'No credentials pass through third-party services.',
                'Open source code makes the approach verifiable.'
            ]
        },
        speed: {
            icon: 'fa-bolt',
            title: 'Fast updates',
            text: 'The app is built for quick manual updates, so it stays useful in everyday use.',
            bullets: [
                'Update balances and assets without unnecessary steps.',
                'Use a focused interface designed for mobile.',
                'Keep your net worth aligned with very little effort.'
            ]
        }
    };
    const detailMap = window.BalanceI18n?.getFeatureDetailMap?.() || defaultDetailMap;

    const steps = cards.map((card, index) => ({
        key: card.dataset.feature,
        index
    }));
    const stepMap = new Map(steps.map(step => [step.key, step.index]));
    const totalSteps = steps.length;
    const railDots = [];

    if (detailRail) {
        detailRail.innerHTML = '';
        steps.forEach((step, index) => {
            const dot = document.createElement('span');
            dot.className = 'feature-detail-dot';
            dot.dataset.index = index;
            detailRail.appendChild(dot);
            railDots.push(dot);
        });
    }

    const setActiveCard = (card, animate = true) => {
        if (!desktopQuery.matches) return;
        const key = card.dataset.feature;
        const info = detailMap[key];
        if (!info) return;
        if (key === activeKey) return;
        activeKey = key;

        cards.forEach(item => {
            const isActive = item === card;
            item.classList.toggle('is-active', isActive);
            item.setAttribute('aria-current', isActive ? 'true' : 'false');
        });

        const updateContent = () => {
            detail.dataset.feature = key;
            if (detailTitle) detailTitle.textContent = info.title;
            if (detailText) detailText.textContent = info.text;

            if (detailList) {
                detailList.innerHTML = '';
                info.bullets.forEach((bullet, index) => {
                    const li = document.createElement('li');
                    li.textContent = bullet;
                    li.style.setProperty('--i', index);
                    detailList.appendChild(li);
                });
            }

            const stepIndex = (stepMap.get(key) ?? 0) + 1;
            if (detailStep) {
                const current = String(stepIndex).padStart(2, '0');
                const total = String(totalSteps).padStart(2, '0');
                detailStep.textContent = `${current} / ${total}`;
            }

            if (railDots.length > 0) {
                railDots.forEach((dot, index) => {
                    dot.classList.toggle('is-active', index === stepIndex - 1);
                });
            }
        };

        if (!animate) {
            updateContent();
            detail.classList.remove('is-animating');
            return;
        }

        detail.classList.add('is-animating');
        if (animTimer) window.clearTimeout(animTimer);

        animTimer = window.setTimeout(() => {
            updateContent();
            detail.classList.remove('is-animating');
        }, SWAP_DELAY);
    };

    const buildCardBacks = () => {
        cards.forEach(card => {
            const back = card.querySelector('.feature-back');
            const key = card.dataset.feature;
            const info = detailMap[key];
            if (!back || !info) return;

            back.innerHTML = `
                <h3 class="feature-detail-title">${info.title}</h3>
                <p class="feature-detail-text">${info.text}</p>
                <div class="feature-detail-divider"></div>
                <ul class="feature-detail-list">
                    ${info.bullets.map((bullet, index) => `<li style="--i:${index}">${bullet}</li>`).join('')}
                </ul>
            `;
        });
    };

    const scrollCardToActivation = (card) => {
        const activationY = window.innerHeight * ACTIVATION_RATIO;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + (rect.height / 2);
        const targetScroll = window.scrollY + (cardCenter - activationY);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    const setupCardInteraction = () => {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (desktopQuery.matches) {
                    setActiveCard(card);
                    scrollCardToActivation(card);
                    return;
                }
                card.classList.toggle('is-flipped');
            });
        });
    };

    const setupScrollSync = () => {
        if (!desktopQuery.matches) return;
        if (observer) observer.disconnect();

        observer = new IntersectionObserver((entries) => {
            const intersecting = entries.filter(entry => entry.isIntersecting);
            if (intersecting.length === 0) return;

            const activationY = window.innerHeight * ACTIVATION_RATIO;
            const getCenterY = (card) => {
                const rect = card.getBoundingClientRect();
                return rect.top + (rect.height / 2);
            };
            const getDistance = (card) => Math.abs(getCenterY(card) - activationY);

            const candidate = intersecting
                .map(entry => entry.target)
                .sort((a, b) => getDistance(a) - getDistance(b))[0];

            const currentCard = cards.find(card => card.dataset.feature === activeKey);
            if (!currentCard) {
                setActiveCard(candidate);
                return;
            }

            if (candidate === currentCard) return;

            const candidateDist = getDistance(candidate);
            const currentDist = getDistance(currentCard);
            const currentRect = currentCard.getBoundingClientRect();
            const currentVisible = currentRect.bottom > 0 && currentRect.top < window.innerHeight;

            if (!currentVisible || candidateDist + HYSTERESIS_PX < currentDist) {
                setActiveCard(candidate);
            }
        }, {
            root: null,
            rootMargin: '-35% 0px -55% 0px',
            threshold: 0
        });

        cards.forEach(card => observer.observe(card));
    };

    const teardownScrollSync = () => {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
    };

    const initialCard = cards.find(card => card.classList.contains('is-active')) || cards[0];
    if (initialCard) setActiveCard(initialCard, false);

    buildCardBacks();
    setupCardInteraction();
    setupScrollSync();
    desktopQuery.addEventListener('change', () => {
        if (desktopQuery.matches) {
            setupScrollSync();
        } else {
            teardownScrollSync();
        }
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-message');

    if (!form) return;

    const contactCopy = window.BalanceI18n?.getContactFormCopy?.() || {
        submit: 'Invia messaggio',
        sending: 'Invio in corso...'
    };

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
        submitBtn.innerText = contactCopy.sending;

        setTimeout(() => {
            form.style.display = 'none';
            successMsg.style.display = 'block';
            console.log('Message sent:', new FormData(form));
            submitBtn.innerText = originalText || contactCopy.submit;
        }, 1500);
    });
}

function initIPhone3D() {
    const phones = document.querySelectorAll('[data-iphone]');

    phones.forEach(phone => {
        const wrap = phone;
        const baseTransform = wrap.getAttribute('data-base-transform') || wrap.style.transform || '';
        if (baseTransform) {
            wrap.dataset.baseTransform = baseTransform;
        }
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

            const tilt = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            wrap.style.transform = baseTransform ? `${baseTransform} ${tilt}` : tilt;

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
            wrap.style.transform = baseTransform || '';
            mascots.forEach(mascot => {
                const scaleX = mascot.classList.contains('mascot-pos-2') ? -1 : 1;
                mascot.style.transform = `translate(0, 0) scaleX(${scaleX})`;
            });
        });
    });
}
