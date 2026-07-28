import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-8 sm:p-10 lg:p-12">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-4">
          Master the UPSC syllabus,
          <br />
          <span className="text-orange-400">one concept at a time.</span>
        </h1>
        <p className="text-base sm:text-lg text-navy-100/80 mb-8 leading-relaxed max-w-xl">
          Clear lessons, UPSC-style questions, smart revision, and detailed
          progress tracking — designed for serious aspirants.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/learn/polity"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Start with Indian Polity
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg transition-colors text-sm border border-white/20"
          >
            Explore Subjects
          </Link>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-12 top-8 w-24 h-24 rounded-full bg-orange-400/5 blur-2xl" />
    </section>
  );
}
