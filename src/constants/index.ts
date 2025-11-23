// Application Constants

export const APP_CONFIG = {
    name: 'Portfolio',
    version: '1.0.0',
    author: 'Software Engineer'
} as const;

export const NAVIGATION_SECTIONS = ['home', 'about', 'skills', 'experience', 'contact'] as const;

export const ANIMATION_DELAYS = {
    fast: 0.1,
    medium: 0.15,
    slow: 0.2
} as const;

export const CONTACT_FORM_CONFIG = {
    maxNameLength: 100,
    maxEmailLength: 100,
    maxMessageLength: 1000,
    minMessageLength: 10
} as const;
