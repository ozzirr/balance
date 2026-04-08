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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
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
        const scrollToMenuTarget = (hash) => {
            const section = document.querySelector(hash);
            if (!section) return;

            const isMobile = window.matchMedia('(max-width: 900px)').matches;
            const mobileTargetMap = {
                '#hero': '.hero-content',
                '#overview': '.split-content',
                '#pricing': '.pricing-header',
                '#features': '.section-title',
                '#download': '.footer-cta-main'
            };

            const contentTarget = isMobile
                ? section.querySelector(mobileTargetMap[hash] || '.section-title, .split-content')
                : section;
            const target = contentTarget || section;
            const offset = (header?.offsetHeight || 0) + (isMobile ? 10 : 24);
            const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);

            window.scrollTo({
                top,
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
            });

            if (window.history?.replaceState) {
                window.history.replaceState(null, '', hash);
            } else {
                window.location.hash = hash;
            }
        };

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
            link.addEventListener('click', (event) => {
                const href = link.getAttribute('href') || '';
                navLinks.classList.remove('active');
                menuBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');

                if (!href.startsWith('#')) return;

                event.preventDefault();
                window.requestAnimationFrame(() => {
                    scrollToMenuTarget(href);
                });
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

    // Mobile pricing plan toggle
    const pricingToggle = document.getElementById('pricing-toggle');
    if (pricingToggle) {
        const toggleBtns = pricingToggle.querySelectorAll('.pricing-toggle-btn');
        const cards = document.querySelectorAll('.section-pricing [data-plan]');

        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const plan = btn.dataset.plan;
                toggleBtns.forEach(b => b.classList.toggle('active', b === btn));
                cards.forEach(card => card.classList.toggle('is-active', card.dataset.plan === plan));
            });
        });
    }

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

