import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

function useIsMobile(): boolean {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return mobile;
}

interface GlassSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * iOS-inspired overlay: a centred glass modal on desktop and a
 * bottom sheet with a grabber on mobile. Closes on Escape and backdrop tap.
 */
export function GlassSheet({ open, onClose, title, children, className }: GlassSheetProps) {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  const panelMotion = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : isMobile
      ? {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
        }
      : {
          initial: { opacity: 0, scale: 0.95, y: 16 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.97, y: 8 },
        };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-100 flex items-end justify-center md:items-center md:p-6">
          <motion.div
            className="absolute inset-0 bg-foreground/25 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className={cn(
              "glass-strong glass-sheen relative flex max-h-[92dvh] w-full flex-col overflow-hidden shadow-float outline-none",
              "rounded-t-3xl md:max-w-3xl md:rounded-3xl",
              className,
            )}
            transition={spring}
            {...panelMotion}
          >
            {isMobile ? (
              <div className="flex justify-center pt-3" aria-hidden="true">
                <span className="h-1.5 w-10 rounded-full bg-muted-foreground/40" />
              </div>
            ) : null}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="glass absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            <div className="overflow-y-auto overscroll-contain">{children}</div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
