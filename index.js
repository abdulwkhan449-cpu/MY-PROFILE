        // ===== NAV: scrolled class =====
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -20px 0px'
});
revealElements.forEach((el) => observer.observe(el));

// ===== INLINE FORM REPLACEMENT =====
const form = document.getElementById('contactForm');
const successDiv = document.getElementById('formSuccess');
const resetBtn = document.getElementById('resetFormBtn');

// Submit: hide form, show success
form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.classList.add('hidden');
    successDiv.classList.add('visible');
});

// Reset: hide success, show form
resetBtn.addEventListener('click', function () {
    successDiv.classList.remove('visible');
    form.classList.remove('hidden');
    form.reset();
});

// ===== SMOOTH NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === "#") return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('🔥 Inline success with custom SVG checkmark — clean and unique.');
