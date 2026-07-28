"use client";

import Link from "next/link";
import { CurriculumModule } from "@/types";
import {
  CheckCircle2,
  Circle,
  Clock,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  modules: CurriculumModule[];
}

export function CourseCurriculum({ modules }: Props) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-text-primary">Curriculum</h2>
        <span className="text-sm text-text-muted">
          {modules.length} modules
        </span>
      </div>

      <div className="space-y-2">
        {modules.map((mod, index) => {
          const isAvailable = true; // all modules are now active
          const isCompleted = false;

          return (
            <div
              key={mod.id}
              className={cn(
                "rounded-xl border bg-surface p-4 transition-all",
                "border-border hover:border-orange-200 hover:shadow-sm"
              )}
            >
              <div className="flex items-center gap-4">
                {/* Status indicator */}
                <div className="flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  ) : (
                    <Circle
                      className={cn(
                        "w-5 h-5",
                        isAvailable ? "text-orange-400" : "text-border"
                      )}
                    />
                  )}
                </div>

                {/* Module info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "text-sm font-semibold mt-0.5",
                      isAvailable ? "text-text-primary" : "text-text-secondary"
                    )}
                  >
                    {mod.title}
                  </h3>
                </div>

                {/* Duration + CTA */}
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs text-text-muted">
                    <Clock className="w-3.5 h-3.5" /> ~25 min
                  </span>
                  {isAvailable ? (
                    <Link
                      href={`/learn/polity/${mod.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Start
                    </Link>
                  ) : (
                    <span className="text-xs text-text-muted px-3 py-1.5">
                      Locked
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
