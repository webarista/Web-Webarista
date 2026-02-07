/*
 * Webarista - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header height
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Simple fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Fade in sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('visible-on-scroll');
        observer.observe(section);
    });

    // Testimonial Expand Functionality
    document.querySelectorAll('.btn-expand-review').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const textContainer = e.target.previousElementSibling;
            if (textContainer && textContainer.classList.contains('testimonial-card__text')) {
                textContainer.classList.toggle('expanded');
                if (textContainer.classList.contains('expanded')) {
                    e.target.textContent = 'Zabalit referenci';
                } else {
                    e.target.textContent = 'Celá reference';
                }
            }
        });
    });
});
