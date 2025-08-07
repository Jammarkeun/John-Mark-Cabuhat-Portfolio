// Configuration file for portfolio website
const PortfolioConfig = {
    // Site information
    site: {
        title: 'Your Name - Portfolio',
        description: 'Full Stack Developer & UI/UX Designer',
        url: 'https://yourname.com',
        author: 'Your Name',
        email: 'your.email@example.com',
        phone: '+1 (555) 123-4567',
        location: 'City, Country'
    },

    // Social media links
    social: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        twitter: 'https://twitter.com/yourusername',
        instagram: 'https://instagram.com/yourusername',
        dribbble: 'https://dribbble.com/yourusername',
        behance: 'https://behance.net/yourusername'
    },

    // Navigation menu items
    navigation: [
        { name: 'Home', href: '#home', icon: 'fas fa-home' },
        { name: 'About', href: '#about', icon: 'fas fa-user' },
        { name: 'Skills', href: '#skills', icon: 'fas fa-code' },
        { name: 'Projects', href: '#projects', icon: 'fas fa-briefcase' },
        { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
    ],

    // Skills and technologies
    skills: {
        frontend: [
            { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: '#E34F26' },
            { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', color: '#1572B6' },
            { name: 'JavaScript', level: 88, icon: 'fab fa-js-square', color: '#F7DF1E' },
            { name: 'React', level: 85, icon: 'fab fa-react', color: '#61DAFB' },
            { name: 'Vue.js', level: 80, icon: 'fab fa-vuejs', color: '#4FC08D' },
            { name: 'Angular', level: 75, icon: 'fab fa-angular', color: '#DD0031' }
        ],
        backend: [
            { name: 'Node.js', level: 85, icon: 'fab fa-node-js', color: '#339933' },
            { name: 'Python', level: 80, icon: 'fab fa-python', color: '#3776AB' },
            { name: 'PHP', level: 75, icon: 'fab fa-php', color: '#777BB4' },
            { name: 'Java', level: 70, icon: 'fab fa-java', color: '#007396' },
            { name: 'C#', level: 65, icon: 'fas fa-code', color: '#239120' }
        ],
        database: [
            { name: 'MySQL', level: 85, icon: 'fas fa-database', color: '#4479A1' },
            { name: 'MongoDB', level: 80, icon: 'fas fa-leaf', color: '#47A248' },
            { name: 'PostgreSQL', level: 75, icon: 'fas fa-database', color: '#336791' },
            { name: 'Redis', level: 70, icon: 'fas fa-database', color: '#DC382D' }
        ],
        tools: [
            { name: 'Git', level: 90, icon: 'fab fa-git-alt', color: '#F05032' },
            { name: 'Docker', level: 80, icon: 'fab fa-docker', color: '#2496ED' },
            { name: 'AWS', level: 75, icon: 'fab fa-aws', color: '#232F3E' },
            { name: 'Figma', level: 85, icon: 'fab fa-figma', color: '#F24E1E' },
            { name: 'Photoshop', level: 80, icon: 'fas fa-paint-brush', color: '#31A8FF' }
        ]
    },

    // Projects data
    projects: [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
            image: 'images/project1.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
            category: 'web',
            featured: true,
            links: {
                live: 'https://example.com',
                github: 'https://github.com/yourusername/project1',
                demo: 'https://demo.example.com'
            },
            date: '2023-06-15',
            status: 'completed'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates',
            image: 'images/project2.jpg',
            technologies: ['Vue.js', 'Firebase', 'Vuetify', 'Socket.io'],
            category: 'web',
            featured: true,
            links: {
                live: 'https://example.com',
                github: 'https://github.com/yourusername/project2'
            },
            date: '2023-04-20',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Mobile Weather App',
            description: 'Cross-platform weather application with location-based forecasts',
            image: 'images/project3.jpg',
            technologies: ['React Native', 'Redux', 'OpenWeather API'],
            category: 'mobile',
            featured: false,
            links: {
                github: 'https://github.com/yourusername/project3',
                playstore: 'https://play.google.com/store/apps/details?id=com.example'
            },
            date: '2023-03-10',
            status: 'completed'
        },
        {
            id: 4,
            title: 'Portfolio Website',
            description: 'Modern responsive portfolio website with advanced animations',
            image: 'images/project4.jpg',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
            category: 'web',
            featured: false,
            links: {
                live: 'https://yourname.com',
                github: 'https://github.com/yourusername/portfolio'
            },
            date: '2023-02-05',
            status: 'completed'
        },
        {
            id: 5,
            title: 'AI Chatbot',
            description: 'Intelligent chatbot using natural language processing',
            image: 'images/project5.jpg',
            technologies: ['Python', 'TensorFlow', 'Flask', 'NLP'],
            category: 'ai',
            featured: true,
            links: {
                github: 'https://github.com/yourusername/project5',
                demo: 'https://demo.example.com'
            },
            date: '2023-01-15',
            status: 'in-progress'
        }
    ],

    // Animation settings
    animations: {
        duration: 1000,
        easing: 'ease-out',
        stagger: 100,
        threshold: 0.1,
        particles: {
            count: 50,
            speed: 1,
            size: 3,
            color: '#6366f1'
        },
        typing: {
            speed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        }
    },

    // Theme settings
    theme: {
        default: 'dark',
        colors: {
            light: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                background: '#ffffff',
                surface: '#f8fafc',
                text: '#1e293b',
                textSecondary: '#64748b'
            },
            dark: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                background: '#0f172a',
                surface: '#1e293b',
                text: '#f1f5f9',
                textSecondary: '#94a3b8'
            }
        }
    },

    // Contact form settings
    contact: {
        emailjs: {
            serviceId: 'your_service_id',
            templateId: 'your_template_id',
            publicKey: 'your_public_key'
        },
        formspree: {
            endpoint: 'https://formspree.io/f/your_form_id'
        },
        validation: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 50
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            },
            message: {
                required: true,
                minLength: 10,
                maxLength: 1000
            }
        }
    },

    // SEO settings
    seo: {
        keywords: [
            'web developer',
            'full stack developer',
            'javascript developer',
            'react developer',
            'node.js developer',
            'ui/ux designer',
            'portfolio'
        ],
        openGraph: {
            type: 'website',
            locale: 'en_US',
            siteName: 'Your Name - Portfolio'
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@yourusername'
        }
    },

    // Analytics settings
    analytics: {
        googleAnalytics: {
            trackingId: 'GA_TRACKING_ID'
        },
        hotjar: {
            hjid: 'HOTJAR_ID',
            hjsv: 6
        }
    },

    // Performance settings
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        caching: true,
        compression: true,
        preloading: [
            'css/style.css',
            'js/main.js',
            'images/hero-bg.jpg'
        ]
    },

    // API endpoints
    api: {
        contact: '/api/contact',
        newsletter: '/api/newsletter',
        analytics: '/api/analytics'
    },

    // Feature flags
    features: {
        darkMode: true,
        animations: true,
        particles: true,
        musicPlayer: false,
        blog: false,
        testimonials: true,
        newsletter: true,
        chatbot: false
    },

    // Testimonials data
    testimonials: [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO, Tech Company',
            company: 'TechCorp',
            image: 'images/testimonial1.jpg',
            text: 'Excellent work! The website exceeded our expectations and was delivered on time.',
            rating: 5,
            date: '2023-05-15'
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Marketing Director',
            company: 'Digital Agency',
            image: 'images/testimonial2.jpg',
            text: 'Professional, creative, and highly skilled. Would definitely work with again.',
            rating: 5,
            date: '2023-04-20'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            position: 'Startup Founder',
            company: 'StartupXYZ',
            image: 'images/testimonial3.jpg',
            text: 'Amazing attention to detail and great communication throughout the project.',
            rating: 5,
            date: '2023-03-10'
        }
    ],

    // Services offered
    services: [
        {
            id: 1,
            title: 'Web Development',
            description: 'Custom web applications using modern technologies',
            icon: 'fas fa-code',
            features: [
                'Responsive Design',
                'Performance Optimization',
                'SEO Friendly',
                'Cross-browser Compatibility'
            ],
            price: 'Starting at $2,000'
        },
        {
            id: 2,
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile applications',
            icon: 'fas fa-mobile-alt',
            features: [
                'iOS & Android',
                'React Native',
                'App Store Deployment',
                'Push Notifications'
            ],
            price: 'Starting at $3,000'
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'User-centered design solutions',
            icon: 'fas fa-paint-brush',
            features: [
                'User Research',
                'Wireframing',
                'Prototyping',
                'Design Systems'
            ],
            price: 'Starting at $1,500'
        },
        {
            id: 4,
            title: 'Consulting',
            description: 'Technical consulting and code reviews',
            icon: 'fas fa-lightbulb',
            features: [
                'Architecture Review',
                'Performance Audit',
                'Best Practices',
                'Team Training'
            ],
            price: '$150/hour'
        }
    ],

    // Blog posts (if blog feature is enabled)
    blog: [
        {
            id: 1,
            title: 'Modern JavaScript Best Practices',
            slug: 'modern-javascript-best-practices',
            excerpt: 'Learn the latest JavaScript best practices for 2023',
            content: 'Full blog post content here...',
            image: 'images/blog1.jpg',
            author: 'Your Name',
            date: '2023-06-01',
            tags: ['JavaScript', 'Best Practices', 'ES6+'],
            readTime: 5,
            published: true
        },
        {
            id: 2,
            title: 'Building Responsive Layouts with CSS Grid',
            slug: 'css-grid-responsive-layouts',
            excerpt: 'Master CSS Grid for creating responsive web layouts',
            content: 'Full blog post content here...',
            image: 'images/blog2.jpg',
            author: 'Your Name',
            date: '2023-05-15',
            tags: ['CSS', 'Grid', 'Responsive Design'],
            readTime: 7,
            published: true
        }
    ],

    // Certifications and achievements
    certifications: [
        {
            id: 1,
            title: 'AWS Certified Developer',
            issuer: 'Amazon Web Services',
            date: '2023-03-15',
            image: 'images/cert-aws.png',
            credentialId: 'AWS-123456',
            verifyUrl: 'https://aws.amazon.com/verification'
        },
        {
            id: 2,
            title: 'Google Cloud Professional',
            issuer: 'Google Cloud',
            date: '2023-02-20',
            image: 'images/cert-gcp.png',
            credentialId: 'GCP-789012',
            verifyUrl: 'https://cloud.google.com/certification'
        },
        {
            id: 3,
            title: 'React Developer Certification',
            issuer: 'Meta',
            date: '2023-01-10',
            image: 'images/cert-react.png',
            credentialId: 'META-345678',
            verifyUrl: 'https://developers.facebook.com/certification'
        }
    ],

    // Education background
    education: [
        {
            id: 1,
            degree: 'Bachelor of Computer Science',
            institution: 'University Name',
            location: 'City, Country',
            startDate: '2018-09-01',
            endDate: '2022-06-30',
            gpa: '3.8/4.0',
            achievements: [
                'Magna Cum Laude',
                'Dean\'s List',
                'Computer Science Society President'
            ]
        },
        {
            id: 2,
            degree: 'Full Stack Web Development',
            institution: 'Coding Bootcamp',
            location: 'Online',
            startDate: '2022-07-01',
            endDate: '2022-12-31',
            achievements: [
                'Top 5% of class',
                'Best Final Project Award'
            ]
        }
    ],

    // Work experience
    experience: [
        {
            id: 1,
            position: 'Senior Full Stack Developer',
            company: 'Tech Company Inc.',
            location: 'City, Country',
            startDate: '2023-01-01',
            endDate: null, // null means current position
            description: 'Lead development of web applications using React and Node.js',
            achievements: [
                'Improved application performance by 40%',
                'Led team of 5 developers',
                'Implemented CI/CD pipeline'
            ],
            technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
        },
        {
            id: 2,
            position: 'Frontend Developer',
            company: 'Digital Agency',
            location: 'City, Country',
            startDate: '2022-06-01',
            endDate: '2022-12-31',
            description: 'Developed responsive web applications for various clients',
            achievements: [
                'Delivered 15+ client projects',
                'Reduced load times by 30%',
                'Mentored junior developers'
            ],
            technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Webpack']
        }
    ],

    // Contact information details
    contactInfo: {
        address: {
            street: '123 Main Street',
            city: 'Your City',
            state: 'Your State',
            zip: '12345',
            country: 'Your Country'
        },
        availability: {
            timezone: 'UTC-5',
            workingHours: '9:00 AM - 6:00 PM',
            responseTime: '24 hours'
        },
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Spanish', level: 'Conversational' },
            { name: 'French', level: 'Basic' }
        ]
    },

    // Pricing packages
    packages: [
        {
            id: 1,
            name: 'Basic',
            price: 999,
            currency: 'USD',
            duration: 'one-time',
            features: [
                'Responsive Website',
                'Up to 5 Pages',
                'Contact Form',
                'Basic SEO',
                '30 Days Support'
            ],
            popular: false,
            cta: 'Get Started'
        },
        {
            id: 2,
            name: 'Professional',
            price: 1999,
            currency: 'USD',
            duration: 'one-time',
            features: [
                'Everything in Basic',
                'Up to 10 Pages',
                'CMS Integration',
                'Advanced SEO',
                'Analytics Setup',
                '90 Days Support'
            ],
            popular: true,
            cta: 'Most Popular'
        },
        {
            id: 3,
            name: 'Enterprise',
            price: 3999,
            currency: 'USD',
            duration: 'one-time',
            features: [
                'Everything in Professional',
                'Unlimited Pages',
                'E-commerce Integration',
                'Custom Features',
                'Performance Optimization',
                '1 Year Support'
            ],
            popular: false,
            cta: 'Contact Us'
        }
    ],

    // FAQ section
    faq: [
        {
            id: 1,
            question: 'What technologies do you specialize in?',
            answer: 'I specialize in modern web technologies including React, Vue.js, Node.js, Python, and various databases. I also have experience with cloud platforms like AWS and Google Cloud.'
        },
        {
            id: 2,
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I provide detailed timelines during the planning phase.'
        },
        {
            id: 3,
            question: 'Do you provide ongoing support?',
            answer: 'Yes, I offer various support packages including bug fixes, updates, and feature enhancements. Support terms are discussed and agreed upon before project completion.'
        },
        {
            id: 4,
            question: 'What is your development process?',
            answer: 'I follow an agile development process with regular client communication, milestone reviews, and iterative development. This ensures the final product meets your expectations.'
        },
        {
            id: 5,
            question: 'Do you work with international clients?',
            answer: 'Absolutely! I work with clients worldwide and am comfortable with remote collaboration using various communication tools and project management platforms.'
        }
    ],

    // Newsletter settings
    newsletter: {
        title: 'Stay Updated',
        description: 'Get the latest updates on web development trends and my new projects.',
        placeholder: 'Enter your email address',
        buttonText: 'Subscribe',
        successMessage: 'Thank you for subscribing!',
        errorMessage: 'Please enter a valid email address.',
        mailchimp: {
            endpoint: 'https://your-domain.us1.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_LIST_ID'
        }
    },

    // Error messages
    messages: {
        errors: {
            generic: 'Something went wrong. Please try again.',
            network: 'Network error. Please check your connection.',
            validation: 'Please check your input and try again.',
            fileSize: 'File size is too large. Maximum size is 5MB.',
            fileType: 'Invalid file type. Please upload images only.',
            required: 'This field is required.',
            email: 'Please enter a valid email address.',
            phone: 'Please enter a valid phone number.',
            url: 'Please enter a valid URL.'
        },
        success: {
            contact: 'Thank you for your message! I\'ll get back to you soon.',
            newsletter: 'Successfully subscribed to newsletter!',
            download: 'Download started successfully.',
            copy: 'Copied to clipboard!'
        },
        loading: {
            default: 'Loading...',
            sending: 'Sending message...',
            uploading: 'Uploading file...',
            processing: 'Processing...'
        }
    },

    // Keyboard shortcuts
    shortcuts: [
        { key: 'h', action: 'goToHome', description: 'Go to Home section' },
        { key: 'a', action: 'goToAbout', description: 'Go to About section' },
        { key: 's', action: 'goToSkills', description: 'Go to Skills section' },
        { key: 'p', action: 'goToProjects', description: 'Go to Projects section' },
        { key: 'c', action: 'goToContact', description: 'Go to Contact section' },
        { key: 't', action: 'toggleTheme', description: 'Toggle dark/light theme' },
        { key: 'Escape', action: 'closeModal', description: 'Close open modal' },
        { key: '/', action: 'focusSearch', description: 'Focus search input' }
    ],

    // Accessibility settings
    accessibility: {
        skipLinks: true,
        focusIndicators: true,
        screenReaderSupport: true,
        keyboardNavigation: true,
        highContrast: false,
        reducedMotion: false,
        fontSize: 'normal' // small, normal, large
    },

    // Development settings
    development: {
        debug: false,
        logging: true,
        mockData: false,
        apiDelay: 0,
        showPerformanceMetrics: false
    }
};

// Export configuration
window.PortfolioConfig = PortfolioConfig;

// Freeze configuration to prevent modifications
Object.freeze(PortfolioConfig);