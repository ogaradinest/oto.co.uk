// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 100;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        closeMobileMenu();
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    mobileMenu.classList.add('active');
    hamburger.style.position = 'fixed';
    hamburger.style.top = '2rem';
    hamburger.style.right = '2rem';
    hamburger.style.zIndex = '2001';
    
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    mobileMenu.classList.remove('active');
    hamburger.style.position = '';
    hamburger.style.top = '';
    hamburger.style.right = '';
    hamburger.style.zIndex = '';
    
    // Reset hamburger
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Service accordion toggle
function toggleService(serviceId) {
    const serviceContent = document.getElementById('service-' + serviceId);
    const chevron = document.getElementById('chevron-' + serviceId);
    
    // Close all other services
    for (let i = 1; i <= 6; i++) {
        if (i !== serviceId) {
            const otherContent = document.getElementById('service-' + i);
            const otherChevron = document.getElementById('chevron-' + i);
            
            if (otherContent && otherContent.classList.contains('active')) {
                otherContent.classList.remove('active');
                if (otherChevron) {
                    otherChevron.style.transform = 'rotate(0deg)';
                }
            }
        }
    }
    
    // Toggle current service
    if (serviceContent) {
        if (serviceContent.classList.contains('active')) {
            serviceContent.classList.remove('active');
            if (chevron) {
                chevron.style.transform = 'rotate(0deg)';
            }
        } else {
            serviceContent.classList.add('active');
            if (chevron) {
                chevron.style.transform = 'rotate(180deg)';
            }
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            closeMobileMenu();
        }
    }
});

// Handle mobile menu navigation clicks
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for mobile nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-button');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Add hover effects to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add intersection observer for animations
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
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stat-card, .process-card, .service-card, .testimonial-card');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Smooth scroll for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set initial body opacity for loading animation
    document.body.style.opacity = '0';
    
    // Add smooth transitions to buttons
    const buttons = document.querySelectorAll('.btn-primary, .nav-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});