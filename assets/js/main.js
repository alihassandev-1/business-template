// <<<<<<<<---------Mobile Menu Handling-------->>>>>>>>>>>
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.classList.toggle('bg-white/10');
});

// <<<<<<<<<<<--------Close mobile menu on click-------->>>>>>>>>>
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.classList.remove('bg-white/10');
    }
});

// <<<<<<<<---------Scroll Reveal Configuration-------->>>>>>>
ScrollReveal().reveal('.feature-card', {
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    interval: 100,
    reset: true
});

ScrollReveal().reveal('.pricing-card', {
    delay: 300,
    rotate: { x: 0, y: 20, z: 0 },
    opacity: 0,
    interval: 100,
    reset: true
});

// <<<<<<<<-----------Form Validation----------->>>>>>>>>>>>
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    let isValid = true;
    form.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-red-500');
        } else {
            input.classList.remove('border-red-500');
        }
    });

    if (isValid) {
        console.log('Form submitted:', Object.fromEntries(formData));
        form.reset();
        alert('Thank you for your message! We will respond shortly.');
    }
});

// <<<<<<<<<<<<<<---------Smooth Scroll--------->>>>>>>>>>>>>>>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// <<<<<<<<<<<<<<--------Sticky Navigation-------->>>>>>>>>>>>
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('bg-gray-900/95');
    } else {
        nav.classList.remove('bg-gray-900/95');
    }
});

// <<<<<<<<<<<<<<<<<<<<<<<<------------------------>>>>>>>>>>>>>>>>>>>>


ScrollReveal().reveal('.scroll-animate', {
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    interval: 100,
    reset: true
});

ScrollReveal().reveal('.card-animate', {
    delay: 300,
    rotate: { x: 0, y: 20, z: 0 },
    opacity: 0,
    interval: 100,
    reset: true
});

ScrollReveal().reveal('.stagger-animate', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

ScrollReveal().reveal('.hero-animate', {
    delay: 500,
    distance: '40px',
    origin: 'bottom',
    duration: 1000
});