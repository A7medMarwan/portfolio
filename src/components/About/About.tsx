import { personalInfo } from '../../data/portfolio.data';
import type { Statistic } from '../../types';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

/**
 * Statistic card component
 */
const StatCard = ({ number, label, index }: Statistic & { index: number }) => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <div
            ref={elementRef}
            className={`stat-item scroll-scale ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="stat-number gradient-text">{number}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

/**
 * About section component with bio and statistics
 */
const About = () => {
    const { bio, statistics } = personalInfo;
    const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="about" className="section about-section" aria-label="About me">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`section-title scroll-fade-up ${titleVisible ? 'visible' : ''}`}
                >
                    About Me
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <div ref={textRef}>
                            {bio.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`about-paragraph scroll-fade-up ${textVisible ? 'visible' : ''}`}
                                    style={{ transitionDelay: `${index * 0.2}s` }}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="about-stats">
                            {statistics.map((stat, index) => (
                                <StatCard key={stat.id} {...stat} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
