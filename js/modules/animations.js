// Enhanced animations module for Developer Portfolio
export const initAnimations = () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add stagger animation for children
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .stat, .contact-method');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Add enhanced animation styles
    const animationStyles = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .animate-child {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .animate-child.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Project card hover effects */
        .project-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .project-card:hover .project-image {
            transform: scale(1.05);
        }
        
        .project-image {
            transition: transform 0.3s ease;
        }
        
        /* Button hover effects */
        .btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }
        
        .btn:hover::before {
            left: 100%;
        }
        
        /* Timeline animations */
        .timeline-item {
            transition: all 0.6s ease;
        }
        
        .timeline-item:hover .timeline-dot {
            transform: translateX(-50%) scale(1.2);
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }
        
        .timeline-dot {
            transition: all 0.3s ease;
        }
        
        /* Stats counter animation */
        .stat-number {
            transition: all 0.3s ease;
        }
        
        .stat:hover .stat-number {
            transform: scale(1.1);
            color: #667eea;
        }
        
        /* Contact form animations */
        .form-group {
            position: relative;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
        }
        
        /* Social links animation */
        .social-link {
            transition: all 0.3s ease;
        }
        
        .social-link:hover {
            transform: translateY(-3px) scale(1.1);
        }
        
        /* Code animation enhancements */
        .code-animation {
            position: relative;
            overflow: hidden;
        }
        
        .code-animation::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0,255,136,0.1), transparent);
            animation: codeScan 3s infinite;
        }
        
        @keyframes codeScan {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
        }
        
        /* Floating animation for hero elements */
        .hero-text {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        /* Pulse animation for CTA buttons */
        .btn-primary {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(240, 147, 251, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(240, 147, 251, 0); }
            100% { box-shadow: 0 0 0 0 rgba(240, 147, 251, 0); }
        }
        
        /* Skill item hover effects */
        .skill-item {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .skill-item:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
        }
        
        /* Navbar scroll effect */
        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Active nav link styles */
        .nav-link.active {
            color: #667eea;
            font-weight: 600;
        }
        
        .nav-link.active::after {
            width: 100%;
        }
    `;
    
    // Add styles to document
    const style = document.createElement('style');
    style.textContent = animationStyles;
    document.head.appendChild(style);
    
    // Add loading animation for hero section
    const addHeroAnimations = () => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const elements = heroContent.querySelectorAll('.hero-title, .hero-description, .hero-buttons');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                el.style.transitionDelay = `${index * 0.2}s`;
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 500 + (index * 200));
            });
        }
    };
    
    // Initialize hero animations
    addHeroAnimations();
    
    // Add scroll-triggered animations for sections
    const addSectionAnimations = () => {
        const sections = document.querySelectorAll('section');
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px 0px'
        });
        
        sections.forEach(section => {
            section.classList.add('section-animate');
            sectionObserver.observe(section);
        });
    };
    
    // Add section animation styles
    const sectionStyles = `
        .section-animate {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    
    const sectionStyle = document.createElement('style');
    sectionStyle.textContent = sectionStyles;
    document.head.appendChild(sectionStyle);
    
    // Initialize section animations
    addSectionAnimations();
    
    // Add parallax effect to background elements
    const addParallaxEffects = () => {
        const parallaxElements = document.querySelectorAll('.hero::before');
        const aboutImage = document.querySelector('.about-image');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
            
            // About image scroll effect for desktop only
            if (aboutImage && window.innerWidth > 768) {
                const aboutSection = document.querySelector('.about');
                if (aboutSection) {
                    const aboutTop = aboutSection.offsetTop;
                    const aboutHeight = aboutSection.offsetHeight;
                    const scrollProgress = (scrolled - aboutTop + window.innerHeight) / (aboutHeight + window.innerHeight);
                    
                    if (scrollProgress > 0 && scrollProgress < 1) {
                        aboutImage.style.transform = `translateY(${-40 + scrollProgress * 40}%)`;
                        aboutImage.style.opacity = scrollProgress;
                    } else if (scrollProgress >= 1) {
                        aboutImage.style.transform = 'translateY(0)';
                        aboutImage.style.opacity = 1;
                    } else {
                        aboutImage.style.transform = 'translateY(-40%)';
                        aboutImage.style.opacity = 0;
                    }
                }
            }
        });
    };
    
    // Initialize parallax effects
    addParallaxEffects();
    
    console.log('🎭 Enhanced animations module initialized');
}; 