// ===========================
// TYPING ANIMATION FOR ROLES
// ===========================
(function() {
    const roles = [
        "Data Scientist",
        "Data Analyst",
        "Data Engineer", 
        "Machine Learning Engineer",
        "Quality Assurance Engineer",
        "Business Analyst",
        "Product Analyst"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeRole() {
        const typingElement = document.getElementById('typingRole');
        
        if (!typingElement) {
            console.error('Typing element not found!');
            return;
        }
        
        const currentRole = roles[roleIndex];
        let typingSpeed = 100;
        
        if (isDeleting) {
            // Erasing
            typingElement.textContent = currentRole.substring(0, charIndex);
            charIndex--;
            typingSpeed = 50;
            
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500;
            }
        } else {
            // Typing
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
            
            if (charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 2000;
            }
        }
        
        setTimeout(typeRole, typingSpeed);
    }

    // Initialize typing animation
    function initTyping() {
        const typingElement = document.getElementById('typingRole');
        if (typingElement) {
            console.log('Typing animation initialized');
            setTimeout(typeRole, 1000);
        } else {
            console.error('Could not find typing element');
        }
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTyping);
    } else {
        initTyping();
    }
})();

// ===========================
// HERO BACKGROUND FADE ON SCROLL
// ===========================
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    const heroOverlay = document.querySelector('.hero-background-overlay');
    const aboutSection = document.querySelector('.about');
    
    if (heroSection && heroOverlay) {
        // Calculate fade amount (0 to 1)
        const fadeStart = 100;
        const fadeEnd = 600;
        let fadeAmount = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        fadeAmount = Math.max(0, Math.min(1, fadeAmount)); // Clamp between 0 and 1
        
        // Fade hero background to white
        heroOverlay.style.background = `linear-gradient(180deg, 
            rgba(15, 23, 42, ${1 - fadeAmount}) 0%, 
            rgba(248, 250, 252, ${fadeAmount}) 100%)`;
        
        // Adjust hero section background
        const darkAmount = 1 - fadeAmount;
        heroSection.style.background = `linear-gradient(135deg, 
            rgba(15, 23, 42, ${darkAmount}) 0%, 
            rgba(30, 41, 59, ${darkAmount * 0.9}) 50%, 
            rgba(51, 65, 85, ${darkAmount * 0.8}) 100%)`;
    }
});

// ===========================
// MOBILE NAVIGATION
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    // Hide navbar on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// SMOOTH SCROLLING
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
const animateElements = document.querySelectorAll(
    '.section-title, .project-card, .skill-category, .timeline-item, .stat-card, .contact-card'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===========================
// TYPING EFFECT FOR HERO
// ===========================
const heroSubtitle = document.querySelector('.hero-subtitle');
const roles = [
    'Data Scientist & Machine Learning Engineer',
    'Python & SQL Expert',
    'AWS Cloud Specialist',
    'Analytics & Visualization Expert'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        heroSubtitle.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        heroSubtitle.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeRole, typingSpeed);
}

// Start typing effect after page loads
window.addEventListener('load', () => {
    setTimeout(typeRole, 1000);
});

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-menu a[href*="${sectionId}"]`)?.classList.add('active-link');
        } else {
            document.querySelector(`.nav-menu a[href*="${sectionId}"]`)?.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===========================
// PROJECT CARD HOVER EFFECT
// ===========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// SKILL TAG HOVER EFFECT
// ===========================
const skillTags = document.querySelectorAll('.tag, .tag-small');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// COUNTER ANIMATION FOR STATS
// ===========================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-card h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ===========================
// SMOOTH SCROLL ON PAGE LOAD
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    // Subtle fade effect only
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.opacity = Math.max(1 - (scrolled / 800), 0.3);
    }
});

// ===========================
// COPY EMAIL ON CLICK
// ===========================
const emailCard = document.querySelector('.contact-card[href^="mailto"]');
if (emailCard) {
    emailCard.addEventListener('click', (e) => {
        e.preventDefault();
        const email = 'rakshithpatil3698@gmail.com';
        
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show feedback
            const originalText = emailCard.querySelector('p').textContent;
            emailCard.querySelector('p').textContent = 'Email copied!';
            emailCard.style.borderColor = '#10b981';
            
            setTimeout(() => {
                emailCard.querySelector('p').textContent = originalText;
                emailCard.style.borderColor = '';
            }, 2000);
        });
    });
}

// ===========================
// LOADING ANIMATION
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// GITHUB STATS INTEGRATION (OPTIONAL)
// ===========================
// Uncomment if you want to fetch real GitHub stats
/*
async function fetchGitHubStats() {
    try {
        const username = 'rakshithpatil'; // Replace with your GitHub username
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        
        // Update stats
        const reposCount = data.public_repos;
        // Update your stats cards with real data
        console.log(`GitHub Repos: ${reposCount}`);
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
    }
}

// Call on page load
fetchGitHubStats();
*/

// ===========================
// CUSTOM CURSOR (OPTIONAL)
// ===========================
// Uncomment for custom cursor effect
/*
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});
*/

// ===========================
// THEME TOGGLE (OPTIONAL)
// ===========================
// Uncomment to add light/dark mode toggle
/*
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
    icon.className = document.body.classList.contains('light-mode') 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
});
*/

console.log('🚀 Portfolio website loaded successfully!');
console.log('💼 Rakshith Patil - Data Scientist & ML Engineer');