# Architecture

## Overview

CivilsPath is a Next.js application using the App Router with a clear separation between data, presentation, and content generation.

## Layers

### 1. Presentation (app/, components/)
- Server Components for static pages (homepage, course listing)
- Client Components for interactive elements (quiz engine, lesson reader, navigation)
- Responsive layout with desktop sidebar + mobile bottom nav

### 2. Data (data/)
- Static curriculum definitions
- Pilot lesson and question content
- Subject metadata

### 3. Content Pipeline (scripts/)
- PDF discovery and matching
- Text extraction (future: OCR fallback)
- Lesson generation from extracted content
- Question generation with provenance tracking

### 4. Generated Content (generated/)
- Raw extracted text
- Normalised content
- Generated lessons and questions
- Pipeline reports

## Key Design Decisions

### Static-first approach
All content is pre-generated and stored as TypeScript data. No runtime PDF processing. This ensures fast load times and offline capability.

### Block-based lessons
Lessons are composed of typed blocks (hook, explanation, comparison, checkpoint, etc.) that render through a single dispatcher component. This makes lessons machine-readable and enables features like progress tracking per section.

### Curriculum-driven structure
The canonical curriculum sequence drives everything — PDF matching, lesson ordering, progress tracking, and navigation. Adding a new subject means defining its curriculum first.

### Client-side state (Phase 1)
Progress, notes, and bookmarks are stored in localStorage for the initial version. A backend can be added later without changing the component architecture.

## Future Extensions

- Database-backed progress (Supabase/PlanetScale)
- AI-powered content generation from PDFs
- Spaced repetition algorithm (SM-2 or FSRS)
- Search index (Algolia or Pagefind)
- User authentication
- Mobile app (React Native or PWA)
