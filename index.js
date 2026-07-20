:root {
    --bg-primary: #0d0b09;
    --bg-secondary: #171210;
    --bg-card: #1f1814;
    --bg-input: #241e19;
    --border-color: #2f2520;
    --text-primary: #ece4d9;
    --text-secondary: #b5a89c;
    --text-muted: #7a6e62;
    --neon-orange: #fd802e;
    --neon-red: #E63946;
    --gradient-hero: linear-gradient(135deg, #fd802e 0%, #E63946 50%, #fd802e 100%);
    --shadow-orange: 0 0 30px rgba(253, 128, 46, 0.2);
    --shadow-red: 0 0 30px rgba(230, 57, 70, 0.2);
    --radius: 20px;
}

/* ===== RESET & GLOBAL ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.7;
    overflow-x: hidden;
}

body.menu-open {
    overflow: hidden;
}

::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    background: var(--bg-primary);
}
::-webkit-scrollbar-thumb {
    background: var(--neon-orange);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(253, 128, 46, 0.3);
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;
}

section {
    padding: 80px 0;
}

/* ============================================================
   PRELOADER
============================================================ */
#preloader {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.8s ease, visibility 0.8s ease;
    opacity: 1;
    visibility: visible;
}

#preloader.fade-out {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.loader-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.loader-ring {
    position: relative;
    width: 90px;
    height: 90px;
}

.loader-ring .ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid transparent;
}

.loader-ring .ring-1 {
    border-top-color: var(--neon-orange);
    border-right-color: var(--neon-red);
    animation: spinLoader 1s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

.loader-ring .ring-2 {
    border-bottom-color: var(--neon-orange);
    border-left-color: var(--neon-red);
    animation: spinLoader 1.4s cubic-bezier(0.65, 0, 0.35, 1) infinite reverse;
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
}

.loader-ring .ring-3 {
    border-top-color: rgba(253, 128, 46, 0.3);
    border-bottom-color: rgba(230, 57, 70, 0.3);
    animation: spinLoader 0.7s cubic-bezier(0.65, 0, 0.35, 1) infinite;
    width: 40%;
    height: 40%;
    top: 30%;
    left: 30%;
}

.loader-ring::before {
    content: '';
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(253, 128, 46, 0.08), rgba(230, 57, 70, 0.05), transparent 70%);
    animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes spinLoader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes pulseGlow {
    0%,
    100% {
        transform: scale(1);
        opacity: 0.5;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
}

.loader-sub {
    color: var(--text-muted);
    font-size: 0.8rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 300;
    animation: pulseText 1.8s ease-in-out infinite;
}

@keyframes pulseText {
    0%,
    100% {
        opacity: 0.3;
    }
    50% {
        opacity: 1;
    }
}

/* ===== GLASS CARD WRAPPER ===== */
.section-glass {
    background: rgba(13, 11, 9, 0.55);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 32px;
    padding: 44px 48px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
}

.section-glass::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 34px;
    padding: 2px;
    background: conic-gradient(from 0deg, #fd802e, #E63946, #fd802e, #E63946);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
    transition: opacity 0.4s ease;
    z-index: 0;
}

.section-glass:hover::before {
    opacity: 1;
}

.section-glass>* {
    position: relative;
    z-index: 1;
}

/* ===== REVEAL ANIMATIONS ===== */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s cubic-bezier(0.23, 1, 0.32, 1), transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ===== BACKGROUND ORBS ===== */
.orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
}
.orb-1 {
    width: 400px;
    height: 400px;
    background: rgba(253, 128, 46, 0.06);
    top: -200px;
    right: -100px;
}
.orb-2 {
    width: 350px;
    height: 350px;
    background: rgba(230, 57, 70, 0.05);
    bottom: -100px;
    left: -100px;
}

/* ===== SECTION TITLES ===== */
.section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 48px;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--gradient-hero);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(253, 128, 46, 0.3);
}

.section-title .accent {
    background: var(--gradient-hero);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shimmer 4s ease infinite;
}

