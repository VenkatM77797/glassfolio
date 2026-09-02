import { ExternalLink, Github } from "lucide-react";

import { GlassBadge } from "@/components/ui/glass-badge";
import { GlassLinkButton } from "@/components/ui/glass-button";
import { GlassSheet } from "@/components/ui/glass-sheet";
import { SafeImage } from "@/components/ui/safe-image";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

/** Glass modal on desktop, iOS bottom sheet on mobile. */
export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <GlassSheet open={project !== null} onClose={onClose} title={project?.title ?? "Project"}>
      {project ? (
        <article className="pb-8">
          <div className="aspect-16/9 w-full overflow-hidden bg-secondary">
            <SafeImage
              src={project.image}
              alt={`${project.title} preview`}
              loading="eager"
              fallbackLabel={project.title.slice(0, 1)}
              className="size-full"
            />
          </div>

          <div className="px-6 pt-6 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              {project.year ? (
                <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
              ) : null}
            </div>

            <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>

            {project.longDescription ? (
              <>
                <h3 className="mt-7 text-sm font-semibold tracking-wide uppercase">Overview</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>
              </>
            ) : null}

            <h3 className="mt-7 text-sm font-semibold tracking-wide uppercase">Technologies</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <GlassBadge variant="accent">{tech}</GlassBadge>
                </li>
              ))}
            </ul>

            {project.screenshots && project.screenshots.length > 0 ? (
              <>
                <h3 className="mt-7 text-sm font-semibold tracking-wide uppercase">Screenshots</h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {project.screenshots.map((shot) => (
                    <li key={shot} className="aspect-16/10 overflow-hidden rounded-xl bg-secondary">
                      <SafeImage
                        src={shot}
                        alt={`${project.title} screenshot`}
                        fallbackLabel={project.title.slice(0, 1)}
                      />
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {project.github || project.demo ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.demo ? (
                  <GlassLinkButton
                    variant="primary"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ExternalLink aria-hidden="true" />
                    Live demo
                  </GlassLinkButton>
                ) : null}
                {project.github ? (
                  <GlassLinkButton href={project.github} target="_blank" rel="noreferrer noopener">
                    <Github aria-hidden="true" />
                    View code
                  </GlassLinkButton>
                ) : null}
              </div>
            ) : null}
          </div>
        </article>
      ) : null}
    </GlassSheet>
  );
}
