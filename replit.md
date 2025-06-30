# Woodcove Flooring Website

## Overview

This is a full-stack web application for Woodcove Flooring, a premium hardwood flooring company. The application is built using a modern React frontend with Express.js backend, utilizing TypeScript throughout. The project follows a monorepo structure with shared schemas and clean separation between client and server code.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: TSX for TypeScript execution in development

### Data Storage Solutions
- **Primary Database**: PostgreSQL hosted on Neon Database
- **ORM**: Drizzle ORM with type-safe queries
- **Migrations**: Drizzle Kit for database schema management
- **Session Store**: PostgreSQL table for session persistence

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Location**: `shared/schema.ts` for type safety across frontend and backend
- **Validation**: Zod schemas for runtime validation and type inference

### Authentication & Authorization
- **Strategy**: Session-based authentication (prepared for implementation)
- **Storage**: PostgreSQL sessions via connect-pg-simple
- **Security**: Prepared for secure session management

### API Structure
- **Pattern**: RESTful API with `/api` prefix
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging for API endpoints
- **Type Safety**: Shared types between client and server

### UI Design System
- **Theme**: Custom color palette with CSS variables
- **Components**: Comprehensive UI component library based on Radix UI
- **Responsive**: Mobile-first responsive design
- **Typography**: Google Fonts (Roboto, Poppins)

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express.js routes handle requests with proper error handling
3. **Data Layer**: Drizzle ORM executes type-safe database queries
4. **Response**: JSON responses with consistent error handling
5. **State Management**: TanStack Query caches and manages server state
6. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Technologies
- **Database**: Neon Database (PostgreSQL)
- **UI Components**: Radix UI ecosystem for accessible components
- **Fonts**: Google Fonts API for typography
- **Development**: Replit-specific tooling for development environment

### Notable Libraries
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date utilities
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for image sliders
- **Utilities**: Class Variance Authority for component variants

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static assets served by Express in production

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: TSX for direct TypeScript execution
- **Database**: Environment variable-based connection to Neon Database
- **Development Tools**: Replit-specific plugins for enhanced development experience

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development Mode**: NODE_ENV-based configuration switching
- **Build Process**: Separate build commands for client and server

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 30, 2025: Initial setup completed
- June 30, 2025: Successfully migrated from Figma to Replit environment  
- June 30, 2025: Replaced entire Home.tsx component with complete hero section from Figma design
- June 30, 2025: Updated navigation bar with proper search functionality and shopping cart
- June 30, 2025: Implemented full-width hero section with carousel navigation and indicators

## Changelog

Changelog:
- June 30, 2025. Initial setup
- June 30, 2025. Hero section migration from Figma completed