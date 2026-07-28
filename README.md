# CivilsPath

A structured UPSC Civil Services preparation platform with clear lessons, UPSC-style questions, smart revision, and detailed progress tracking.

## Quick Start

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
CivilsPath/
├── app/                      # Next.js application
│   └── src/
│       ├── app/              # App router pages
│       ├── components/       # React components
│       │   ├── layout/       # Sidebar, MobileNav
│       │   ├── home/         # Homepage sections
│       │   ├── course/       # Course curriculum
│       │   ├── lesson/       # Lesson reader & blocks
│       │   └── quiz/         # Quiz engine
│       ├── data/             # Static data & seed content
│       ├── types/            # TypeScript type definitions
│       ├── lib/              # Utilities
│       └── hooks/            # Custom React hooks
├── resources/                # Source PDFs (not committed)
│   └── polity/              # Indian Polity class notes
├── scripts/
│   └── polity-ingestion/    # PDF discovery & extraction
├── docs/                     # Documentation
└── generated/               # Pipeline output (gitignored)
```

## Available Subjects

- **Indian Polity** — Active (32 modules, pilot lesson available)
- History, Geography, Economy, Environment, Science & Tech, Art & Culture, Society, Governance, International Relations, Ethics, Current Affairs — Coming Soon

## Pilot Lesson

The "Sources of the Indian Constitution" lesson demonstrates the full learning experience:
- Structured lesson blocks (hook, explanations, comparison tables, articles, traps, mains perspective, checkpoints)
- 5 practice questions with explanations and option analysis
- Confidence tracking and score calculation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Inter (body)

## Development

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run lint    # Run ESLint
```

## PDF Ingestion

```bash
cd scripts/polity-ingestion
npx ts-node discover.ts    # Discover and match PDFs to curriculum
```

## Documentation

- [Architecture](docs/architecture.md)
- [Content Pipeline](docs/content-pipeline.md)
- [Design System](docs/design-system.md)
- [Polity Curriculum](docs/polity-curriculum.md)
