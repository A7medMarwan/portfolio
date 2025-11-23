// Domain Types and Interfaces

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    demoUrl?: string;
    githubUrl?: string;
}

export interface SkillCategory {
    id: string;
    title: string;
    icon: string;
    skills: string[];
}

export interface ContactInfo {
    icon: string;
    label: string;
    value: string;
    link?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface Statistic {
    id: string;
    number: string;
    label: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    subtitle: string;
    bio: string[];
    statistics: Statistic[];
    socialLinks: SocialLink[];
}
