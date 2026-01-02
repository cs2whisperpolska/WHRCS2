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

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isNumber = !isNaN(target);
    
    function updateCounter() {
        if (start < target) {
            start += increment;
            if (isNumber) {
                element.textContent = Math.floor(start);
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (isNumber) {
                element.textContent = target;
            }
        }
    }
    
    updateCounter();
}

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            if (!isNaN(target)) {
                animateCounter(counter, target);
            }
            observer.unobserve(counter);
        }
    });
}, observerOptions);

// Observe all counter elements
document.querySelectorAll('.stat-number').forEach(counter => {
    observer.observe(counter);
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(7, 10, 17, 0.98)';
        navbar.style.borderBottomColor = 'rgba(255, 165, 0, 0.4)';
    } else {
        navbar.style.background = 'rgba(7, 10, 17, 0.95)';
        navbar.style.borderBottomColor = 'rgba(255, 165, 0, 0.2)';
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-main-btn, .cta-final-btn').forEach(button => {
    button.addEventListener('click', function(e) {
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

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Add floating animation to Discord preview
const discordPreview = document.querySelector('.discord-preview');
if (discordPreview) {
    let floatDirection = 1;
    let floatAmount = 0;
    
    function floatAnimation() {
        floatAmount += 0.5 * floatDirection;
        if (floatAmount > 10 || floatAmount < -10) {
            floatDirection *= -1;
        }
        discordPreview.style.transform = `translateY(${floatAmount}px)`;
        requestAnimationFrame(floatAnimation);
    }
    
    floatAnimation();
}

// Add click tracking for Discord invite
document.querySelectorAll('a[href*="discord.gg"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // You can add analytics tracking here
        console.log('Discord invite clicked from:', window.location.href);
    });
});

// Add hover effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
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

// Add parallax effect to background elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-particles');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add intersection observer for fade-in animations
const fadeElements = document.querySelectorAll('.feature-card, .stat-box, .about-content > *');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Add dynamic server status
function updateServerStatus() {
    const statusIndicator = document.querySelector('.status-indicator');
    const onlineUsers = document.querySelectorAll('.user-avatar');
    
    // Simulate random online count between 45-65
    const randomOnline = Math.floor(Math.random() * 20) + 45;
    const statNumber = document.querySelector('.stat-card:nth-child(2) .stat-number');
    if (statNumber) {
        statNumber.textContent = randomOnline + '+';
    }
    
    // Update user avatars
    onlineUsers.forEach((avatar, index) => {
        if (index < onlineUsers.length - 1) { // Skip the "+X" avatar
            const isOnline = Math.random() > 0.3;
            avatar.style.opacity = isOnline ? '1' : '0.5';
        }
    });
}

// Update status every 30 seconds
setInterval(updateServerStatus, 30000);

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(7, 10, 17, 0.98);
        padding: 2rem;
        gap: 1rem;
        border-top: 1px solid rgba(255, 165, 0, 0.2);
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initial server status update
    updateServerStatus();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add welcome message in console
    console.log('%c🎯 CS2 Arena - Witamy na naszej stronie!', 'color: #FFA500; font-size: 16px; font-weight: bold;');
    console.log('%c📊 Odwiedzający: ' + new Date().toLocaleString('pl-PL'), 'color: #4A90E2;');
});
