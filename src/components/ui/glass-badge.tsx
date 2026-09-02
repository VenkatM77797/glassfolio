import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const glassBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        glass: "glass text-foreground/85",
        accent: "bg-accent text-accent-foreground",
        outline: "border border-border text-muted-foreground",
      },
      size: {
        sm: "px-2.5 py-1 text-[0.7rem]",
        md: "px-3 py-1.5 text-xs",
      },
    },
    defaultVariants: { variant: "glass", size: "md" },
  },
);

interface GlassBadgeProps extends VariantProps<typeof glassBadgeVariants> {
  children: ReactNode;
  className?: string;
}

export function GlassBadge({ children, className, variant, size }: GlassBadgeProps) {
  return <span className={cn(glassBadgeVariants({ variant, size }), className)}>{children}</span>;
}
