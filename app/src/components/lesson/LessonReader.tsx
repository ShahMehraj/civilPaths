"use client";

import { useState } from "react";
import { Lesson, LessonBlock } from "@/types";
import { LessonBlockRenderer } from "./LessonBlockRenderer";
import {
  CheckCircle2,
  Bookmark,
  Clock,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

interface Props {
  lesson: Lesson;
}

export function LessonReader({ lesson }: Props) {
  const [completedBlocks, setCompletedBlocks] = useState<Set<string>>(
    new Set()
  );
  const [isBookmarked, setIsBookmarked] = useState(false);

  const progress = Math.round(
    (completedBlocks.size / lesson.blocks.length) * 100
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-3 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/learn/polity"
              className="p-1.5 rounded-lg hover:bg-surface text-text-muted hover:text-text-primary transition-colors"
              aria-label="Back to curriculum"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-xs text-orange-600 font-medium">
                Indian Polity
              </p>
              <h1 className="text-sm font-semibold text-text-primary line-clamp-1">
                {lesson.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-text-muted">
              <Clock className="w-3.5 h-3.5" />
              {lesson.estimatedMinutes} min
            </span>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked
                  ? "text-orange-500 bg-orange-50"
                  : "text-text-muted hover:text-text-secondary hover:bg-surface"
              }`}
              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              aria-pressed={isBookmarked}
            >
              <Bookmark
                className="w-4.5 h-4.5"
                fill={isBookmarked ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-2 h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Lesson Title */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          {lesson.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {lesson.estimatedMinutes} min read
          </span>
          <span>•</span>
          <span>{lesson.blocks.length} sections</span>
        </div>
      </div>

      {/* Lesson Blocks */}
      <div className="reading-width space-y-8">
        {lesson.blocks.map((block: LessonBlock) => (
          <LessonBlockRenderer
            key={block.id}
            block={block}
            onComplete={() => {
              setCompletedBlocks((prev) => new Set([...prev, block.id]));
            }}
          />
        ))}
      </div>

      {/* Mark Complete */}
      <div className="reading-width mt-12 mb-8 p-6 rounded-xl border border-border bg-surface text-center">
        <CheckCircle2 className="w-10 h-10 text-success mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Lesson Complete?
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          If you&apos;ve reviewed all sections, mark this lesson as complete and
          proceed to practice questions.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-5 py-2.5 bg-success hover:bg-success/90 text-white font-medium rounded-lg transition-colors text-sm">
            Mark Complete
          </button>
          <Link
            href={`/practice/polity/${lesson.moduleId}`}
            className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-lg transition-colors text-sm"
          >
            Practice Questions →
          </Link>
        </div>
      </div>
    </div>
  );
}
