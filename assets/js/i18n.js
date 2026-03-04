/* ═══════════════════════════════════════════════════
   I18N — Arabic / English Language Switching
═══════════════════════════════════════════════════ */

import translations from './translations.js';
import { applyTheme, TITLES } from './theme.js';

const LANG_KEY = 'oa-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'en';

/* ── helpers ── */
function get(lang, key) {
  return key.split('.').reduce((obj, k) => obj?.[k], translations[lang]);
}

function setDOMText(el, value) {
  if (el.hasAttribute('data-i18n-html')) {
    el.innerHTML = value;
  } else {
    el.textContent = value;
  }
}

/* ── Update all translatable elements ── */
function updateDOM(lang) {
  // Text / HTML content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key   = el.getAttribute('data-i18n');
    const value = get(lang, key);
    if (value !== undefined) setDOMText(el, value);
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key   = el.getAttribute('data-i18n-placeholder');
    const value = get(lang, key);
    if (value !== undefined) el.placeholder = value;
  });

  // aria-label attributes
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key   = el.getAttribute('data-i18n-label');
    const value = get(lang, key);
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  // page title
  document.title = lang === 'ar'
    ? 'عمر أحمد — مطور Laravel Full Stack'
    : 'Omar Ahmad — Full Stack Laravel Developer';

  // meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'ar'
      ? 'عمر أحمد — مطور Laravel Full Stack متخصص في أنظمة SaaS والمنصات متعددة البائعين'
      : 'Omar Ahmad — Full Stack Laravel Developer specializing in SaaS systems and multi-vendor platforms';
  }
}

/* ── Direction & font ── */
function setDirection(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

/* ── Update lang toggle button ── */
function updateLangBtn(lang) {
  const btn    = document.getElementById('langToggle');
  if (!btn) return;
  const isAr   = lang === 'ar';
  btn.querySelector('.seg-primary').textContent = isAr ? 'AR' : 'EN';
  btn.querySelector('.seg-primary').classList.toggle('lang-seg-active', true);
  btn.querySelector('.seg-other').textContent   = isAr ? 'EN' : 'AR';
  btn.querySelector('.seg-other').classList.toggle('lang-seg-active', false);
}

/* ── Apply language ── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  setDirection(lang);
  updateDOM(lang);
  updateLangBtn(lang);

  // refresh theme button title for new lang
  const pref = document.documentElement.getAttribute('data-theme-pref') || 'system';
  applyTheme(pref, lang);
}

/* ── Init ── */
function initI18n() {
  // Wire up toggle button
  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'ar' : 'en');
  });

  // Apply on load
  applyLang(currentLang);
}

export { initI18n, applyLang, currentLang };
