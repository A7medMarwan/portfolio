import { useState, type FormEvent, type ChangeEvent } from 'react';
import type { ContactFormData } from '../types';

interface UseContactFormReturn {
    formData: ContactFormData;
    isSubmitting: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: FormEvent) => Promise<void>;
}

/**
 * Custom hook to manage contact form state and submission
 * @returns Form data, submission state, and handler functions
 */
export const useContactForm = (): UseContactFormReturn => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // TODO: Integrate with backend API or email service
            // Example: await sendContactForm(formData);

            console.log('Form submitted:', formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            alert('Thank you for your message! I will get back to you soon.');

            // Reset form
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        isSubmitting,
        handleChange,
        handleSubmit
    };
};
