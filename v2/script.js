document.addEventListener('DOMContentLoaded', () => {
    initHeaderState();
    initMobileMenu();
    initRevealObserver();
    initPricingToggle();
});

function initHeaderState() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const sync = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 12);
    };

    sync();
    window.addEventListener('scroll', sync, { passive: true });
}

function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function initRevealObserver() {
    const items = document.querySelectorAll('.reveal');
    if (items.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
}

function initPricingToggle() {
    const roots = document.querySelectorAll('[data-billing-root]');
    if (roots.length === 0) return;

    const applyBilling = (root, billing) => {
        root.dataset.billing = billing;

        root.querySelectorAll('[data-billing-option]').forEach((button) => {
            const isActive = button.dataset.billingOption === billing;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        root.querySelectorAll('[data-billing-target]').forEach((node) => {
            const value = node.dataset[billing];
            if (!value) return;

            if (node.dataset.copyMode === 'html') {
                node.innerHTML = value;
            } else {
                node.textContent = value;
            }
        });
    };

    roots.forEach((root) => {
        const initialBilling = root.dataset.billing || 'annual';
        applyBilling(root, initialBilling);

        root.querySelectorAll('[data-billing-option]').forEach((button) => {
            button.addEventListener('click', () => {
                applyBilling(root, button.dataset.billingOption);
            });
        });
    });

    window.BalanceV2 = window.BalanceV2 || {};
    window.BalanceV2.refreshPricing = () => {
        roots.forEach((root) => applyBilling(root, root.dataset.billing || 'annual'));
    };
}
