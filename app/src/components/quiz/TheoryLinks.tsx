import Link from "next/link";
import { TheoryLink } from "@/types";
import { moduleTitle } from "@/lib/theory-links";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface Props {
  links: TheoryLink[];
  /** Rendered above the chips; omit for inline use inside option analysis. */
  heading?: string;
  className?: string;
}

/**
 * Chips linking out to the chapters that explain a question's entities.
 *
 * Opens in a new tab so a learner mid-quiz never loses their place — quiz
 * progress is component state, so an in-tab navigation would discard it.
 *
 * Uses next/link rather than a raw anchor: the app sets `basePath`, which is
 * applied automatically to next/link but NOT to plain <a href>, so raw anchors
 * would 404 in production.
 */
export function TheoryLinks({ links, heading, className }: Props) {
  if (links.length === 0) return null;

  return (
    <div className={cn("space-y-1.5", className)}>
      {heading && (
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">
          {heading}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={
              link.sectionTitle
                ? `Jump to “${link.sectionTitle}” in ${moduleTitle(link.moduleId)} (opens in a new tab)`
                : `${link.topic} — ${moduleTitle(link.moduleId)} (opens in a new tab)`
            }
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-navy-100 bg-surface text-[11px] font-medium text-navy-800 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 transition-colors"
          >
            <span>{link.label}</span>
            {/* Name the destination section, so the reader knows where they land. */}
            {link.sectionTitle && (
              <span className="text-text-muted font-normal">
                → {link.sectionTitle}
              </span>
            )}
            <ExternalLink className="w-2.5 h-2.5 opacity-60" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}