function initFeatureDetail() {
    const detail = document.getElementById('feature-detail');
    const cards = Array.from(document.querySelectorAll('.feature-card[data-feature]'));
    if (cards.length === 0) return;

    const carouselShell = document.getElementById('feature-carousel-shell');
    const featuresGrid = carouselShell?.querySelector('.features-grid');
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
    let mobileScrollRaf = null;
    let mobileAutoFrame = null;
    let mobileAutoLastTime = 0;
    let mobileIsAutoScrolling = false;
    let mobileActiveIndex = 0;
    let mobileFlippedIndex = null;
    let renderedCards = [...cards];
    let loopAnchorCards = [...cards];
    const SWAP_DELAY = 140;
    const HYSTERESIS_PX = 28;
    const ACTIVATION_RATIO = 0.45;
    const AUTO_RESUME_MS = 1600;
    const AUTO_SCROLL_PX_PER_SEC = 26;
    const steps = cards.map((card, index) => ({
        key: card.dataset.feature,
        index
    }));
    const stepMap = new Map(steps.map(step => [step.key, step.index]));
    const totalSteps = steps.length;
    const railDots = [];
    const mobileDots = [];

    const updateRenderedCards = () => {
        renderedCards = featuresGrid
            ? Array.from(featuresGrid.querySelectorAll('.feature-card[data-feature]'))
            : [...cards];
        loopAnchorCards = renderedCards.filter(card => card.dataset.loopSet === '0');
    };

    const markLoopCard = (card, loopSet, originalIndex) => {
        card.dataset.loopSet = String(loopSet);
        card.dataset.originalIndex = String(originalIndex);
    };

    cards.forEach((card, index) => {
        markLoopCard(card, 0, index);
    });

    const teardownMobileLoop = () => {
        if (!featuresGrid) return;

        featuresGrid.querySelectorAll('.feature-card--loop-clone').forEach((clone) => clone.remove());
        cards.forEach((card, index) => {
            markLoopCard(card, 0, index);
            card.removeAttribute('aria-hidden');
            card.tabIndex = 0;
        });
        updateRenderedCards();
    };

    const ensureMobileLoop = () => {
        if (!featuresGrid || cards.length < 2) {
            updateRenderedCards();
            return;
        }

        if (featuresGrid.querySelector('.feature-card--loop-clone')) {
            updateRenderedCards();
            return;
        }

        const prependFragment = document.createDocumentFragment();
        const appendFragment = document.createDocumentFragment();

        cards.forEach((card, index) => {
            const prependClone = card.cloneNode(true);
            prependClone.classList.add('feature-card--loop-clone');
            prependClone.setAttribute('aria-hidden', 'true');
            prependClone.tabIndex = -1;
            markLoopCard(prependClone, -1, index);
            prependFragment.appendChild(prependClone);

            const appendClone = card.cloneNode(true);
            appendClone.classList.add('feature-card--loop-clone');
            appendClone.setAttribute('aria-hidden', 'true');
            appendClone.tabIndex = -1;
            markLoopCard(appendClone, 1, index);
            appendFragment.appendChild(appendClone);
        });

        featuresGrid.insertBefore(prependFragment, featuresGrid.firstChild);
        featuresGrid.appendChild(appendFragment);
        updateRenderedCards();
    };

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

        updateRenderedCards();

        renderedCards.forEach((card) => {
            const expand = card.querySelector('.feature-expand');
            const text = card.querySelector('.feature-expand-text');
            const list = card.querySelector('.feature-expand-list');
            const info = detailMap[card.dataset.feature];
            if (!expand || !text || !list || !info) return;

            const originalIndex = Number(card.dataset.originalIndex ?? stepMap.get(card.dataset.feature) ?? 0);
            const expandId = card.classList.contains('feature-card--loop-clone')
                ? `feature-expand-clone-${originalIndex + 1}-${card.dataset.loopSet}`
                : (expand.id || `feature-expand-${originalIndex + 1}`);
            expand.id = expandId;

            if (card.classList.contains('feature-card--loop-clone')) {
                card.removeAttribute('aria-controls');
            } else {
                card.setAttribute('aria-controls', expandId);
            }

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

    const setMobileFlippedIndex = (nextIndex = null) => {
        const isMobile = !desktopQuery.matches;
        mobileFlippedIndex = isMobile ? nextIndex : null;

        renderedCards.forEach((card) => {
            const cardIndex = Number(card.dataset.originalIndex ?? stepMap.get(card.dataset.feature) ?? -1);
            const isFlipped = isMobile && cardIndex === nextIndex;
            const expand = card.querySelector('.feature-expand');
            card.classList.toggle('is-flipped', isFlipped);
            if (isMobile) {
                card.removeAttribute('aria-expanded');
            } else {
                card.setAttribute('aria-expanded', isFlipped ? 'true' : 'false');
            }
            if (expand && isMobile) {
                expand.setAttribute('aria-hidden', 'false');
            } else if (expand) {
                expand.setAttribute('aria-hidden', isFlipped ? 'false' : 'true');
            }
        });
    };

    const setDesktopActiveCard = (card, animate = true) => {
        if (!desktopQuery.matches || !detail || !card) return;
        setMobileFlippedIndex(null);

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

        if (mobileFlippedIndex !== null && mobileFlippedIndex !== nextIndex) {
            setMobileFlippedIndex(null);
        }

        renderedCards.forEach((card) => {
            const cardIndex = Number(card.dataset.originalIndex ?? stepMap.get(card.dataset.feature) ?? -1);
            const isActive = cardIndex === nextIndex;
            const expand = card.querySelector('.feature-expand');
            const isClone = card.classList.contains('feature-card--loop-clone');

            restoreCardDetailContent(card);
            card.classList.toggle('is-active', isActive);
            card.setAttribute('role', 'button');
            card.tabIndex = isClone ? -1 : 0;
            card.removeAttribute('aria-roledescription');
            card.setAttribute('aria-current', isActive ? 'true' : 'false');
            card.removeAttribute('aria-expanded');

            if (expand) {
                expand.setAttribute('aria-hidden', 'false');
            }
        });
    };

    const getCardScrollLeft = (card) => {
        if (!carouselShell || !card) return 0;
        const offset = card.offsetLeft - ((carouselShell.clientWidth - card.offsetWidth) / 2);
        return offset;
    };

    const getNearestRenderedCard = () => {
        if (!carouselShell || renderedCards.length === 0) {
            return cards[mobileActiveIndex] || cards[0] || null;
        }

        const viewportCenter = carouselShell.scrollLeft + (carouselShell.clientWidth / 2);

        return renderedCards.reduce((nearestCard, card) => {
            const nearestCenter = nearestCard.offsetLeft + (nearestCard.offsetWidth / 2);
            const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
            return Math.abs(cardCenter - viewportCenter) < Math.abs(nearestCenter - viewportCenter)
                ? card
                : nearestCard;
        }, renderedCards[0]);
    };

    const getMobileLoopTarget = (index) => {
        const candidates = renderedCards.filter((card) => (
            Number(card.dataset.originalIndex ?? stepMap.get(card.dataset.feature) ?? -1) === index
        ));

        if (candidates.length === 0) return cards[index] || null;
        if (!carouselShell) return candidates[0];

        const currentScrollLeft = carouselShell.scrollLeft;
        return candidates.reduce((nearestCard, card) => (
            Math.abs(getCardScrollLeft(card) - currentScrollLeft) < Math.abs(getCardScrollLeft(nearestCard) - currentScrollLeft)
                ? card
                : nearestCard
        ), candidates[0]);
    };

    const normalizeMobileLoopPosition = () => {
        if (desktopQuery.matches || !carouselShell || cards.length < 2 || loopAnchorCards.length === 0) return;

        const nearestCard = getNearestRenderedCard();
        if (!nearestCard) return;

        const nearestLoopSet = Number(nearestCard.dataset.loopSet || 0);
        if (nearestLoopSet === 0) return;

        const originalIndex = Number(nearestCard.dataset.originalIndex ?? stepMap.get(nearestCard.dataset.feature) ?? mobileActiveIndex);
        const anchorCard = loopAnchorCards[originalIndex];
        if (!anchorCard) return;

        const currentScrollLeft = getCardScrollLeft(nearestCard);
        const anchorScrollLeft = getCardScrollLeft(anchorCard);
        if (Math.abs(anchorScrollLeft - currentScrollLeft) < 1) return;

        carouselShell.scrollTo({
            left: anchorScrollLeft,
            behavior: 'auto'
        });
    };

    const scrollToMobileIndex = (index, behavior = 'smooth') => {
        if (!carouselShell || !cards[index]) return;
        const targetCard = getMobileLoopTarget(index) || cards[index];
        setMobileActiveIndex(index);
        carouselShell.scrollTo({
            left: getCardScrollLeft(targetCard),
            behavior
        });
    };

    const getNearestMobileIndex = () => {
        const nearestCard = getNearestRenderedCard();
        if (!nearestCard) return mobileActiveIndex;
        return Number(nearestCard.dataset.originalIndex ?? stepMap.get(nearestCard.dataset.feature) ?? mobileActiveIndex);
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

        if (mobileScrollRaf) {
            window.cancelAnimationFrame(mobileScrollRaf);
            mobileScrollRaf = null;
        }

        if (mobileAutoFrame) {
            window.cancelAnimationFrame(mobileAutoFrame);
            mobileAutoFrame = null;
        }

        mobileAutoLastTime = 0;
        mobileIsAutoScrolling = false;
    };

    const startMobileAutoplay = () => {
        if (desktopQuery.matches || !carouselShell || cards.length < 2 || prefersReducedMotion.matches) return;

        if (mobileAutoTimer) window.clearTimeout(mobileAutoTimer);
        if (mobileAutoFrame) window.cancelAnimationFrame(mobileAutoFrame);
        mobileAutoLastTime = 0;

        const step = (timestamp) => {
            if (desktopQuery.matches || !carouselShell || prefersReducedMotion.matches) {
                stopMobileAutoplay();
                return;
            }

            if (!mobileAutoLastTime) {
                mobileAutoLastTime = timestamp;
            }

            const delta = timestamp - mobileAutoLastTime;
            mobileAutoLastTime = timestamp;
            mobileIsAutoScrolling = true;
            carouselShell.scrollLeft += (AUTO_SCROLL_PX_PER_SEC * delta) / 1000;
            normalizeMobileLoopPosition();
            setMobileActiveIndex(getNearestMobileIndex());
            mobileIsAutoScrolling = false;
            mobileAutoFrame = window.requestAnimationFrame(step);
        };

        mobileAutoFrame = window.requestAnimationFrame(step);
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
        const originalIndex = Number(card?.dataset.originalIndex ?? stepMap.get(card?.dataset.feature) ?? 0);
        const canonicalCard = cards[originalIndex] || card;
        if (!canonicalCard) return;

        if (desktopQuery.matches) {
            setDesktopActiveCard(canonicalCard);
            scrollCardToActivation(canonicalCard);
            return;
        }

        stopMobileAutoplay();
        setMobileFlippedIndex(null);

        if (originalIndex !== mobileActiveIndex) {
            scrollToMobileIndex(originalIndex, prefersReducedMotion.matches ? 'auto' : 'smooth');
        } else {
            scheduleMobileAutoplay();
        }
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
            teardownMobileLoop();
            stopMobileAutoplay();
            if (carouselShell) carouselShell.classList.remove('is-dragging');
            teardownScrollSync();
            setDesktopActiveCard(preferredCard, false);
            setupScrollSync();
            return;
        }

        teardownScrollSync();
        ensureMobileLoop();
        stopMobileAutoplay();
        const preferredIndex = stepMap.get(preferredCard.dataset.feature) ?? 0;
        setMobileFlippedIndex(null);
        setMobileActiveIndex(preferredIndex);
        window.requestAnimationFrame(() => {
            scrollToMobileIndex(preferredIndex, 'auto');
            normalizeMobileLoopPosition();
            startMobileAutoplay();
        });
    };

    syncCardDetails();

    if (featuresGrid) {
        featuresGrid.addEventListener('click', (event) => {
            const card = event.target.closest('.feature-card[data-feature]');
            if (!card || !featuresGrid.contains(card)) return;
            activateCard(card);
        });

        featuresGrid.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            const card = event.target.closest('.feature-card[data-feature]');
            if (!card || !featuresGrid.contains(card)) return;
            event.preventDefault();
            activateCard(card);
        });
    }

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

            if (mobileIsAutoScrolling) return;

            if (mobileScrollRaf) window.cancelAnimationFrame(mobileScrollRaf);
            mobileScrollRaf = window.requestAnimationFrame(() => {
                setMobileActiveIndex(getNearestMobileIndex());
                mobileScrollRaf = null;
            });

            if (mobileScrollTimer) window.clearTimeout(mobileScrollTimer);
            mobileScrollTimer = window.setTimeout(() => {
                const nearestIndex = getNearestMobileIndex();
                setMobileActiveIndex(nearestIndex);
                normalizeMobileLoopPosition();
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
                if (!desktopQuery.matches) {
                    scheduleMobileAutoplay();
                }
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

                setMobileFlippedIndex(null);
                scrollToMobileIndex(preferredIndex, 'auto');
                normalizeMobileLoopPosition();
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
