/**
 * ============================================================
 * STEP 1 — EDIT THIS FILE
 * ============================================================
 * All personal information for the portfolio lives here.
 * No UI component contains personal data: change values below
 * and the whole site updates.
 */

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface SiteMeta {
  /** Browser tab + SEO title */
  title: string;
  /** SEO / Open Graph description */
  description: string;
  /** Absolute https URL of your deployed site, e.g. "https://yourname.dev" */
  siteUrl: string;
  /** Optional absolute https URL of a social preview image (1200x630). Leave "" to skip. */
  ogImage: string;
  /** Browser theme color (also used for the accent, see src/styles.css) */
  themeColor: string;
}

export interface Portfolio {
  name: string;
  /** Short name / initials used by the floating nav logo */
  shortName: string;
  role: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  /** Optional local image, e.g. "/images/profile.jpg". Leave "" for initials avatar. */
  avatar: string;
  /** Leave a value empty ("") to hide that social link */
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
  /** Put your PDF at public/resume.pdf. Leave "" to hide the resume section. */
  resumeUrl: string;
  /** Small highlight stats shown in the hero. Add/remove freely. */
  stats: { label: string; value: string }[];
  /** Focus areas / interests shown in the About section */
  interests: string[];
  education: EducationItem[];
  /**
   * Optional contact-form endpoint (Formspree, Getform, Basin, ...).
   * Leave "" and the form falls back to a mailto: link — no backend needed.
   * Never commit private API keys; these endpoints are public by design.
   */
  contactFormEndpoint: string;
  meta: SiteMeta;
}

export const portfolio: Portfolio = {
  name: "Your Name",
  shortName: "YN",
  role: "Software Developer",
  tagline: "Building thoughtful digital experiences.",
  description:
    "I design and build web applications with a focus on clarity, performance and detail. I care about the small interactions that make software feel effortless.",

  location: "Your City, Country",
  email: "you@example.com",
  avatar: "", // e.g. "/images/profile.jpg"

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "",
    website: "",
  },

  resumeUrl: "/resume.pdf",

  stats: [
    { label: "Years coding", value: "3+" },
    { label: "Projects shipped", value: "12" },
    { label: "Open source", value: "∞" },
  ],

  interests: [
    "Design systems",
    "Developer experience",
    "Type-safe APIs",
    "Performance",
    "Accessibility",
  ],

  education: [
    {
      degree: "Master's in Information Technology",
      institution: "Your University",
      duration: "2023 — 2025",
      description: "Coursework in distributed systems, cloud computing and HCI.",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Your College",
      duration: "2019 — 2023",
      description: "",
    },
  ],

  contactFormEndpoint: "",

  meta: {
    title: "Your Name — Software Developer Portfolio",
    description:
      "Portfolio of Your Name, a software developer building thoughtful, performant web experiences.",
    siteUrl: "https://example.com",
    ogImage: "",
    themeColor: "#0a84ff",
  },
};
