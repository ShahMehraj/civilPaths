"use client";

import { useState } from "react";
import { Question, Confidence } from "@/types";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Award,
} from "lucide-react";

interface Props {
  questions: Question[];
  mode: "learn" | "test" | "revision";
}

export function QuizEngine({ questions, mode }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [confidence, setConfidence] = useState<Confidence | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[currentIndex];
  const isCorrect =
    showResult &&
    selectedOptions.length === question.correctOptionIds.length &&
    selectedOptions.every((id) => question.correctOptionIds.includes(id));

  function handleOptionSelect(optionIndex: number) {
    if (showResult) return;

    if (question.correctOptionIds.length === 1) {
      setSelectedOptions([optionIndex]);
    } else {
      setSelectedOptions((prev) =>
        prev.includes(optionIndex)
          ? prev.filter((i) => i !== optionIndex)
          : [...prev, optionIndex]
      );
    }
  }

  function handleSubmit() {
    if (selectedOptions.length === 0) return;
    setShowResult(true);
    if (
      selectedOptions.length === question.correctOptionIds.length &&
      selectedOptions.every((id) => question.correctOptionIds.includes(id))
    ) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOptions([]);
      setShowResult(false);
      setConfidence(null);
    } else {
      setCompleted(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedOptions([]);
    setShowResult(false);
    setConfidence(null);
    setScore(0);
    setCompleted(false);
  }

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Practice Complete!
        </h2>
        <p className="text-lg text-text-secondary mb-6">
          You scored{" "}
          <span className="font-bold text-text-primary">
            {score}/{questions.length}
          </span>{" "}
          ({percentage}%)
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-lg transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-text-muted">
        <span>
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span>Score: {score}/{currentIndex + (showResult ? 1 : 0)}</span>
      </div>
      <div className="h-1.5 bg-background rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 rounded-full transition-all"
          style={{
            width: `${((currentIndex + (showResult ? 1 : 0)) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex items-start gap-3 mb-5">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center">
            {currentIndex + 1}
          </span>
          <div>
            <p className="text-base font-medium text-text-primary leading-relaxed whitespace-pre-line">
              {question.prompt}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-background text-text-muted font-medium">
                {question.difficulty}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-background text-text-muted font-medium">
                {question.skill}
              </span>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {question.options.map((option, index) => {
            const isSelected = selectedOptions.includes(index);
            const isCorrectOption = question.correctOptionIds.includes(index);

            let optionStyle = "border-border hover:border-navy-100 bg-surface";
            if (showResult) {
              if (isCorrectOption) {
                optionStyle = "border-success bg-success-light";
              } else if (isSelected && !isCorrectOption) {
                optionStyle = "border-error bg-error-light";
              } else {
                optionStyle = "border-border bg-surface opacity-60";
              }
            } else if (isSelected) {
              optionStyle = "border-orange-400 bg-orange-50";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={showResult}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-all flex items-start gap-3",
                  optionStyle
                )}
                aria-pressed={isSelected}
              >
                <span
                  className={cn(
                    "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                    showResult && isCorrectOption
                      ? "border-success text-success"
                      : showResult && isSelected && !isCorrectOption
                        ? "border-error text-error"
                        : isSelected
                          ? "border-orange-500 text-orange-500 bg-orange-50"
                          : "border-border text-text-muted"
                  )}
                >
                  {showResult && isCorrectOption ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : showResult && isSelected && !isCorrectOption ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </span>
                <span className="text-sm text-text-primary">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Confidence selector (before submit) */}
        {!showResult && selectedOptions.length > 0 && mode === "learn" && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-text-muted mb-2">
              How confident are you?
            </p>
            <div className="flex gap-2">
              {(["sure", "unsure", "guess"] as Confidence[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setConfidence(c)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors capitalize",
                    confidence === c
                      ? "border-orange-400 bg-orange-50 text-orange-600"
                      : "border-border text-text-secondary hover:border-navy-100"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Submit / Next */}
        <div className="mt-5 flex items-center justify-between">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOptions.length === 0}
              className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors text-sm"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors text-sm"
            >
              {currentIndex < questions.length - 1 ? "Next" : "Finish"}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Explanation (Learn mode) */}
      {showResult && mode === "learn" && (
        <div
          className={cn(
            "rounded-xl border p-5 space-y-3",
            isCorrect
              ? "border-success/30 bg-success-light/50"
              : "border-error/30 bg-error-light/50"
          )}
        >
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-success" />
            ) : (
              <XCircle className="w-5 h-5 text-error" />
            )}
            <span
              className={cn(
                "font-semibold text-sm",
                isCorrect ? "text-success" : "text-error"
              )}
            >
              {isCorrect ? "Correct!" : "Incorrect"}
            </span>
          </div>

          <p className="text-sm text-text-primary leading-relaxed">
            {question.explanation}
          </p>

          {/* Option-wise explanations */}
          {!isCorrect && (
            <div className="mt-3 space-y-2">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                Option Analysis
              </p>
              {Object.entries(question.optionExplanations).map(
                ([key, explanation]) => (
                  <div key={key} className="text-xs text-text-secondary">
                    <span className="font-medium">
                      {String.fromCharCode(65 + Number(key))}:
                    </span>{" "}
                    {explanation}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
