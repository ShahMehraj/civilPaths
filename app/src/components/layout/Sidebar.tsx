"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  BookOpen,
  ClipboardList,
  RotateCcw,
  StickyNote,
  Newspaper,
  BarChart3,
  Bookmark,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/practice", label: "Practice Tests", icon: ClipboardList },
  { href: "/revision", label: "Revision", icon: RotateCcw },
  { href: "/notes", label: "Notes", icon: StickyNote },
  { href: "/current-affairs", label: "Current Affairs", icon: Newspaper },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow border-r border-border bg-surface pt-5 pb-4 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 px-6 mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-navy-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-heading">
                CP
              </span>
            </div>
            <div>
              <span className="text-lg font-bold text-navy-900 font-heading tracking-tight">
                CivilsPath
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-orange-100 text-orange-600"
                    : "text-text-secondary hover:bg-background hover:text-text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 flex-shrink-0",
                    isActive ? "text-orange-600" : "text-text-muted"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="px-4 py-3 border-t border-border mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center">
              <span className="text-xs font-semibold text-navy-800">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">
                UPSC Aspirant
              </p>
              <p className="text-xs text-text-muted">CSE 2026</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
