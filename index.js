// ===== NAV: scrolled class =====
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== HAMBURGER MENU – FULLSCREEN POPUP =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        const icon = hamburger.querySelector('i');
        icon.className = 'fas fa-bars';
    });
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

// ===== CONTACT FORM – SEND DATA TO EMAIL =====
const form = document.getElementById('contactForm');
const successDiv = document.getElementById('formSuccess');
const resetBtn = document.getElementById('resetFormBtn');

// ⚠️ IMPORTANT: Replace the endpoint below with your own Formspree form ID.
// Get a free endpoint at https://formspree.io/ (create a new form, copy its ID).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourFormID';

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            form.classList.add('hidden');
            successDiv.classList.add('visible');
            form.reset();
        } else {
            alert('Oops! Something went wrong. Please try again later.');
        }
    } catch (error) {
        alert('Network error. Please check your connection and try again.');
    }
});

resetBtn.addEventListener('click', function() {
    successDiv.classList.remove('visible');
    form.classList.remove('hidden');
    form.reset();
});

// ===== SMOOTH NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#") return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('🔥 Full code updated: Mobile popup menu + Website styled project buttons.');
console.log('ℹ️ Update FORMSPREE_ENDPOINT with your Formspree ID if needed.');
