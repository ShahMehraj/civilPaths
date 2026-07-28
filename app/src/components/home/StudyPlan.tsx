import { BookOpen, HelpCircle, RotateCcw, Target } from "lucide-react";

export function StudyPlan() {
  const plan = {
    lessonsDue: 1,
    questionsDue: 5,
    revisionsDue: 0,
    dailyTarget: 30, // minutes
  };

  return (
    <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Today&apos;s Study Plan
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
          <div className="w-9 h-9 rounded-lg bg-info-light flex items-center justify-center">
            <BookOpen className="w-4.5 h-4.5 text-info" />
          </div>
          <div>
            <p className="text-lg font-bold text-text-primary">
              {plan.lessonsDue}
            </p>
            <p className="text-xs text-text-secondary">Lessons</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
          <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center">
            <HelpCircle className="w-4.5 h-4.5 text-orange-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-text-primary">
              {plan.questionsDue}
            </p>
            <p className="text-xs text-text-secondary">Questions</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
          <div className="w-9 h-9 rounded-lg bg-warning-light flex items-center justify-center">
            <RotateCcw className="w-4.5 h-4.5 text-warning" />
          </div>
          <div>
            <p className="text-lg font-bold text-text-primary">
              {plan.revisionsDue}
            </p>
            <p className="text-xs text-text-secondary">Revisions</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
          <div className="w-9 h-9 rounded-lg bg-success-light flex items-center justify-center">
            <Target className="w-4.5 h-4.5 text-success" />
          </div>
          <div>
            <p className="text-lg font-bold text-text-primary">
              {plan.dailyTarget}m
            </p>
            <p className="text-xs text-text-secondary">Daily Target</p>
          </div>
        </div>
      </div>
    </section>
  );
}
