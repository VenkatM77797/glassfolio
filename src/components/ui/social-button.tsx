import { Github, Globe, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";

import { GlassLinkButton } from "@/components/ui/glass-button";

export type SocialKind = "github" | "linkedin" | "twitter" | "website" | "email";

const config: Record<SocialKind, { icon: LucideIcon; label: string }> = {
  github: { icon: Github, label: "GitHub" },
  linkedin: { icon: Linkedin, label: "LinkedIn" },
  twitter: { icon: Twitter, label: "Twitter" },
  website: { icon: Globe, label: "Website" },
  email: { icon: Mail, label: "Email" },
};

interface SocialButtonProps {
  kind: SocialKind;
  href: string;
  showLabel?: boolean;
}

/** Renders nothing when `href` is empty, so unused socials disappear cleanly. */
export function SocialButton({ kind, href, showLabel = false }: SocialButtonProps) {
  if (!href) return null;
  const { icon: Icon, label } = config[kind];
  const isMail = kind === "email";

  return (
    <GlassLinkButton
      href={isMail ? `mailto:${href}` : href}
      {...(isMail ? {} : { target: "_blank", rel: "noreferrer noopener" })}
      aria-label={label}
      size={showLabel ? "md" : "icon"}
    >
      <Icon aria-hidden="true" />
      {showLabel ? <span>{label}</span> : null}
    </GlassLinkButton>
  );
}
