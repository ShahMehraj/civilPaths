import { Lesson, Question } from "@/types";

// Import all chapters
import { lesson as lesson01, questions as questions01 } from "./01-making-of-constitution";
import { lesson as lesson02, questions as questions02 } from "./02-preamble";
import { lesson as lesson03, questions as questions03 } from "./03-salient-features";
import { lesson as lesson04, questions as questions04 } from "./04-sources-of-constitution";
import { lesson as lesson05, questions as questions05 } from "./05-schedules";
import { lesson as lesson06, questions as questions06 } from "./06-union-territory";
import { lesson as lesson07, questions as questions07 } from "./07-citizenship";
import { lesson as lesson08, questions as questions08 } from "./08-fundamental-rights";
import { lesson as lesson09, questions as questions09 } from "./09-directive-principles";
import { lesson as lesson10, questions as questions10 } from "./10-fundamental-duties";
import { lesson as lesson11, questions as questions11 } from "./11-amendment";
import { lesson as lesson12, questions as questions12 } from "./12-basic-structure";
import { lesson as lesson13, questions as questions13 } from "./13-system-of-government";
import { lesson as lesson14, questions as questions14 } from "./14-union-executive";
import { lesson as lesson15, questions as questions15 } from "./15-parliament";
import { lesson as lesson16, questions as questions16 } from "./16-state-executive";
import { lesson as lesson17, questions as questions17 } from "./17-state-legislature";
import { lesson as lesson18, questions as questions18 } from "./18-judiciary";
import { lesson as lesson19, questions as questions19 } from "./19-local-self-government";
import { lesson as lesson20, questions as questions20 } from "./20-uts-scheduled-areas";
import { lesson as lesson21, questions as questions21 } from "./21-elections";
import { lesson as lesson22, questions as questions22 } from "./22-constitutional-bodies";
import { lesson as lesson23, questions as questions23 } from "./23-non-constitutional-bodies";
import { lesson as lesson24, questions as questions24 } from "./24-special-provisions";
import { lesson as lesson25, questions as questions25 } from "./25-official-languages";
import { lesson as lesson26, questions as questions26 } from "./26-cooperative-sector";
import { lesson as lesson27, questions as questions27 } from "./27-governance";
import { lesson as lesson28, questions as questions28 } from "./28-nhrc";
import { lesson as lesson29, questions as questions29 } from "./29-ncm";
import { lesson as lesson30, questions as questions30 } from "./30-ncpcr";
import { lesson as lesson31, questions as questions31 } from "./31-ncw";
import { lesson as lesson32, questions as questions32 } from "./32-key-judgements";
import {
  extraSchedules,
  extraUnion,
  extraCitizenship,
  extraDPSP,
  extraDuties,
  extraAmendment,
} from "./extra-questions";

// ─── All Lessons ────────────────────────────────────────────────────
export const allPolityLessons: Lesson[] = [
  lesson01, lesson02, lesson03, lesson04, lesson05, lesson06, lesson07,
  lesson08, lesson09, lesson10, lesson11, lesson12, lesson13, lesson14,
  lesson15, lesson16, lesson17, lesson18, lesson19, lesson20, lesson21,
  lesson22, lesson23, lesson24, lesson25, lesson26, lesson27, lesson28,
  lesson29, lesson30, lesson31, lesson32,
];

// ─── All Questions ──────────────────────────────────────────────────
export const allPolityQuestions: Question[] = [
  ...questions01, ...questions02, ...questions03, ...questions04,
  ...questions05, ...extraSchedules, ...questions06, ...extraUnion,
  ...questions07, ...extraCitizenship, ...questions08,
  ...questions09, ...extraDPSP, ...questions10, ...extraDuties,
  ...questions11, ...extraAmendment, ...questions12,
  ...questions13, ...questions14, ...questions15, ...questions16,
  ...questions17, ...questions18, ...questions19, ...questions20,
  ...questions21, ...questions22, ...questions23, ...questions24,
  ...questions25, ...questions26, ...questions27, ...questions28,
  ...questions29, ...questions30, ...questions31, ...questions32,
];

// ─── Lookup Helpers ─────────────────────────────────────────────────
export function getLessonById(id: string): Lesson | undefined {
  return allPolityLessons.find((l) => l.id === id);
}

export function getLessonByModuleId(moduleId: string): Lesson | undefined {
  return allPolityLessons.find((l) => l.moduleId === moduleId);
}

export function getQuestionsForLesson(lessonId: string): Question[] {
  return allPolityQuestions.filter((q) => q.lessonIds.includes(lessonId));
}

export function getQuestionsForModule(moduleId: string): Question[] {
  const lesson = getLessonByModuleId(moduleId);
  if (!lesson) return [];
  return getQuestionsForLesson(lesson.id);
}
