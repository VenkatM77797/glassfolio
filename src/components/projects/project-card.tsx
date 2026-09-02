import { ExternalLink, Github } from "lucide-react";

import { GlassBadge } from "@/components/ui/glass-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { SafeImage } from "@/components/ui/safe-image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <GlassCard interactive className="group flex h-full flex-col overflow-hidden p-0" sheen={false}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open details for ${project.title}`}
        className="flex flex-1 flex-col text-left"
      >
        <div className="aspect-16/10 w-full overflow-hidden bg-secondary">
          <SafeImage
            src={project.image}
            alt={`${project.title} preview`}
            fallbackLabel={project.title.slice(0, 1)}
            className="size-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.year ? (
              <span className="mt-1 font-mono text-xs text-muted-foreground">{project.year}</span>
            ) : null}
          </div>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <li key={tech}>
                <GlassBadge variant="outline" size="sm">
                  {tech}
                </GlassBadge>
              </li>
            ))}
            {project.technologies.length > 4 ? (
              <li>
                <GlassBadge variant="outline" size="sm">
                  +{project.technologies.length - 4}
                </GlassBadge>
              </li>
            ) : null}
          </ul>
        </div>
      </button>

      {project.github || project.demo ? (
        <div className="hairline-t flex items-center gap-2 px-5 py-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-5" aria-hidden="true" />
              Code
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              <ExternalLink className="size-4.5" aria-hidden="true" />
              Live demo
            </a>
          ) : null}
        </div>
      ) : null}
    </GlassCard>
  );
}
