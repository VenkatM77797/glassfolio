import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLMotionProps<"div"> & {
  /** Adds hover lift + press feedback */
  interactive?: boolean;
  /** More opaque surface for dense content */
  strong?: boolean;
  /** Specular top highlight */
  sheen?: boolean;
};

/** The core Liquid Glass surface. Used for every card on the site. */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { className, interactive = false, strong = false, sheen = true, children, ...props },
  ref,
) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(
        strong ? "glass-strong" : "glass",
        sheen && "glass-sheen",
        "rounded-2xl shadow-glass",
        interactive && "cursor-pointer transition-shadow hover:shadow-float",
        className,
      )}
      {...(interactive && !reduced ? { whileHover: { y: -4 }, whileTap: { scale: 0.985 } } : {})}
      transition={spring}
      {...props}
    >
      {children}
    </motion.div>
  );
});
