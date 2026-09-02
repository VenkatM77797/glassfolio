import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { ProjectDetail } from "@/components/projects/project-detail";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { GlassButton } from "@/components/ui/glass-button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/data/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp, staticVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Filter = "all" | "featured";

export function Projects() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const variants = reduced ? staticVariants : fadeUp;

  const hasFeatured = useMemo(() => projects.some((project) => project.featured), []);
  const visible = useMemo(
    () => (filter === "featured" ? projects.filter((project) => project.featured) : projects),
    [filter],
  );

  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Selected work. Click any project for the full story."
        />

        {hasFeatured ? (
          <div className="glass flex rounded-full p-1" role="group" aria-label="Filter projects">
            {(["all", "featured"] as const).map((value) => (
              <GlassButton
                key={value}
                variant="ghost"
                size="sm"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                className={cn(
                  "capitalize",
                  filter === value && "bg-primary text-primary-foreground hover:bg-primary",
                )}
              >
                {value}
              </GlassButton>
            ))}
          </div>
        ) : null}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted-foreground">
          No projects yet — add yours in <code className="font-mono">src/data/projects.ts</code>.
        </p>
      ) : (
        <AnimatedContainer
          stagger={0.08}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project) => (
            <motion.div key={project.id} variants={variants} layout>
              <ProjectCard project={project} onOpen={setSelected} />
            </motion.div>
          ))}
        </AnimatedContainer>
      )}

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
