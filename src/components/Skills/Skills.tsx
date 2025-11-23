import { skillsData } from '../../data/portfolio.data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import type { SkillCategory } from '../../types';
import './Skills.css';

/**
 * Skill category card component
 */
interface SkillCategoryCardProps extends SkillCategory {
    index: number;
}

const SkillCategoryCard = ({ title, icon, skills, index }: SkillCategoryCardProps) => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={elementRef}
            className={`skill-category glass-card scroll-scale ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="category-header">
                <span className="category-icon" aria-hidden="true">{icon}</span>
                <h3 className="category-title">{title}</h3>
            </div>
            <ul className="skills-list">
                {skills.map((skill) => (
                    <li key={skill} className="skill-item">
                        <span className="skill-bullet" aria-hidden="true">▹</span>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

/**
 * Skills section component displaying categorized technical skills
 */
const Skills = () => {
    const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();

    return (
        <section id="skills" className="section skills-section" aria-label="Skills and technologies">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`section-title scroll-fade-up ${titleVisible ? 'visible' : ''}`}
                >
                    Skills & Technologies
                </h2>

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <SkillCategoryCard
                            key={category.id}
                            {...category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
