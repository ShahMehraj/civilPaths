// ─── Subject & Curriculum ───────────────────────────────────────────

export type SubjectId =
  | "polity"
  | "history"
  | "geography"
  | "economy"
  | "environment"
  | "science-tech"
  | "art-culture"
  | "society"
  | "governance"
  | "international-relations"
  | "ethics"
  | "current-affairs";

export interface Subject {
  id: SubjectId;
  name: string;
  description: string;
  icon: string;
  moduleCount: number;
  active: boolean;
  progress?: number;
}

export interface CurriculumModule {
  order: number;
  id: string;
  title: string;
  sourcePattern: string; // regex pattern as string for serialization
  sourceFile?: string;
  lessons: Lesson[];
}

// ─── Lesson ─────────────────────────────────────────────────────────

export type MasteryLevel =
  | "not-started"
  | "learning"
  | "needs-revision"
  | "strong"
  | "mastered";

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  estimatedMinutes: number;
  mastery: MasteryLevel;
  completed: boolean;
  blocks: LessonBlock[];
  sourceFiles: string[];
  sourcePages: number[];
}

export type LessonBlock =
  | HookBlock
  | OneLineSummaryBlock
  | ExplanationBlock
  | DefinitionBlock
  | TimelineBlock
  | ComparisonBlock
  | ConstitutionalArticleBlock
  | JudgmentBlock
  | ExampleBlock
  | MisconceptionBlock
  | RememberBlock
  | PrelimsTrapBlock
  | MainsPerspectiveBlock
  | CheckpointBlock
  | SummaryBlock
  | SourceReferenceBlock;

interface BaseBlock {
  id: string;
  type: string;
}

export interface HookBlock extends BaseBlock {
  type: "hook";
  content: string;
}

export interface OneLineSummaryBlock extends BaseBlock {
  type: "one-line-summary";
  content: string;
}

export interface ExplanationBlock extends BaseBlock {
  type: "explanation";
  variant: "simple" | "formal";
  content: string;
}

export interface DefinitionBlock extends BaseBlock {
  type: "definition";
  term: string;
  definition: string;
}

export interface TimelineBlock extends BaseBlock {
  type: "timeline";
  title: string;
  events: { year: string; description: string }[];
}

export interface ComparisonBlock extends BaseBlock {
  type: "comparison";
  title: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
}

export interface ConstitutionalArticleBlock extends BaseBlock {
  type: "constitutional-article";
  articleNumber: string;
  title: string;
  content: string;
}

export interface JudgmentBlock extends BaseBlock {
  type: "judgment";
  caseName: string;
  year: string;
  summary: string;
  significance: string;
}

export interface ExampleBlock extends BaseBlock {
  type: "example";
  title: string;
  content: string;
}

export interface MisconceptionBlock extends BaseBlock {
  type: "misconception";
  wrong: string;
  correct: string;
}

export interface RememberBlock extends BaseBlock {
  type: "remember";
  points: string[];
}

export interface PrelimsTrapBlock extends BaseBlock {
  type: "prelims-trap";
  trap: string;
  reality: string;
}

export interface MainsPerspectiveBlock extends BaseBlock {
  type: "mains-perspective";
  topic: string;
  dimensions: string[];
  sampleQuestion?: string;
}

export interface CheckpointBlock extends BaseBlock {
  type: "checkpoint";
  questions: { question: string; answer: string }[];
}

export interface SummaryBlock extends BaseBlock {
  type: "summary";
  points: string[];
}

export interface SourceReferenceBlock extends BaseBlock {
  type: "source-reference";
  sourceFile: string;
  sourcePages: number[];
  excerpt?: string;
}

// ─── Quiz ───────────────────────────────────────────────────────────

export type QuestionType =
  | "single-correct"
  | "multiple-statements"
  | "match-following"
  | "chronology"
  | "assertion-reason"
  | "article-matching"
  | "institution-matching"
  | "scenario-based"
  | "true-false"
  | "fill-recall"
  | "short-conceptual"
  | "mains-prompt";

export type Difficulty = "easy" | "medium" | "hard";

export type Skill =
  | "recall"
  | "understanding"
  | "application"
  | "elimination"
  | "chronology"
  | "comparison"
  | "judgment-analysis";

export type UpscTrack = "prelims" | "gs2" | "psir";

export interface Question {
  id: string;
  subject: SubjectId;
  lessonIds: string[];
  type: QuestionType;
  prompt: string;
  statements?: string[];
  options: string[];
  correctOptionIds: number[];
  explanation: string;
  optionExplanations: Record<string, string>;
  difficulty: Difficulty;
  skill: Skill;
  upscTrack: UpscTrack;
  sourceFiles: string[];
  sourcePages: number[];
  tags: string[];
}

export type Confidence = "sure" | "unsure" | "guess";

export interface QuizAttempt {
  questionId: string;
  selectedOptionIds: number[];
  confidence: Confidence;
  timeTaken: number;
  correct: boolean;
}

// ─── Progress ───────────────────────────────────────────────────────

export interface LearnerProgress {
  lessonsCompleted: number;
  totalLessons: number;
  questionsAttempted: number;
  recentAccuracy: number;
  currentStreak: number;
  weakTopics: string[];
  masteryDistribution: Record<MasteryLevel, number>;
}

// ─── Notes & Bookmarks ──────────────────────────────────────────────

export interface Bookmark {
  id: string;
  type: "lesson" | "question";
  targetId: string;
  createdAt: string;
}

export interface Note {
  id: string;
  lessonId: string;
  blockId?: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
