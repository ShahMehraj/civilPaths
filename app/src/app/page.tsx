import { HeroSection } from "@/components/home/HeroSection";
import { SubjectGrid } from "@/components/home/SubjectGrid";
import { ContinueLearning } from "@/components/home/ContinueLearning";
import { StudyPlan } from "@/components/home/StudyPlan";
import { RecentPerformance } from "@/components/home/RecentPerformance";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <HeroSection />
      <ContinueLearning />
      <SubjectGrid />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StudyPlan />
        <RecentPerformance />
      </div>
    </div>
  );
}
