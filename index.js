// ============================================================
//  🚀 PRELOADER – GUARANTEED HIDE (3 seconds)
// ============================================================
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        // Extra safety: force hide after transition
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 700);
    }
}

// 1. Hide on window load
window.addEventListener('load', function() {
    setTimeout(hidePreloader, 3000);
});

// 2. Fallback: hide after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(hidePreloader, 3000);
});

// 3. ULTIMATE FALLBACK: hide after 4 seconds no matter what
setTimeout(hidePreloader, 4000);

// ============================================================
//  📌 NAV: scrolled class
// ============================================================
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ============================================================
//  📱 HAMBURGER MENU – Slide-in panel + overlay
// ============================================================
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

// ============================================================
//  👁️ REVEAL ANIMATIONS – Intersection Observer
// ============================================================
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

// ============================================================
//  📧 CONTACT FORM – Send to Formspree
// ============================================================
const form = document.getElementById('contactForm');
const successDiv = document.getElementById('formSuccess');
const resetBtn = document.getElementById('resetFormBtn');

// ⚠️ IMPORTANT: Replace with your own Formspree form ID.
// Get a free endpoint at https://formspree.io/
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourFormID';

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✦ Sending...';
    submitBtn.disabled = true;

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

    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
});

resetBtn.addEventListener('click', function() {
    successDiv.classList.remove('visible');
    form.classList.remove('hidden');
    form.reset();
});

// ============================================================
//  🔗 SMOOTH NAVIGATION – Anchor links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#") return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 200);
        }
    });
});

// ============================================================
//  ✨ CONSOLE – Ready message
// ============================================================
console.log('🚀 Portfolio ready!');
console.log('ℹ️ Update FORMSPREE_ENDPOINT with your Formspree ID if needed.');
