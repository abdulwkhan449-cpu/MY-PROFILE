// ============================================================
//  🚀 PRELOADER – GUARANTEED HIDE (3 seconds)
// ============================================================
document.body.style.overflow = 'hidden';

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(function() {
            preloader.style.display = 'none';
            document.body.style.overflow = '';
        }, 700);
    }
}

window.addEventListener('load', function() {
    setTimeout(hidePreloader, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(hidePreloader, 3000);
});

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
//  📱 HAMBURGER MENU – Toggle + overlay close
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
}

hamburger.addEventListener('click', toggleMenu);

// ============================================================
//  🔗 SMOOTH NAVIGATION – WORKS WITH MOBILE MENU
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#") return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        e.preventDefault();

        if (navLinks.classList.contains('active')) {
            toggleMenu();
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 400);
        } else {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================================
//  👁️ REVEAL ANIMATIONS – Intersection Observer
// ============================================================
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -20px 0px'
});
revealElements.forEach((el) => revealObserver.observe(el));

// ============================================================
//  🔢 COUNTER ANIMATION – About section stats
// ============================================================
(function initCounters() {
    const statCards = document.querySelectorAll('.stat-card');
    if (!statCards.length) return;

    // Store counter data
    const counters = [];
    statCards.forEach((card) => {
        const count = parseInt(card.getAttribute('data-count'), 10);
        const suffix = card.getAttribute('data-suffix') || '';
        const numEl = card.querySelector('.number .num-only');
        if (!numEl) return;

        counters.push({
            card,
            numEl,
            target: count,
            suffix,
            current: 0,
            animated: false
        });
    });

    if (!counters.length) return;

    // Intersection Observer – start counting when about section is visible
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                counters.forEach((c) => {
                    if (!c.animated) {
                        c.animated = true;
                        animateCounter(c);
                    }
                });
            }
        });
    }, {
        threshold: 0.25
    });

    counterObserver.observe(aboutSection);

    // Also check if already visible on load
    if (aboutSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
        counters.forEach((c) => {
            if (!c.animated) {
                c.animated = true;
                animateCounter(c);
            }
        });
    }

    // ── animation function ──
    function animateCounter(c) {
        const { numEl, target } = c;
        const duration = 1200; // ms
        const startTime = performance.now();

        // Special case: target === 1 (show "1" after a tiny delay)
        if (target === 1) {
            setTimeout(() => {
                numEl.textContent = '1';
            }, 200);
            return;
        }

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(eased * target);

            // Clamp
            const display = Math.min(currentVal, target);
            numEl.textContent = display;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                numEl.textContent = target; // final value
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // If any counter has target === 0, just show 0
    counters.forEach((c) => {
        if (c.target === 0) {
            c.numEl.textContent = '0';
            c.animated = true;
        }
    });
})();

// ============================================================
//  📧 CONTACT FORM – Formspree submission
// ============================================================
const form = document.getElementById('contactForm');
const successDiv = document.getElementById('formSuccess');
const resetBtn = document.getElementById('resetFormBtn');

// Formspree endpoint is already in the form's action attribute.
// We'll handle the submit via AJAX to show success without page reload.

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success: show success message
            form.classList.add('hidden');
            successDiv.classList.add('visible');
            form.reset();
        } else {
            // Error: you can show an alert or custom message
            alert('Oops! Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
        alert('Network error. Please check your connection and try again.');
    });
});

// Reset button: hide success, show form again
resetBtn.addEventListener('click', function() {
    successDiv.classList.remove('visible');
    form.classList.remove('hidden');
    form.reset();
});

// ============================================================
//  ✨ CONSOLE – Ready message
// ============================================================
console.log('🚀 Portfolio ready!');
console.log('📧 Contact form uses Formspree endpoint: https://formspree.io/f/xojgbeqo');
console.log('🔢 Counter animation active on About stats.');
