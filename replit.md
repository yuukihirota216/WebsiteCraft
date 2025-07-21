# Replit Project Documentation

## Overview

This is a full-stack web application for a Japanese real estate company called "Style Real Estate" (スタイル不動産) that specializes in rental property services in Nagoya with a focus on zero commission fees. The application is built as a landing page to attract customers through LINE messaging integration for property consultations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix
- **Development Server**: Custom Vite integration for SSR-like development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation

### Data Storage Solutions
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple

## Key Components

### Frontend Components
- **Landing Page Sections**: Modular React components for hero, features, FAQ, and CTA sections
- **UI Components**: Complete shadcn/ui component library including forms, dialogs, toasts
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities
- **Japanese Typography**: Noto Sans JP font integration for proper Japanese text rendering

### Backend Components
- **Express Server**: Custom server with middleware for logging and error handling
- **Storage Abstraction**: Interface-based storage layer for easy database switching
- **Route Registration**: Centralized route management system
- **Development Tools**: Hot reloading with Vite integration

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod validation schemas
- **Database Models**: User model with username/password authentication structure

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **Server Processing**: Express routes handle API requests using storage interface
3. **Data Persistence**: Storage layer abstracts database operations
4. **Response Handling**: Standardized JSON responses with error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React 18, React DOM, React Hook Form)
- Express.js with TypeScript support
- Drizzle ORM for database operations
- TanStack Query for data fetching

### UI and Styling Dependencies
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Class variance authority for component variants

### Development Dependencies
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production builds
- PostCSS with Autoprefixer for CSS processing

### Integration Dependencies
- LINE messaging platform (planned integration)
- Neon Database for PostgreSQL hosting
- Various Radix UI components for rich interactions

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migrations**: Drizzle Kit handles schema migrations
4. **Asset Optimization**: Vite optimizes assets and implements code splitting

### Environment Configuration
- **Development**: Local development with hot reloading via Vite
- **Production**: Optimized builds with environment-specific configurations
- **Database**: Environment-based DATABASE_URL configuration

### Hosting Considerations
- **Static Assets**: Frontend served from `dist/public`
- **API Endpoints**: Express server handles `/api` routes
- **Database**: Neon Database provides serverless PostgreSQL
- **Session Storage**: PostgreSQL-based session management for scalability

The architecture emphasizes rapid development with TypeScript safety, modern React patterns, and a clean separation between frontend and backend concerns. The storage abstraction allows for easy testing and development while maintaining production readiness with PostgreSQL integration.