@keyframes shimmer {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* ===== NAVIGATION ===== */
nav {
    padding: 18px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(13, 11, 9, 0.45);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    margin: 0 -24px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 50px;
    margin-bottom: 10px;
    transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
        background 0.9s ease,
        backdrop-filter 0.9s ease,
        box-shadow 0.9s ease,
        border-color 0.9s ease,
        border-radius 0.9s ease;
    transform: translateY(0);
    will-change: transform, background, backdrop-filter, box-shadow;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
}

nav.scrolled {
    transform: translateY(10px);
    background: rgba(13, 11, 9, 0.78);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.06);
    border-radius: 40px;
}

nav.scrolled::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 42px;
    padding: 1px;
    background: conic-gradient(from 0deg, rgba(253, 128, 46, 0.15), rgba(230, 57, 70, 0.15), rgba(253, 128, 46, 0.15));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.9s ease;
}

nav.scrolled::after {
    opacity: 1;
}

.logo {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    background: var(--gradient-hero);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shimmer 4s ease infinite;
    letter-spacing: -1px;
    position: relative;
    z-index: 2;
}

.hamburger {
    display: none;
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 1.8rem;
    cursor: pointer;
    padding: 4px 8px;
    transition: color 0.3s ease;
    z-index: 1001;
}

.hamburger:hover {
    color: var(--neon-orange);
}

.nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
    position: relative;
    z-index: 2;
}

.nav-links a {
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
    transition: color 0.3s ease;
    letter-spacing: 0.5px;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--neon-orange);
    transition: width 0.3s ease;
    box-shadow: 0 0 10px rgba(253, 128, 46, 0.4);
}

.nav-links a:hover {
    color: #fff;
}

.nav-links a:hover::after {
    width: 100%;
}

/* ============================================================
   HERO
============================================================ */
.hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    padding: 20px 0;
    border: none;
}

.hero .section-glass {
    display: flex;
    align-items: center;
    gap: 50px;
    width: 100%;
    padding: 44px 48px;
}

.hero-content {
    flex: 1;
}

.hero-content .badge {
    display: inline-block;
    background: rgba(253, 128, 46, 0.08);
    border: 1px solid rgba(253, 128, 46, 0.15);
    color: var(--neon-orange);
    padding: 6px 20px;
    border-radius: 40px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
    box-shadow: 0 0 30px rgba(253, 128, 46, 0.05);
}

.hero-content h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.6rem, 7vw, 4.6rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -2px;
    margin-bottom: 20px;
}

.hero-content h1 .gradient-text {
    background: var(--gradient-hero);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shimmer 4s ease infinite;
}

.hero-content p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    max-width: 480px;
    font-weight: 300;
    margin-bottom: 32px;
}

.hero-image-wrapper {
    flex-shrink: 0;
    width: 380px;
    height: 400px;
    border-radius: 40px;
    padding: 4px;
    background: conic-gradient(from 0deg, #fd802e, #E63946, #fd802e, #E63946);
    animation: pulseZoom 3.5s ease-in-out infinite;
    box-shadow: 0 0 50px rgba(253, 128, 46, 0.25), 0 0 80px rgba(230, 57, 70, 0.1);
    transition: transform 1.1s ease;
    will-change: transform, box-shadow;
}

.hero-image-wrapper:hover {
    animation-play-state: paused;
    transform: scale(1.05);
    box-shadow: 0 0 80px rgba(253, 128, 46, 0.5), 0 0 120px rgba(230, 57, 70, 0.3);
}

.hero-image-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 36px;
    object-fit: cover;
    display: block;
    background: var(--bg-primary);
}

@keyframes pulseZoom {
    0%,
    100% {
        transform: scale(1);
        box-shadow: 0 0 50px rgba(253, 128, 46, 0.25), 0 0 80px rgba(230, 57, 70, 0.1);
    }
    50% {
        transform: scale(1.04);
        box-shadow: 0 0 80px rgba(253, 128, 46, 0.5), 0 0 120px rgba(230, 57, 70, 0.25);
    }
}

.btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.btn-primary {
    background: var(--gradient-hero);
    background-size: 200% 200%;
    animation: shimmer 4s ease infinite;
    border: none;
    padding: 14px 38px;
    border-radius: 60px;
    color: #0d0b09;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 30px rgba(253, 128, 46, 0.2);
    display: inline-block;
    text-align: center;
}

.btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 50px rgba(253, 128, 46, 0.35);
}

.btn-secondary {
    background: transparent;
    border: 1px solid var(--border-color);
    padding: 14px 38px;
    border-radius: 60px;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
    text-align: center;
}

.btn-secondary:hover {
    border-color: var(--neon-red);
    color: #fff;
    background: rgba(230, 57, 70, 0.05);
    box-shadow: 0 0 30px rgba(230, 57, 70, 0.05);
}

/* ===== ABOUT ===== */
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.about-text p {
    color: var(--text-secondary);
    margin-bottom: 16px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.8;
}

.about-text .earthy-accent {
    color: var(--text-primary);
    font-weight: 400;
}

.about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.stat-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 28px 20px;
    text-align: center;
    transition: all 0.4s ease;
}

.stat-card:hover {
    border-color: var(--neon-orange);
    transform: translateY(-6px);
    box-shadow: var(--shadow-orange);
}

.stat-card .number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    background: var(--gradient-hero);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shimmer 4s ease infinite;
}

.stat-card .label {
    color: var(--text-muted);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-top: 4px;
}

/* ===== SKILLS ===== */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 24px;
}

.skill-item {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 24px 16px;
    text-align: center;
    transition: all 0.4s ease;
    cursor: default;
}

.skill-item:hover {
    border-color: var(--neon-red);
    transform: translateY(-8px);
    box-shadow: 0 0 40px rgba(230, 57, 70, 0.05);
}

.skill-item .icon {
    font-size: 2.6rem;
    display: block;
    margin-bottom: 8px;
}
.skill-item .name {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.3px;
}
.skill-item:nth-child(1) .icon {
    color: #21759b;
}
.skill-item:nth-child(2) .icon {
    color: #e34f26;
}
.skill-item:nth-child(3) .icon {
    color: #1572b6;
}
.skill-item:nth-child(4) .icon {
    color: #f7df1e;
}
.skill-item:nth-child(5) .icon {
    color: #7952b3;
}
.skill-item:nth-child(6) .icon {
    color: #777bb3;
}

/* ===== SERVICES ===== */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
}

.service-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 36px 28px;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--gradient-hero);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.service-card:hover::before {
    opacity: 1;
}

.service-card:hover {
    border-color: rgba(253, 128, 46, 0.2);
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.service-card .emoji {
    font-size: 2.8rem;
    display: block;
    margin-bottom: 16px;
}

.service-card h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.3rem;
    margin-bottom: 8px;
    color: #fff;
}

.service-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 300;
}

/* ===== PROJECTS ===== */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.project-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 22px 18px;
    transition: all 0.4s ease;
    cursor: default;
}

.project-card:hover {
    border-color: var(--neon-red);
    transform: translateY(-10px);
    box-shadow: var(--shadow-red);
}

.project-card .thumb {
    width: 100%;
    height: 290px;
    background: linear-gradient(135deg, #1f1814, #2f2520);
    border-radius: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    overflow: hidden;
}

.project-card .thumb img {
    width: 200px;
    height: 180px;
    object-fit: cover;
    display: block;
}

.project-card h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
    margin-bottom: 4px;
}

.project-card p {
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 14px;
    line-height: 1.4;
}

.project-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.project-buttons a {
    padding: 8px 18px;
    border-radius: 60px;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    transition: all 0.3s ease;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border: none;
    letter-spacing: 0.5px;
    background-size: 200% 200%;
    animation: shimmer 4s ease infinite;
    box-shadow: 0 4px 20px rgba(253, 128, 46, 0.2);
}

.btn-live {
    background: var(--gradient-hero);
    color: #0d0b09 !important;
    box-shadow: 0 4px 20px rgba(253, 128, 46, 0.25);
}

.btn-github {
    background: #1f1814;
    color: #fff !important;
    border: 1px solid var(--neon-orange);
    box-shadow: 0 4px 20px rgba(253, 128, 46, 0.1);
}

