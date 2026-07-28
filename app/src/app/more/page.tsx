import Link from "next/link";
import {
  RotateCcw,
  StickyNote,
  BarChart3,
  Newspaper,
  Bookmark,
} from "lucide-react";

const menuItems = [
  { href: "/revision", label: "Revision", icon: RotateCcw },
  { href: "/notes", label: "Notes", icon: StickyNote },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/current-affairs", label: "Current Affairs", icon: Newspaper },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
];

export default function MorePage() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-text-primary mb-6">More</h1>
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-orange-200 hover:shadow-sm transition-all"
            >
              <Icon className="w-5 h-5 text-text-muted" />
              <span className="text-sm font-medium text-text-primary">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
