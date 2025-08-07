// contact.js - Final Version with Beautiful Success Notification
class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.submitBtn = this.form.querySelector('button[type="submit"]');
        this.btnText = this.submitBtn.querySelector('.btn-text');
        this.btnLoading = this.submitBtn.querySelector('.btn-loading');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.addInputValidation();
        this.addInputAnimations();
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (!this.validateForm()) {
            return;
        }
        this.showLoading(true);
        try {
            const formData = new FormData(this.form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            await this.sendEmail(data);
            this.showSuccess();
            this.form.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            this.showError('Failed to send message. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    async sendEmail(data) {
        try {
            const response = await emailjs.send('service_kurh8nq', 'template_cahfwdg', {
                from_name: data.name,
                from_email: data.email,
                reply_to: data.email,
                subject: data.subject,
                message: data.message
            });
            console.log('SUCCESS!', response.status, response.text);
        } catch (error) {
            console.error('FAILED...', error);
            throw new Error('Failed to send email via EmailJS');
        }
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input, textarea');
        let isValid = true;
        inputs.forEach(input => {
            if (!this.validateInput(input)) {
                isValid = false;
            }
        });
        return isValid;
    }

    validateInput(input) {
        const value = input.value.trim();
        const type = input.type;
        let isValid = true;
        let errorMessage = '';
        this.removeError(input);

        if (input.hasAttribute('required') && !value) {
            errorMessage = 'This field is required';
            isValid = false;
        } else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
        } else if (input.name === 'name' && value) {
            if (value.length < 2) {
                errorMessage = 'Name must be at least 2 characters';
                isValid = false;
            }
        } else if (input.name === 'message' && value) {
            if (value.length < 5) {
                errorMessage = 'Message must be at least 5 characters';
                isValid = false;
            }
        }

        if (!isValid) {
            this.showError(errorMessage, input);
        }
        return isValid;
    }

    showError(message, input = null) {
        if (input) {
            input.classList.add('error');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            input.parentNode.appendChild(errorDiv);
        } else {
            this.showNotification(message, 'error');
        }
    }

    removeError(input) {
        input.classList.remove('error');
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    // Success Message with Confetti!
    showSuccess() {
        // Launch confetti!
        this.launchConfetti();

        // Show notification
        this.showNotification('Your message has been sent! Thank you 🙌', 'success');
    }

    // Confetti Effect
    launchConfetti() {
        // Only load confetti once
        if (!window.confettiLoaded) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
            script.onload = () => {
                window.confettiLoaded = true;
                this.runConfetti();
            };
            document.head.appendChild(script);
        } else {
            this.runConfetti();
        }
    }

    runConfetti() {
        confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

    // Custom Notification
    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto close after 5 seconds
        const closeTimer = setTimeout(() => {
            this.removeNotification(notification);
        }, 5000);

        // Close on click
        notification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(closeTimer);
            this.removeNotification(notification);
        });
    }

    removeNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    showLoading(show) {
        if (show) {
            this.submitBtn.disabled = true;
            this.btnText.style.display = 'none';
            this.btnLoading.style.display = 'inline-flex';
        } else {
            this.submitBtn.disabled = false;
            this.btnText.style.display = 'inline';
            this.btnLoading.style.display = 'none';
        }
    }

    addInputValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateInput(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.removeError(input);
                }
            });
        });
    }

    addInputAnimations() {
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const wrapper = document.createElement('div');
            wrapper.className = 'input-wrapper';
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);

            input.addEventListener('focus', () => wrapper.classList.add('focused'));
            input.addEventListener('blur', () => {
                if (!input.value) wrapper.classList.remove('focused');
            });

            if (input.value) wrapper.classList.add('focused');
        });
    }
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        new ContactForm('contact-form');
    }
});