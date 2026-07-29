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
//  📧 CONTACT FORM – REDIRECT TO WHATSAPP
// ============================================================
const form = document.getElementById('contactForm');
const successDiv = document.getElementById('formSuccess');
const resetBtn = document.getElementById('resetFormBtn');

// Your WhatsApp number (without the '+')
const WHATSAPP_NUMBER = '923175565531';

// Default message
const DEFAULT_MESSAGE = 'Hi Abdul, I have a project idea!';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    const name = document.querySelector('input[name="name"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Build the WhatsApp message
    let whatsappMessage = DEFAULT_MESSAGE;
    
    // If user typed a message, use it instead
    if (message) {
        whatsappMessage = message;
    }
    
    // If user provided a name, add it
    if (name) {
        whatsappMessage = `${whatsappMessage} - From ${name}`;
    }

    // Build WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    // Show success message
    form.classList.add('hidden');
    successDiv.classList.add('visible');
    form.reset();

    // Redirect to WhatsApp (this opens the app or web)
    window.location.href = whatsappURL;
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
console.log('📱 Contact form redirects to WhatsApp: ' + WHATSAPP_NUMBER);
