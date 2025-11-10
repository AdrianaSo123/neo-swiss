// Neo-Swiss Website - Minimal JavaScript for UX Enhancement

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Smooth Scroll with offset for fixed nav
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navigation').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active Navigation State
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = document.querySelector('.navigation').offsetHeight;
    const scrollPosition = window.scrollY + navHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Update active nav on scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNav();
            ticking = false;
        });
        ticking = true;
    }
});

// Initial active state
updateActiveNav();

// Resize Challenge Interactive Feedback
const resizeChallenge = document.querySelector('.resize-challenge');
if (resizeChallenge) {
    let resizeTimeout;
    let lastWidth = window.innerWidth;
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        
        const currentWidth = window.innerWidth;
        if (Math.abs(currentWidth - lastWidth) > 50) {
            resizeChallenge.style.background = 'var(--color-primary-light)';
            resizeChallenge.style.borderColor = 'var(--color-primary)';
            
            resizeTimeout = setTimeout(() => {
                resizeChallenge.style.background = '';
                resizeChallenge.style.borderColor = '';
            }, 1000);
            
            lastWidth = currentWidth;
        }
    });
}

// Accessibility: Close mobile menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    }
});

// KINETIC EFFECTS - Cursor-following grid highlight
const hero = document.querySelector('.hero');
if (hero) {
    let mouseX = 0;
    let mouseY = 0;
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 100;
        mouseY = ((e.clientY - rect.top) / rect.height) * 100;
        
        hero.style.setProperty('--mouse-x', `${mouseX}%`);
        hero.style.setProperty('--mouse-y', `${mouseY}%`);
    });
}

// Parallax scroll effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
    
    // Subtle grid animation on scroll
    const scrollPercent = scrolled / (document.documentElement.scrollHeight - window.innerHeight);
    document.body.style.setProperty('--scroll-progress', scrollPercent);
});

// Reveal sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('reveal-on-scroll');
    sectionObserver.observe(section);
});

// Interactive principle cards - CSS handles hover, no JS needed
// Removed to avoid conflicts with CSS transitions

// GRID OVERLAY TOGGLE - Interactive Demo
const gridToggle = document.getElementById('gridToggle');
if (gridToggle) {
    // Create grid overlay element
    const gridOverlay = document.createElement('div');
    gridOverlay.className = 'grid-overlay';
    
    const gridInner = document.createElement('div');
    gridInner.className = 'grid-overlay-inner';
    
    // Create 12 columns
    for (let i = 0; i < 12; i++) {
        const column = document.createElement('div');
        column.className = 'grid-column';
        gridInner.appendChild(column);
    }
    
    gridOverlay.appendChild(gridInner);
    document.body.appendChild(gridOverlay);
    
    // Toggle functionality
    let isActive = false;
    gridToggle.addEventListener('click', () => {
        isActive = !isActive;
        gridOverlay.classList.toggle('active');
        
        if (isActive) {
            gridToggle.querySelector('.button-text').textContent = 'Hide Grid Overlay';
            gridToggle.style.background = 'var(--color-primary)';
        } else {
            gridToggle.querySelector('.button-text').textContent = 'Show Grid Overlay';
            gridToggle.style.background = 'var(--color-black)';
        }
    });
}

// INTERACTIVE GRID TRANSFORMER - Live 12→6→4 Demo
const viewportSlider = document.getElementById('viewportSlider');
const viewportContainer = document.getElementById('viewportContainer');
const responsiveGrid = document.getElementById('responsiveGrid');
const deviceName = document.querySelector('.device-name');
const viewportWidth = document.querySelector('.viewport-width');

if (viewportSlider && viewportContainer && responsiveGrid) {
    viewportSlider.addEventListener('input', (e) => {
        const width = parseInt(e.target.value);
        
        // Update viewport container width
        viewportContainer.style.maxWidth = `${width}px`;
        
        // Update labels
        viewportWidth.textContent = `${width}px`;
        
        // Determine device type and grid columns
        let columns, device;
        if (width <= 480) {
            columns = 4;
            device = 'Mobile';
        } else if (width <= 768) {
            columns = 6;
            device = 'Tablet';
        } else {
            columns = 12;
            device = 'Desktop';
        }
        
        deviceName.textContent = device;
        
        // Update grid
        responsiveGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        
        // Show only the active columns
        const gridColumns = responsiveGrid.querySelectorAll('.grid-column');
        gridColumns.forEach((col, index) => {
            if (index < columns) {
                col.style.display = 'block';
            } else {
                col.style.display = 'none';
            }
        });
    });
    
    // Trigger initial state
    viewportSlider.dispatchEvent(new Event('input'));
}
