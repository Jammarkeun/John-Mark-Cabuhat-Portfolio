// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .slide-in-bottom, .scale-in, .rotate-in');
    animatedElements.forEach(el => observer.observe(el));
});

// Typing animation for hero section
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = this.txt;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    const txtElement = document.querySelector('#typed-text');
    const words = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
    
    if (txtElement) {
        new TypeWriter(txtElement, words, 2000);
    }
});

// Animated counter for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => counterObserver.observe(counter));
});

// Skill bar animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills-content');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});

// Parallax effect for hero section
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Smooth reveal animation for project cards
function revealProjects() {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('fade-in-up');
        }, index * 200);
    });
}

// Particle system for background
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
        this.animate();
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        
        this.container.appendChild(particle);
        this.particles.push(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }

    animate() {
        setInterval(() => {
            if (this.particles.length < this.particleCount) {
                this.createParticle();
            }
        }, 300);
    }
}

// Initialize particle system
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        new ParticleSystem(heroSection);
    }
});

// Magnetic effect for buttons
function magneticEffect() {
    const magneticElements = document.querySelectorAll('.btn, .social-link, .project-link');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px)';
        });
    });
}

// Text reveal animation
function textRevealAnimation() {
    const textElements = document.querySelectorAll('.hero-title, .hero-subtitle, .section-title');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${index * 0.05}s`;
            span.classList.add('char-reveal');
            element.appendChild(span);
        });
    });
}

// Scroll-triggered animations
function handleScrollAnimations() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Navbar background opacity
    const navbar = document.querySelector('.glass-nav');
    if (navbar) {
        const opacity = Math.min(scrollY / 100, 1);
        navbar.style.background = `rgba(255, 255, 255, ${opacity * 0.1})`;
    }
    
    // Parallax for hero elements
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    
    // Scale effect for profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        const scale = 1 + (scrollY * 0.0005);
        profileImg.style.transform = `scale(${Math.min(scale, 1.2)})`;
    }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Loading animation
function showLoadingAnimation() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    
    document.body.appendChild(loadingOverlay);
    
    // Remove loading overlay after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                if (loadingOverlay.parentNode) {
                    loadingOverlay.parentNode.removeChild(loadingOverlay);
                }
            }, 500);
        }, 1000);
    });
}

// Cursor trail effect
class CursorTrail {
    constructor() {
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        // Create trail dots
        for (let i = 0; i < 20; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            dot.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--primary-color);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: ${1 - i * 0.05};
                transition: all 0.1s ease;
            `;
            document.body.appendChild(dot);
            this.dots.push(dot);
        }

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        this.animate();
    }

    animate() {
        let x = this.mouse.x;
        let y = this.mouse.y;

        this.dots.forEach((dot, index) => {
            const nextDot = this.dots[index + 1] || this.dots[0];
            
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';

            x += (nextDot.offsetLeft - x) * 0.3;
            y += (nextDot.offsetTop - y) * 0.3;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation
    showLoadingAnimation();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize magnetic effect
    magneticEffect();
    
    // Initialize cursor trail (only on desktop)
    if (window.innerWidth > 768) {
        new CursorTrail();
    }
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        parallaxEffect();
        handleScrollAnimations();
    });
    
    // Reveal projects when section is visible
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealProjects();
                projectsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
        projectsObserver.observe(projectsSection);
    }
});

// Resize handler
window.addEventListener('resize', () => {
    // Recalculate animations on resize
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach(el => {
        el.classList.remove('animated');
        observer.observe(el);
    });
});

// Export functions for use in other files
window.AnimationUtils = {
    animateCounter,
    TypeWriter,
    ParticleSystem,
    CursorTrail
};