.project-buttons a:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(253, 128, 46, 0.35);
    opacity: 0.9;
}

.btn-github:hover {
    background: var(--neon-orange);
    color: #0d0b09 !important;
    border-color: var(--neon-orange);
}

/* ===== TESTIMONIALS ===== */
.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 32px 28px;
    transition: all 0.4s ease;
    position: relative;
}

.testimonial-card:hover {
    border-color: var(--neon-red);
}

.testimonial-card .quote {
    font-size: 2.5rem;
    color: var(--neon-orange);
    opacity: 0.3;
    line-height: 1;
    margin-bottom: -10px;
    font-family: 'Georgia', serif;
}

.testimonial-card p {
    color: var(--text-secondary);
    font-style: italic;
    font-weight: 300;
    font-size: 0.95rem;
    margin-bottom: 16px;
}

.testimonial-card .author .name {
    font-weight: 600;
    color: #fff;
    font-size: 0.95rem;
}

.testimonial-card .author .role {
    color: var(--text-muted);
    font-size: 0.75rem;
}

/* ===== CONTACT ===== */
.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: start;
}

.contact-info h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    margin-bottom: 12px;
}

.contact-info p {
    color: var(--text-secondary);
    font-weight: 300;
    margin-bottom: 32px;
}

.social-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
}

.social-link {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 10px 24px;
    border-radius: 60px;
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.social-link .icon {
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.social-link:nth-child(1) .icon {
    color: #ea4335;
}
.social-link:nth-child(2) .icon {
    color: #0a66c2;
}
.social-link:nth-child(3) .icon {
    color: #25d366;
}
.social-link:nth-child(4) .icon {
    color: #1877f2;
}
.social-link:nth-child(5) .icon {
    color: #e4405f;
}

.social-link:hover {
    border-color: var(--neon-orange);
    color: #fff;
    background: rgba(253, 128, 46, 0.05);
    box-shadow: var(--shadow-orange);
}

.social-link:hover .icon {
    color: #fff;
}

.contact-right-col {
    position: relative;
    min-height: 340px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.contact-form.hidden {
    display: none;
}

.contact-form input,
.contact-form textarea {
    background: var(--bg-input);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 14px 18px;
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    outline: none;
    width: 100%;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--neon-orange);
    box-shadow: 0 0 30px rgba(253, 128, 46, 0.05);
}

.contact-form textarea {
    min-height: 140px;
    resize: vertical;
}

.contact-form button {
    background: var(--gradient-hero);
    background-size: 200% 200%;
    animation: shimmer 4s ease infinite;
    border: none;
    padding: 16px;
    border-radius: 60px;
    color: #0d0b09;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 30px rgba(253, 128, 46, 0.15);
}

.contact-form button:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 50px rgba(253, 128, 46, 0.3);
}

.form-success {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 40px 30px;
    min-height: 340px;
    animation: slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    gap: 16px;
}

.form-success.visible {
    display: flex;
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(30px) scale(0.96);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.success-icon {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: var(--gradient-hero);
    background-size: 200% 200%;
    animation: shimmer 4s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 50px rgba(253, 128, 46, 0.25);
    position: relative;
}

.success-icon i {
    font-size: 2.2rem;
    color: #0d0b09;
}

.form-success h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-top: 4px;
}

.form-success p {
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    max-width: 320px;
    margin: 0 auto;
}

.form-success .btn-reset {
    background: transparent;
    border: 1px solid var(--border-color);
    padding: 12px 36px;
    border-radius: 60px;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 8px;
}

.form-success .btn-reset:hover {
    border-color: var(--neon-orange);
    color: #fff;
    background: rgba(253, 128, 46, 0.05);
    box-shadow: var(--shadow-orange);
}

/* ===== FOOTER ===== */
footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    padding: 32px 0;
    color: var(--text-muted);
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin-top: 20px;
    flex-wrap: wrap;
}

