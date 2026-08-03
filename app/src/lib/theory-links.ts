import { Lesson, LessonSection, TheoryLink } from "@/types";
import { articleRanges, namedReferences } from "@/data/reference-index";
import { polityCurriculum } from "@/data/polity-curriculum";
import { allPolityLessons } from "@/data/polity";
import { getLessonSections } from "./lesson-sections";

/**
 * Resolves free text (an option, an explanation, a question prompt) into links
 * to the theory that explains the constitutional entities it mentions.
 *
 * Links point at a specific SECTION of the target chapter wherever one can be
 * identified, falling back to the chapter itself only when no section is a
 * convincing match. Detection is deliberately conservative: an entity must be
 * named explicitly, and a section must mention it more than once in passing.
 */

const moduleTitles = new Map(polityCurriculum.map((m) => [m.id, m.title]));

/** Sections per chapter, computed once — 475 sections across 32 chapters. */
const sectionsByModule = new Map<string, LessonSection[]>(
  allPolityLessons.map((lesson: Lesson) => [
    lesson.moduleId,
    getLessonSections(lesson),
  ])
);

/**
 * Matches "Article 21", "Art 19(1)(a)", "Arts 245-255", "Art. 300A", "ARTICLE 32".
 * Group 1 is the leading number, group 2 its letter suffix (if any), and
 * group 3 the end of a range like "245-255".
 *
 * Deliberately case-sensitive. A case-insensitive suffix group would swallow the
 * first letters of the following word — "Art 30 confers" became "Article 30co" —
 * so the suffix must be genuinely uppercase and butt directly against the number.
 */
const ARTICLE_PATTERN =
  /\b(?:ARTICLES?|ARTS?|[Aa]rticles?|[Aa]rts?)\.?\s*(\d{1,3})([A-Z]{1,2})?\b(?:\s*(?:-|–|to)\s*(\d{1,3})\b)?/g;

/**
 * Compiles a needle into a word-boundary regex.
 *
 * Plain substring matching produced false positives that pointed learners at
 * unrelated chapters: "rti" hit inside "A[rti]cles" and "eci" inside
 * "sp[eci]fied". A leading boundary kills both. Short acronyms additionally get
 * a trailing boundary; longer needles do not, so intentional prefixes like
 * "municipalit" still cover municipality/municipalities.
 */
function compileNeedle(needle: string): RegExp {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // A needle ending in a digit is an Article number, and must not match a
  // longer one: "Art 30" was matching inside "Art 300A", so Article 30 links
  // landed on sections that only discuss the Right to Property.
  if (/\d$/.test(needle)) {
    return new RegExp(`\\b${escaped}(?![\\dA-Za-z])`, "i");
  }

  const isAcronym = !needle.includes(" ") && needle.length <= 5;
  return new RegExp(`\\b${escaped}${isAcronym ? "\\b" : ""}`, "i");
}

/**
 * Matches a whole citation cluster and captures its number list, so the lists
 * and ranges chapters actually write are recognised: "Arts 15, 16, 19, 29 and
 * 30", "Art 29-30", "Articles 245 to 255", "Art 19(1)(a) and 19(2)".
 */
const CITATION_PATTERN =
  /\b(?:ARTICLES?|ARTS?|[Aa]rticles?|[Aa]rts?)\.?\s*(\d{1,3}[A-Z]{0,2}(?:\([^)]*\))*(?:\s*(?:,|and|&|-|–|to)\s*\d{1,3}[A-Z]{0,2}(?:\([^)]*\))*)*)/g;

/**
 * Counts citations of one Article in a passage.
 *
 * Needle matching on "Art 30" alone missed most real citations, because a
 * chapter that discusses Article 30 at length writes it once in full and
 * thereafter inside lists and ranges. It also matched the wrong Article:
 * "Art 30" is a prefix of "Art 300A".
 */
function countArticleCitations(
  text: string,
  num: number,
  suffix?: string
): number {
  let count = 0;

  for (const cluster of text.matchAll(CITATION_PATTERN)) {
    // Clause references — the "(1)(a)" of "Art 19(1)(a)" — would otherwise be
    // read as further Article numbers.
    const list = cluster[1].replace(/\([^)]*\)/g, " ");
    const tokens = [...list.matchAll(/(\d{1,3})([A-Z]{0,2})/g)];

    let cited = false;
    for (let i = 0; i < tokens.length && !cited; i++) {
      const n = Number(tokens[i][1]);
      const s = tokens[i][2] || undefined;

      if (n === num && s === suffix) {
        cited = true;
        break;
      }

      // A range covers the Articles between its endpoints. Only unsuffixed
      // Articles are treated as covered: "Arts 29-30" says nothing about 300A.
      if (suffix || i + 1 >= tokens.length) continue;
      const gap = list.slice(
        tokens[i].index! + tokens[i][0].length,
        tokens[i + 1].index!
      );
      if (!/-|–|to/.test(gap)) continue;
      if (n < num && num <= Number(tokens[i + 1][1])) cited = true;
    }

    if (cited) count++;
  }

  return count;
}

/** Needle regexes are built once per reference, not once per call. */
const compiledReferences = namedReferences.map((ref) => ({
  ref,
  patterns: ref.match.map(compileNeedle),
}));

function moduleTitle(moduleId: string): string {
  return moduleTitles.get(moduleId) ?? moduleId;
}

function chapterHref(moduleId: string): string {
  return `/learn/polity/${moduleId}`;
}

/**
 * Blocks that summarise rather than explain. They mention everything and teach
 * nothing in depth, so they make poor deep-link targets — a reader sent to
 * "Prelims Trap" for Article 30 gets a one-line warning, not an explanation.
 * They stay searchable, but rank below real exposition.
 */
