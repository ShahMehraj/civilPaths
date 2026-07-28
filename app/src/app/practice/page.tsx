import Link from "next/link";
import { allPolityQuestions } from "@/data/polity";
import { polityCurriculum } from "@/data/polity-curriculum";
import { getQuestionsForModule } from "@/data/polity";
import { ArrowRight, BookOpen, Zap } from "lucide-react";

export default function PracticePage() {
  const totalQuestions = allPolityQuestions.length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          Practice Questions
        </h1>
        <p className="text-text-secondary">
          Indian Polity — {totalQuestions} questions across {polityCurriculum.length} chapters.
        </p>
      </div>

      {/* Attempt All */}
      <div className="rounded-xl border border-orange-200 bg-surface p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                Attempt All Questions
              </h2>
              <p className="text-sm text-text-secondary">
                {totalQuestions} questions from all chapters — test your entire preparation
              </p>
            </div>
          </div>
          <Link
            href="/practice/polity/all"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Start <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Chapter-wise */}
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Chapter-wise Practice
      </h2>
      <div className="space-y-2">
        {polityCurriculum.map((mod, index) => {
          const moduleQuestions = getQuestionsForModule(mod.id);
          const count = moduleQuestions.length;

          return (
            <div
              key={mod.id}
              className="rounded-xl border border-border bg-surface p-4 hover:border-orange-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-text-muted w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      {count} question{count !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                {count > 0 ? (
                  <Link
                    href={`/practice/polity/${mod.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Practice
                  </Link>
                ) : (
                  <span className="text-xs text-text-muted">—</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
