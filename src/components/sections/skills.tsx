import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { AnimatedContainer } from "@/components/ui/animated-container";
import { GlassBadge } from "@/components/ui/glass-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/skills";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { skillIcons } from "@/lib/icons";
import { fadeUp, spring, staticVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Skills() {
  const reduced = useReducedMotion();
  const [openLabel, setOpenLabel] = useState<string | null>(skills[0]?.label ?? null);
  const variants = reduced ? staticVariants : fadeUp;

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for"
        subtitle="Tap a category to expand it."
      />

      <AnimatedContainer stagger={0.07} className="mt-10 grid gap-3 md:grid-cols-2">
        {skills.map((category) => {
          const Icon = skillIcons[category.icon];
          const open = openLabel === category.label;
          const panelId = `skills-panel-${category.label.toLowerCase()}`;

          return (
            <motion.div key={category.label} variants={variants}>
              <GlassCard className="overflow-hidden p-0">
                <button
                  type="button"
                  onClick={() => setOpenLabel(open ? null : category.label)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="flex w-full items-center gap-3 p-5 text-left"
                >
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl transition-colors",
                      open ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground",
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-medium">{category.label}</span>
                    <span className="block text-xs text-muted-foreground">
                      {category.items.length} skills
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={spring}
                    className="text-muted-foreground"
                  >
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      initial={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-wrap gap-2 px-5 pb-5">
                        {category.items.map((item) => (
                          <li key={item}>
                            <GlassBadge variant="accent">{item}</GlassBadge>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          );
        })}
      </AnimatedContainer>
    </Section>
  );
}
