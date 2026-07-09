// ============================================================
// 1. NAV: scrolled class
// ============================================================
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ============================================================
// 2. REVEAL ANIMATIONS (Intersection Observer)
// ============================================================
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });
revealElements.forEach((el) => observer.observe(el));

// ============================================================
// 3. CONTACT FORM → SEND TO WHATSAPP & EMAIL
// ============================================================
const form = document.getElementById('contactForm');
const successDiv = document.getElementById('formSuccess');
const resetBtn = document.getElementById('resetFormBtn');

// Your WhatsApp number (international format, no leading zero)
const PHONE = '923175565531';
// Your email address
const EMAIL = 'abdulwkhan448@gmail.com';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = this.querySelector('input[name="name"]')?.value?.trim() || 'Not provided';
    const email = this.querySelector('input[name="email"]')?.value?.trim() || 'Not provided';
    const message = this.querySelector('textarea[name="message"]')?.value?.trim() || 'Not provided';

    // ----- 1) WhatsApp -----
    const whatsappText =
        `*New Contact Form Submission*%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Message:* ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/${PHONE}?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');

    // ----- 2) Email (mailto) -----
    const subject = encodeURIComponent('New Contact Form Submission from your Portfolio');
    const body =
        `Name: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `Message:%0A${message}`;
    const mailtoUrl = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    // Open mailto in a new window (some browsers may block popups, but it's the simplest client-side approach)
    window.open(mailtoUrl, '_blank');

    // Show success message & hide form
    form.classList.add('hidden');
    successDiv.classList.add('visible');
});

// Reset: hide success, show form & clear fields
resetBtn.addEventListener('click', function () {
    successDiv.classList.remove('visible');
    form.classList.remove('hidden');
    form.reset();
});

// ============================================================
// 4. SMOOTH NAVIGATION
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('✅ Form data sends to WhatsApp (+923175565531) and Email (abdulwkhan448@gmail.com)');
