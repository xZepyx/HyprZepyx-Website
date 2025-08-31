# Project Overview

## Overview

This is the official website for HyprZepyx, a minimal yet functional Hyprland configuration project. The website showcases three distinct themes (kernel-fault, abyss, and lumen) with their unique aesthetics and functionality. Built with React, TypeScript, and modern web technologies, the site features a clean design inspired by FydeOS.io, highlighting the project's open-source nature, beautiful themes, installation guides, and comprehensive keybinding documentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using functional components and hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling

### Database Layer
- **Database**: PostgreSQL (configured for use with Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Shared TypeScript schema definitions in `/shared` directory
- **Migrations**: Drizzle Kit for database schema migrations
- **Validation**: Zod for runtime type validation integrated with Drizzle

### Project Structure
- **Monorepo Layout**: Separate `client/`, `server/`, and `shared/` directories
- **Shared Code**: Common TypeScript types and schemas in `/shared`
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Development**: Single package.json with unified dependency management

### Development Workflow
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **TypeScript**: Strict type checking across the entire codebase
- **Development Server**: Vite dev server with Express API proxy
- **Production**: Static frontend build served by Express

### Authentication & Session Management
- **Session Store**: PostgreSQL-based session storage using connect-pg-simple
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database service
- **Environment Variables**: DATABASE_URL for database connection configuration

### Development Tools
- **Replit Integration**: Cartographer plugin for Replit development environment
- **Runtime Error Handling**: Replit error modal for development debugging

### UI Component Libraries
- **Radix UI**: Accessible component primitives for complex UI components
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel component for interactive content display

### Utility Libraries
- **class-variance-authority**: Type-safe variant management for component styling
- **clsx & tailwind-merge**: Conditional CSS class composition
- **date-fns**: Date manipulation and formatting utilities
- **cmdk**: Command palette component for enhanced user interaction