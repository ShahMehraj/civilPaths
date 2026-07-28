# Content Pipeline

## Overview

The content pipeline transforms source PDFs into structured lessons and questions for the platform.

## Pipeline Stages

```
PDFs → Discovery → Extraction → Normalisation → Lesson Generation → Review → Publish
```

### 1. Discovery (`scripts/polity-ingestion/discover.ts`)
- Scans `/resources/polity/` for PDF files
- Matches each file against the canonical curriculum using regex patterns
- Reports matched, missing, and extra files
- Run: `npx ts-node scripts/polity-ingestion/discover.ts`

### 2. Extraction (planned)
- Extract text using pdf-parse (text-based PDFs)
- OCR fallback using Tesseract for scanned PDFs
- Preserve page numbers for provenance
- Output: `generated/polity/raw/<module-id>.json`

### 3. Normalisation (planned)
- Clean extracted text (remove headers, footers, page numbers)
- Identify structural elements (headings, lists, tables)
- Split into logical sections
- Output: `generated/polity/normalised/<module-id>.json`

### 4. Lesson Generation (planned)
- Map normalised content to lesson block types
- Generate hook, explanations, comparisons, remember points
- Create checkpoint questions inline
- Maintain source provenance (file + page numbers)
- Output: `generated/polity/lessons/<module-id>.ts`

### 5. Question Generation (planned)
- Generate MCQs from lesson content
- Apply UPSC question patterns (single correct, multiple statements, match following)
- Tag with difficulty, skill, UPSC track
- Generate explanations and option analyses
- Output: `generated/polity/questions/<module-id>.ts`

### 6. Review (planned)
- Content review workflow (states: extracted → drafted → needs-review → approved → published)
- Compare generated content with source for accuracy
- Flag ambiguous or unsupported claims
- Validate question quality (no duplicate options, clear distractors)

## Output Structure

```
generated/
└── polity/
    ├── raw/          # Raw extracted text with page info
    ├── normalised/   # Cleaned, structured content
    ├── lessons/      # TypeScript lesson data files
    ├── questions/    # TypeScript question data files
    └── reports/      # Pipeline execution reports
```

## Provenance

Every generated piece of content links back to its source:

```json
{
  "sourceFile": "74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf",
  "sourcePages": [3, 4],
  "sourceExcerpt": "..." // Brief context, not long copyrighted passages
}
```

## Principles

- Never modify original PDFs
- Never expose long copyrighted excerpts
- Preserve curriculum order in all outputs
- Log and report any malformed or unprocessable PDFs
- Extraction failures should be surfaced, never silently skipped
