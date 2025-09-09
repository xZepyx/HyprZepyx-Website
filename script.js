// Tab Switching Functionality
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to selected tab button
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme data for screenshots using actual project images
const themes = {
    'spectral-horizon': {
        name: 'Spectral-Horizon',
        subtitle: '(quickshell)',
        description: 'Vibrant gradients with minimal widgets and clean workspace design',
        screenshots: [
            {
                title: 'Desktop Overview',
                description: 'Clean workspace with vibrant gradients and minimal widgets',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/spectral-horizon/desktop.png'
            },
            {
                title: 'App Launcher',
                description: 'Elegant launcher with search and app grid',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/spectral-horizon/launcher.png'
            },
            {
                title: 'Widgets Overview',
                description: 'System monitoring widgets and quickshell setup',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/spectral-horizon/widgets.png'
            },
            {
                title: 'Wallpaper Menu',
                description: 'Wallpaper switcher with preview functionality',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/spectral-horizon/wall.png'
            }
        ]
    },
    'kernel-fault': {
        name: 'Kernel-Fault',
        subtitle: '(ignis)',
        description: 'Dark theme with neon blue accents and advanced system widgets',
        screenshots: [
            {
                title: 'Widget Overview',
                description: 'Comprehensive widget system with system monitoring',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/kernel-fault/widgets.png'
            },
            {
                title: 'App Launcher',
                description: 'Ignis-powered launcher with grid layout',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/kernel-fault/launcher.png'
            },
            {
                title: 'Control Center',
                description: 'System control panel with quick toggles and settings',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/kernel-fault/cc.png'
            },
            {
                title: 'Terminal Layout',
                description: 'Kitty terminal with custom theme and layout',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/kernel-fault/kitty.png'
            }
        ]
    },
    'abyss': {
        name: 'Abyss',
        subtitle: '(eww)',
        description: 'Ultra-minimal dark theme with subtle accents and clean aesthetics',
        screenshots: [
            {
                title: 'Minimal Desktop',
                description: 'Ultra-clean desktop with minimal distractions',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Abyss/desktop.png'
            },
            {
                title: 'Code Editor',
                description: 'VSCode with Abyss theme integration',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Abyss/Code.png'
            },
            {
                title: 'Lock Screen',
                description: 'Elegant hyprlock screen with minimal design',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Abyss/hyprlock.png'
            },
            {
                title: 'Wallpaper Switcher',
                description: 'Rofi wallpaper manager with preview',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Abyss/rofi-wayland-wall.png'
            },
            {
                title: 'EWW Widgets',
                description: 'Minimal widget set with essential system info',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Abyss/eww-minimal.png'
            },
            {
                title: 'App Launcher',
                description: 'Clean rofi application launcher',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Abyss/rofi-op.png'
            }
        ]
    },
    'lumen': {
        name: 'Lumen',
        subtitle: '(glossy)',
        description: 'Light theme with glossy effects, transparency, and elegant design',
        screenshots: [
            {
                title: 'Glossy Desktop',
                description: 'Light theme with glassmorphism effects',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Lumen/desktop.png'
            },
            {
                title: 'Lock Screen',
                description: 'Hyprlock with light theme styling',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Lumen/hyprlock.png'
            },
            {
                title: 'App Launcher',
                description: 'Rofi launcher with glossy transparency',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Lumen/rofi-op.png'
            },
            {
                title: 'Terminal',
                description: 'Terminal with light theme and transparency',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Lumen/Terminal.png'
            },
            
            {
                title: 'Notifications',
                description: 'SwayNC notification center with light theme',
                image: 'https://raw.githubusercontent.com/xZepyx/HyprZepyx/main/.previews/Lumen/swaync.png'
            }
        ]
    }
};

// Theme switching functionality
function switchTheme(themeName) {
    // Update theme button states
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedButton = document.querySelector(`[data-theme="${themeName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // Update theme gallery
    const gallery = document.getElementById('theme-gallery');
    const themeData = themes[themeName];
    
    if (themeData && gallery) {
        gallery.innerHTML = `
            <div class="theme-info">
                <h3>${themeData.name} ${themeData.subtitle}</h3>
                <p>${themeData.description}</p>
            </div>
            <div class="screenshots-grid">
                ${themeData.screenshots.map(screenshot => `
                    <div class="screenshot-card">
                        <img src="${screenshot.image}" alt="${screenshot.title}" loading="lazy">
                        <h4>${screenshot.title}</h4>
                        <p>${screenshot.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Copy to clipboard functionality
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Show feedback (you could replace this with a toast notification)
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#10b981';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }
}

// Fetch GitHub stats
async function fetchGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/repos/xZepyx/HyprZepyx');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Update stats in hero section
        const starsElement = document.getElementById('stars-count');
        const forksElement = document.getElementById('forks-count');
        
        if (starsElement) {
            starsElement.textContent = data.stargazers_count || 43;
        }
        if (forksElement) {
            forksElement.textContent = data.forks_count || 1;
        }
        
        // Update stats in about section
        const aboutStarsElement = document.getElementById('about-stars');
        const aboutForksElement = document.getElementById('about-forks');
        
        if (aboutStarsElement) {
            aboutStarsElement.textContent = data.stargazers_count || 43;
        }
        if (aboutForksElement) {
            aboutForksElement.textContent = data.forks_count || 1;
        }
        
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Keep default values if API fails
    }
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-card, .docs-card, .about-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navTabs = document.querySelector('.nav-tabs');
    navTabs.classList.toggle('mobile-open');
}

// Keyboard navigation
function handleKeyboardNavigation(event) {
    // ESC key to close mobile menu
    if (event.key === 'Escape') {
        const navTabs = document.querySelector('.nav-tabs');
        navTabs.classList.remove('mobile-open');
    }
    
    // Arrow keys for tab navigation
    if (event.target.classList.contains('tab-btn')) {
        const tabs = Array.from(document.querySelectorAll('.tab-btn'));
        const currentIndex = tabs.indexOf(event.target);
        
        if (event.key === 'ArrowLeft' && currentIndex > 0) {
            tabs[currentIndex - 1].focus();
        } else if (event.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
            tabs[currentIndex + 1].focus();
        } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            event.target.click();
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up tab button event listeners
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // Set up theme button event listeners
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const themeName = button.getAttribute('data-theme');
            switchTheme(themeName);
        });
    });
    
    // Initialize default theme
    switchTheme('spectral-horizon');
    
    // Set up copy button event listeners
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
        });
    });
    
    // Fetch GitHub stats
    fetchGitHubStats();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Add smooth scrolling to navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Handle window resize for mobile responsiveness
    window.addEventListener('resize', () => {
        const navTabs = document.querySelector('.nav-tabs');
        if (window.innerWidth > 768) {
            navTabs.classList.remove('mobile-open');
        }
    });
    
    // Add loading state removal
    document.body.classList.add('loaded');
    
    // Refresh GitHub stats every 5 minutes
    setInterval(fetchGitHubStats, 5 * 60 * 1000);
});

// Add some CSS for mobile menu (inject into head)
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-tabs {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-top: none;
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .nav-tabs.mobile-open {
            max-height: 300px;
        }
        
        .mobile-menu-btn {
            display: block;
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 1.2rem;
            cursor: pointer;
        }
        
        @media (min-width: 769px) {
            .mobile-menu-btn {
                display: none;
            }
        }
    }
    
    .loaded .feature-card,
    .loaded .screenshot-card,
    .loaded .docs-card,
    .loaded .about-card {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);