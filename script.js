// Nav — add .scrolled class on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.querySelector('i').className = 'fas fa-bars';
    });
});

// Fade-in on scroll via IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const animTargets = document.querySelectorAll(
    '.cap-card, .work-card, .cert-card, .stat-card, .skills-group, .contact-link'
);

animTargets.forEach((el, i) => {
    el.classList.add('fade-up');
    el.dataset.delay = (i % 4) * 80;
    observer.observe(el);
});
