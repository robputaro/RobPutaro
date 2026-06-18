const nav = document.querySelector('.nav');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.mobile-panel');

function updateChrome() {
  const top = window.scrollY || document.documentElement.scrollTop;
  if (nav) nav.classList.toggle('scrolled', top > 18);
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const pct = height > 0 ? (top / height) * 100 : 0;
  if (progress) progress.style.width = `${pct}%`;
}

window.addEventListener('scroll', updateChrome, { passive: true });
window.addEventListener('load', updateChrome);

if (toggle && panel) {
  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.textContent = open ? 'Close' : 'Menu';
    toggle.setAttribute('aria-expanded', String(open));
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.textContent = 'Menu';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 16;
    const y = (event.clientY / window.innerHeight - 0.5) * 16;
    heroVisual.style.transform = `translate3d(${x * 0.16}px, ${y * 0.16}px, 0)`;
  }, { passive: true });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
