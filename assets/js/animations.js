/* ═══════════════════════════════════════════
   ANIMATIONS — Scroll, Parallax, Counters, Typing
═══════════════════════════════════════════ */

/* ── Intersection Observer for scroll animations ── */
export function initScrollAnimations() {
  const els = document.querySelectorAll('[data-animate]');
  const obs = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );
  els.forEach(el => obs.observe(el));
}

/* ── Orb parallax on mouse move ── */
export function initParallax() {
  const orbs = document.querySelectorAll('.orb');
  if (!orbs.length) return;

  let rafId = null;
  let tx = 0, ty = 0;

  document.addEventListener('mousemove', (e) => {
    tx = (e.clientX / window.innerWidth  - 0.5) * 18;
    ty = (e.clientY / window.innerHeight - 0.5) * 18;
    if (!rafId) rafId = requestAnimationFrame(moveOrbs);
  }, { passive: true });

  function moveOrbs() {
    orbs.forEach((orb, i) => {
      const f = (i + 1) * 0.35;
      orb.style.transform = `translate(${tx * f}px, ${ty * f}px)`;
    });
    rafId = null;
  }
}

/* ── Animated stat counters ── */
export function initCounters() {
  const els = document.querySelectorAll('.stat-number');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const raw    = el.textContent.replace(/[^0-9]/g, '');
      const suffix = el.textContent.replace(/[0-9]/g, '');
      const target = parseInt(raw, 10);
      if (isNaN(target)) return;

      let current  = 0;
      const step   = target / (900 / 16);

      function tick() {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current < target) requestAnimationFrame(tick);
      }
      tick();
      obs.unobserve(el);
    });
  }, { threshold: 0.8 });
  els.forEach(el => obs.observe(el));
}

/* ── Hero typing animation ── */
let typingTimeout = null;

export function startTyping(text) {
  const container = document.querySelector('.hero-title');
  if (!container) return;

  clearTimeout(typingTimeout);

  const prefix  = container.querySelector('.title-prefix');
  let   textEl  = container.querySelector('.typing-text');
  let   cursor  = container.querySelector('.typing-cursor');

  // Build structure if missing
  if (!textEl) {
    textEl = document.createElement('span');
    textEl.className = 'typing-text';
    container.appendChild(textEl);
  }
  if (!cursor) {
    cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    container.appendChild(cursor);
  }

  textEl.textContent = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      textEl.textContent += text[i++];
      typingTimeout = setTimeout(type, 48);
    }
  }

  typingTimeout = setTimeout(type, 500);
}
