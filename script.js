// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Testimonials data
let currentTestimonial = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Set up contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Set up theme toggle
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        // Update icon
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Initialize testimonials slider
    initTestimonials();

    // Set up smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Scroll to target section
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Image loading helper function
function preloadImages() {
    const imageUrls = [
        'images/c-programming.jpg',
        'images/cpp-programming.jpg',
        'images/python-programming.jpg',
        'images/data-science.jpg',
        'images/web-development.jpg',
        'images/data-science-python.jpg',
        'images/machine-learning.jpg',
        'images/full-stack.jpg',
        'images/java-programming.jpg',
        'images/dsa.jpg',
        'images/flutter.jpg',
        'images/cloud-computing.jpg',
        'images/data-analyst.jpg'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Preload images for better performance
    preloadImages();

    // ... rest of your existing initialization code
});

// Testimonials functions
function initTestimonials() {
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % 5;
        showTestimonial(currentTestimonial);
    }, 5000);
}

function showTestimonial(index) {
    const slider = document.getElementById('testimonialsSlider');
    const dots = document.querySelectorAll('.testimonial-dot');

    // Update slider position
    slider.style.transform = `translateX(-${index * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    currentTestimonial = index;
}

// FAQ toggle function
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isActive = answer.classList.contains('active');

    // Close all FAQ answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('active');
    });
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
    });

    // If the clicked FAQ wasn't active, open it
    if (!isActive) {
        answer.classList.add('active');
        element.classList.add('active');
    }
}