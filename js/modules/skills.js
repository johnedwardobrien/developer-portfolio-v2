// Skills animation module
export const initSkillsAnimation = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (!skillItems.length) return;
    
    // Add hover animations and skill level indicators
    skillItems.forEach((item, index) => {
        // Add skill level data attributes
        const skillName = item.getAttribute('data-skill');
        const skillLevels = {
            'HTML5': 95,
            'CSS3': 90,
            'JavaScript': 85,
            'React': 80,
            'Node.js': 75,
            'Python': 70,
            'MongoDB': 75,
            'REST APIs': 85,
            'Git': 90,
            'Docker': 70,
            'AWS': 65,
            'Figma': 75
        };
        
        const skillLevel = skillLevels[skillName] || 80;
        item.setAttribute('data-level', skillLevel);
        
        // Add pulse animation on hover instead
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'var(--shadow-light)';
        });
        
        // Add stagger animation on scroll
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
        item.style.transitionDelay = `${index * 0.1}s`;
        
        // Intersection Observer for skill animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        observer.observe(item);
        
        // Add click effect
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add skill category animations
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
        category.style.transitionDelay = `${index * 0.2}s`;
        
        const categoryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        categoryObserver.observe(category);
    });
    
    // Add skill filter functionality (optional)
    const addSkillFilter = () => {
        const skillsSection = document.querySelector('.skills');
        if (!skillsSection) return;
        
        const filterContainer = document.createElement('div');
        filterContainer.className = 'skill-filters';
        filterContainer.innerHTML = `
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="frontend">Frontend</button>
                <button class="filter-btn" data-filter="backend">Backend</button>
                <button class="filter-btn" data-filter="tools">Tools</button>
            </div>
        `;
        
        skillsSection.querySelector('.container').insertBefore(
            filterContainer, 
            skillsSection.querySelector('.skills-grid')
        );
        
        // Add filter styles
        const filterStyle = document.createElement('style');
        filterStyle.textContent = `
            .skill-filters {
                text-align: center;
                margin-bottom: 3rem;
            }
            
            .filter-buttons {
                display: flex;
                justify-content: center;
                gap: 1rem;
                flex-wrap: wrap;
            }
            
            .filter-btn {
                padding: 0.5rem 1.5rem;
                border: 2px solid #667eea;
                background: transparent;
                color: #667eea;
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 600;
            }
            
            .filter-btn:hover,
            .filter-btn.active {
                background: #667eea;
                color: white;
            }
        `;
        
        document.head.appendChild(filterStyle);
        
        // Add filter functionality
        const filterButtons = filterContainer.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                skillItems.forEach(item => {
                    const category = item.closest('.skill-category').querySelector('h3').textContent.toLowerCase();
                    
                    if (filter === 'all' || category.includes(filter)) {
                        item.style.display = 'flex';
                        item.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    };
    
    // Uncomment to enable skill filtering
    // addSkillFilter();
    
    console.log('⚡ Skills animation module initialized');
}; 