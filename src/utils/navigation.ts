/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

/**
 * Gets all navigation sections
 * @returns Array of section IDs
 */
export const getNavigationSections = (): string[] => {
    return ['home', 'about', 'skills', 'experience', 'contact'];
};
