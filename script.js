// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

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
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Typewriter effect for hero title
function typeWriter(element, text, speed = 80) {
    let i = 0;
    function typing() {
        if (i <= text.length) {
            element.textContent = text.substring(0, i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        const fullText = 'Java Full Stack Developer';
        heroTitle.textContent = '';
        setTimeout(() => typeWriter(heroTitle, fullText, 70), 700);
    }

    // Bounce effect on profile image hover
    const profileImg = document.querySelector('.profile-image');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.animation = 'bounce 0.5s';
        });
        profileImg.addEventListener('animationend', () => {
            profileImg.style.animation = '';
        });
    }
});

// Add bounce keyframes dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce {
  0%   { transform: scale(1) translateY(0); }
  30%  { transform: scale(1.08, 0.92) translateY(-8px); }
  50%  { transform: scale(0.95, 1.05) translateY(4px); }
  70%  { transform: scale(1.02, 0.98) translateY(-2px); }
  100% { transform: scale(1) translateY(0); }
}`;
document.head.appendChild(style); 