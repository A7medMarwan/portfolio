import type { PersonalInfo, Project, SkillCategory, ContactInfo } from '../types';

// Personal Information
export const personalInfo: PersonalInfo = {
    name: 'Ahmed Ata',
    title: 'Mechanical Power Engineer',
    subtitle: 'Specializing in MEP Systems Design, BIM Modeling, and Project Management',
    bio: [
        "A highly motivated Mechanical Power Engineer, Class of 2024, graduating with Very Good with Honors. Equipped with strong academic and practical knowledge in mechanical systems design, plumbing works, and construction-related engineering.",
        "Seeking an engineering position where I can apply BIM methodologies, project management principles, and professional skills gained from international training programs. Aspiring to join a dynamic engineering team where I can contribute effectively, grow professionally, and become a valuable asset in the mechanical engineering field."
    ],
    statistics: [
        { id: 'education', number: '2024', label: 'Graduation Year' },
        { id: 'certifications', number: '5+', label: 'Certifications' },
        { id: 'internships', number: '3+', label: 'Training Programs' }
    ],
    socialLinks: [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed-ata-cr7/', icon: '💼' }
    ]
};

// Skills Data
export const skillsData: SkillCategory[] = [
    {
        id: 'bim-software',
        title: 'BIM Software',
        icon: '🏗️',
        skills: ['REVIT', 'BIM 360', 'REVIT work-sharing', 'Navisworks', 'Dynamo']
    },
    {
        id: 'design-tools',
        title: 'Design & Modeling Tools',
        icon: '📐',
        skills: ['AUTOCAD', 'Enscape', 'Elite', 'Duct Sizer', 'Pipe sizer']
    },
    {
        id: 'engineering-software',
        title: 'Engineering Software',
        icon: '⚙️',
        skills: ['HAP', 'ASHRAE Fitting database']
    },
    {
        id: 'mep-systems',
        title: 'MEP Systems',
        icon: '🔧',
        skills: ['HVAC', 'Firefighting', 'Plumbing', 'Medical Gases Systems']
    },
    {
        id: 'standards',
        title: 'Codes & Standards',
        icon: '📋',
        skills: ['ASHRAE', 'NFPA', 'IPC', 'SMACNA', 'HTM']
    },
    {
        id: 'soft-skills',
        title: 'Professional Skills',
        icon: '🤝',
        skills: ['Project Management', 'Communication', 'Time Management', 'Problem-solving', 'Leadership', 'Teamwork']
    }
];

// Projects Data
export const projectsData: Project[] = [
    {
        id: 'hvac-system-tanta',
        title: 'HVAC System - Tanta',
        description: 'Complete HVAC system design for a 3-floor building located in Tanta with a total area of 1500 m². Comprehensive heating, ventilation, and air conditioning system design following industry standards.',
        technologies: ['REVIT', 'HAP', 'Duct Sizer', 'Pipe Sizer', 'Excel (ESP, BOQ)'],
        highlights: ['1500 m² area', '3-floor building', 'Complete HVAC design', 'BOQ calculations'],
        pdfUrl: '/projects/hvac_system_tanta/HVAC system.pdf'
    },
    {
        id: 'hvac-system-cairo-1',
        title: 'HVAC System - Cairo',
        description: 'Comprehensive HVAC system design for a 3-floor commercial building located in Cairo with a total area of 3000 m². Full system design including load calculations, ductwork, and piping design.',
        technologies: ['REVIT', 'HAP', 'Duct Sizer', 'Pipe Sizer', 'Excel (ESP, BOQ)'],
        highlights: ['3000 m² area', '3-floor building', 'Commercial HVAC design', 'Complete system documentation'],
        pdfUrl: '/projects/hvac_system_cairo1/HVAC System cairo.pdf'
    },
    {
        id: 'hvac-system-cairo-2',
        title: 'HVAC System - Cairo',
        description: 'HVAC system design for a single-floor building located in Cairo with a total area of 2150 m². Complete heating, ventilation, and air conditioning system design with detailed calculations.',
        technologies: ['AUTOCAD', 'HAP', 'Duct Sizer', 'Pipe Sizer', 'Excel (ESP, BOQ)'],
        highlights: ['2150 m² area', 'Single-floor design', 'HVAC system design', 'Detailed calculations'],
        pdfUrl: '/projects/hvac_system_cairo2/hvac system cairo 2.pdf'
    },
    {
        id: 'domestic-water-drainage',
        title: 'Domestic Water & Drainage System',
        description: 'Complete domestic water supply and drainage system design for a single-floor building in Cairo with a total area of 2150 m². Comprehensive plumbing system including water distribution and wastewater management.',
        technologies: ['AUTOCAD', 'Pipe Sizer', 'Excel (ESP, BOQ)'],
        highlights: ['2150 m² area', 'Water supply system', 'Drainage system design', 'BOQ documentation'],
        pdfUrl: '/projects/domestic_water&drainage/DOMESTIC water & Drainage.pdf'
    },
    {
        id: 'medical-gas-system',
        title: 'Medical Gas System',
        description: 'Medical gas system design for a healthcare facility in Cairo with a total area of 2150 m². Complete medical gas distribution system including oxygen, medical air, and vacuum systems following HTM standards.',
        technologies: ['AUTOCAD', 'Pipe Sizer', 'Excel (ESP, BOQ)'],
        highlights: ['2150 m² area', 'Medical gas distribution', 'HTM compliant', 'Healthcare facility design'],
        pdfUrl: '/projects/medical_gas_system/medical gas system.pdf'
    },
    {
        id: 'sprinkler-hose-cabinet',
        title: 'Sprinkler & Hose Cabinet System',
        description: 'Fire protection system design including automatic sprinkler system and hose cabinet system for a building in Cairo with a total area of 2150 m². Complete firefighting system following NFPA standards.',
        technologies: ['AUTOCAD', 'Pipe Sizer', 'Excel (ESP, BOQ)'],
        highlights: ['2150 m² area', 'Sprinkler system', 'Hose cabinet system', 'NFPA compliant'],
        pdfUrl: '/projects/sprinkler_hose_cabinet_system/sprinkler & hose cabinet system.pdf'
    }
];

// Contact Information
export const contactInfo: ContactInfo[] = [
    { icon: '📧', label: 'Email', value: 'ataahmed937@gmail.com', link: 'mailto:ataahmed937@gmail.com' },
    { icon: '📱', label: 'Phone', value: '01008881304', link: 'tel:+201008881304' },
    { icon: '💼', label: 'LinkedIn', value: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/ahmed-ata-cr7' },
    { icon: '📍', label: 'Location', value: 'Tanta, Gharbia, Egypt', link: undefined }
];
