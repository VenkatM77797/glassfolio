/**
 * ============================================================
 * STEP 3 — EDIT THIS FILE
 * ============================================================
 * Skill categories render automatically. Add, rename or remove
 * categories freely — the UI adapts to whatever is here.
 */

export interface SkillCategory {
  /** Category label shown on the card */
  label: string;
  /** Lucide icon name, see src/lib/icons.ts for the allowed set */
  icon: "layout" | "server" | "database" | "cloud" | "wrench" | "sparkles";
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    icon: "layout",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    label: "Backend",
    icon: "server",
    items: ["Node.js", "NestJS", "Express", "REST", "GraphQL"],
  },
  {
    label: "Database",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
  {
    label: "Cloud",
    icon: "cloud",
    items: ["AWS", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    label: "Tools",
    icon: "wrench",
    items: ["Git", "Vitest", "Figma", "Linux"],
  },
];
