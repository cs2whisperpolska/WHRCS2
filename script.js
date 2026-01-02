// ===== LOADING =====
document.addEventListener('DOMContentLoaded', function () {
  createParticles();
  setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) loadingScreen.classList.add('hidden');
  }, 2000);
});

function createParticles() {
  const container = document.getElementById('particlesContainer');
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    container.appendChild(particle);
  }
}

// ===== SCROLL =====
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== NAV =====
const navLinks = document.querySelectorAll('.nav-link');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    if (window.innerWidth <= 768) {
      navMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
});

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileToggle.classList.toggle('active');
});

// ===== COUNTER ANIMATION =====
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute('data-target'));
      animateCounter(counter, target);
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 20);
}

document.querySelectorAll('.stat-number').forEach(counter => {
  counterObserver.observe(counter);
});

// ===== RIPPLE =====
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-final').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// ===== AOS & FINAL =====
AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' });

window.addEventListener('load', () => {
  updateServerStatus();
  setInterval(updateServerStatus, 30000);
});

function updateServerStatus() {
  const onlineEl = document.querySelector('.stat-card:nth-child(2) .stat-number');
  if (!onlineEl) return;
  const base = 50;
  const rand = Math.floor(Math.random() * 20) - 10;
  onlineEl.textContent = (base + rand) + '+';
});

// ===== MOBILE MENU =====
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
@media (max-width: 768px) {
  .nav-menu {
    position: fixed; top: 80px; left: 0; right: 0;
    background: var(--whisper-dark);
    border-top: 1px solid rgba(0, 240, 255, 0.2);
    flex-direction: column; padding: 2rem; gap: 1.5rem;
    transform: translateX(-100%); transition: transform 0.3s ease;
    z-index: 999;
  }
  .nav-menu.active { transform: translateX(0); }
  .mobile-toggle { display: flex; }
  .mobile-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .mobile-toggle.active span:nth-child(2) { opacity: 0; }
  .mobile-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }
}`;
document.head.appendChild(mobileStyles);

// ===== RIPPLE CSS =====
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s linear;
  pointer-events: none;
}
@keyframes ripple-animation {
  to { transform: scale(4); opacity: 0; }
}`;
document.head.appendChild(rippleStyle);

// ===== WELCOME =====
console.log('%c🎯 WHISPER POLSKA – Professional CS2 Team', 'color: #00f0ff; font-size: 16px; font-weight: bold;');
console.log('%c📊 Stats: 400+ members, 12 tournaments, 85% winrate', 'color: #7b00ff;');
console.log('%c🔗 Join: https://discord.gg/MGU3qsyBDB', 'color: #00ffd5;');
