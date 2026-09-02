import { AnimatedContainer } from "@/components/ui/animated-container";
import { GlassBadge } from "@/components/ui/glass-badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedContainer
      className={cn(
        "flex flex-col items-start gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <GlassBadge variant="accent">{eyebrow}</GlassBadge> : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </AnimatedContainer>
  );
}
