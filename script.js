// ============ FORM HANDLING ============
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });
    }
});

function handleFormSubmit() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate email
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Create email body
    const emailBody = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
    `;
    
    // In a real application, you would send this to a backend service or email service
    // For now, we'll show a success message and provide instructions
    console.log('Form Data:', { name, email, phone, subject, message });
    
    // Show success message
    showMessage('Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form
    form.reset();
    
    // Optionally redirect to mailto (uncomment if you want)
    // window.location.href = `mailto:info@yourpharmacy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    
    // Auto-hide after 5 seconds
    setTimeout(function() {
        formMessage.className = 'form-message';
    }, 5000);
}

// ============ SMOOTH SCROLLING ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============ ACTIVE NAV LINK ============
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            (currentLocation === '/' && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        }
    });
});

// ============ UTILITY FUNCTIONS ============

// Toggle mobile menu (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        if (scrollButton) scrollButton.style.display = 'block';
    } else {
        if (scrollButton) scrollButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
