/* ═══════════════════════════════════════════
   CONTACT — Form Validation & Submission
═══════════════════════════════════════════ */

import translations from './translations.js';

function t(key) {
  const lang = document.documentElement.lang || 'en';
  return key.split('.').reduce((obj, k) => obj?.[k], translations[lang]);
}

export function initContact() {
  const form       = document.getElementById('contactForm');
  const nameInput  = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const msgInput   = document.getElementById('contactMessage');
  const nameErr    = document.getElementById('nameError');
  const emailErr   = document.getElementById('emailError');
  const msgErr     = document.getElementById('messageError');
  const submitBtn  = document.getElementById('submitBtn');
  const success    = document.getElementById('formSuccess');

  if (!form) return;

  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  function setError(input, errEl, msg) { input.classList.add('error');    errEl.textContent = msg; }
  function clrError(input, errEl)      { input.classList.remove('error'); errEl.textContent = ''; }

  function validate() {
    let ok = true;
    const name  = nameInput.value.trim();
    const email = emailInput.value.trim();
    const msg   = msgInput.value.trim();

    if (!name)        { setError(nameInput, nameErr, t('contact.err_name_req'));   ok = false; }
    else if (name.length < 2) { setError(nameInput, nameErr, t('contact.err_name_short')); ok = false; }
    else clrError(nameInput, nameErr);

    if (!email)            { setError(emailInput, emailErr, t('contact.err_email_req'));     ok = false; }
    else if (!isEmail(email)) { setError(emailInput, emailErr, t('contact.err_email_invalid')); ok = false; }
    else clrError(emailInput, emailErr);

    if (!msg)          { setError(msgInput, msgErr, t('contact.err_msg_req'));   ok = false; }
    else if (msg.length < 10) { setError(msgInput, msgErr, t('contact.err_msg_short')); ok = false; }
    else clrError(msgInput, msgErr);

    return ok;
  }

  // Inline blur validation
  nameInput.addEventListener('blur',  () => validate());
  emailInput.addEventListener('blur', () => validate());
  msgInput.addEventListener('blur',   () => validate());

  // Submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;

    const label = submitBtn.querySelector('.btn-label');
    submitBtn.disabled = true;
    label.textContent  = t('contact.submitting');

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      label.textContent  = t('contact.submit');
      success.textContent = t('contact.success');
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 5000);
    }, 1400);
  });
}
