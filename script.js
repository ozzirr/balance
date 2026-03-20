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
    const cards = Array.from(document.querySelectorAll('.feature-card[data-feature]'));
    if (cards.length === 0) return;

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
    const mobileQuery = window.matchMedia('(max-width: 900px)');

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

            text.textContent = info.text;
            list.innerHTML = '';

            info.bullets.forEach((bullet, bulletIndex) => {
                const item = document.createElement('li');
                item.textContent = bullet;
                item.style.setProperty('--i', bulletIndex);
                list.appendChild(item);
            });
        });
    };

    const setActiveCard = (nextCard, { scroll = false } = {}) => {
        cards.forEach(card => {
            const isActive = nextCard ? card === nextCard : false;
            const expand = card.querySelector('.feature-expand');

            card.classList.toggle('is-active', isActive);
            card.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            card.setAttribute('aria-current', isActive ? 'true' : 'false');

            if (expand) {
                expand.setAttribute('aria-hidden', isActive ? 'false' : 'true');
            }
        });

        if (scroll) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            nextCard.scrollIntoView({
                block: 'nearest',
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    };

    const activateCard = (card) => {
        if (card.classList.contains('is-active')) {
            setActiveCard(null);
            return;
        }
        setActiveCard(card, { scroll: mobileQuery.matches });
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

    const initialCard = cards.find(card => card.classList.contains('is-active')) || cards[0];
    if (initialCard) {
        setActiveCard(initialCard);
    }
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