footer .footer-icon {
    color: #e4405f;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

footer .footer-icon.mug {
    color: #f39c12;
    font-size: 1rem;
}

/* ============================================================
   RESPONSIVE – All devices
============================================================ */
@media (max-width: 992px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    .hero .section-glass {
        flex-direction: column-reverse;
        text-align: center;
        padding: 36px 28px;
        gap: 30px;
    }
    .hero-content p {
        max-width: 100%;
    }
    .hero-content .badge {
        margin-left: auto;
        margin-right: auto;
    }
    .btn-group {
        justify-content: center;
    }
    .hero-image-wrapper {
        width: 200px;
        height: 200px;
        animation: pulseZoomMobile 3.5s ease-in-out infinite;
    }
    .section-glass {
        padding: 32px 24px;
    }
    .contact-right-col {
        min-height: auto;
    }
    .form-success {
        min-height: 260px;
    }

    /* Preloader responsive */
    .loader-ring {
        width: 70px;
        height: 70px;
    }
    .loader-ring .ring {
        border-width: 3px;
    }
    .loader-ring .ring-2 {
        width: 65%;
        height: 65%;
        top: 17.5%;
        left: 17.5%;
    }
    .loader-ring .ring-3 {
        width: 35%;
        height: 35%;
        top: 32.5%;
        left: 32.5%;
    }
    .loader-ring::before {
        inset: -10px;
    }
    .loader-sub {
        font-size: 0.7rem;
        letter-spacing: 4px;
    }
}

@media (max-width: 768px) {
    nav {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 12px 16px;
        margin: 0 -16px;
        border-radius: 30px;
        justify-content: space-between;
    }

    nav.scrolled {
        transform: translateY(8px);
        border-radius: 24px;
    }

    .hamburger {
        display: block;
        z-index: 1001;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: -280px;
        width: 260px;
        height: 100vh;
        background: rgba(13, 11, 9, 0.95);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 18px;
        z-index: 1000;
        margin: 0;
        padding: 40px 20px;
        border: none;
        border-radius: 0;
        border-left: 2px solid rgba(253, 128, 46, 0.2);
        box-shadow: -20px 0 60px rgba(0, 0, 0, 0.6);
        transition: right 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .nav-links.active {
        right: 0;
    }

    .nav-links a {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-primary);
        letter-spacing: 1px;
        transition: color 0.3s ease, transform 0.3s ease;
        padding: 5px 0;
        width: 100%;
        text-align: center;
        border-bottom: none;
    }

    .nav-links a:hover {
        color: var(--neon-orange);
        transform: translateX(6px);
    }

    .nav-links a::after {
        display: none;
    }

    body.menu-open::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        z-index: 999;
        animation: fadeOverlay 0.3s ease;
    }

    @keyframes fadeOverlay {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .hero-image-wrapper {
        width: 100%;
        max-width: 280px;
        height: auto;
        aspect-ratio: 1/1;
        margin: 0 auto;
        animation: pulseZoomMobile 3.5s ease-in-out infinite;
    }

    .hero-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 36px;
    }

    @keyframes pulseZoomMobile {
        0%,
        100% {
            transform: scale(1);
            box-shadow: 0 0 30px rgba(253, 128, 46, 0.2), 0 0 50px rgba(230, 57, 70, 0.1);
        }
        50% {
            transform: scale(1.02);
            box-shadow: 0 0 50px rgba(253, 128, 46, 0.35), 0 0 70px rgba(230, 57, 70, 0.2);
        }
    }

    .hero .section-glass {
        padding: 28px 18px;
    }

    .btn-group {
        flex-direction: column;
        width: 100%;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        text-align: center;
    }

    .section-glass {
        padding: 24px 16px;
    }

    .form-success h3 {
        font-size: 1.3rem;
    }
    .success-icon {
        width: 60px;
        height: 60px;
    }
    .success-icon i {
        font-size: 1.8rem;
    }
    .project-card .thumb {
        height: 160px;
    }

    /* Preloader mobile */
    .loader-container {
        gap: 20px;
        padding: 20px;
        max-width: 90vw;
    }
    .loader-ring {
        width: 60px;
        height: 60px;
    }
    .loader-ring .ring {
        border-width: 3px;
    }
    .loader-ring .ring-2 {
        width: 60%;
        height: 60%;
        top: 20%;
        left: 20%;
        border-width: 2px;
    }
    .loader-ring .ring-3 {
        width: 30%;
        height: 30%;
        top: 35%;
        left: 35%;
        border-width: 2px;
    }
    .loader-ring::before {
        inset: -8px;
        background: radial-gradient(circle, rgba(253, 128, 46, 0.06), rgba(230, 57, 70, 0.03), transparent 60%);
    }
    .loader-sub {
        font-size: 0.6rem;
        letter-spacing: 3px;
        margin-top: -4px;
    }
    .loader-ring .ring-1 {
        animation-duration: 0.8s;
    }
    .loader-ring .ring-2 {
        animation-duration: 1.1s;
    }
    .loader-ring .ring-3 {
        animation-duration: 0.6s;
    }
    .loader-ring::before {
        animation-duration: 1.6s;
    }
    .loader-sub {
        animation-duration: 1.4s;
    }
}

