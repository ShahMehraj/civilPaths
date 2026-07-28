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
import {
  lesson13, questions13,
  lesson14, questions14,
  lesson15, questions15,
  lesson16, questions16,
  lesson17, questions17,
  lesson18, questions18,
  lesson19, questions19,
  lesson20, questions20,
} from "./12-to-20";
import {
  lesson21, questions21,
  lesson22, questions22,
  lesson23, questions23,
  lesson24, questions24,
  lesson25, questions25,
  lesson26, questions26,
  lesson27, questions27,
  lesson28, questions28,
  lesson29, questions29,
  lesson30, questions30,
  lesson31, questions31,
  lesson32, questions32,
} from "./21-to-32";
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
