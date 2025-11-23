# Portfolio Project - Clean Architecture

## 📁 Project Structure

```
src/
├── components/          # React components (feature-based organization)
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.css
│   │   └── index.ts
│   ├── Contact/
│   ├── Experience/
│   ├── Hero/
│   ├── Navigation/
│   └── Skills/
├── constants/          # Application constants
│   └── index.ts
├── data/              # Static data and content
│   └── portfolio.data.ts
├── hooks/             # Custom React hooks
│   ├── useContactForm.ts
│   └── useScrollTracking.ts
├── services/          # Business logic and API services
│   └── portfolio.service.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── utils/             # Utility functions
│   └── navigation.ts
├── App.tsx            # Main application component
├── App.css
├── index.css          # Global styles and design system
└── main.tsx           # Application entry point
```

## 🏗️ Architecture Principles

### 1. **Separation of Concerns**
- **Components**: Pure presentational logic
- **Hooks**: Reusable stateful logic
- **Services**: Business logic and data fetching
- **Utils**: Pure helper functions
- **Data**: Centralized content management

### 2. **Type Safety**
- Comprehensive TypeScript interfaces in `types/`
- Strict type checking enabled
- Type-only imports where appropriate

### 3. **Component Organization**
- Each component in its own directory
- Co-located styles with components
- Index files for clean imports
- Sub-components for better reusability

### 4. **Custom Hooks**
- `useScrollTracking`: Manages scroll position and active section
- `useContactForm`: Handles form state and submission logic

### 5. **Service Layer**
- `PortfolioService`: Centralized data management
- Ready for API integration
- Async/await pattern for future scalability

## 🎯 Key Features

### Professional Code Quality
- ✅ Clean Architecture principles
- ✅ SOLID principles
- ✅ DRY (Don't Repeat Yourself)
- ✅ Separation of concerns
- ✅ Type safety with TypeScript
- ✅ Accessibility (ARIA labels, semantic HTML)
- ✅ Responsive design
- ✅ Performance optimizations

### Modern React Patterns
- ✅ Custom hooks for reusable logic
- ✅ Component composition
- ✅ Props destructuring
- ✅ Functional components
- ✅ Type-safe props interfaces

### Maintainability
- ✅ Centralized data management
- ✅ Constants for configuration
- ✅ Utility functions for common operations
- ✅ Modular component structure
- ✅ Clear naming conventions

## 🔧 Customization

### Update Content
Edit `src/data/portfolio.data.ts` to update:
- Personal information
- Projects
- Skills
- Contact details

### Add New Sections
1. Create component in `src/components/[SectionName]/`
2. Add section ID to `src/constants/index.ts`
3. Import and use in `src/App.tsx`

### Modify Styling
- Global styles: `src/index.css`
- Component styles: `src/components/[Component]/[Component].css`

## 📝 Code Examples

### Creating a New Component
```typescript
// src/components/NewSection/NewSection.tsx
import './NewSection.css';

interface NewSectionProps {
  title: string;
}

const NewSection = ({ title }: NewSectionProps) => {
  return (
    <section id="new-section" className="section">
      <h2>{title}</h2>
    </section>
  );
};

export default NewSection;
```

### Creating a Custom Hook
```typescript
// src/hooks/useCustomHook.ts
import { useState, useEffect } from 'react';

export const useCustomHook = () => {
  const [state, setState] = useState<string>('');
  
  useEffect(() => {
    // Logic here
  }, []);
  
  return state;
};
```

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Why This Architecture?

### For Your CV
- Demonstrates understanding of software architecture
- Shows ability to write scalable, maintainable code
- Proves TypeScript proficiency
- Exhibits modern React best practices
- Indicates professional development experience

### For Interviewers
- Easy to navigate and understand
- Clear separation of concerns
- Testable code structure
- Production-ready patterns
- Scalable architecture

## 🎓 Learning Resources

This project demonstrates:
- Clean Architecture by Robert C. Martin
- SOLID principles
- React best practices
- TypeScript advanced patterns
- Modern CSS techniques

## 📄 License

MIT License - Feel free to use this structure for your own portfolio!
