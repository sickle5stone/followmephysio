// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());

// Reveal-on-scroll for section intros & cards.
// Degrades gracefully: respects reduced-motion, and anything already in the
// initial viewport (e.g. hero) is shown immediately without waiting for scroll.
const revealTargets = document.querySelectorAll(
  '.hero-copy, .hero-figure, .about-media, .about-copy, .section-intro, .service-card, .steps li, .approach-figure, .content-grid li, .contact-card'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('in'));
} else {
  // Snap anything already in-viewport on load to "in" so the hero doesn't blink.
  const markIfVisible = (el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.95 && r.bottom > 0) el.classList.add('in');
  };
  revealTargets.forEach(markIfVisible);

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
  );
  revealTargets.forEach((el) => { if (!el.classList.contains('in')) io.observe(el); });
}
