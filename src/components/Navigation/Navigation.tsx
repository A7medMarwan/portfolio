import { scrollToSection } from '../../utils/navigation';
import './Navigation.css';

interface NavigationProps {
    activeSection: string;
    sections: string[];
}

/**
 * Navigation component with smooth scrolling and active section highlighting
 */
const Navigation = ({ activeSection, sections }: NavigationProps) => {
    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
    };

    const formatSectionName = (section: string): string => {
        return section.charAt(0).toUpperCase() + section.slice(1);
    };

    return (
        <nav className="navigation" role="navigation" aria-label="Main navigation">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="gradient-text">Portfolio</span>
                </div>

                <ul className="nav-menu">
                    {sections.map((section) => (
                        <li key={section}>
                            <button
                                onClick={() => handleNavClick(section)}
                                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                                aria-current={activeSection === section ? 'page' : undefined}
                            >
                                {formatSectionName(section)}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
