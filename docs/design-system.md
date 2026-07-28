# Design System

## Colours

```css
/* Primary Navy */
--navy-950: #07182f
--navy-900: #0b2342
--navy-800: #16345c

/* Accent Orange (used sparingly) */
--orange-600: #f97316
--orange-500: #ff8a1f
--orange-100: #fff1e6

/* Surfaces */
--background: #f7f8fa
--surface: #ffffff
--surface-warm: #fffaf3

/* Text */
--text-primary: #12213a
--text-secondary: #667085
--text-muted: #98a2b3

/* Borders */
--border: #e4e7ec

/* Semantic */
--success: #21a65b
--warning: #f5b942
--error: #d64545
--info: #3b82f6
```

Orange is used as an accent for CTAs, active states, and progress indicators — never as a dominant colour.

## Typography

### Headings
- Font: Playfair Display / Source Serif 4
- Weight: 700
- Tracking: -0.01em

### Body
- Font: Inter
- Weight: 400 (body), 500 (medium), 600 (semibold)

### Scale
| Element | Size |
|---------|------|
| Hero Heading | 40–44px |
| Page Title | 24–36px |
| Section Heading | 20–24px |
| Card Heading | 16–18px |
| Body | 14–16px |
| Secondary/Meta | 12–13px |

### Reading Width
Lesson content is capped at 720px for comfortable reading.

## Cards

- White background
- 1px border (#e4e7ec)
- 10–14px border radius
- Subtle shadow on hover (0 1px 3px rgba(0,0,0,0.05))
- Generous padding (20–24px)
- No heavy gradients, glassmorphism, or glow effects

## Spacing

Based on a 4px grid. Common values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.

## Components

### Buttons
- Primary: bg-orange-500, text-white, rounded-lg, px-5 py-2.5
- Secondary: bg-navy-900, text-white
- Ghost: bg-transparent, border, text-text-secondary

### Navigation
- Desktop: Fixed left sidebar (256px wide)
- Mobile: Fixed bottom nav with 4 items (Home, Learn, Practice, More)

### Lesson Blocks
Each block type has a distinct visual treatment:
- Hook: warm bg, orange accent, italic text
- Explanation: minimal, good line height
- Comparison: bordered table
- Misconception: red-tinted bg
- Prelims Trap: amber-tinted bg
- Mains Perspective: blue-tinted bg
- Remember: green-tinted bg
- Checkpoint: collapsible Q&A
- Summary: navy-tinted bg

## Accessibility

- Minimum 4.5:1 contrast ratio for body text
- Focus visible indicators on all interactive elements
- Semantic heading hierarchy
- ARIA labels on icon-only buttons
- Non-colour mastery indicators (text labels alongside progress)
- Keyboard navigable throughout
