/* ═══════════════════════════════
   MAIN — Entry Point
═══════════════════════════════ */

import { initTheme }           from './theme.js';
import { initI18n, applyLang } from './i18n.js';
import { initNavbar }          from './navbar.js';
import { initContact }         from './contact.js';
import {
  initScrollAnimations,
  initParallax,
  initCounters,
  startTyping,
} from './animations.js';
import translations from './translations.js';

document.addEventListener('DOMContentLoaded', () => {
  /* 1. Theme (must run before i18n to avoid flash) */
  initTheme();

  /* 2. Language & translations */
  initI18n();

  /* Hook: re-run typing whenever language changes */
  const langBtn = document.getElementById('langToggle');
  langBtn?.addEventListener('click', () => {
    const lang = document.documentElement.lang || 'en';
    startTyping(translations[lang].hero.title);
  });

  /* 3. Navbar */
  initNavbar();

  /* 4. Contact form */
  initContact();

  /* 5. Animations */
  initScrollAnimations();
  initParallax();
  initCounters();

  /* 6. Start hero typing (initial) */
  const lang = document.documentElement.lang || 'en';
  startTyping(translations[lang].hero.title);
});
