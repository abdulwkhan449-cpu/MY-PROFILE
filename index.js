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

    // ===== CONTACT FORM – SEND DATA TO EMAIL =====
    const form = document.getElementById('contactForm');
    const successDiv = document.getElementById('formSuccess');
    const resetBtn = document.getElementById('resetFormBtn');

    // ⚠️ IMPORTANT: Replace the endpoint below with your own Formspree form ID.
    // Get a free endpoint at https://formspree.io/ (create a new form, copy its ID).
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourFormID';

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Collect form data
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
                // Hide form, show success
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

    // Reset: hide success, show form
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

    console.log('🔥 Colorful icons + larger project images with center-fit scaling + working contact form.');
    console.log('ℹ️ Remember to replace FORMSPREE_ENDPOINT with your own Formspree ID.');
