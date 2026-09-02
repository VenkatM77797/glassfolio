/**
 * ============================================================
 * STEP 4 — EDIT THIS FILE
 * ============================================================
 * Work history, newest first. Set endDate to "" for a current role.
 */

export interface Experience {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  /** Empty string renders as "Present" */
  endDate?: string;
  description: string[];
  technologies: string[];
}

/** EXAMPLE DATA — replace with your own roles. */
export const experience: Experience[] = [
  {
    company: "Example Labs",
    role: "Software Developer",
    location: "Remote",
    startDate: "Jun 2024",
    endDate: "",
    description: [
      "Led the frontend rebuild of the customer dashboard, cutting time-to-interactive by 45%.",
      "Designed a shared component library adopted by three product teams.",
      "Mentored two interns through their first production releases.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Sample Studio",
    role: "Junior Developer",
    location: "Your City",
    startDate: "Aug 2023",
    endDate: "May 2024",
    description: [
      "Built and shipped client marketing sites with a focus on Core Web Vitals.",
      "Automated release checks in CI, removing most manual QA passes.",
    ],
    technologies: ["JavaScript", "Vite", "Tailwind CSS"],
  },
];
