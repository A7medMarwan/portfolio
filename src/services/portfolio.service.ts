/**
 * Portfolio Data Service
 * Centralized service for managing portfolio data
 * In a real application, this could fetch data from an API
 */

import type { PersonalInfo, Project, SkillCategory, ContactInfo } from '../types';
import {
    personalInfo as staticPersonalInfo,
    skillsData as staticSkillsData,
    projectsData as staticProjectsData,
    contactInfo as staticContactInfo
} from '../data/portfolio.data';

class PortfolioService {
    /**
     * Get personal information
     */
    async getPersonalInfo(): Promise<PersonalInfo> {
        // In production, this could be: return await fetch('/api/personal-info').then(r => r.json());
        return Promise.resolve(staticPersonalInfo);
    }

    /**
     * Get all skills
     */
    async getSkills(): Promise<SkillCategory[]> {
        return Promise.resolve(staticSkillsData);
    }

    /**
     * Get all projects
     */
    async getProjects(): Promise<Project[]> {
        return Promise.resolve(staticProjectsData);
    }

    /**
     * Get contact information
     */
    async getContactInfo(): Promise<ContactInfo[]> {
        return Promise.resolve(staticContactInfo);
    }

    /**
     * Submit contact form
     */
    async submitContactForm(data: { name: string; email: string; message: string }): Promise<void> {
        // In production, this would send data to your backend
        // return await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
        console.log('Contact form submitted:', data);
        return Promise.resolve();
    }
}

export const portfolioService = new PortfolioService();
