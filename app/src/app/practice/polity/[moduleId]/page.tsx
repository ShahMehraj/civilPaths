import { QuizEngine } from "@/components/quiz/QuizEngine";
import { allPolityQuestions, getQuestionsForModule } from "@/data/polity";
import { polityCurriculum } from "@/data/polity-curriculum";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  return [
    { moduleId: "all" },
    ...polityCurriculum.map((m) => ({ moduleId: m.id })),
  ];
}

interface Props {
  params: Promise<{ moduleId: string }>;
}

export default async function ChapterQuizPage({ params }: Props) {
  const { moduleId } = await params;

  // "all" = attempt all questions
  if (moduleId === "all") {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/practice"
            className="p-1.5 rounded-lg hover:bg-surface text-text-muted hover:text-text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <p className="text-xs text-orange-600 font-medium">Indian Polity</p>
            <h1 className="text-xl font-bold text-text-primary">
              All Questions ({allPolityQuestions.length})
            </h1>
          </div>
        </div>
        <QuizEngine questions={allPolityQuestions} mode="learn" />
      </div>
    );
  }

  const curriculumModule = polityCurriculum.find((m) => m.id === moduleId);
  if (!curriculumModule) notFound();

  const questions = getQuestionsForModule(moduleId);
  if (questions.length === 0) notFound();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/practice"
          className="p-1.5 rounded-lg hover:bg-surface text-text-muted hover:text-text-primary transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div>
          <p className="text-xs text-orange-600 font-medium">Indian Polity</p>
          <h1 className="text-xl font-bold text-text-primary">
            {curriculumModule.title} ({questions.length} questions)
          </h1>
        </div>
      </div>
      <QuizEngine questions={questions} mode="learn" />
    </div>
  );
}
