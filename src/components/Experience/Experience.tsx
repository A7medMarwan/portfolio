import { projectsData } from '../../data/portfolio.data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import type { Project } from '../../types';
import './Experience.css';

/**
 * Helper function to properly encode file paths
 * Encodes each path segment separately to handle spaces and special characters
 */
const encodeFilePath = (path: string): string => {
    return path
        .split('/')
        .map(segment => encodeURIComponent(segment))
        .join('/');
};

/**
 * Project card component
 */
interface ProjectCardProps extends Project {
    index: number;
}

const ProjectCard = ({
    title,
    description,
    technologies,
    highlights,
    demoUrl,
    githubUrl,
    pdfUrl,
    index
}: ProjectCardProps) => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const handleCardClick = () => {
        if (pdfUrl) {
            window.open(encodeFilePath(pdfUrl), '_blank');
        }
    };

    return (
        <div
            ref={elementRef}
            className={`project-card glass-card scroll-fade-up ${isVisible ? 'visible' : ''}`}
            style={{ 
                transitionDelay: `${index * 0.1}s`,
                cursor: pdfUrl ? 'pointer' : 'default'
            }}
            onClick={handleCardClick}
        >
            <div className="project-header">
                <h3 className="project-title">{title}</h3>
                {(demoUrl || githubUrl || pdfUrl) && (
                    <div className="project-links">
                        {pdfUrl && (
                            <a
                                href={encodeFilePath(pdfUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label={`View ${title} PDF`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                📄
                            </a>
                        )}
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label={`View ${title} demo`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                🔗
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label={`View ${title} on GitHub`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                💻
                            </a>
                        )}
                    </div>
                )}
            </div>

            <p className="project-description">{description}</p>

            <div className="project-technologies">
                {technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>

            <div className="project-highlights">
                {highlights.map((highlight) => (
                    <div key={highlight} className="highlight-item">
                        <span className="highlight-icon" aria-hidden="true">✓</span>
                        {highlight}
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * Experience section component displaying featured projects
 */
const Experience = () => {
    const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

    return (
        <section id="experience" className="section experience-section" aria-label="Featured projects">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`section-title scroll-fade-up ${titleVisible ? 'visible' : ''}`}
                >
                    Featured Projects
                </h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
