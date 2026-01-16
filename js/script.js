// ===========================
// Mobile Navigation Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-wrapper')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

// ===========================
// Sticky Navigation
// ===========================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===========================
// Animated Counter for Stats
// ===========================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===========================
// Project Filter Functionality
// ===========================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        // Filter projects
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                        card.classList.add('hidden');
                    }, 300);
                }
            }
        });
    });
});

// ===========================
// Project Modal
// ===========================
const projectData = [
    {
        category: 'Commercial',
        title: 'Metro Corporate Center',
        description: '15-story office building featuring modern design and sustainable technology',
        fullDescription: 'This state-of-the-art office building features cutting-edge sustainable technology, including solar panels, rainwater harvesting, and energy-efficient HVAC systems. The modern design incorporates large windows for natural light, open floor plans for flexible workspace configurations, and advanced building management systems.',
        year: '2023',
        location: 'Downtown',
        size: '250,000 sq ft',
        duration: '18 months',
        imageClass: 'commercial'
    },
    {
        category: 'Residential',
        title: 'Lakeside Luxury Homes',
        description: 'Exclusive waterfront community with 24 custom-designed residences',
        fullDescription: 'An exclusive gated community featuring 24 luxury homes with stunning waterfront views. Each residence is custom-designed with high-end finishes, smart home technology, and sustainable building materials. The community includes a private dock, clubhouse, and landscaped walking trails.',
        year: '2023',
        location: 'Riverside',
        size: '24 homes',
        duration: '24 months',
        imageClass: 'residential'
    },
    {
        category: 'Industrial',
        title: 'Tech Valley Distribution Hub',
        description: '250,000 sq ft state-of-the-art warehouse and logistics facility',
        fullDescription: 'A modern distribution center designed for maximum efficiency with automated sorting systems, climate-controlled storage zones, and advanced inventory management technology. Features include high-bay storage, multiple loading docks, and eco-friendly LED lighting throughout.',
        year: '2024',
        location: 'Industrial Park',
        size: '250,000 sq ft',
        duration: '14 months',
        imageClass: 'industrial'
    },
    {
        category: 'Commercial',
        title: 'Riverside Shopping Plaza',
        description: 'Mixed-use retail and entertainment complex with 80,000 sq ft',
        fullDescription: 'A vibrant mixed-use development combining retail stores, restaurants, entertainment venues, and office spaces. The plaza features modern architecture, ample parking, outdoor seating areas, and sustainable design elements including green roofs and permeable paving.',
        year: '2022',
        location: 'Eastside',
        size: '80,000 sq ft',
        duration: '16 months',
        imageClass: 'commercial'
    },
    {
        category: 'Residential',
        title: 'Skyline Apartments',
        description: '120-unit luxury apartment complex with premium amenities',
        fullDescription: 'Modern high-rise apartment building featuring studio to three-bedroom units with premium finishes. Amenities include a rooftop pool, fitness center, business lounge, and underground parking. Smart building features and energy-efficient systems throughout.',
        year: '2023',
        location: 'Midtown',
        size: '120 units',
        duration: '22 months',
        imageClass: 'residential'
    },
    {
        category: 'Renovation',
        title: 'Historic Bank Building Restoration',
        description: 'Complete renovation preserving 1920s architecture with modern functionality',
        fullDescription: 'Careful restoration of a historic 1920s bank building, preserving original architectural details while updating all systems and converting the space into modern office suites. The project required specialized restoration techniques and collaboration with historic preservation boards.',
        year: '2022',
        location: 'Old Town',
        size: '35,000 sq ft',
        duration: '12 months',
        imageClass: 'renovation'
    },
    {
        category: 'Industrial',
        title: 'Advanced Manufacturing Plant',
        description: 'High-tech production facility with clean room specifications',
        fullDescription: 'A specialized manufacturing facility designed for high-tech production with ISO-certified clean rooms, precision climate control, and advanced air filtration systems. Features include specialized electrical infrastructure, vibration-isolated floors, and sophisticated process control systems.',
        year: '2024',
        location: 'Tech Park',
        size: '180,000 sq ft',
        duration: '20 months',
        imageClass: 'industrial'
    },
    {
        category: 'Commercial',
        title: 'Community Medical Center',
        description: '45,000 sq ft healthcare facility with advanced medical technology',
        fullDescription: 'A comprehensive medical facility including examination rooms, diagnostic imaging, laboratory, pharmacy, and outpatient surgery center. Built to rigorous healthcare standards with backup power systems, medical gas infrastructure, and specialized HVAC for infection control.',
        year: '2023',
        location: 'Westside',
        size: '45,000 sq ft',
        duration: '15 months',
        imageClass: 'commercial'
    },
    {
        category: 'Residential',
        title: 'Mountain View Estate',
        description: 'Custom 8,500 sq ft luxury home with panoramic views',
        fullDescription: 'An architectural masterpiece featuring floor-to-ceiling windows, open-concept living spaces, gourmet kitchen, home theater, wine cellar, and infinity pool. Sustainable features include geothermal heating/cooling, solar panels, and rainwater collection system.',
        year: '2024',
        location: 'Hilltop',
        size: '8,500 sq ft',
        duration: '18 months',
        imageClass: 'residential'
    }
];

const modal = document.getElementById('projectModal');

function openModal(projectIndex) {
    const project = projectData[projectIndex];

    // Populate modal content
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalFullDescription').textContent = project.fullDescription;
    document.getElementById('modalYear').textContent = project.year;
    document.getElementById('modalLocation').textContent = project.location;
    document.getElementById('modalSize').textContent = project.size;
    document.getElementById('modalDuration').textContent = project.duration;

    // Set image
    const modalImage = document.getElementById('modalImage');
    modalImage.className = `placeholder-image ${project.imageClass}`;
    modalImage.innerHTML = `<i class="fas fa-${getIconClass(project.category)}"></i>`;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function getIconClass(category) {
    const icons = {
        'Commercial': 'building',
        'Residential': 'home',
        'Industrial': 'warehouse',
        'Renovation': 'tools'
    };
    return icons[category] || 'building';
}

// Close modal
const modalClose = document.querySelector('.modal-close');
if (modalClose) {
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
if (modal) {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===========================
// FAQ Accordion
// ===========================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function() {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.firstName || !data.lastName || !data.email || !data.projectType || !data.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Simulate API call
        setTimeout(() => {
            showFormMessage('Thank you for your message! We will get back to you within 24 hours.', 'success');
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';

            // Log form data (in production, this would be sent to a server)
            console.log('Form submitted:', data);
        }, 1500);
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            event.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateElements = document.querySelectorAll('.feature-card, .service-card, .project-card, .team-member, .process-step');
animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===========================
// Year Auto-Update in Footer
// ===========================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace(/© \d{4}/, `© ${currentYear}`);
}

// ===========================
// Loading Animation (Optional)
// ===========================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Console Welcome Message
// ===========================
console.log('%c🏗️ Summit Construction Website', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cWebsite by North Head Digital', 'color: #004E89; font-size: 14px;');
console.log('%cVisit: https://northheaddigital.com', 'color: #6C757D; font-size: 12px;');
