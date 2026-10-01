// ============================================================
//  theme.js  –  index.js ke BAAD load karna
//  1) Light / Dark toggle (header me)   2) Smooth scroll
// ============================================================
(function () {
    'use strict';
    const root = document.documentElement;

    // ----------------------------------------------------------
    //  🌗 THEME TOGGLE
    // ----------------------------------------------------------
    const KEY = 'portfolio-theme';

    function getSaved() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }
    function save(t) {
        try { localStorage.setItem(KEY, t); } catch (e) { /* ignore */ }
    }

    // Button ab index.html me hi hai (#themeToggle). Na mile to JS bana dega.
    let btn = document.getElementById('themeToggle');
    if (!btn) {
        const nav = document.getElementById('navbar');
        btn = document.createElement('button');
        btn.id = 'themeToggle';
        btn.type = 'button';
        btn.className = 'theme-toggle';
        btn.innerHTML = '<i class="fa-solid fa-sun"></i><i class="fa-solid fa-moon"></i>';
        if (nav) nav.appendChild(btn);
    }

    function applyTheme(t) {
        root.setAttribute('data-theme', t);
        btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
        btn.setAttribute('title', t === 'dark' ? 'Light mode' : 'Dark mode');
    }

    applyTheme(getSaved() === 'light' ? 'light' : 'dark');

    btn.addEventListener('click', function () {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.classList.add('theme-anim');
        applyTheme(next);
        save(next);
        setTimeout(function () { root.classList.remove('theme-anim'); }, 600);
    });

    // ----------------------------------------------------------
    //  🧈 SMOOTH SCROLL
    // ----------------------------------------------------------
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    // scroll ke dauran heavy animations pause
    let scrollTimer;
    window.addEventListener('scroll', function () {
        root.classList.add('is-scrolling');
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () { root.classList.remove('is-scrolling'); }, 160);
    }, { passive: true });

    if (reduceMotion) return;

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight);
    const scrollLocked = () => getComputedStyle(document.body).overflow === 'hidden';

    let current = window.scrollY;
    let target = current;
    let wheelRaf = null;
    let animRaf = null;

    // Native scroll (keyboard, scrollbar drag, touch) ke saath sync rakho
    window.addEventListener('scroll', function () {
        if (!wheelRaf && !animRaf) {
            current = target = window.scrollY;
        }
    }, { passive: true });

    // --- Mouse wheel: inertia (sirf desktop) ---
    function wheelLoop() {
        current += (target - current) * 0.055;
        if (Math.abs(target - current) < 0.4) {
            current = target;
            window.scrollTo(0, current);
            wheelRaf = null;
            return;
        }
        window.scrollTo(0, current);
        wheelRaf = requestAnimationFrame(wheelLoop);
    }

    if (!isTouch) {
        window.addEventListener('wheel', function (e) {
            if (e.ctrlKey || e.defaultPrevented) return;      // zoom
            if (scrollLocked()) return;                        // preloader / menu open
            if (e.target.closest && e.target.closest('textarea')) return;

            e.preventDefault();

            if (animRaf) { cancelAnimationFrame(animRaf); animRaf = null; }
            if (!wheelRaf) { current = target = window.scrollY; }

            let delta = e.deltaY;
            if (e.deltaMode === 1) delta *= 33;
            else if (e.deltaMode === 2) delta *= window.innerHeight;

            target = clamp(target + delta * 0.7, 0, maxScroll());
            if (!wheelRaf) wheelRaf = requestAnimationFrame(wheelLoop);
        }, { passive: false });
    }

    // --- Anchor links: easing ke saath smooth jump ---
    function animateTo(y, duration) {
        if (wheelRaf) { cancelAnimationFrame(wheelRaf); wheelRaf = null; }
        if (animRaf) cancelAnimationFrame(animRaf);

        const from = window.scrollY;
        const dist = clamp(y, 0, maxScroll()) - from;
        const t0 = performance.now();
        duration = duration || clamp(Math.abs(dist) * 0.9, 900, 2000);

        function frame(now) {
            const p = Math.min((now - t0) / duration, 1);
            const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; // easeInOutCubic
            window.scrollTo(0, from + dist * eased);
            if (p < 1) {
                animRaf = requestAnimationFrame(frame);
            } else {
                animRaf = null;
                current = target = window.scrollY;
            }
        }
        animRaf = requestAnimationFrame(frame);
    }

    // user touch / key se beech me rok sake
    ['touchstart', 'keydown'].forEach(function (ev) {
        window.addEventListener(ev, function () {
            if (animRaf) { cancelAnimationFrame(animRaf); animRaf = null; }
        }, { passive: true });
    });

    // Capture phase: purane index.js ke scrollIntoView se pehle hum handle karenge
    document.addEventListener('click', function (e) {
        const a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a) return;
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const el = document.getElementById(href.slice(1));
        if (!el) return;

        e.preventDefault();
        e.stopPropagation();

        const menu = document.getElementById('navLinks');
        const go = function () {
            animateTo(el.getBoundingClientRect().top + window.scrollY);
        };

        if (menu && menu.classList.contains('active')) {
            const burger = document.getElementById('hamburger');
            if (burger) burger.click();           // menu band karo
            setTimeout(go, 380);
        } else {
            go();
        }
    }, true);

    window.addEventListener('resize', function () {
        if (!wheelRaf && !animRaf) current = target = window.scrollY;
        target = clamp(target, 0, maxScroll());
    });
})();
