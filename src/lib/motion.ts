import type { Transition, Variants } from "framer-motion";

/** Shared iOS-flavoured spring used across the site. */
export const spring: Transition = { type: "spring", stiffness: 320, damping: 30, mass: 0.9 };
export const softSpring: Transition = { type: "spring", stiffness: 180, damping: 26 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: softSpring },
};

export const staggerChildren = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Variants with all movement stripped out, for prefers-reduced-motion. */
export const staticVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

/** Press feedback for buttons/cards. */
export const pressable = { whileTap: { scale: 0.97 }, transition: spring } as const;
