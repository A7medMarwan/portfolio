import { contactInfo } from '../../data/portfolio.data';
import { useContactForm } from '../../hooks/useContactForm';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import type { ContactInfo as ContactInfoType } from '../../types';
import './Contact.css';

/**
 * Contact method card component
 */
const ContactMethodCard = ({ icon, label, value, link, index }: ContactInfoType & { index: number }) => {
    const { elementRef, isVisible } = useScrollAnimation<HTMLAnchorElement>({ threshold: 0.1 });

    return (
        <a
            ref={elementRef}
            href={link}
            className={`contact-method glass-card scroll-slide-left ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
            target={link?.startsWith('http') ? '_blank' : undefined}
            rel={link?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            <span className="contact-icon" aria-hidden="true">{icon}</span>
            <div className="contact-details">
                <div className="contact-label">{label}</div>
                <div className="contact-value">{value}</div>
            </div>
        </a>
    );
};

/**
 * Contact section component with form and contact information
 */
const Contact = () => {
    const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();
    const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
    const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation<HTMLFormElement>({ threshold: 0.1 });
    const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation<HTMLParagraphElement>();

    return (
        <section id="contact" className="section contact-section" aria-label="Contact information">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`section-title scroll-fade-up ${titleVisible ? 'visible' : ''}`}
                >
                    Get In Touch
                </h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <p
                            ref={introRef}
                            className={`contact-intro scroll-fade-up ${introVisible ? 'visible' : ''}`}
                        >
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="contact-methods">
                            {contactInfo.map((info, index) => (
                                <ContactMethodCard key={info.label} {...info} index={index} />
                            ))}
                        </div>
                    </div>

                    <form
                        ref={formRef}
                        className={`contact-form glass-card scroll-slide-right ${formVisible ? 'visible' : ''}`}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Your message..."
                                disabled={isSubmitting}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
