import { getLessonByModuleId, allPolityLessons } from "@/data/polity";
import { LessonReader } from "@/components/lesson/LessonReader";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allPolityLessons.map((lesson) => ({ lessonId: lesson.moduleId }));
}

interface Props {
  params: Promise<{ lessonId: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { lessonId } = await params;

  const lesson = getLessonByModuleId(lessonId);

  if (!lesson) {
    notFound();
  }

  return <LessonReader lesson={lesson} />;
}
