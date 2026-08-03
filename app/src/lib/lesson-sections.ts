import { Lesson, LessonBlock, LessonSection } from "@/types";

/**
 * Breaks a lesson into individually addressable sections so a quiz explanation
 * can deep-link to the paragraph that covers a topic rather than dumping the
 * reader at the top of the chapter.
 *
 * Two granularities are produced:
 *
 *  - One section per block (every chapter has these).
 *  - One section per ALL-CAPS heading inside a long `explanation` block. The
 *    heavier chapters (Parliament, Union Executive, State Executive) carry a
 *    dozen such headings in a single block, and a block-level anchor there is
 *    barely better than a chapter-level one.
 */

/**
 * Matches an ALL-CAPS run at the start of a paragraph, as used by the sectioned
 * explanation blocks — "THE BUDGET IN SIX STAGES." or
 * "THE SPEAKER — POWER, INDEPENDENCE, AND THE UNRESOLVED QUESTION."
 *
 * Requires two or more words so a stray acronym at the start of a sentence
 * ("PAC scrutiny follows...") is not mistaken for a heading.
 */
const HEADING_PATTERN =
  /(?:^|\n\n)\s*([A-Z][A-Z0-9]*(?:[ ,'’\-—&()/:]+[A-Z0-9(][A-Z0-9'’)\-—.]*)+)\s*\.\s/g;

/** URL-safe slug for a heading, kept stable so links do not rot. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/** Best-effort human title for a block, used when it has no explicit heading. */
function blockTitle(block: LessonBlock): string {
  switch (block.type) {
    case "hook":
      return "Introduction";
    case "one-line-summary":
      return "In One Line";
    case "explanation":
      return block.variant === "simple"
        ? "Simple Explanation"
        : "UPSC-Level Explanation";
    case "definition":
      return block.term;
    case "timeline":
    case "comparison":
      return block.title;
    case "constitutional-article":
      return block.articleNumber !== "N/A"
        ? `Article ${block.articleNumber}`
        : block.title;
    case "judgment":
      return `${block.caseName} (${block.year})`;
    case "example":
      return block.title;
    case "misconception":
      return "Do Not Confuse";
    case "remember":
      return "Key Points to Remember";
    case "prelims-trap":
      return "Prelims Trap";
    case "mains-perspective":
      return `Mains Perspective: ${block.topic}`;
    case "checkpoint":
      return "Quick Recall Check";
    case "summary":
      return "Summary";
    case "source-reference":
      return "Source";
    default:
      return "Section";
  }
}

/** All text in a block, flattened for substring searching. */
function blockText(block: LessonBlock): string {
  switch (block.type) {
    case "hook":
    case "one-line-summary":
    case "explanation":
      return block.content;
    case "definition":
      return `${block.term} ${block.definition}`;
    case "timeline":
      return [
        block.title,
        ...block.events.map((e) => `${e.year} ${e.description}`),
      ].join(" ");
    case "comparison":
      return [
        block.title,
        ...block.columns,
        ...block.rows.flatMap((r) => [r.label, ...r.values]),
      ].join(" ");
    case "constitutional-article":
      return `Article ${block.articleNumber} ${block.title} ${block.content}`;
    case "judgment":
      return `${block.caseName} ${block.year} ${block.summary} ${block.significance}`;
    case "example":
      return `${block.title} ${block.content}`;
    case "misconception":
      return `${block.wrong} ${block.correct}`;
    case "remember":
    case "summary":
      return block.points.join(" ");
    case "prelims-trap":
      return `${block.trap} ${block.reality}`;
    case "mains-perspective":
      return [block.topic, ...block.dimensions, block.sampleQuestion ?? ""].join(
        " "
      );
    case "checkpoint":
      return block.questions.map((q) => `${q.question} ${q.answer}`).join(" ");
    case "source-reference":
      return block.sourceFile;
    default:
      return "";
  }
}

/**
 * The DOM id for a heading inside a block. The renderer must emit the same id,
 * so both sides derive it from this one function.
 */
export function headingAnchor(blockId: string, heading: string): string {
  return `${blockId}--${slugify(heading)}`;
}

/**
 * Splits an explanation block's content into its ALL-CAPS sections.
 *
 * `lead` holds any prose before the first heading, which must still be rendered
 * — dropping it silently loses content. `sections` is empty for prose without
 * headings, which is the common case; the caller then renders `lead` alone.
 */
export function splitIntoHeadedSections(content: string): {
  lead: string;
  sections: { heading: string; body: string }[];
} {
  const matches = [...content.matchAll(HEADING_PATTERN)];
  if (matches.length < 2) return { lead: content, sections: [] };

  const sections = matches.map((match, i) => {
    const heading = match[1].trim();
    const bodyStart = match.index! + match[0].length;
    const bodyEnd =
      i + 1 < matches.length ? matches[i + 1].index! : content.length;
    return { heading, body: content.slice(bodyStart, bodyEnd) };
  });

  return { lead: content.slice(0, matches[0].index!).trim(), sections };
}

/** Title case for display: "THE BUDGET IN SIX STAGES" → "The Budget In Six Stages". */
export function prettifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/(^|[\s(—-])([a-z])/g, (_, sep, ch) => sep + ch.toUpperCase());
}

/** Every addressable section of a lesson, in document order. */
export function getLessonSections(lesson: Lesson): LessonSection[] {
  const sections: LessonSection[] = [];

  for (const block of lesson.blocks) {
    const split =
      block.type === "explanation"
        ? splitIntoHeadedSections(block.content)
        : { lead: "", sections: [] };

    // A split block is represented ONLY by its sub-sections. Emitting the parent
    // too would shadow them: its text is the concatenation of all its children,
    // so it always wins on hit count and every link lands at the top of a
    // 20,000-character block instead of the paragraph that answers the question.
    if (split.sections.length === 0) {
      sections.push({
        anchor: block.id,
        title: blockTitle(block),
        text: blockText(block),
      });
      continue;
    }

    // Lead-in prose before the first heading is addressed by the block anchor,
    // which is where the renderer puts it.
    if (split.lead) {
      sections.push({
        anchor: block.id,
        title: blockTitle(block),
        text: split.lead,
      });
    }

    for (const { heading, body } of split.sections) {
      sections.push({
        anchor: headingAnchor(block.id, heading),
        title: prettifyHeading(heading),
        // The heading itself is searchable alongside its body.
        text: `${heading} ${body}`,
      });
    }
  }

  return sections;
}
