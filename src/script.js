
// Utility Functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Global Variables
let isScrolling = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    initializeNavigation();
    initializeHero();
    initializeScrollAnimations();
    initializeSkillBars();
    initializeStats();
    initializeContactForm();
    initializeFloatingElements();
    initializeHireMeScroll();
    initializeConnectModal();
    initializeConnectModal();
    initializeFeedbackForm();

    // Set active navigation based on current section
    updateActiveNavigation();

    console.log('Portfolio website initialized successfully!');
}

// Navigation Functions
function initializeNavigation() {
    const navbar = $('#navbar');
    const hamburger = $('#hamburger');
    const navMenu = $('#nav-menu');
    const navLinks = $$('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = $(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active navigation
        updateActiveNavigation();
    });
}

// Update Active Navigation
function updateActiveNavigation() {
    const sections = $$('section[id]');
    const navLinks = $$('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Hero Section Functions
function initializeHero() {
    const typedText = $('.typed-text');
    const cursor = $('.cursor');

    const textArray = [
        'Full Stack Developer',
        'Python Developer',
        'Problem Solver',
        'Frontend Architect',
        'HackerRank 3⭐ Python Coder',
        'Creative Thinker'
    ];

    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newTextDelay = 2000; // Pause after full text
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    function typeWriter() {
        const currentText = textArray[textArrayIndex];

        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 75;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start typing animation
    setTimeout(typeWriter, 1000);
}

// Hire Me section
function initializeHireMeScroll() {
    const hireButton = document.querySelector('.hire-button');
    if (hireButton) {
        hireButton.addEventListener('click', () => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}


// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe elements with data-aos attribute
    $$('[data-aos]').forEach(el => {
        observer.observe(el);
    });

    // Observe sections for general animations
    $$('section').forEach(section => {
        observer.observe(section);
    });
}

// Skill Bars Animation
function initializeSkillBars() {
    const skillBars = $$('.skill-progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');

                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 500);

                skillObserver.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Linked in hover button 
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("connectBtn");
    const modal = document.getElementById("connectModal");
    const close = modal?.querySelector(".close");

    if (btn && modal) {
        btn.addEventListener("click", () => {
            modal.style.display = "flex";
            setTimeout(() => {
                window.location.href = "https://www.linkedin.com/in/prakhar-gupta-59293b27b/";
            }, 2500);
        });

        close?.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});

// Animated Statistics
function initializeStats() {
    const stats = $$('.stat-number');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.getAttribute('data-target'));
                animateNumber(stat, 0, target, 2000);
                statsObserver.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

function animateNumber(element, start, end, duration) {
    let startTime = null;

    function animate(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (end === 100 ? '' : '');

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Contact Form
function initializeContactForm() {
    const form = $('#contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Add loading state
        submitBtn.classList.add('loading');

        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        try {
            // Simulate API call
            await simulateFormSubmission(data);

            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

            // Reset form
            form.reset();

        } catch (error) {
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
        }
    });
}

async function simulateFormSubmission(data) {
    console.log('Form submission data:', data);

    // Simulate API delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly succeed or fail for demo purposes
            if (Math.random() > 0.1) {
                resolve(data);
            } else {
                reject(new Error('Simulated error'));
            }
        }, 2000);
    });
}

// feedback 
function initializeFeedbackForm() {
    const form = document.getElementById("feedbackForm");
    const testimonialGrid = document.getElementById("testimonialGrid");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const text = document.getElementById("feedbackText").value;
        const name = document.getElementById("feedbackName").value;
        const title = document.getElementById("feedbackTitle").value;

        const card = document.createElement("div");
        card.className = "bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6";
        card.innerHTML = `
      <p class="text-gray-700 dark:text-gray-300 italic">“${text}”</p>
      <div class="mt-4 text-sm font-semibold text-gray-800 dark:text-white">— ${name}, ${title}</div>
    `;

        testimonialGrid.prepend(card);
        form.reset();
    });
}



// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = $('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? 'var(--secondary-color)' : 'var(--primary-color)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px'
    });

    // Add to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Floating Elements Animation
function initializeFloatingElements() {
    const floatingElements = $$('.floating-element');

    floatingElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 1;

        // Add random initial position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;

        element.style.left = randomX + '%';
        element.style.top = randomY + '%';

        // Add mouse interaction
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.2) rotate(15deg)';
            element.style.color = 'var(--accent-color)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1) rotate(0deg)';
            element.style.color = '';
        });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            requestAnimationFrame(() => {
                floatingElements.forEach(element => {
                    const speed = element.getAttribute('data-speed') || 1;
                    const yPos = -(window.scrollY * speed * 0.1);
                    element.style.transform += ` translateY(${yPos}px)`;
                });
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        const hamburger = $('#hamburger');
        const navMenu = $('#nav-menu');

        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    updateActiveNavigation();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        // Add any critical images here
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadResources();

// Error Handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You could send this to an error tracking service
});

// Console welcome message
console.log('%c Welcome to my Portfolio! ', 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 10px; border-radius: 5px; font-size: 16px; font-weight: bold;');
console.log('Feel free to explore the code and reach out if you have any questions!');


document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkToggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        toggle.innerText = "☀️";
    } else {
        toggle.innerText = "🌙";
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        toggle.innerText = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});

