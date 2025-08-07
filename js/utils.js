// Utility functions and helpers
const PortfolioUtils = {
    // Animation utilities
    animation: {
        // Smooth scroll to element
        scrollTo(element, offset = 0, duration = 1000) {
            const targetPosition = element.offsetTop - offset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animateScroll(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animateScroll);
            }

            requestAnimationFrame(animateScroll.bind(this));
        },

        // Easing function
        easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },

        // Fade in animation
        fadeIn(element, duration = 300) {
            element.style.opacity = 0;
            element.style.display = 'block';
            
            const start = performance.now();
            
            function fade(timestamp) {
                const elapsed = timestamp - start;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    element.style.opacity = progress;
                    requestAnimationFrame(fade);
                } else {
                    element.style.opacity = 1;
                }
            }
            
            requestAnimationFrame(fade);
        },

        // Fade out animation
        fadeOut(element, duration = 300) {
            const start = performance.now();
            const startOpacity = parseFloat(getComputedStyle(element).opacity);
            
            function fade(timestamp) {
                const elapsed = timestamp - start;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    element.style.opacity = startOpacity * (1 - progress);
                    requestAnimationFrame(fade);
                } else {
                    element.style.opacity = 0;
                    element.style.display = 'none';
                }
            }
            
            requestAnimationFrame(fade);
        },

        // Slide down animation
        slideDown(element, duration = 300) {
            element.style.height = '0px';
            element.style.overflow = 'hidden';
            element.style.display = 'block';
            
            const targetHeight = element.scrollHeight;
            const start = performance.now();
            
            function slide(timestamp) {
                const elapsed = timestamp - start;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    element.style.height = (targetHeight * progress) + 'px';
                    requestAnimationFrame(slide);
                } else {
                    element.style.height = 'auto';
                    element.style.overflow = 'visible';
                }
            }
            
            requestAnimationFrame(slide);
        },

        // Slide up animation
        slideUp(element, duration = 300) {
            const startHeight = element.offsetHeight;
            const start = performance.now();
            
            element.style.overflow = 'hidden';
            
            function slide(timestamp) {
                const elapsed = timestamp - start;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    element.style.height = (startHeight * (1 - progress)) + 'px';
                    requestAnimationFrame(slide);
                } else {
                    element.style.display = 'none';
                    element.style.height = 'auto';
                    element.style.overflow = 'visible';
                }
            }
            
            requestAnimationFrame(slide);
        }
    },

    // DOM utilities
    dom: {
        // Create element with attributes
        createElement(tag, attributes = {}, textContent = '') {
            const element = document.createElement(tag);
            
            Object.keys(attributes).forEach(key => {
                if (key === 'className') {
                    element.className = attributes[key];
                } else if (key === 'innerHTML') {
                    element.innerHTML = attributes[key];
                } else {
                    element.setAttribute(key, attributes[key]);
                }
            });
            
            if (textContent) {
                element.textContent = textContent;
            }
            
            return element;
        },

        // Get all siblings of an element
        getSiblings(element) {
            return Array.from(element.parentNode.children).filter(child => child !== element);
        },

        // Check if element has class
        hasClass(element, className) {
            return element.classList.contains(className);
        },

                // Toggle class
        toggleClass(element, className) {
            element.classList.toggle(className);
        },

        // Get element's offset position
        getOffset(element) {
            const rect = element.getBoundingClientRect();
            return {
                top: rect.top + window.pageYOffset,
                left: rect.left + window.pageXOffset,
                width: rect.width,
                height: rect.height
            };
        },

        // Check if element is visible in viewport
        isVisible(element, threshold = 0) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            return (
                rect.top >= -threshold &&
                rect.top <= windowHeight + threshold
            );
        },

        // Get closest parent with specific selector
        closest(element, selector) {
            while (element && element !== document) {
                if (element.matches(selector)) {
                    return element;
                }
                element = element.parentElement;
            }
            return null;
        },

        // Insert element after another element
        insertAfter(newElement, referenceElement) {
            referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
        },

        // Wrap element with another element
        wrap(element, wrapper) {
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
        }
    },

    // String utilities
    string: {
        // Capitalize first letter
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        // Convert to kebab case
        kebabCase(str) {
            return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        },

        // Convert to camel case
        camelCase(str) {
            return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        },

        // Truncate string
        truncate(str, length, suffix = '...') {
            if (str.length <= length) return str;
            return str.substring(0, length) + suffix;
        },

        // Remove HTML tags
        stripHtml(str) {
            const div = document.createElement('div');
            div.innerHTML = str;
            return div.textContent || div.innerText || '';
        },

        // Escape HTML
        escapeHtml(str) {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        },

        // Generate slug from string
        slugify(str) {
            return str
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
    },

    // Array utilities
    array: {
        // Shuffle array
        shuffle(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        },

        // Get unique values
        unique(array) {
            return [...new Set(array)];
        },

        // Group array by property
        groupBy(array, key) {
            return array.reduce((groups, item) => {
                const group = item[key];
                groups[group] = groups[group] || [];
                groups[group].push(item);
                return groups;
            }, {});
        },

        // Sort array by property
        sortBy(array, key, direction = 'asc') {
            return array.sort((a, b) => {
                const aVal = a[key];
                const bVal = b[key];
                
                if (direction === 'asc') {
                    return aVal > bVal ? 1 : -1;
                } else {
                    return aVal < bVal ? 1 : -1;
                }
            });
        },

        // Chunk array into smaller arrays
        chunk(array, size) {
            const chunks = [];
            for (let i = 0; i < array.length; i += size) {
                chunks.push(array.slice(i, i + size));
            }
            return chunks;
        }
    },

    // Number utilities
    number: {
        // Format number with commas
        formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // Generate random number between min and max
        random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        // Clamp number between min and max
        clamp(num, min, max) {
            return Math.min(Math.max(num, min), max);
        },

        // Linear interpolation
        lerp(start, end, factor) {
            return start + (end - start) * factor;
        },

        // Map value from one range to another
        map(value, inMin, inMax, outMin, outMax) {
            return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        },

        // Round to specific decimal places
        round(num, decimals = 0) {
            return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
        }
    },

    // Date utilities
    date: {
        // Format date
        format(date, format = 'YYYY-MM-DD') {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            
            return format
                .replace('YYYY', year)
                .replace('MM', month)
                .replace('DD', day);
        },

        // Get relative time
        timeAgo(date) {
            const now = new Date();
            const diffInSeconds = Math.floor((now - new Date(date)) / 1000);
            
            const intervals = {
                year: 31536000,
                month: 2592000,
                week: 604800,
                day: 86400,
                hour: 3600,
                minute: 60
            };
            
            for (const [unit, seconds] of Object.entries(intervals)) {
                const interval = Math.floor(diffInSeconds / seconds);
                if (interval >= 1) {
                    return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
                }
            }
            
            return 'Just now';
        },

        // Add days to date
        addDays(date, days) {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        },

        // Check if date is today
        isToday(date) {
            const today = new Date();
            const checkDate = new Date(date);
            return checkDate.toDateString() === today.toDateString();
        }
    },

    // URL utilities
    url: {
        // Get URL parameters
        getParams() {
            const params = {};
            const searchParams = new URLSearchParams(window.location.search);
            for (const [key, value] of searchParams) {
                params[key] = value;
            }
            return params;
        },

        // Get specific URL parameter
        getParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        },

        // Update URL parameter
        updateParam(key, value) {
            const url = new URL(window.location);
            url.searchParams.set(key, value);
            window.history.pushState({}, '', url);
        },

        // Remove URL parameter
        removeParam(key) {
            const url = new URL(window.location);
            url.searchParams.delete(key);
            window.history.pushState({}, '', url);
        }
    },

    // Storage utilities
    storage: {
        // Set item with expiration
        setWithExpiry(key, value, ttl) {
            const now = new Date();
            const item = {
                value: value,
                expiry: now.getTime() + ttl
            };
            localStorage.setItem(key, JSON.stringify(item));
        },

        // Get item with expiration check
        getWithExpiry(key) {
            const itemStr = localStorage.getItem(key);
            if (!itemStr) return null;

            const item = JSON.parse(itemStr);
            const now = new Date();

            if (now.getTime() > item.expiry) {
                localStorage.removeItem(key);
                return null;
            }
            return item.value;
        },

        // Check if storage is available
        isAvailable(type = 'localStorage') {
            try {
                const storage = window[type];
                const test = '__storage_test__';
                storage.setItem(test, test);
                storage.removeItem(test);
                return true;
            } catch (e) {
                return false;
            }
        }
    },

    // Device utilities
    device: {
        // Check if mobile device
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },

        // Check if tablet
        isTablet() {
            return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
        },

        // Check if desktop
        isDesktop() {
            return !this.isMobile() && !this.isTablet();
        },

        // Get screen size category
        getScreenSize() {
            const width = window.innerWidth;
            if (width < 576) return 'xs';
            if (width < 768) return 'sm';
            if (width < 992) return 'md';
            if (width < 1200) return 'lg';
            return 'xl';
        },

        // Check if touch device
        isTouchDevice() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        },

        // Get browser info
        getBrowser() {
            const userAgent = navigator.userAgent;
            if (userAgent.includes('Chrome')) return 'Chrome';
            if (userAgent.includes('Firefox')) return 'Firefox';
            if (userAgent.includes('Safari')) return 'Safari';
            if (userAgent.includes('Edge')) return 'Edge';
            return 'Unknown';
        }
    },

    // Performance utilities
    performance: {
        // Debounce function
        debounce(func, wait, immediate) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    timeout = null;
                    if (!immediate) func(...args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func(...args);
            };
        },

        // Throttle function
        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Measure execution time
        measureTime(func, label = 'Function') {
            const start = performance.now();
            const result = func();
            const end = performance.now();
            console.log(`${label} took ${end - start} milliseconds`);
            return result;
        },

        // Request idle callback polyfill
        requestIdleCallback(callback, options = {}) {
            if (window.requestIdleCallback) {
                return window.requestIdleCallback(callback, options);
            }
            
            const timeout = options.timeout || 0;
            const startTime = performance.now();
            
            return setTimeout(() => {
                callback({
                    didTimeout: false,
                    timeRemaining() {
                        return Math.max(0, 50 - (performance.now() - startTime));
                    }
                });
            }, timeout);
        }
    },

    // Validation utilities
    validation: {
        // Email validation
        isEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        // URL validation
        isUrl(url) {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        },

        // Phone validation (basic)
        isPhone(phone) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
        },

        // Required field validation
        isRequired(value) {
            return value !== null && value !== undefined && value.toString().trim() !== '';
        },

        // Minimum length validation
        minLength(value, min) {
            return value && value.length >= min;
        },

        // Maximum length validation
        maxLength(value, max) {
            return !value || value.length <= max;
        },

        // Number validation
        isNumber(value) {
            return !isNaN(value) && !isNaN(parseFloat(value));
        },

        // Integer validation
        isInteger(value) {
            return Number.isInteger(Number(value));
        }
    },

    // Color utilities
    color: {
        // Convert hex to RGB
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },

        // Convert RGB to hex
        rgbToHex(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },

        // Generate random color
        random() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        },

        // Lighten color
        lighten(color, amount) {
            const rgb = this.hexToRgb(color);
            if (!rgb) return color;
            
            const r = Math.min(255, rgb.r + amount);
            const g = Math.min(255, rgb.g + amount);
            const b = Math.min(255, rgb.b + amount);
            
            return this.rgbToHex(r, g, b);
        },

        // Darken color
        darken(color, amount) {
            const rgb = this.hexToRgb(color);
            if (!rgb) return color;
            
            const r = Math.max(0, rgb.r - amount);
            const g = Math.max(0, rgb.g - amount);
            const b = Math.max(0, rgb.b - amount);
            
             return this.rgbToHex(r, g, b);
        }
    },

    // Cookie utilities
    cookie: {
        // Set cookie
        set(name, value, days = 7) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
        },

        // Get cookie
        get(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },

        // Delete cookie
        delete(name) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        },

        // Check if cookies are enabled
        isEnabled() {
            document.cookie = "testcookie=1";
            const cookieEnabled = document.cookie.indexOf("testcookie=") !== -1;
            document.cookie = "testcookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
            return cookieEnabled;
        }
    },

    // Image utilities
    image: {
        // Preload image
        preload(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        },

        // Preload multiple images
        preloadMultiple(sources) {
            return Promise.all(sources.map(src => this.preload(src)));
        },

        // Get image dimensions
        getDimensions(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve({ width: img.width, height: img.height });
                img.onerror = reject;
                img.src = src;
            });
        },

        // Convert image to base64
        toBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        },

        // Resize image
        resize(file, maxWidth, maxHeight, quality = 0.8) {
            return new Promise((resolve) => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();
                
                img.onload = () => {
                    const { width, height } = img;
                    const ratio = Math.min(maxWidth / width, maxHeight / height);
                    
                    canvas.width = width * ratio;
                    canvas.height = height * ratio;
                    
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    canvas.toBlob(resolve, 'image/jpeg', quality);
                };
                
                img.src = URL.createObjectURL(file);
            });
        }
    },

    // Form utilities
    form: {
        // Serialize form data
        serialize(form) {
            const formData = new FormData(form);
            const data = {};
            for (const [key, value] of formData.entries()) {
                if (data[key]) {
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            }
            return data;
        },

        // Validate form
        validate(form, rules) {
            const errors = {};
            const data = this.serialize(form);
            
            Object.keys(rules).forEach(field => {
                const value = data[field];
                const fieldRules = rules[field];
                
                fieldRules.forEach(rule => {
                    if (typeof rule === 'function') {
                        const result = rule(value);
                        if (result !== true) {
                            errors[field] = errors[field] || [];
                            errors[field].push(result);
                        }
                    }
                });
            });
            
            return {
                isValid: Object.keys(errors).length === 0,
                errors
            };
        },

        // Reset form with animation
        reset(form) {
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.classList.add('resetting');
                setTimeout(() => {
                    input.value = '';
                    input.classList.remove('resetting', 'error', 'success');
                }, 100);
            });
        }
    },

    // Loading utilities
    loading: {
        // Show loading overlay
        show(message = 'Loading...') {
            const existing = document.querySelector('.loading-overlay');
            if (existing) return;
            
            const overlay = PortfolioUtils.dom.createElement('div', {
                className: 'loading-overlay',
                innerHTML: `
                    <div class="loading-content">
                        <div class="loading-spinner"></div>
                        <p>${message}</p>
                    </div>
                `
            });
            
            document.body.appendChild(overlay);
            setTimeout(() => overlay.classList.add('show'), 10);
        },

        // Hide loading overlay
        hide() {
            const overlay = document.querySelector('.loading-overlay');
            if (overlay) {
                overlay.classList.remove('show');
                setTimeout(() => overlay.remove(), 300);
            }
        },

        // Show loading on element
        showOnElement(element, message = '') {
            const loader = PortfolioUtils.dom.createElement('div', {
                className: 'element-loader',
                innerHTML: `
                    <div class="loader-content">
                        <div class="loader-spinner"></div>
                        ${message ? `<span>${message}</span>` : ''}
                    </div>
                `
            });
            
            element.style.position = 'relative';
            element.appendChild(loader);
        },

        // Hide loading on element
        hideOnElement(element) {
            const loader = element.querySelector('.element-loader');
            if (loader) {
                loader.remove();
            }
        }
    },

    // Notification utilities
    notification: {
        // Show notification
        show(message, type = 'info', duration = 3000) {
            const notification = PortfolioUtils.dom.createElement('div', {
                className: `notification notification-${type}`,
                innerHTML: `
                    <div class="notification-content">
                        <i class="fas ${this.getIcon(type)}"></i>
                        <span>${message}</span>
                        <button class="notification-close">&times;</button>
                    </div>
                `
            });

            document.body.appendChild(notification);

            // Show animation
            setTimeout(() => notification.classList.add('show'), 100);

            // Close button
            const closeBtn = notification.querySelector('.notification-close');
            closeBtn.addEventListener('click', () => this.hide(notification));

            // Auto hide
            if (duration > 0) {
                setTimeout(() => this.hide(notification), duration);
            }

            return notification;
        },

        // Hide notification
        hide(notification) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        },

        // Get icon for notification type
        getIcon(type) {
            const icons = {
                success: 'fa-check-circle',
                error: 'fa-exclamation-circle',
                warning: 'fa-exclamation-triangle',
                info: 'fa-info-circle'
            };
            return icons[type] || icons.info;
        },

        // Show success notification
        success(message, duration) {
            return this.show(message, 'success', duration);
        },

        // Show error notification
        error(message, duration) {
            return this.show(message, 'error', duration);
        },

        // Show warning notification
        warning(message, duration) {
            return this.show(message, 'warning', duration);
        },

        // Show info notification
        info(message, duration) {
            return this.show(message, 'info', duration);
        }
    },

    // Analytics utilities
    analytics: {
        // Track event
        track(event, data = {}) {
            // Google Analytics 4
            if (typeof gtag !== 'undefined') {
                gtag('event', event, data);
            }
            
            // Custom analytics
            console.log('Analytics Event:', event, data);
        },

        // Track page view
        pageView(page) {
            this.track('page_view', { page_title: page });
        },

        // Track user interaction
        interaction(element, action) {
            this.track('user_interaction', {
                element_type: element.tagName.toLowerCase(),
                element_id: element.id,
                element_class: element.className,
                action: action
            });
        },

        // Track form submission
        formSubmission(formId, success = true) {
            this.track('form_submit', {
                form_id: formId,
                success: success
            });
        },

        // Track download
        download(filename, url) {
            this.track('file_download', {
                file_name: filename,
                file_url: url
            });
        }
    },

    // SEO utilities
    seo: {
        // Update page title
        setTitle(title) {
            document.title = title;
        },

        // Update meta description
        setDescription(description) {
            let meta = document.querySelector('meta[name="description"]');
            if (!meta) {
                meta = document.createElement('meta');
                meta.name = 'description';
                document.head.appendChild(meta);
            }
            meta.content = description;
        },

        // Update canonical URL
        setCanonical(url) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.rel = 'canonical';
                document.head.appendChild(link);
            }
            link.href = url;
        },

        // Update Open Graph tags
        setOpenGraph(data) {
            Object.keys(data).forEach(key => {
                let meta = document.querySelector(`meta[property="og:${key}"]`);
                if (!meta) {
                    meta = document.createElement('meta');
                    meta.property = `og:${key}`;
                    document.head.appendChild(meta);
                }
                meta.content = data[key];
            });
        },

        // Generate structured data
        addStructuredData(data) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(data);
            document.head.appendChild(script);
        }
    }
};

