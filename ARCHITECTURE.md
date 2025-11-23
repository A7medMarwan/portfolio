# Portfolio Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        PRESENTATION LAYER                        │
│                         (Components/)                            │
├─────────────────────────────────────────────────────────────────┤
│  Navigation/  │  Hero/  │  About/  │  Skills/  │  Experience/  │
│  Contact/     │         │          │           │               │
│                                                                  │
│  Each component:                                                 │
│  - Component.tsx (UI logic)                                      │
│  - Component.css (styles)                                        │
│  - index.ts (clean exports)                                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓ uses
┌─────────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                           │
│                          (Hooks/)                                │
├─────────────────────────────────────────────────────────────────┤
│  useScrollTracking.ts  │  useContactForm.ts                      │
│                                                                  │
│  Custom hooks for:                                               │
│  - Reusable stateful logic                                       │
│  - Side effects management                                       │
│  - State composition                                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓ uses
┌─────────────────────────────────────────────────────────────────┐
│                      BUSINESS LOGIC LAYER                        │
│                        (Services/)                               │
├─────────────────────────────────────────────────────────────────┤
│  portfolio.service.ts                                            │
│                                                                  │
│  Services for:                                                   │
│  - Data fetching                                                 │
│  - API integration                                               │
│  - Business rules                                                │
└─────────────────────────────────────────────────────────────────┘
                              ↓ uses
┌─────────────────────────────────────────────────────────────────┐
│                         DATA LAYER                               │
│                          (Data/)                                 │
├─────────────────────────────────────────────────────────────────┤
│  portfolio.data.ts                                               │
│                                                                  │
│  Static data:                                                    │
│  - Personal info                                                 │
│  - Projects                                                      │
│  - Skills                                                        │
│  - Contact info                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    CROSS-CUTTING CONCERNS                        │
├─────────────────────────────────────────────────────────────────┤
│  Types/          │  Utils/          │  Constants/               │
│  - index.ts      │  - analytics.ts  │  - index.ts               │
│                  │  - navigation.ts │                           │
│  Type            │  - performance.ts│  App-wide                 │
│  definitions     │  - validation.ts │  constants                │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      CONFIGURATION                               │
├─────────────────────────────────────────────────────────────────┤
│  vite.config.ts  │  tsconfig.json  │  package.json              │
│  - Path aliases  │  - Strict mode  │  - Dependencies            │
│  - Build config  │  - Type checking│  - Scripts                 │
└─────────────────────────────────────────────────────────────────┘

DATA FLOW:
==========

User Interaction → Component → Hook → Service → Data
                     ↓
                  Utils (validation, analytics, etc.)
                     ↓
                  Types (type safety)
                     ↓
                Constants (configuration)


DEPENDENCY DIRECTION:
====================

Components → Hooks → Services → Data
     ↓         ↓         ↓
   Utils ← Types ← Constants

(Dependencies point inward, following Clean Architecture)


KEY PRINCIPLES:
===============

1. Separation of Concerns
   - Each layer has a single responsibility
   - Clear boundaries between layers

2. Dependency Inversion
   - High-level modules don't depend on low-level modules
   - Both depend on abstractions (interfaces/types)

3. Single Responsibility
   - Each file/module has one reason to change
   - Components only handle UI
   - Hooks only handle state logic
   - Services only handle business logic

4. Open/Closed Principle
   - Open for extension (add new components/hooks)
   - Closed for modification (existing code stable)

5. DRY (Don't Repeat Yourself)
   - Reusable hooks
   - Shared utilities
   - Centralized data
```

## File Organization Pattern

```
Component/
├── Component.tsx       # React component
├── Component.css       # Component styles
└── index.ts           # Clean export

Hook/
└── useHookName.ts     # Custom hook

Service/
└── service.name.ts    # Business logic

Utils/
└── utility.name.ts    # Pure functions

Data/
└── data.name.ts       # Static data

Types/
└── index.ts           # Type definitions
```

## Import Pattern

```typescript
// Clean imports using path aliases
import Navigation from '@components/Navigation';
import { useScrollTracking } from '@hooks/useScrollTracking';
import { portfolioService } from '@services/portfolio.service';
import { personalInfo } from '@data/portfolio.data';
import type { Project } from '@types';
import { APP_CONFIG } from '@constants';
import { scrollToSection } from '@utils/navigation';
```

## Benefits

✅ **Maintainability**: Easy to find and update code
✅ **Scalability**: Simple to add new features
✅ **Testability**: Each layer can be tested independently
✅ **Readability**: Clear structure and naming
✅ **Reusability**: Shared logic in hooks and utils
✅ **Type Safety**: TypeScript throughout
✅ **Professional**: Industry-standard architecture
