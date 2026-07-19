// ===== PRELOADER: Hide after 3 seconds (FIXED - multiple safety nets) =====
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
    }
}

// Try hiding on load
window.addEventListener('load', function() {
    setTimeout(hidePreloader, 3000);
});

// Fallback: Also try hiding after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(hidePreloader, 3000);
});

// Ultimate fallback: Hide after 4 seconds no matter what
setTimeout(hidePreloader, 4000);

// ===== NAV: scrolled class =====
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== HAMBURGER MENU – SLIDE-IN SIDE PANEL =====
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

// ============================================================
//  🚀 3D TILT EFFECT ON HERO IMAGE
// ============================================================
const heroImage = document.getElementById('heroImage');

if (heroImage) {
    // Only enable on desktop (screen width > 768px)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
        heroImage.addEventListener('mousemove', (e) => {
            const rect = heroImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation angles (max ±15 degrees)
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            // Calculate shadow direction based on tilt
            const shadowX = rotateY * 0.5;
            const shadowY = rotateX * 0.5;

            // Apply transform with perspective
            heroImage.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
            `;

            // Dynamic glow shadow that follows the tilt direction
            heroImage.style.boxShadow = `
                0 0 60px rgba(253, 128, 46, 0.4),
                0 0 100px rgba(230, 57, 70, 0.2),
                ${shadowX}px ${shadowY}px 60px rgba(0, 0, 0, 0.3)
            `;
        });

        heroImage.addEventListener('mouseleave', () => {
            // Smoothly return to neutral
            heroImage.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
            heroImage.style.boxShadow = '0 0 50px rgba(253, 128, 46, 0.25), 0 0 80px rgba(230, 57, 70, 0.1)';
        });
    } else {
        // On mobile, keep it simple - just a subtle hover effect
        heroImage.addEventListener('mouseenter', () => {
            heroImage.style.transform = 'scale(1.02)';
            heroImage.style.boxShadow = '0 0 60px rgba(253, 128, 46, 0.4), 0 0 100px rgba(230, 57, 70, 0.2)';
        });

        heroImage.addEventListener('mouseleave', () => {
            heroImage.style.transform = 'scale(1)';
            heroImage.style.boxShadow = '0 0 50px rgba(253, 128, 46, 0.25), 0 0 80px rgba(230, 57, 70, 0.1)';
        });
    }

    // Optional: Re-check on resize
    window.addEventListener('resize', () => {
        // You could re-initialize or disable on resize if needed
    });
}

// ============================================================
//  📧 CONTACT FORM
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

// ===== SMOOTH NAVIGATION =====
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

console.log('🚀 Portfolio ready with 3D Tilt!');
console.log('ℹ️ Update FORMSPREE_ENDPOINT with your Formspree ID if needed.');
