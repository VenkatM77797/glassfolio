/**
 * ============================================================
 * STEP 2 — EDIT THIS FILE
 * ============================================================
 * Replace the EXAMPLE projects below with your own.
 * Images: drop screenshots in public/projects/ and reference
 * them as "/projects/my-shot.png". Missing images fall back to
 * a generated placeholder — never a broken image.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  /** Extra screenshots shown in the detail view */
  screenshots?: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year?: string;
}

/** EXAMPLE DATA — safe to delete entirely. */
export const projects: Project[] = [
  {
    id: "glass-analytics",
    title: "Glass Analytics",
    description:
      "A realtime product analytics dashboard with streaming charts and shareable reports.",
    longDescription:
      "Glass Analytics ingests events through a queue-backed pipeline and renders them in a realtime dashboard. It supports custom funnels, retention cohorts and shareable report links. Built to stay responsive with millions of events by aggregating on write and caching aggressively at the edge.",
    image: "/projects/example-1.svg",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/yourusername/glass-analytics",
    demo: "",
    featured: true,
    year: "2025",
  },
  {
    id: "orbit-notes",
    title: "Orbit Notes",
    description: "Offline-first note taking app with CRDT sync and instant full-text search.",
    longDescription:
      "Orbit Notes keeps everything local-first: notes are stored in IndexedDB and merged with a CRDT so edits never conflict across devices. Search runs fully on-device, and sync is an optional background task.",
    image: "/projects/example-2.svg",
    technologies: ["React", "TypeScript", "IndexedDB", "Vite"],
    github: "https://github.com/yourusername/orbit-notes",
    demo: "https://example.com",
    featured: true,
    year: "2024",
  },
  {
    id: "ship-cli",
    title: "Ship CLI",
    description: "A tiny deployment CLI that turns any static project into a preview URL.",
    longDescription:
      "Ship CLI wraps build detection, asset hashing and upload into a single command. It generates immutable preview URLs per commit and cleans them up automatically.",
    image: "/projects/example-3.svg",
    technologies: ["Node.js", "TypeScript", "AWS"],
    github: "https://github.com/yourusername/ship-cli",
    demo: "",
    featured: false,
    year: "2024",
  },
];
