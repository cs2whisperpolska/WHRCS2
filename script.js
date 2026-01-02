// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
            observer.unobserve(counter);
        }
    });
}, observerOptions);

// Observe all counter elements
document.querySelectorAll('.stat-number').forEach(counter => {
    observer.observe(counter);
});

// Learn more button functionality
document.querySelector('.learn-more-btn').addEventListener('click', function() {
    document.querySelector('#features').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add parallax effect to floating card
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
        floatingCard.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add hover effect to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add subtle animation to Discord icon
const discordIcon = document.querySelector('.discord-icon i');
if (discordIcon) {
    discordIcon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    discordIcon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add click tracking for Discord invite links
document.querySelectorAll('a[href*="discord.gg"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // You can add analytics tracking here
        console.log('Discord invite clicked');
    });
});