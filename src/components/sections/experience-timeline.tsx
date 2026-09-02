import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

import { AnimatedContainer } from "@/components/ui/animated-container";
import { GlassBadge } from "@/components/ui/glass-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp, staticVariants } from "@/lib/motion";

export function ExperienceTimeline() {
  const reduced = useReducedMotion();
  const variants = reduced ? staticVariants : fadeUp;

  if (experience.length === 0) return null;

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="Roles, responsibilities and the stacks behind them."
      />

      <AnimatedContainer stagger={0.1} className="relative mt-10 flex flex-col gap-4">
        {/* Timeline rail */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[19px] w-px bg-border sm:left-[23px]"
        />

        {experience.map((item) => (
          <motion.div
            key={`${item.company}-${item.role}-${item.startDate}`}
            variants={variants}
            className="relative pl-12 sm:pl-16"
          >
            <span className="glass absolute top-4 left-0 flex size-10 items-center justify-center rounded-full sm:size-12">
              <Building2 className="size-4 text-primary" aria-hidden="true" />
            </span>

            <GlassCard className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {item.startDate} — {item.endDate ? item.endDate : "Present"}
                </p>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {item.description.map((line) => (
                  <li
                    key={line}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-primary/60"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              {item.technologies.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <li key={tech}>
                      <GlassBadge variant="outline" size="sm">
                        {tech}
                      </GlassBadge>
                    </li>
                  ))}
                </ul>
              ) : null}
            </GlassCard>
          </motion.div>
        ))}
      </AnimatedContainer>
    </Section>
  );
}
