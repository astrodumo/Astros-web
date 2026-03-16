/* ─────────────────────────────────────────
   main.js — Portfolio interactivity
   ─────────────────────────────────────────

   1. Cursor glow
   2. Mobile nav toggle
   3. Scroll reveal (IntersectionObserver)
   4. Back-to-top button
*/

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Cursor glow ── */
  const glow = document.getElementById('cursor-glow');
  if (glow) {
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    });
  }

  /* ── 2. Mobile nav toggle ── */
  const toggle   = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.textContent = isOpen ? '✕' : '☰';
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
        toggle.textContent = '☰';
      });
    });
  }

  /* ── 3. Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));

  /* ── 4. Back to top ── */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 500);
    });
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
