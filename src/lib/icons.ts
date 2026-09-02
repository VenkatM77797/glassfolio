import {
  Cloud,
  Database,
  LayoutGrid,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { SkillCategory } from "@/data/skills";

/** Maps the icon names allowed in src/data/skills.ts to Lucide components. */
export const skillIcons: Record<SkillCategory["icon"], LucideIcon> = {
  layout: LayoutGrid,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  sparkles: Sparkles,
};
