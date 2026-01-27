document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(5, 5, 5, 0.95)';
            } else {
                header.style.background = 'rgba(5, 5, 5, 0.8)';
            }
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Contributors (Real GitHub Fetch)
    const contributorsList = document.getElementById('contributors-list');
    if (contributorsList) {
        const repoOwner = 'ozzirr';
        const repoName = 'balance-app-v1';

        (async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`);

                if (!response.ok) throw new Error('Repo not found or API limit');

                const data = await response.json();
                contributorsList.innerHTML = '';

                if (data.length === 0) {
                    contributorsList.innerHTML = '<p style="color: var(--text-secondary)">Nessun contributor trovato ancora.</p>';
                    return;
                }

                data.forEach(c => {
                    const a = document.createElement('a');
                    a.href = c.html_url;
                    a.target = '_blank';
                    a.className = 'contributor-item';
                    a.innerHTML = `<img src="${c.avatar_url}" alt="${c.login}" title="${c.login}">`;
                    contributorsList.appendChild(a);
                });

            } catch (error) {
                console.error('Contributors fetch error:', error);
                contributorsList.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%;">
                        <p style="color: var(--text-secondary)">Impossibile caricare i contributors.</p>
                        <a href="https://github.com/${repoOwner}/${repoName}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem;">Vedi su GitHub</a>
                    </div>
                `;
            }
        })();
    }

    // iPhone Scroll Animation
    const iphoneMockup = document.querySelector('.iphone-mockup');
    const screenshots = document.querySelectorAll('.screenshot');

    if (iphoneMockup && screenshots.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            // Descend & Zoom Animation
            // Move down (translateY) and Scale up (scale)
            // Factor 0.3 for slower descend than scroll (parallax stickiness)
            // Factor 0.0005 for subtle zoom
            const moveDown = scrollY * 0.4;
            const scale = 1 + (scrollY * 0.0005);
            // Limit tilt logic
            const tilt = Math.min(scrollY * 0.05, 10);

            iphoneMockup.style.transform = `translateY(${moveDown}px) scale(${scale}) perspective(1000px) rotateX(${tilt}deg)`;

            // Screenshot Cycling
            // Cycle images based on scroll position (every 150px)
            const step = 150;
            const index = Math.floor(scrollY / step) % screenshots.length;

            screenshots.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        });
    }
});
