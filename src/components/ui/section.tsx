import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}

/** Consistent section shell: scroll anchor, vertical rhythm, max width. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24", className)}
    >
      {children}
    </section>
  );
}
