"use client";

import { LessonBlock } from "@/types";
import {
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Scale,
  GraduationCap,
  CheckSquare,
  FileText,
  Repeat,
  Crosshair,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  block: LessonBlock;
  onComplete: () => void;
}

export function LessonBlockRenderer({ block, onComplete }: Props) {
  switch (block.type) {
    case "hook":
      return (
        <section
          className="p-5 rounded-xl bg-surface-warm border border-orange-100"
          onMouseEnter={onComplete}
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
            <p className="text-base text-text-primary leading-relaxed italic">
              {block.content}
            </p>
          </div>
        </section>
      );

    case "one-line-summary":
      return (
        <section
          className="p-4 rounded-lg bg-navy-50 border border-navy-100"
          onMouseEnter={onComplete}
        >
          <p className="text-sm font-semibold text-navy-800 leading-relaxed">
            💡 {block.content}
          </p>
        </section>
      );

    case "explanation":
      return (
        <section className="space-y-2" onMouseEnter={onComplete}>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            {block.variant === "simple"
              ? "Simple Explanation"
              : "UPSC-Level Explanation"}
          </h3>
          <p className="text-base text-text-primary leading-[1.75]">
            {block.content}
          </p>
        </section>
      );

    case "definition":
      return (
        <section className="p-4 rounded-lg border border-border bg-surface" onMouseEnter={onComplete}>
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">Definition</p>
          <p className="text-sm font-semibold text-text-primary">{block.term}</p>
          <p className="text-sm text-text-secondary mt-1">{block.definition}</p>
        </section>
      );

    case "timeline":
      return (
        <section className="space-y-3" onMouseEnter={onComplete}>
          <h3 className="text-base font-semibold text-text-primary">
            {block.title}
          </h3>
          <div className="relative pl-6 space-y-3 border-l-2 border-orange-200">
            {block.events.map((event, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-orange-400 border-2 border-surface" />
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold text-orange-600 whitespace-nowrap min-w-[80px]">
                    {event.year}
                  </span>
                  <span className="text-sm text-text-primary">{event.description}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case "comparison":
      return (
        <section className="space-y-3" onMouseEnter={onComplete}>
          <h3 className="text-base font-semibold text-text-primary">
            {block.title}
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-background">
                  {block.columns.map((col, i) => (
                    <th
                      key={i}
                      className="px-4 py-2.5 text-left font-semibold text-text-primary border-b border-border"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={cn(
                      "border-b border-border last:border-b-0",
                      i % 2 === 0 ? "bg-surface" : "bg-background/50"
                    )}
                  >
                    <td className="px-4 py-2.5 font-medium text-text-primary whitespace-nowrap">
                      {row.label}
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className="px-4 py-2.5 text-text-secondary"
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );

    case "constitutional-article":
      return (
        <section
          className="p-5 rounded-xl border border-border bg-surface space-y-2"
          onMouseEnter={onComplete}
        >
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-navy-700" />
            <span className="text-xs font-bold text-navy-700 uppercase tracking-wide">
              {block.articleNumber !== "N/A"
                ? `Article ${block.articleNumber}`
                : "Constitutional Context"}
            </span>
          </div>
          <h4 className="text-base font-semibold text-text-primary">
            {block.title}
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            {block.content}
          </p>
        </section>
      );

    case "misconception":
      return (
        <section
          className="p-5 rounded-xl border border-error/20 bg-error-light/50 space-y-3"
          onMouseEnter={onComplete}
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-error flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5" />
            Do Not Confuse
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-error font-bold text-sm mt-0.5">✗</span>
              <p className="text-sm text-text-primary">{block.wrong}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-success font-bold text-sm mt-0.5">✓</span>
              <p className="text-sm text-text-primary">{block.correct}</p>
            </div>
          </div>
        </section>
      );

    case "prelims-trap":
      return (
        <section
          className="p-5 rounded-xl border border-warning/30 bg-warning-light/50 space-y-2"
          onMouseEnter={onComplete}
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-warning flex items-center gap-2">
            <Crosshair className="w-3.5 h-3.5" />
            Prelims Trap
          </h3>
          <p className="text-sm text-text-primary font-medium">
            {block.trap}
          </p>
          <p className="text-sm text-text-secondary">{block.reality}</p>
        </section>
      );

    case "mains-perspective":
      return (
        <section
          className="p-5 rounded-xl border border-info/20 bg-info-light/50 space-y-3"
          onMouseEnter={onComplete}
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-info flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5" />
            Mains Perspective
          </h3>
          <ul className="space-y-1.5">
            {block.dimensions.map((dim, i) => (
              <li
                key={i}
                className="text-sm text-text-primary flex items-start gap-2"
              >
                <span className="text-info mt-1">•</span>
                {dim}
              </li>
            ))}
          </ul>
          {block.sampleQuestion && (
            <div className="mt-3 p-3 rounded-lg bg-surface border border-border">
              <p className="text-xs font-semibold text-text-muted mb-1">
                Sample Question:
              </p>
              <p className="text-sm text-text-primary italic">
                {block.sampleQuestion}
              </p>
            </div>
          )}
        </section>
      );

    case "remember":
      return (
        <section
          className="p-5 rounded-xl border border-success/20 bg-success-light/50 space-y-3"
          onMouseEnter={onComplete}
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-success flex items-center gap-2">
            <Repeat className="w-3.5 h-3.5" />
            Key Points to Remember
          </h3>
          <ul className="space-y-1.5">
            {block.points.map((point, i) => (
              <li
                key={i}
                className="text-sm text-text-primary flex items-start gap-2"
              >
                <span className="text-success font-bold mt-0.5 text-xs">
                  {i + 1}.
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>
      );

    case "checkpoint":
      return (
        <section
          className="p-5 rounded-xl border border-border bg-surface space-y-4"
          onMouseEnter={onComplete}
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-2">
            <CheckSquare className="w-3.5 h-3.5" />
            Quick Recall Check
          </h3>
          <div className="space-y-3">
            {block.questions.map((q, i) => (
              <details key={i} className="group">
                <summary className="text-sm font-medium text-text-primary cursor-pointer hover:text-orange-600 list-none flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">Q{i + 1}.</span>
                  {q.question}
                </summary>
                <p className="text-sm text-text-secondary mt-2 ml-6 pl-2 border-l-2 border-orange-200">
                  {q.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      );

    case "summary":
      return (
        <section
          className="p-5 rounded-xl border border-navy-100 bg-navy-50 space-y-3"
          onMouseEnter={onComplete}
        >
          <h3 className="text-base font-semibold text-navy-900">
            Summary
          </h3>
          <ul className="space-y-2">
            {block.points.map((point, i) => (
              <li
                key={i}
                className="text-sm text-text-primary flex items-start gap-2"
              >
                <span className="text-navy-700">→</span>
                {point}
              </li>
            ))}
          </ul>
        </section>
      );

    case "source-reference":
      return (
        <section
          className="p-4 rounded-lg bg-background border border-border"
          onMouseEnter={onComplete}
        >
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <FileText className="w-3.5 h-3.5" />
            <span>
              Source: {block.sourceFile} (Pages{" "}
              {block.sourcePages.join(", ")})
            </span>
          </div>
        </section>
      );

    default:
      return null;
  }
}
