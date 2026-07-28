import { polityCurriculum } from "@/data/polity-curriculum";
import { CourseCurriculum } from "@/components/course/CourseCurriculum";
import { BookOpen, Clock, BarChart3, Award } from "lucide-react";

export default function PolityCourseePage() {
  const totalModules = polityCurriculum.length;
  const completedModules = 0;
  const totalEstimatedHours = Math.round(totalModules * 0.5); // ~30min per module

  return (
    <div className="max-w-5xl mx-auto">
      {/* Course Header */}
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl shrink-0">
            ⚖️
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              Indian Polity
            </h1>
            <p className="text-text-secondary max-w-2xl">
              Comprehensive coverage of the Indian Constitution, governance,
              political institutions and processes — from the Preamble to key
              judicial decisions.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
            <BookOpen className="w-5 h-5 text-info" />
            <div>
              <p className="text-lg font-bold text-text-primary">
                {totalModules}
              </p>
              <p className="text-xs text-text-secondary">Modules</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
            <Clock className="w-5 h-5 text-text-muted" />
            <div>
              <p className="text-lg font-bold text-text-primary">
                ~{totalEstimatedHours}h
              </p>
              <p className="text-xs text-text-secondary">Study Time</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
            <BarChart3 className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-lg font-bold text-text-primary">
                {Math.round((completedModules / totalModules) * 100)}%
              </p>
              <p className="text-xs text-text-secondary">Complete</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
            <Award className="w-5 h-5 text-success" />
            <div>
              <p className="text-lg font-bold text-text-primary">—</p>
              <p className="text-xs text-text-secondary">Mastery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <CourseCurriculum modules={polityCurriculum} />
    </div>
  );
}
