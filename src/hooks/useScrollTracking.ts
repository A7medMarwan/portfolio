import { useState, useEffect } from 'react';

/**
 * Custom hook to track the currently active section based on scroll position
 * @param sections - Array of section IDs to track
 * @param offset - Offset from top in pixels (default: 100)
 * @returns The ID of the currently active section
 */
export const useScrollTracking = (sections: string[], offset: number = 100): string => {
    const [activeSection, setActiveSection] = useState<string>(sections[0] || '');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, offset]);

    return activeSection;
};
