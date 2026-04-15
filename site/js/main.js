// 24 Hour Tire Houston — main.js
// GSAP scroll animations, counters, mobile menu, header scroll state.
//
// Principle: content is visible by default. GSAP enhances on scroll but
// never blocks content from appearing. Every `from()` uses
// immediateRender:false so the start state only applies when the trigger
// actually fires.

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------
     Sticky header state
  ------------------------------------------------------------ */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------------------
     Mobile menu
  ------------------------------------------------------------ */
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // Counters always render their target immediately. GSAP will tween
  // them from 0→target on scroll if motion is allowed.
  const counterEls = document.querySelectorAll('.stat .num');
  counterEls.forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    if (!isNaN(target)) el.textContent = target;
  });

  if (prefersReduced || typeof gsap === 'undefined') {
    return; // content is already visible — nothing else to do
  }

  gsap.registerPlugin(ScrollTrigger);

  const FROM = { immediateRender: false };

  /* ------------------------------------------------------------
     Hero intro — staggered letter lines
  ------------------------------------------------------------ */
  const heroLines = document.querySelectorAll('.hero-title .line');
  gsap.set(heroLines, { yPercent: 110 });
  gsap.to(heroLines, {
    yPercent: 0,
    duration: 1.1,
    ease: 'expo.out',
    stagger: 0.08,
    delay: 0.25,
  });

  gsap.from('.hero-status', { opacity: 0, y: -12, duration: 0.8, delay: 0.1, ease: 'power2.out' });
  gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 0.9, delay: 0.8, ease: 'power2.out' });
  gsap.from('.hero-cta .btn', { opacity: 0, y: 20, duration: 0.8, delay: 1.0, stagger: 0.1, ease: 'power2.out' });

  /* ------------------------------------------------------------
     Hero tire — rotate & parallax on scroll
  ------------------------------------------------------------ */
  const tire = document.querySelector('.hero-tire');
  if (tire) {
    gsap.from(tire, { scale: 0.95, opacity: 0, duration: 1.4, delay: 0.2, ease: 'power3.out' });
    gsap.to(tire, {
      rotate: 420,
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    });
  }

  /* ------------------------------------------------------------
     Section reveals on scroll
  ------------------------------------------------------------ */
  gsap.utils.toArray('.section-head').forEach((head) => {
    gsap.from(head.children, {
      ...FROM,
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: head, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });

  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      ...FROM,
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: (i % 3) * 0.08,
      scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
    });
  });

  const paths = gsap.utils.toArray('.path');
  if (paths[0]) {
    gsap.from(paths[0], {
      ...FROM,
      x: -60, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.paths-grid', start: 'top 85%', toggleActions: 'play none none none' },
    });
  }
  if (paths[1]) {
    gsap.from(paths[1], {
      ...FROM,
      x: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.12,
      scrollTrigger: { trigger: '.paths-grid', start: 'top 85%', toggleActions: 'play none none none' },
    });
  }

  gsap.utils.toArray('.loc-card').forEach((card, i) => {
    gsap.from(card, {
      ...FROM,
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.06,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.locations-grid', start: 'top 80%', toggleActions: 'play none none none' },
    });
  });

  const fleetVisual = document.querySelector('.fleet-visual');
  if (fleetVisual) {
    gsap.from('.fleet-copy > *', {
      ...FROM,
      y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.fleet-inner', start: 'top 80%', toggleActions: 'play none none none' },
    });
    gsap.from(fleetVisual, {
      ...FROM,
      x: 60, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.fleet-inner', start: 'top 80%', toggleActions: 'play none none none' },
    });
    gsap.to(fleetVisual.querySelector('svg'), {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.fleet',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  gsap.utils.toArray('.review-card').forEach((card, i) => {
    gsap.from(card, {
      ...FROM,
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.08,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.review-grid', start: 'top 85%', toggleActions: 'play none none none' },
    });
  });

  gsap.from('.faq details', {
    ...FROM,
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.05,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.faq-list', start: 'top 85%', toggleActions: 'play none none none' },
  });

  gsap.from('.final-inner > *', {
    ...FROM,
    y: 40,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.final-cta', start: 'top 80%', toggleActions: 'play none none none' },
  });

  /* ------------------------------------------------------------
     Counter tween — run from 0 → target on first view.
     Counters already display their target text above, so a failed
     tween just means no animation, never invisible numbers.
  ------------------------------------------------------------ */
  counterEls.forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        const state = { v: 0 };
        gsap.to(state, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(state.v); },
        });
      },
    });
  });
})();
