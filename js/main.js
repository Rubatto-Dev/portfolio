// ============================================================
// TYPING ANIMATION
// ============================================================
function typeText(el, text, speed = 80) {
  return new Promise(resolve => {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function runHeroAnimation() {
  const nameEl   = document.getElementById('typed-name');
  const roleEl   = document.getElementById('hero-role');
  const ctasEl   = document.getElementById('hero-ctas');

  // Role text comes from translations via data-i18n="hero_role" — already set by initI18n()
  await typeText(nameEl, 'Guilherme Rubatto', 90);

  // brief pause, then show role (text already set by applyLanguage)
  await new Promise(r => setTimeout(r, 400));
  roleEl.style.opacity = '1';

  // show CTAs
  await new Promise(r => setTimeout(r, 300));
  ctasEl.style.opacity = '1';
}

// ============================================================
// INTERSECTION OBSERVER — FADE IN ON SCROLL
// ============================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ============================================================
// HAMBURGER MENU
// ============================================================
function initHamburger() {
  const btn    = document.getElementById('hamburger');
  const mobile = document.getElementById('nav-mobile');

  btn.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on link click
  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initI18n();          // from i18n.js — applies saved language
  runHeroAnimation();
  initScrollAnimations();
  initHamburger();
});
