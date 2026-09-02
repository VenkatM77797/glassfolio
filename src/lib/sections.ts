/** Section ids + labels used by both the desktop and mobile navigation. */
export const sections = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "skills", label: "Skills", icon: "layers" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "contact", label: "Contact", icon: "mail" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
