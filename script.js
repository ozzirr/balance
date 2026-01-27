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
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.6)';
            header.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
        }
    });

    // Mobile Menu Toggle (Simple)
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Note: To fully implement mobile menu, we'd need extra CSS for the 'active' state of nav-links usually.
    // For this V2, we kept nav-links 'display: none' on mobile. 
    // Let's add a basic toggle if needed, or leave for refinement.
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Placeholder for mobile menu logic
            // In a real app we'd toggle a class to show the menu overlay.
            alert('Mobile menu to interact with standard navigation.');
        });
    }

    // Leaderboard Fetch
    fetchContributors();

    // Hero Carousel Logic
    initHeroCarousel();

    // Initialize Modal
    initModal();
});

function initHeroCarousel() {
    const container = document.getElementById('hero-carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');

    if (!container || slides.length === 0) return;

    let currentIndex = 0;
    let interval;
    const duration = 4000; // 4 seconds

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');
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
            startInterval(); // Reset interval on manual click
        });
    });

    // Intersection Observer to pause when offscreen
    const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startInterval();
            } else {
                stopInterval();
            }
        });
    }, { threshold: 0.2 });

    carouselObserver.observe(container);

    // Initial start
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
    const overlay = modal.querySelector('.modal-overlay');

    if (!modal || !openBtns.length) return;

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

