import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

import { GlassBadge } from "@/components/ui/glass-badge";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";
import { SafeImage } from "@/components/ui/safe-image";
import { SocialButton } from "@/components/ui/social-button";
import { portfolio } from "@/data/portfolio";
import { scrollToSection } from "@/hooks/use-active-section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp, staggerChildren, staticVariants } from "@/lib/motion";

export function Hero() {
  const reduced = useReducedMotion();
  const { name, role, tagline, description, location, avatar, social, stats, email } = portfolio;
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="home"
      className="ambient-mesh relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 pb-28 sm:px-8 md:pb-24"
    >
      <motion.div
        className="mx-auto w-full max-w-4xl text-center"
        variants={reduced ? staticVariants : staggerChildren(0.09, 0.05)}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={reduced ? staticVariants : fadeUp} className="flex justify-center">
          <GlassCard
            strong
            className="size-24 overflow-hidden rounded-full p-0 sm:size-28"
            sheen={false}
          >
            <SafeImage
              src={avatar}
              alt={name}
              loading="eager"
              fallbackLabel={initials}
              className="size-full rounded-full"
            />
          </GlassCard>
        </motion.div>

        <motion.div
          variants={reduced ? staticVariants : fadeUp}
          className="mt-6 flex justify-center"
        >
          <GlassBadge variant="glass" className="gap-2">
            <MapPin className="size-3" aria-hidden="true" />
            {location}
          </GlassBadge>
        </motion.div>

        <motion.h1
          variants={reduced ? staticVariants : fadeUp}
          className="mt-5 text-4xl font-semibold sm:text-6xl"
        >
          <span className="text-muted-foreground">Hi, I&apos;m </span>
          <span className="text-gradient">{name}.</span>
        </motion.h1>

        <motion.p
          variants={reduced ? staticVariants : fadeUp}
          className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl"
        >
          {role}
        </motion.p>

        <motion.p
          variants={reduced ? staticVariants : fadeUp}
          className="mt-2 text-lg text-muted-foreground"
        >
          {tagline}
        </motion.p>

        <motion.p
          variants={reduced ? staticVariants : fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>

        <motion.div
          variants={reduced ? staticVariants : fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <GlassButton variant="primary" size="lg" onClick={() => scrollToSection("projects")}>
            View Projects
          </GlassButton>
          <GlassButton variant="glass" size="lg" onClick={() => scrollToSection("contact")}>
            Contact Me
          </GlassButton>
        </motion.div>

        <motion.div
          variants={reduced ? staticVariants : fadeUp}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          <SocialButton kind="github" href={social.github} />
          <SocialButton kind="linkedin" href={social.linkedin} />
          <SocialButton kind="twitter" href={social.twitter} />
          <SocialButton kind="website" href={social.website} />
          <SocialButton kind="email" href={email} />
        </motion.div>

        {stats.length > 0 ? (
          <motion.ul
            variants={reduced ? staticVariants : fadeUp}
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <li key={stat.label}>
                <GlassCard className="px-5 py-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-0.5 text-xs tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </GlassCard>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </motion.div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <ArrowDown className="size-5 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
