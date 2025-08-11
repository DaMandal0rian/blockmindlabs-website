# Overview

This is a full-stack web application built with a React frontend and Express.js backend, showcasing "Blockmind Labs" - a technology company specializing in AI, blockchain, and cybersecurity solutions. The application features a modern, responsive design with animated sections, a contact form, blog functionality, detailed service descriptions, and integrated Strapi headless CMS for content management.

# User Preferences

Preferred communication style: Simple, everyday language.
Brand Identity: Neural network/circuit tree logo representing AI and blockchain technology convergence.
Product Focus: Infrastructure services for AI systems - RPC services, AIOPS observability, AI agents orchestration, AI gateway routing, metadata storage, and GPU cluster rentals.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with a custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Animations**: Framer Motion for page transitions and scroll-based animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Font**: Space Grotesk from Fontsource for consistent typography

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling and compilation
- **Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **API Design**: RESTful endpoints with proper error handling and request logging

## Data Storage & Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless)
- **Headless CMS**: Strapi v5.21.0 for content management
- **Schema Design**: 
  - Contact submissions table for form data
  - Blog posts table with slug-based routing, timestamps, and optional cover images
  - Services, testimonials, pages, and users tables for CMS content
  - Extended blog posts with SEO meta fields and publishing status
- **Migrations**: Drizzle Kit for schema migrations and database management
- **Current Implementation**: Memory-based storage as fallback with database interface ready for production

## Development & Build System
- **Build Tool**: Vite with React plugin and custom theme integration
- **TypeScript**: Strict configuration with path aliases for clean imports
- **Development Server**: Vite dev server with Express backend proxy
- **Hot Reload**: Full HMR support for both frontend and backend development
- **Error Handling**: Runtime error overlay in development environment

## Styling & Design System
- **Theme**: Professional dark theme with blue primary color and 0.5 border radius
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Variants**: Class Variance Authority for consistent component styling
- **CSS Architecture**: Utility-first with custom CSS variables for theme consistency

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tools
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form & @hookform/resolvers**: Form handling with validation
- **zod**: Runtime type validation and schema definition

## UI and Animation Libraries
- **@radix-ui/**: Complete set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **framer-motion**: Animation library for smooth transitions and interactions
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette component

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

## Specialized Integrations
- **@replit/vite-plugin-shadcn-theme-json**: Theme integration for Replit environment
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **wouter**: Lightweight routing library
- **date-fns**: Date manipulation and formatting utilities
- **Strapi CMS**: Headless content management system with TypeScript integration
- **axios**: HTTP client for Strapi API communication