import Link from "next/link";
import { subjects } from "@/data/subjects";
import { ArrowRight } from "lucide-react";

export function SubjectGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-text-primary">Subjects</h2>
        <Link
          href="/learn"
          className="text-sm font-medium text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
        >
          View all <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className={`relative rounded-xl border bg-surface p-5 transition-all ${
              subject.active
                ? "border-border hover:border-orange-200 hover:shadow-sm cursor-pointer"
                : "border-border/60 opacity-75"
            }`}
          >
            {/* Badge */}
            {subject.active ? (
              <span className="absolute top-4 right-4 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-success-light text-success">
                Active
              </span>
            ) : (
              <span className="absolute top-4 right-4 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-background text-text-muted">
                Coming Soon
              </span>
            )}

            {/* Icon */}
            <div className="text-2xl mb-3" role="img" aria-label={subject.name}>
              {subject.icon}
            </div>

            {/* Content */}
            <h3 className="text-base font-semibold text-text-primary mb-1.5">
              {subject.name}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
              {subject.description}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted">
                {subject.moduleCount} topics
              </span>
              {subject.active && subject.progress !== undefined && (
                <span className="text-xs font-medium text-orange-600">
                  {subject.progress}% completed
                </span>
              )}
            </div>

            {/* Progress bar */}
            {subject.active && subject.progress !== undefined && (
              <div className="mt-3 h-1.5 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full transition-all"
                  style={{ width: `${Math.max(subject.progress, 2)}%` }}
                  role="progressbar"
                  aria-valuenow={subject.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${subject.progress}% complete`}
                />
              </div>
            )}

            {/* CTA */}
            {subject.active && (
              <Link
                href={`/learn/${subject.id}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 hover:text-orange-700"
              >
                Start Learning <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
