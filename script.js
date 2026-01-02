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
        this.style.transform = 'translateY(-15px) scale(1.02)';
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

// Add crosshair mouse follower
document.addEventListener('mousemove', function(e) {
    const crosshair = document.querySelector('.crosshair-pattern');
    if (crosshair) {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        crosshair.style.backgroundPosition = `${x}% ${y}%`;
    }
});

// Add shooting star effect
function createShootingStar() {
    const star = document.createElement('div');
    star.style.position = 'fixed';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.background = '#FFD700';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = '-10px';
    star.style.boxShadow = '0 0 10px #FFD700';
    star.style.zIndex = '9999';
    star.style.transition = 'all 2s linear';
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.style.left = '110vw';
        star.style.top = (parseInt(star.style.top) + 50) + 'vh';
    }, 100);
    
    setTimeout(() => {
        star.remove();
    }, 2100);
}

// Create shooting stars periodically
setInterval(createShootingStar, 5000);

// Add click effect on CTA buttons
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
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
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

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
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add rank tier hover effects
document.querySelectorAll('.rank-tier').forEach(tier => {
    tier.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
        this.style.boxShadow = '0 20px 40px rgba(255, 165, 0, 0.3)';
    });
    
    tier.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Add navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 30, 0.98)';
        navbar.style.borderBottomColor = '#FFD700';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
        navbar.style.borderBottomColor = '#FFA500';
    }
});

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
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

// Apply typing effect on page load
window.addEventListener('load', function() {
    const title = document.querySelector('.hero-title');
    if (title) {
        const originalText = title.innerHTML;
        typeWriter(title, originalText, 50);
    }
});
