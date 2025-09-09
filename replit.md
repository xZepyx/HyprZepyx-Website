# HyprZepyx - Hyprland Desktop Configuration

## Overview

HyprZepyx is a sophisticated showcase website for a Hyprland desktop environment configuration. The project presents an elegant, dark-themed interface featuring multiple desktop themes (Spectral-Horizon, Kernel-Fault, Abyss, and Lumen), comprehensive documentation, installation guides, and live GitHub repository statistics. The application serves as both a demonstration of the desktop configuration capabilities and a complete resource hub for users interested in implementing the HyprZepyx desktop environment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in a single-page application (SPA) architecture
- **Styling**: Tailwind CSS with shadcn/ui component library providing a comprehensive design system
- **State Management**: TanStack Query for server state management and data fetching
- **Component Design**: Modular component structure with separation between pages, UI components, and feature-specific components
- **Theme System**: Dark mode implementation with CSS custom properties and consistent color tokens

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API with GitHub API proxy for fetching repository statistics
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom request logging middleware for API endpoints with duration tracking

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle with schema-first approach and type-safe database operations
- **Migration System**: Drizzle Kit for database schema migrations and deployments
- **In-Memory Storage**: MemStorage implementation for development and testing scenarios
- **Session Management**: PostgreSQL session store using connect-pg-simple

### Development and Build Tools
- **Build System**: Vite for fast development server and optimized production builds
- **Development Experience**: Hot module replacement (HMR) and runtime error overlay for enhanced debugging
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Path Resolution**: Absolute imports with @ aliases for clean import statements

### External Dependencies
- **UI Framework**: Extensive shadcn/ui component library with Radix UI primitives
- **Icons**: Font Awesome CDN integration for comprehensive icon support
- **Database Driver**: Neon Database serverless PostgreSQL driver for cloud-native data access
- **Validation**: Zod schema validation integrated with Drizzle for type-safe data operations
- **Development Tools**: Replit-specific plugins for development environment integration

## External Dependencies

### Third-Party Services
- **GitHub API**: Live repository statistics fetching with proper rate limiting and fallback data
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Font Services**: Google Fonts integration for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

### Key Libraries and Frameworks
- **React Ecosystem**: React 18, React DOM, React Hook Form with resolvers
- **Data Fetching**: TanStack React Query for efficient server state management
- **UI Components**: Complete shadcn/ui component suite built on Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer for cross-browser compatibility
- **Database**: Drizzle ORM with PostgreSQL dialect and Zod integration
- **Development**: Vite build tool with React plugin and development optimizations
- **Utilities**: Class variance authority for component variants, clsx for conditional classes, date-fns for date manipulation

### Authentication and Security
- **Session Management**: Express session handling with PostgreSQL store
- **Environment Variables**: Secure configuration management for database URLs and API tokens
- **CORS and Security**: Proper middleware configuration for cross-origin requests and security headers