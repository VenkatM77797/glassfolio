import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeIn, fadeUp, scaleIn, staggerChildren, staticVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

const presets: Record<string, Variants> = { fadeUp, fadeIn, scaleIn };

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  /** Animation preset for this element */
  animation?: "fadeUp" | "fadeIn" | "scaleIn";
  /** Stagger direct children that use `variants={fadeUp}` themselves */
  stagger?: number;
  delay?: number;
  as?: "div" | "section" | "ul" | "li";
}

/**
 * Reveals content when it scrolls into view. Automatically falls back to a
 * static render when the visitor prefers reduced motion.
 */
export function AnimatedContainer({
  children,
  className,
  animation = "fadeUp",
  stagger,
  delay = 0,
  as = "div",
}: AnimatedContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const variants = reduced
    ? staticVariants
    : stagger !== undefined
      ? staggerChildren(stagger, delay)
      : presets[animation];

  return (
    <MotionTag
      ref={ref as never}
      className={cn(className)}
      variants={variants ?? fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...(stagger === undefined ? { transition: { delay } } : {})}
    >
      {children}
    </MotionTag>
  );
}
