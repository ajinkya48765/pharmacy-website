// ============ SMOOTH SCROLL NAVIGATION ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ============ ACTIVE NAV LINK ============
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '#1a1a1a';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#0066cc';
        }
    });
});

// ============ BUTTON HOVER EFFECTS ============
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============ LOGIN BUTTON CLICK ============
const loginBtn = document.querySelector('.login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        alert('Login functionality would be integrated here.');
        // In a real application, this would redirect to a login page or open a modal
    });
}

// ============ INTERSECTION OBSERVER FOR ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.about-paragraph, .contact-item, .slogan-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ============ CTA BUTTON RIPPLE EFFECT ============
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
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
}

// ============ EMAIL LINK ============
const emailLink = document.querySelector('.contact-value a');
if (emailLink) {
    emailLink.addEventListener('click', function(e) {
        // Allow default mailto behavior
        return true;
    });
}

// ============ SCROLL TO TOP ON PAGE LOAD ============
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// ============ PERFORMANCE OPTIMIZATION ============
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        // Optimization code here if needed
    }, 150);
}, { passive: true });

// ============ FORM-LIKE INTERACTIONS ============
document.addEventListener('DOMContentLoaded', function() {
    // Add light effects on interaction
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mousedown', function() {
            this.style.opacity = '0.85';
        });
        
        element.addEventListener('mouseup', function() {
            this.style.opacity = '1';
        });
    });
});

// ============ ACCESSIBILITY ENHANCEMENTS ============
// Detect if prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important';
        el.style.transition = 'none !important';
    });
}

// ============ DYNAMIC CONTENT LOADER ============
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sunrays Generic Pharmacy website loaded successfully!');
    
    // Log page interactions for analytics (optional)
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function() {
            if (this.href || this.textContent) {
                console.log('User interaction:', this.textContent || this.href);
            }
        });
    });
});
