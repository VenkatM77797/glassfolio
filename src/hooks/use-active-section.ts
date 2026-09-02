import { useEffect, useState } from "react";

import { sections, type SectionId } from "@/lib/sections";

/** Tracks which section is currently in view, for nav highlighting. */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return active;
}

/** Smooth-scrolls to a section, respecting reduced motion. */
export function scrollToSection(id: string): void {
  const node = document.getElementById(id);
  if (!node) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  node.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}