const WEAK_ANCHOR_PREFIXES = [
  "summary-",
  "hook-",
  "prelims-trap-",
  "checkpoint-",
  "source-ref-",
  "mains-",
];

function isWeakAnchor(anchor: string): boolean {
  return WEAK_ANCHOR_PREFIXES.some((p) => anchor.startsWith(p));
}

/** Counts non-overlapping occurrences of a needle regex in text. */
function countMatches(text: string, needle: RegExp): number {
  const global = new RegExp(needle.source, needle.flags.replace("g", "") + "g");
  return [...text.matchAll(global)].length;
}

/**
 * Picks the section of a chapter that best explains an entity.
 *
 * Scoring favours sections that discuss the entity repeatedly over ones that
 * merely name it, and prefers a heading match over a body match — a section
 * titled "The Veto Powers" is the right target for a veto question even if a
 * later section happens to use the word more often.
 *
 * Returns null when nothing scores well enough, in which case the caller falls
 * back to a chapter-level link rather than guessing.
 */
function findBestSection(
  moduleId: string,
  searchTerms: string[],
  article?: { num: number; suffix?: string }
): LessonSection | null {
  const sections = sectionsByModule.get(moduleId);
  if (!sections) return null;
  if (searchTerms.length === 0 && !article) return null;

  const patterns = searchTerms.map(compileNeedle);

  const score = (text: string, title: string) => {
    let total = 0;

    if (article) {
      total += countArticleCitations(text, article.num, article.suffix);
      if (countArticleCitations(title, article.num, article.suffix) > 0) {
        total += 12;
      }
    }

    for (const pattern of patterns) {
      const hits = countMatches(text, pattern);
      if (hits === 0) continue;
      total += hits;
      // A hit in the section's own title is a strong signal of aboutness.
      if (pattern.test(title)) total += 12;
    }

    return total;
  };

  let best: LessonSection | null = null;
  let bestScore = 0;

  for (const section of sections) {
    let sectionScore = score(section.text, section.title);
    if (sectionScore === 0) continue;
    if (isWeakAnchor(section.anchor)) {
      sectionScore = Math.floor(sectionScore / 3);
    }

    if (sectionScore > bestScore) {
      bestScore = sectionScore;
      best = section;
    }
  }

  // Two mentions, or one in a heading. A single passing mention in a wall of
  // prose is not evidence that the section explains the entity.
  return bestScore >= 2 ? best : null;
}

/** Builds a link, deep-linking into a section when a good one exists. */
function buildLink(
  label: string,
  topic: string,
  moduleId: string,
  searchTerms: string[],
  article?: { num: number; suffix?: string }
): TheoryLink {
  const section = findBestSection(moduleId, searchTerms, article);
  return {
    label,
    topic,
    moduleId,
    searchTerms,
    sectionTitle: section?.title,
    href: section
      ? `${chapterHref(moduleId)}#${section.anchor}`
      : chapterHref(moduleId),
  };
}

/** Finds the chapter covering a single Article, or null if none does. */
function resolveArticle(num: number, suffix?: string): TheoryLink | null {
  const range = articleRanges.find((r) => {
    if (num < r.from || num > r.to) return false;
    if (!r.suffix) return true;
    if (!suffix) return false;
    // A suffix spec is either an exact letter ("A") or a run ("ZH-ZT").
    if (r.suffix.includes("-")) {
      const [lo, hi] = r.suffix.split("-");
      return suffix >= lo && suffix <= hi;
    }
    return suffix === r.suffix;
  });
  if (!range) return null;

  return buildLink(
    `Article ${num}${suffix ?? ""}`,
    range.topic,
    range.moduleId,
    [],
    { num, suffix }
  );
}

/**
 * Extracts theory links from a block of text.
 *
 * @param text        the text to scan
 * @param excludeModuleId the chapter the learner is already in — self-links are
 *                    dropped, since they would navigate nowhere useful
 */
export function extractTheoryLinks(
  text: string,
  excludeModuleId?: string
): TheoryLink[] {
  if (!text) return [];

  const found = new Map<string, TheoryLink>();

  // Articles, including ranges — a range contributes only its endpoints, so
  // "Arts 245-255" yields two links rather than eleven.
  for (const m of text.matchAll(ARTICLE_PATTERN)) {
    const start = Number(m[1]);
    const suffix = m[2];
    const end = m[3] ? Number(m[3]) : undefined;

    const hits = [resolveArticle(start, suffix)];
    if (end !== undefined && end !== start) hits.push(resolveArticle(end));

    for (const hit of hits) {
      if (hit && hit.moduleId !== excludeModuleId) found.set(hit.label, hit);
    }
  }

  // Named cases, statutes, bodies and doctrines.
  for (const { ref, patterns } of compiledReferences) {
    if (ref.moduleId === excludeModuleId) continue;
    if (!patterns.some((p) => p.test(text))) continue;
    found.set(
      ref.label,
      buildLink(ref.label, ref.topic, ref.moduleId, ref.match)
    );
  }

  return [...found.values()];
}

/**
 * Collapses several texts into one link list, so a question's prompt, options
 * and explanation do not each repeat the same reference.
 */
export function mergeTheoryLinks(
  texts: (string | undefined)[],
  excludeModuleId?: string
): TheoryLink[] {
  const found = new Map<string, TheoryLink>();
  for (const text of texts) {
    if (!text) continue;
    for (const link of extractTheoryLinks(text, excludeModuleId)) {
      found.set(link.label, link);
    }
  }
  return [...found.values()];
}

export { moduleTitle };
