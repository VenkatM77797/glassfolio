import { SocialButton } from "@/components/ui/social-button";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const { name, social, email } = portfolio;

  return (
    <footer className="hairline-t mx-auto mt-8 w-full max-w-6xl px-5 pb-28 sm:px-8 md:pb-10">
      <div className="flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex gap-2">
          <SocialButton kind="github" href={social.github} />
          <SocialButton kind="linkedin" href={social.linkedin} />
          <SocialButton kind="email" href={email} />
        </div>
      </div>
    </footer>
  );
}
