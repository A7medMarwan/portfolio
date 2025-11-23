import { personalInfo } from '../../data/portfolio.data';
import './Hero.css';

/**
 * Hero section component with animated introduction
 */
const Hero = () => {
    const { title, subtitle } = personalInfo;

    return (
        <section id="home" className="hero-section" aria-label="Introduction">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text animate-fade-in-up">
                        <p className="hero-greeting">Hi, I'm</p>
                        <h1 className="hero-title">
                            <span className="gradient-text">{title}</span>
                        </h1>
                        <p className="hero-subtitle">{subtitle}</p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn btn-primary">
                                Get In Touch
                            </a>
                            <a href="#experience" className="btn btn-secondary">
                                View My Work
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual" aria-hidden="true">
                        <div className="profile-image-container">
                            <div className="profile-image-wrapper">
                                <img
                                    src="/profile.png"
                                    alt="Profile"
                                    className="profile-image"
                                />
                            </div>
                        </div>
                        <div className="floating-card card-1">
                            <div className="card-icon">📱</div>
                            <div className="card-text">Android</div>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-icon">🎨</div>
                            <div className="card-text">Jetpack</div>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-icon">⚡</div>
                            <div className="card-text">Kotlin</div>
                        </div>
                        <div className="hero-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
