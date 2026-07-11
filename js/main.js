// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav when a link is clicked
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  revealEls.forEach(el => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
}

// Gallery: tap-to-toggle on touch devices (hover doesn't work well on mobile)
document.querySelectorAll('.gallery-wipe').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-active');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