// Export utilities
window.PortfolioUtils = PortfolioUtils;

// Add utility CSS
const utilityStyles = `
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(5px);
    }

    .loading-overlay.show {
        opacity: 1;
    }

    .loading-content {
        text-align: center;
        color: white;
    }

    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }

    .element-loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    .loader-content {
        text-align: center;
        color: var(--text-primary);
    }

    .loader-spinner {
        width: 30px;
        height: 30px;
        border: 3px solid rgba(99, 102, 241, 0.3);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 0.5rem;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .resetting {
        animation: resetPulse 0.3s ease;
    }

    @keyframes resetPulse {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }

    .fade-in {
        animation: fadeIn 0.3s ease;
    }

    .fade-out {
        animation: fadeOut 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    .slide-down {
        animation: slideDown 0.3s ease;
    }

    .slide-up {
        animation: slideUp 0.3s ease;
    }

    @keyframes slideDown {
        from { transform: translateY(-100%); }
        to { transform: translateY(0); }
    }

    @keyframes slideUp {
        from { transform: translateY(0); }
        to { transform: translateY(-100%); }
    }
`;

// Inject utility styles
const utilityStyleSheet = document.createElement('style');
utilityStyleSheet.textContent = utilityStyles;
document.head.appendChild(utilityStyleSheet);
