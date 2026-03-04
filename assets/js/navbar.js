/* ═══════════════════════════════════════
   NAVBAR — Scroll state, active links, hamburger
═══════════════════════════════════════ */

export function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const allLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');

  /* ── Scroll: add .scrolled class ── */
  function onScroll() {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── Active link highlighting ── */
  function updateActiveLink() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const id   = section.id;
      const top  = section.offsetTop;
      const bot  = top + section.offsetHeight;
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      link?.classList.toggle('active', scrollY >= top && scrollY < bot);
    });
  }

  /* ── Hamburger toggle ── */
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks?.classList.toggle('open');
  });

  // Close on link click (mobile)
  allLinks.forEach(link => link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
  }));

  /* ── Smooth scroll for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}
