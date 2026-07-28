import { subjects } from "@/data/subjects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LearnPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Learn
        </h1>
        <p className="text-text-secondary">
          Choose a subject to begin your preparation journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className={`relative rounded-xl border bg-surface p-6 transition-all ${
              subject.active
                ? "border-border hover:border-orange-200 hover:shadow-md"
                : "border-border/60 opacity-70"
            }`}
          >
            {!subject.active && (
              <span className="absolute top-4 right-4 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-background text-text-muted">
                Coming Soon
              </span>
            )}

            <div className="text-3xl mb-4" role="img" aria-label={subject.name}>
              {subject.icon}
            </div>

            <h3 className="text-lg font-semibold text-text-primary mb-1.5">
              {subject.name}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {subject.description}
            </p>

            <div className="text-xs text-text-muted mb-4">
              {subject.moduleCount} topics
            </div>

            {subject.active ? (
              <Link
                href={`/learn/${subject.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="text-sm text-text-muted">Available soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
