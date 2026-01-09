document.addEventListener('DOMContentLoaded', () => {
    // Nav Overlay Toggle
    const navTrigger = document.getElementById('nav-trigger');
    const navClose = document.getElementById('nav-close');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (navTrigger && navOverlay) {
        navTrigger.addEventListener('click', () => {
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        if (navClose) navClose.addEventListener('click', closeMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    e.preventDefault();
                    closeMenu();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // Scroll Header Effect
    const header = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(26, 22, 20, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(26, 22, 20, 0.8)';
        }
    });

    // Form Submission (Simulated)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your request has been sent to the portal. Empress Divine will connect with you soon.');
            contactForm.reset();
        });
    }

    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
