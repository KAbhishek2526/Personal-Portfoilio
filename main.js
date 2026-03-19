/* ============================================
   PORTFOLIO — JavaScript
   Scroll reveal, Navbar, Active link, Mobile menu
   ============================================ */

// ---------- SCROLL REVEAL ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  },
  { threshold: 0.1 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// ---------- NAVBAR SCROLL ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ---------- ACTIVE NAV LINK ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
  const y = window.scrollY + 140;
  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const id = sec.getAttribute('id');
    if (y >= top && y < top + sec.offsetHeight) {
      navLinks.forEach((l) => {
        l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
      });
    }
  });
}
window.addEventListener('scroll', setActiveNav);

// ---------- SMOOTH SCROLL ----------
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      navLinksEl.classList.remove('open');
      navToggle.classList.remove('active');
    }
  });
});

// ---------- MOBILE MENU ----------
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
  navToggle.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navLinksEl.contains(e.target) && !navToggle.contains(e.target)) {
    navLinksEl.classList.remove('open');
    navToggle.classList.remove('active');
  }
});
