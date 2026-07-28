import { getLessonByModuleId } from "@/data/polity";
import { LessonReader } from "@/components/lesson/LessonReader";
import { notFound } from "next/navigation";

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
