import type { PersonalInfo, Project, SkillCategory, ContactInfo } from '../types';

// Personal Information
export const personalInfo: PersonalInfo = {
    name: 'Abdelrahman Elgendy',
    title: 'Android Software Engineer',
    subtitle: 'Crafting exceptional mobile experiences with modern Android technologies',
    bio: [
        "I'm a passionate Android Software Engineer with expertise in building high-performance, scalable mobile applications. I specialize in creating elegant solutions that deliver seamless user experiences and solve complex technical challenges.",
        "With a strong foundation in Kotlin, Java, and modern Android development practices, I bring both technical excellence and creative problem-solving to every project. I'm committed to writing clean, maintainable code and staying current with the latest Android innovations."
    ],
    statistics: [
        { id: 'experience', number: '3+', label: 'Years Experience' },
        { id: 'projects', number: '20+', label: 'Apps Developed' },
        { id: 'satisfaction', number: '100%', label: 'Code Quality' }
    ],
    socialLinks: [
        { platform: 'GitHub', url: 'https://github.com/Abdelrahman-El-Gendy', icon: '💻' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abdulrahmanelgendy/', icon: '💼' },
        { platform: 'Twitter', url: 'https://twitter.com/abdelrahman_dev', icon: '🐦' }
    ]
};

// Skills Data
export const skillsData: SkillCategory[] = [
    {
        id: 'android',
        title: 'Android Development',
        icon: '📱',
        skills: ['Kotlin', 'Java', 'Jetpack Compose', 'XML Layouts', 'Material Design', 'MVVM']
    },
    {
        id: 'architecture',
        title: 'Architecture & Patterns',
        icon: '🏗️',
        skills: ['Clean Architecture', 'MVI', 'MVVM', 'Repository Pattern', 'Dependency Injection', 'Hilt/Dagger']
    },
    {
        id: 'libraries',
        title: 'Libraries & Frameworks',
        icon: '📚',
        skills: ['Retrofit', 'Room', 'Coroutines', 'Flow', 'LiveData', 'Navigation Component']
    },
    {
        id: 'backend',
        title: 'Backend & APIs',
        icon: '⚙️',
        skills: ['REST APIs', 'GraphQL', 'Firebase', 'Ktor', 'WebSocket', 'JSON/XML']
    },
    {
        id: 'tools',
        title: 'Tools & Testing',
        icon: '🛠️',
        skills: ['Android Studio', 'Git', 'JUnit', 'Espresso', 'Mockito', 'Gradle']
    },
    {
        id: 'soft-skills',
        title: 'Soft Skills',
        icon: '🤝',
        skills: ['Problem Solving', 'Team Collaboration', 'Code Review', 'Agile/Scrum', 'Mentoring']
    }
];

// Projects Data
export const projectsData: Project[] = [
    {
        id: 'ecommerce-app',
        title: 'E-Commerce Android App',
        description: 'Built a feature-rich e-commerce application with product catalog, shopping cart, payment integration, and order tracking using modern Android architecture.',
        technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit', 'Hilt'],
        highlights: ['50k+ downloads', 'Material Design 3', 'Offline-first architecture'],
        demoUrl: 'https://play.google.com/store/apps/details?id=com.example.shop',
        githubUrl: 'https://github.com/abdelrahmanelgendy/ecommerce-app'
    },
    {
        id: 'fitness-tracker',
        title: 'Fitness Tracking App',
        description: 'Developed a comprehensive fitness tracking application with workout logging, progress analytics, and social features using Jetpack Compose.',
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Coroutines', 'Flow'],
        highlights: ['Real-time sync', 'Custom charts', '4.7 star rating'],
        demoUrl: 'https://play.google.com/store/apps/details?id=com.example.fitness',
        githubUrl: 'https://github.com/abdelrahmanelgendy/fitness-tracker'
    },
    {
        id: 'news-reader',
        title: 'News Reader App',
        description: 'Created a modern news reading application with personalized feeds, offline reading, and beautiful UI using Material Design principles.',
        technologies: ['Kotlin', 'MVVM', 'Room', 'Retrofit', 'Glide'],
        highlights: ['Offline reading', 'Push notifications', 'Multi-language support'],
        githubUrl: 'https://github.com/abdelrahmanelgendy/news-reader'
    },
    {
        id: 'chat-app',
        title: 'Real-Time Chat Application',
        description: 'Built a real-time messaging application with end-to-end encryption, media sharing, and group chat functionality.',
        technologies: ['Kotlin', 'Firebase', 'WebSocket', 'CameraX', 'ExoPlayer'],
        highlights: ['E2E encryption', 'Voice messages', 'Video calls'],
        demoUrl: 'https://play.google.com/store/apps/details?id=com.example.chat',
        githubUrl: 'https://github.com/abdelrahmanelgendy/chat-app'
    }
];

// Contact Information
export const contactInfo: ContactInfo[] = [
    { icon: '📧', label: 'Email', value: 'abdelrahmanelgendy961@gmail.com', link: 'mailto:abdelrahmanelgendy961@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/abdulrahmanelgendy', link: 'https://www.linkedin.com/in/abdulrahmanelgendy/' },
    { icon: '💻', label: 'GitHub', value: 'github.com/Abdelrahman-El-Gendy', link: 'https://github.com/Abdelrahman-El-Gendy' }
];
