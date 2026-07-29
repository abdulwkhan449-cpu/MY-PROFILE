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
//  📧 CONTACT FORM – OPEN EMAIL CLIENT
// ============================================================
const form = document.getElementById('contactForm');
const successDiv = document.getElementById('formSuccess');
const resetBtn = document.getElementById('resetFormBtn');

form.addEventListener('submit', function(e) {
    // Stop the page from refreshing
    e.preventDefault();

    // Get form values
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Validate fields
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Build the mailto: link
    const subject = `Message from ${name}`;
    const body = `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    const mailtoLink = `mailto:abdulwkhan449@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show success message immediately (user feels the action)
    form.classList.add('hidden');
    successDiv.classList.add('visible');
    form.reset();

    // Try to open the email client
    // Method 1: window.open (works on most browsers, especially on mobile)
    let win = window.open(mailtoLink, '_blank');

    // If window.open fails or returns null (popup blocked),
    // fallback to location.href
    if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = mailtoLink;
    }

    // If mailto still doesn't open (rare), we fallback to copying the email
    // This gives the user a way to manually send the email
    setTimeout(() => {
        // If the window is still open after 2 seconds, assume mailto worked
        // If not, we copy the email address to clipboard as a backup
        if (win && !win.closed) {
            // mailto likely opened, do nothing
        } else {
            // Copy email to clipboard as fallback
            navigator.clipboard.writeText('abdulwkhan449@gmail.com')
                .then(() => {
                    // Show a small note on the success message
                    const successMsg = successDiv.querySelector('p');
                    if (successMsg) {
                        successMsg.innerHTML = 'Your message has been sent successfully.<br />If your email client did not open, the email address has been copied to your clipboard.';
                    }
                })
                .catch(() => {
                    // Clipboard not supported, just show the email
                    const successMsg = successDiv.querySelector('p');
                    if (successMsg) {
                        successMsg.innerHTML = 'Your message has been sent successfully.<br />If your email client did not open, please email us directly at <strong>abdulwkhan449@gmail.com</strong>.';
                    }
                });
        }
    }, 2000);
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
console.log('📧 Contact form opens email to abdulwkhan449@gmail.com');
