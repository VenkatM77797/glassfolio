import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap select-none transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.05em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-accent hover:brightness-110",
        glass:
          "glass glass-sheen text-foreground shadow-glass hover:bg-glass-strong hover:shadow-float",
        subtle: "bg-secondary text-secondary-foreground hover:bg-accent",
        ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-13 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "glass", size: "md" },
  },
);

type GlassButtonProps = Omit<HTMLMotionProps<"button">, "children"> &
  VariantProps<typeof glassButtonVariants> & { children?: React.ReactNode };

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(function GlassButton(
  { className, variant, size, ...props },
  ref,
) {
  const reduced = useReducedMotion();

  return (
    <motion.button
      ref={ref}
      className={cn(glassButtonVariants({ variant, size }), className)}
      {...(reduced ? {} : { whileTap: { scale: 0.96 }, whileHover: { y: -1 } })}
      transition={spring}
      {...props}
    />
  );
});

type GlassLinkButtonProps = Omit<HTMLMotionProps<"a">, "children"> &
  VariantProps<typeof glassButtonVariants> & { children?: React.ReactNode };

/** Anchor version of GlassButton — same visuals, correct semantics for links. */
export const GlassLinkButton = forwardRef<HTMLAnchorElement, GlassLinkButtonProps>(
  function GlassLinkButton({ className, variant, size, ...props }, ref) {
    const reduced = useReducedMotion();

    return (
      <motion.a
        ref={ref}
        className={cn(glassButtonVariants({ variant, size }), className)}
        {...(reduced ? {} : { whileTap: { scale: 0.96 }, whileHover: { y: -1 } })}
        transition={spring}
        {...props}
      />
    );
  },
);

export { glassButtonVariants };
