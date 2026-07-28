import Link from "next/link";
import { PlayCircle, Clock } from "lucide-react";

export function ContinueLearning() {
  // Placeholder for when a learner has started a lesson
  const currentLesson = {
    title: "Sources of the Indian Constitution",
    module: "Indian Polity",
    progress: 0,
    estimatedMinutes: 25,
    href: "/learn/polity/sources-of-constitution",
  };

  return (
    <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Continue Learning
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Lesson info */}
        <div className="flex-1">
          <p className="text-xs font-medium text-orange-600 uppercase tracking-wide mb-1">
            {currentLesson.module}
          </p>
          <h3 className="text-base font-semibold text-text-primary mb-2">
            {currentLesson.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {currentLesson.estimatedMinutes} min
            </span>
            <span>{currentLesson.progress}% completed</span>
          </div>
        </div>

        {/* Progress + CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block w-32">
            <div className="h-2 bg-background rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{
                  width: `${Math.max(currentLesson.progress, 3)}%`,
                }}
              />
            </div>
          </div>
          <Link
            href={currentLesson.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            <PlayCircle className="w-4 h-4" />
            {currentLesson.progress > 0 ? "Continue" : "Start"}
          </Link>
        </div>
      </div>
    </section>
  );
}
