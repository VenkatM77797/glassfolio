import { motion } from "framer-motion";
import { Briefcase, Folder, Home, Layers, Mail, User, type LucideIcon } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { portfolio } from "@/data/portfolio";
import { scrollToSection, useActiveSection } from "@/hooks/use-active-section";
import { sections } from "@/lib/sections";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  home: Home,
  user: User,
  layers: Layers,
  folder: Folder,
  briefcase: Briefcase,
  mail: Mail,
};

export function Navigation() {
  const active = useActiveSection();

  return (
    <>
      {/* Desktop: floating translucent bar */}
      <header className="fixed inset-x-0 top-0 z-50 hidden justify-center px-6 pt-4 md:flex">
        <nav
          aria-label="Main"
          className="glass glass-sheen flex items-center gap-1 rounded-full p-1.5 pl-4 shadow-glass"
        >
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="mr-2 text-sm font-semibold tracking-tight"
          >
            {portfolio.shortName}
          </button>

          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                   isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill-desktop"
                    className="absolute inset-0 rounded-full bg-black/5 ring-1 ring-black/10 dark:bg-white/15 dark:ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{section.label}</span>
              </button>
            );
          })}

          <ThemeToggle className="ml-2" />
        </nav>
      </header>

      {/* Mobile: iOS-style bottom tab bar */}
      <nav
        aria-label="Main"
        className="glass-strong fixed inset-x-0 bottom-0 z-50 flex items-stretch justify-around px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden"
      >
        {sections.map((section) => {
          const Icon = icons[section.icon] ?? Home;
          const isActive = active === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="nav-pill-mobile"
                  className="absolute inset-0 rounded-xl bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <Icon className="relative size-5" aria-hidden="true" />
              <span className="relative text-[0.62rem] font-medium">{section.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile theme control floats out of the way of the tab bar */}
      <div className="fixed top-3 right-3 z-50 md:hidden">
        <ThemeToggle />
      </div>
    </>
  );
}
