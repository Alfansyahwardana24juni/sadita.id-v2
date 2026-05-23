document.addEventListener('DOMContentLoaded', () => {
    // Navbar hide/show on scroll
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY && window.scrollY > 80) {
                // Scroll down
                navbar.style.transform = 'translate(-50%, -100%)';
            } else {
                // Scroll up
                navbar.style.transform = 'translate(-50%, 0)';
            }
            lastScrollY = window.scrollY;
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with .reveal-on-scroll class
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
        el.classList.add('opacity-0'); // Initial state
        observer.observe(el);
    });
});
