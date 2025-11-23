/**
 * Form validation utilities
 */

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate contact form data
 */
export const validateContactForm = (data: {
    name: string;
    email: string;
    message: string;
}): ValidationResult => {
    const errors: string[] = [];

    if (!data.name.trim()) {
        errors.push('Name is required');
    } else if (data.name.length < 2) {
        errors.push('Name must be at least 2 characters');
    }

    if (!data.email.trim()) {
        errors.push('Email is required');
    } else if (!isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }

    if (!data.message.trim()) {
        errors.push('Message is required');
    } else if (data.message.length < 10) {
        errors.push('Message must be at least 10 characters');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

/**
 * Sanitize user input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
};
