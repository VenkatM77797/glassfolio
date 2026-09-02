import { Download, FileText } from "lucide-react";

import { AnimatedContainer } from "@/components/ui/animated-container";
import { GlassLinkButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";
import { portfolio } from "@/data/portfolio";

/** Renders nothing when portfolio.resumeUrl is empty — no broken links. */
export function Resume() {
  const { resumeUrl, name } = portfolio;
  if (!resumeUrl) return null;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <AnimatedContainer>
        <GlassCard className="flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary">
              <FileText className="size-5 text-primary" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-semibold">Résumé</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                The full details, in one PDF page.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <GlassLinkButton
              variant="primary"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FileText aria-hidden="true" />
              View Resume
            </GlassLinkButton>
            <GlassLinkButton href={resumeUrl} download={`${name.replace(/\s+/g, "-")}-resume.pdf`}>
              <Download aria-hidden="true" />
              Download Resume
            </GlassLinkButton>
          </div>
        </GlassCard>
      </AnimatedContainer>
    </div>
  );
}