@media (max-width: 480px) {
    .about-stats {
        grid-template-columns: 1fr;
    }
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .projects-grid {
        grid-template-columns: 1fr;
    }
    .services-grid {
        grid-template-columns: 1fr;
    }
    .contact-wrapper {
        padding: 0;
    }
    .hero-image-wrapper {
        max-width: 220px;
    }
    .section-glass {
        padding: 20px 14px;
    }
    nav.scrolled {
        transform: translateY(6px);
        border-radius: 20px;
    }
    .form-success {
        padding: 30px 18px;
        min-height: 220px;
    }
    .form-success p {
        font-size: 0.9rem;
    }
    .success-icon {
        width: 52px;
        height: 52px;
    }
    .success-icon i {
        font-size: 1.5rem;
    }
    .project-card .thumb {
        height: 140px;
    }

    /* Preloader small phones */
    .loader-container {
        gap: 16px;
        padding: 16px;
    }
    .loader-ring {
        width: 50px;
        height: 50px;
    }
    .loader-ring .ring {
        border-width: 2.5px;
    }
    .loader-ring .ring-2 {
        width: 55%;
        height: 55%;
        top: 22.5%;
        left: 22.5%;
        border-width: 2px;
    }
    .loader-ring .ring-3 {
        width: 28%;
        height: 28%;
        top: 36%;
        left: 36%;
        border-width: 1.5px;
    }
    .loader-ring::before {
        inset: -6px;
        background: radial-gradient(circle, rgba(253, 128, 46, 0.04), rgba(230, 57, 70, 0.02), transparent 50%);
    }
    .loader-sub {
        font-size: 0.5rem;
        letter-spacing: 2px;
    }
}

/* Extra small devices */
@media (max-width: 360px) {
    .loader-ring {
        width: 42px;
        height: 42px;
    }
    .loader-ring .ring {
        border-width: 2px;
    }
    .loader-ring .ring-2 {
        border-width: 1.5px;
    }
    .loader-ring .ring-3 {
        border-width: 1px;
    }
    .loader-container {
        gap: 12px;
        padding: 12px;
    }
    .loader-sub {
        font-size: 0.45rem;
        letter-spacing: 1.5px;
    }
}

/* Landscape mode on phones */
@media (max-height: 500px) and (orientation: landscape) {
    .loader-container {
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }
    .loader-ring {
        width: 45px;
        height: 45px;
    }
    .loader-ring .ring-2 {
        width: 55%;
        height: 55%;
        top: 22.5%;
        left: 22.5%;
    }
    .loader-ring .ring-3 {
        width: 30%;
        height: 30%;
        top: 35%;
        left: 35%;
    }
    .loader-sub {
        font-size: 0.55rem;
        letter-spacing: 2px;
        margin-top: 0;
    }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    .loader-ring .ring-1,
    .loader-ring .ring-2,
    .loader-ring .ring-3,
    .loader-ring::before,
    .loader-sub,
    .hero-image-wrapper,
    .hero-image-wrapper img {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
    }
    #preloader {
        transition: none !important;
    }
    .section-glass {
        transition: none !important;
    }
    .reveal {
        transition: none !important;
        opacity: 1 !important;
        transform: none !important;
    }
}
