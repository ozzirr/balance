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

    // FAQ typewriter reveal
    initFaqTypewriter();

    // Initialize Contact Form
    initContactForm();

    // Initialize 3D iPhone interaction
    initIPhone3D();

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

function initPricingToggle() {
    const pricingSection = document.querySelector('.section-pricing');
    const proCard = pricingSection?.querySelector('.pricing-card.pro');
    const buttons = Array.from(pricingSection?.querySelectorAll('.pricing-switch-btn') || []);

    if (!pricingSection || !proCard || buttons.length === 0) return;

    const swapTargets = [
        { element: proCard.querySelector('.pricing-billing-caption'), type: 'text' },
        { element: proCard.querySelector('.pricing-price'), type: 'html' },
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
            const badgeText = launchBadge.dataset?.[billing] || '';
            launchBadge.textContent = badgeText;
            launchBadge.classList.toggle('is-hidden', !badgeText);
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
    if (cards.length === 0) return;

    const carouselShell = document.getElementById('feature-carousel-shell');
    const carouselStep = document.querySelector('.feature-carousel-step');
    const carouselDotsRail = document.querySelector('.feature-carousel-dots');
    const detailTitle = detail?.querySelector('.feature-detail-title');
    const detailText = detail?.querySelector('.feature-detail-text');
    const detailList = detail?.querySelector('.feature-detail-list');
    const detailStep = detail?.querySelector('.feature-detail-step');
    const detailRail = detail?.querySelector('.feature-detail-rail');
    const desktopQuery = window.matchMedia('(min-width: 901px)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const defaultDetailMap = {
        snapshot: {
            icon: 'fa-camera',
            title: 'Monthly snapshots',
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
            title: 'Custom dashboard',
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
    const getDetailMap = () => window.BalanceI18n?.getFeatureDetailMap?.() || defaultDetailMap;

    let activeKey = cards[0]?.dataset.feature || null;
    let observer = null;
    let animTimer = null;
    let mobileAutoTimer = null;
    let mobileResumeTimer = null;
    let mobileScrollTimer = null;
    let mobileRaf = null;
    let mobileActiveIndex = 0;
    const SWAP_DELAY = 140;
    const HYSTERESIS_PX = 28;
    const ACTIVATION_RATIO = 0.45;
    const AUTO_ADVANCE_MS = 4600;
    const AUTO_RESUME_MS = 3200;
    const steps = cards.map((card, index) => ({
        key: card.dataset.feature,
        index
    }));
    const stepMap = new Map(steps.map(step => [step.key, step.index]));
    const totalSteps = steps.length;
    const railDots = [];
    const mobileDots = [];

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

    if (carouselDotsRail) {
        carouselDotsRail.innerHTML = '';
        steps.forEach((step, index) => {
            const dot = document.createElement('span');
            dot.className = 'feature-carousel-dot';
            dot.dataset.index = index;
            carouselDotsRail.appendChild(dot);
            mobileDots.push(dot);
        });
    }

    const syncCardDetails = () => {
        const detailMap = getDetailMap();

        cards.forEach((card, index) => {
            const expand = card.querySelector('.feature-expand');
            const text = card.querySelector('.feature-expand-text');
            const list = card.querySelector('.feature-expand-list');
            const info = detailMap[card.dataset.feature];
            if (!expand || !text || !list || !info) return;

            const expandId = expand.id || `feature-expand-${index + 1}`;
            expand.id = expandId;
            card.setAttribute('aria-controls', expandId);

            text.dataset.fullText = info.text;
            text.textContent = info.text;
            list.innerHTML = '';

            info.bullets.forEach((bullet, bulletIndex) => {
                const item = document.createElement('li');
                item.dataset.fullText = bullet;
                item.textContent = bullet;
                item.style.setProperty('--i', bulletIndex);
                list.appendChild(item);
            });
        });
    };

    const restoreCardDetailContent = (card) => {
        const text = card?.querySelector('.feature-expand-text');
        const list = card?.querySelector('.feature-expand-list');
        if (!text || !list) return;

        text.classList.remove('is-typing');
        text.style.minHeight = '';
        text.textContent = text.dataset.fullText || '';
        list.classList.remove('is-awaiting-reveal');
        list.querySelectorAll('li').forEach((item) => {
            item.textContent = item.dataset.fullText || '';
        });
    };

    const updateMobileIndicators = (index) => {
        const current = String(index + 1).padStart(2, '0');
        const total = String(totalSteps).padStart(2, '0');

        if (carouselStep) {
            carouselStep.textContent = `${current} / ${total}`;
        }

        mobileDots.forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === index);
        });
    };

    const setDesktopActiveCard = (card, animate = true) => {
        if (!desktopQuery.matches || !detail || !card) return;

        const detailMap = getDetailMap();
        const key = card.dataset.feature;
        const info = detailMap[key];
        if (!info) return;
        if (key === activeKey && card.classList.contains('is-active')) return;
        activeKey = key;

        cards.forEach(item => {
            const isActive = item === card;
            const expand = item.querySelector('.feature-expand');

            restoreCardDetailContent(item);
            item.classList.toggle('is-active', isActive);
            item.setAttribute('role', 'button');
            item.tabIndex = 0;
            item.removeAttribute('aria-roledescription');
            item.setAttribute('aria-current', isActive ? 'true' : 'false');
            item.setAttribute('aria-expanded', 'false');
            if (expand) {
                expand.setAttribute('aria-hidden', 'true');
            }
        });

        const updateContent = () => {
            detail.dataset.feature = key;
            if (detailTitle) detailTitle.textContent = info.title;
            if (detailText) detailText.textContent = info.text;

            if (detailList) {
                detailList.innerHTML = '';
                info.bullets.forEach((bullet, index) => {
                    const item = document.createElement('li');
                    item.textContent = bullet;
                    item.style.setProperty('--i', index);
                    detailList.appendChild(item);
                });
            }

            const stepIndex = (stepMap.get(key) ?? 0) + 1;
            if (detailStep) {
                const current = String(stepIndex).padStart(2, '0');
                const total = String(totalSteps).padStart(2, '0');
                detailStep.textContent = `${current} / ${total}`;
            }

            railDots.forEach((dot, index) => {
                dot.classList.toggle('is-active', index === stepIndex - 1);
            });
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

    const setMobileActiveIndex = (nextIndex) => {
        if (!cards[nextIndex]) return;

        mobileActiveIndex = nextIndex;
        activeKey = cards[nextIndex].dataset.feature;
        updateMobileIndicators(nextIndex);

        cards.forEach((card, index) => {
            const isActive = index === nextIndex;
            const expand = card.querySelector('.feature-expand');

            restoreCardDetailContent(card);
            card.classList.toggle('is-active', isActive);
            card.setAttribute('role', 'group');
            card.tabIndex = -1;
            card.setAttribute('aria-roledescription', 'slide');
            card.setAttribute('aria-current', isActive ? 'true' : 'false');
            card.setAttribute('aria-expanded', 'true');

            if (expand) {
                expand.setAttribute('aria-hidden', 'false');
            }
        });
    };

    const getMobileScrollLeft = (index) => {
        const card = cards[index];
        if (!carouselShell || !card) return 0;
        const offset = card.offsetLeft - ((carouselShell.clientWidth - card.offsetWidth) / 2);
        return Math.max(0, offset);
    };

    const scrollToMobileIndex = (index, behavior = 'smooth') => {
        if (!carouselShell || !cards[index]) return;
        setMobileActiveIndex(index);
        carouselShell.scrollTo({
            left: getMobileScrollLeft(index),
            behavior
        });
    };

    const getNearestMobileIndex = () => {
        if (!carouselShell) return mobileActiveIndex;
        const viewportCenter = carouselShell.scrollLeft + (carouselShell.clientWidth / 2);

        return cards.reduce((nearestIndex, card, index) => {
            const nearestCard = cards[nearestIndex];
            const nearestCenter = nearestCard.offsetLeft + (nearestCard.offsetWidth / 2);
            const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
            return Math.abs(cardCenter - viewportCenter) < Math.abs(nearestCenter - viewportCenter)
                ? index
                : nearestIndex;
        }, mobileActiveIndex);
    };

    const stopMobileAutoplay = () => {
        if (mobileAutoTimer) {
            window.clearTimeout(mobileAutoTimer);
            mobileAutoTimer = null;
        }

        if (mobileResumeTimer) {
            window.clearTimeout(mobileResumeTimer);
            mobileResumeTimer = null;
        }

        if (mobileScrollTimer) {
            window.clearTimeout(mobileScrollTimer);
            mobileScrollTimer = null;
        }

        if (mobileRaf) {
            window.cancelAnimationFrame(mobileRaf);
            mobileRaf = null;
        }
    };

    const startMobileAutoplay = () => {
        if (desktopQuery.matches || !carouselShell || cards.length < 2 || prefersReducedMotion.matches) return;

        if (mobileAutoTimer) window.clearTimeout(mobileAutoTimer);
        mobileAutoTimer = window.setTimeout(() => {
            const nextIndex = (mobileActiveIndex + 1) % cards.length;
            scrollToMobileIndex(nextIndex, 'smooth');
            startMobileAutoplay();
        }, AUTO_ADVANCE_MS);
    };

    const scheduleMobileAutoplay = () => {
        if (desktopQuery.matches || prefersReducedMotion.matches || cards.length < 2) return;

        if (mobileResumeTimer) window.clearTimeout(mobileResumeTimer);
        mobileResumeTimer = window.setTimeout(() => {
            startMobileAutoplay();
        }, AUTO_RESUME_MS);
    };

    const scrollCardToActivation = (card) => {
        const activationY = window.innerHeight * ACTIVATION_RATIO;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + (rect.height / 2);
        const targetScroll = window.scrollY + (cardCenter - activationY);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    const activateCard = (card) => {
        if (!desktopQuery.matches) return;
        setDesktopActiveCard(card);
        scrollCardToActivation(card);
    };

    const setupScrollSync = () => {
        if (!desktopQuery.matches || !detail) return;
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
                setDesktopActiveCard(candidate);
                return;
            }

            if (candidate === currentCard) return;

            const candidateDist = getDistance(candidate);
            const currentDist = getDistance(currentCard);
            const currentRect = currentCard.getBoundingClientRect();
            const currentVisible = currentRect.bottom > 0 && currentRect.top < window.innerHeight;

            if (!currentVisible || candidateDist + HYSTERESIS_PX < currentDist) {
                setDesktopActiveCard(candidate);
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

    const syncMode = () => {
        const preferredCard =
            cards.find(card => card.dataset.feature === activeKey) ||
            cards.find(card => card.classList.contains('is-active')) ||
            cards[0];

        if (!preferredCard) return;

        if (desktopQuery.matches) {
            stopMobileAutoplay();
            if (carouselShell) carouselShell.classList.remove('is-dragging');
            teardownScrollSync();
            setDesktopActiveCard(preferredCard, false);
            setupScrollSync();
            return;
        }

        teardownScrollSync();
        const preferredIndex = stepMap.get(preferredCard.dataset.feature) ?? 0;
        setMobileActiveIndex(preferredIndex);
        window.requestAnimationFrame(() => {
            scrollToMobileIndex(preferredIndex, 'auto');
            startMobileAutoplay();
        });
    };

    syncCardDetails();

    cards.forEach(card => {
        card.addEventListener('click', () => activateCard(card));
        card.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            activateCard(card);
        });
    });

    if (carouselShell) {
        carouselShell.addEventListener('scroll', () => {
            if (desktopQuery.matches) return;

            if (mobileAutoTimer) {
                window.clearTimeout(mobileAutoTimer);
                mobileAutoTimer = null;
            }

            if (mobileResumeTimer) {
                window.clearTimeout(mobileResumeTimer);
                mobileResumeTimer = null;
            }

            if (mobileRaf) window.cancelAnimationFrame(mobileRaf);
            mobileRaf = window.requestAnimationFrame(() => {
                setMobileActiveIndex(getNearestMobileIndex());
                mobileRaf = null;
            });

            if (mobileScrollTimer) window.clearTimeout(mobileScrollTimer);
            mobileScrollTimer = window.setTimeout(() => {
                setMobileActiveIndex(getNearestMobileIndex());
                scheduleMobileAutoplay();
            }, 140);
        }, { passive: true });

        ['pointerdown', 'touchstart'].forEach((eventName) => {
            carouselShell.addEventListener(eventName, () => {
                if (desktopQuery.matches) return;
                carouselShell.classList.add('is-dragging');
                stopMobileAutoplay();
            }, { passive: true });
        });

        ['pointerup', 'pointercancel', 'touchend'].forEach((eventName) => {
            carouselShell.addEventListener(eventName, () => {
                carouselShell.classList.remove('is-dragging');
                if (!desktopQuery.matches) scheduleMobileAutoplay();
            }, { passive: true });
        });
    }

    const langSelect = document.querySelector('.footer-language-select');
    if (langSelect) {
        langSelect.addEventListener('change', () => {
            window.setTimeout(() => {
                syncCardDetails();
                const preferredIndex = stepMap.get(activeKey) ?? mobileActiveIndex;
                const preferredCard = cards[preferredIndex] || cards[0];

                if (desktopQuery.matches) {
                    setDesktopActiveCard(preferredCard, false);
                    return;
                }

                scrollToMobileIndex(preferredIndex, 'auto');
            }, 0);
        });
    }

    syncMode();
    if (desktopQuery.addEventListener) {
        desktopQuery.addEventListener('change', syncMode);
    } else {
        desktopQuery.addListener(syncMode);
    }

    if (prefersReducedMotion.addEventListener) {
        prefersReducedMotion.addEventListener('change', syncMode);
    } else {
        prefersReducedMotion.addListener(syncMode);
    }
}

function initFaqTypewriter() {
    const faqItems = Array.from(document.querySelectorAll('.faq-item'));
    if (faqItems.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const TYPE_INTERVAL_MS = 24;

    faqItems.forEach((item) => {
        const answer = item.querySelector('.faq-answer p');
        if (!answer) return;

        let typeTimer = null;
        let sessionId = 0;

        const stopTyping = () => {
            sessionId += 1;
            if (typeTimer) {
                window.clearTimeout(typeTimer);
                typeTimer = null;
            }
        };

        const restoreAnswer = () => {
            stopTyping();
            answer.classList.remove('is-typing');
            answer.style.minHeight = '';
            answer.textContent = answer.dataset.fullText || answer.textContent;
        };

        const startTyping = () => {
            answer.dataset.fullText = answer.textContent;
            const fullText = answer.dataset.fullText || '';
            if (!fullText) return;

            restoreAnswer();
            if (prefersReducedMotion.matches) return;

            const session = sessionId;
            const characters = Array.from(fullText);
            let index = 0;

            answer.style.minHeight = `${answer.getBoundingClientRect().height}px`;
            answer.textContent = '';
            answer.classList.add('is-typing');

            const tick = () => {
                if (session !== sessionId) return;

                index = Math.min(characters.length, index + 1);
                answer.textContent = characters.slice(0, index).join('');

                if (index < characters.length) {
                    typeTimer = window.setTimeout(tick, TYPE_INTERVAL_MS);
                    return;
                }

                answer.classList.remove('is-typing');
                answer.style.minHeight = '';
                typeTimer = null;
            };

            tick();
        };

        answer.dataset.fullText = answer.textContent;

        item.addEventListener('toggle', () => {
            if (item.open) {
                startTyping();
                return;
            }

            restoreAnswer();
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-message');
    const feedbackMsg = document.getElementById('form-feedback');

    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const honeypotInput = form.querySelector('#honeypot');
    const startInput = form.querySelector('#form-start');
    const formAction = form.getAttribute('action')?.trim() || '';
    const formMethod = (form.getAttribute('method') || 'POST').toUpperCase();
    const minSubmitDelay = Number(form.dataset.minSubmitMs || 4000);
    const fallbackCopy = {
        submit: 'Invia messaggio',
        sending: 'Invio in corso...',
        tooFast: 'Invio troppo veloce. Attendi qualche secondo e riprova.',
        error: 'Impossibile inviare il messaggio in questo momento. Riprova tra poco.',
        configError: 'Configura l’integrazione contatti prima di usare questa pagina.',
        localDevError: 'In locale usa `vercel dev` per l’API, oppure punta il form a un endpoint deployato.'
    };

    function getContactCopy() {
        return {
            ...fallbackCopy,
            ...(window.BalanceI18n?.getContactFormCopy?.() || {})
        };
    }

    function setFeedback(message = '') {
        if (!feedbackMsg) return;

        feedbackMsg.textContent = message;
        feedbackMsg.hidden = !message;
    }

    function setSubmitting(isSubmitting) {
        if (!submitBtn) return;

        const copy = getContactCopy();
        submitBtn.disabled = isSubmitting;
        submitBtn.innerText = isSubmitting ? copy.sending : copy.submit;
    }

    function resetFormState() {
        form.hidden = false;
        if (successMsg) successMsg.hidden = true;
        setFeedback('');
        setSubmitting(false);
        if (startInput) startInput.value = String(Date.now());
    }

    resetFormState();
    window.addEventListener('pageshow', resetFormState);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        setFeedback('');
        if (successMsg) successMsg.hidden = true;

        if (honeypotInput?.value.trim()) {
            console.warn('Bot detected via honeypot.');
            return;
        }

        const startedAt = Number(startInput?.value || Date.now());
        if (Date.now() - startedAt < minSubmitDelay) {
            setFeedback(getContactCopy().tooFast);
            return;
        }

        setSubmitting(true);

        try {
            const payload = {
                reason: form.querySelector('#reason')?.value || '',
                name: form.querySelector('#name')?.value || '',
                email: form.querySelector('#email')?.value || '',
                message: form.querySelector('#message')?.value || '',
                honeypot: honeypotInput?.value || '',
                formStart: startInput?.value || ''
            };

            const response = await fetch(formAction, {
                method: formMethod,
                body: JSON.stringify(payload),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                let errorMessage = getContactCopy().error;

                try {
                    const payload = await response.json();
                    const apiErrors = [];

                    if (typeof payload?.error === 'string' && payload.error.trim()) {
                        apiErrors.push(payload.error.trim());
                    }

                    if (Array.isArray(payload?.errors)) {
                        apiErrors.push(...payload.errors.map(item => item?.message).filter(Boolean));
                    }

                    if (apiErrors.length > 0) {
                        errorMessage = apiErrors.join(' ');
                    }
                } catch (parseError) {
                    console.warn('Unable to parse contact form error payload.', parseError);
                }

                if (
                    response.status === 404 &&
                    window.location.hostname === 'localhost' &&
                    formAction.startsWith('/api/')
                ) {
                    errorMessage = getContactCopy().localDevError;
                }

                throw new Error(errorMessage);
            }

            form.reset();
            if (startInput) startInput.value = String(Date.now());
            form.hidden = true;
            if (successMsg) successMsg.hidden = false;
        } catch (error) {
            console.error('Contact form submission failed.', error);
            setFeedback(error instanceof Error ? error.message : getContactCopy().error);
        } finally {
            setSubmitting(false);
        }
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
