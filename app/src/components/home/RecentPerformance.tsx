import { TrendingUp, Target, Zap, AlertTriangle } from "lucide-react";

export function RecentPerformance() {
  const stats = {
    questionsAttempted: 0,
    recentAccuracy: 0,
    currentStreak: 0,
    weakTopics: ["Not enough data yet"],
  };

  return (
    <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Recent Performance
      </h2>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 rounded-lg bg-background">
          <div className="flex items-center gap-3">
            <Target className="w-4.5 h-4.5 text-info" />
            <span className="text-sm text-text-secondary">
              Questions Attempted
            </span>
          </div>
          <span className="text-sm font-semibold text-text-primary">
            {stats.questionsAttempted}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-4.5 h-4.5 text-success" />
            <span className="text-sm text-text-secondary">
              Recent Accuracy
            </span>
          </div>
          <span className="text-sm font-semibold text-text-primary">
            {stats.recentAccuracy}%
          </span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background">
          <div className="flex items-center gap-3">
            <Zap className="w-4.5 h-4.5 text-orange-500" />
            <span className="text-sm text-text-secondary">Current Streak</span>
          </div>
          <span className="text-sm font-semibold text-text-primary">
            {stats.currentStreak} days
          </span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-4.5 h-4.5 text-warning" />
            <span className="text-sm text-text-secondary">Weak Topics</span>
          </div>
          <span className="text-sm text-text-muted italic">
            {stats.weakTopics[0]}
          </span>
        </div>
      </div>
    </section>
  );
}
