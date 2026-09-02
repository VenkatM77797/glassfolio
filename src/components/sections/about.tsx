import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

import { Section } from "@/components/ui/section";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { GlassBadge } from "@/components/ui/glass-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp, staticVariants } from "@/lib/motion";

export function About() {
  const reduced = useReducedMotion();
  const { description, location, interests, education, role } = portfolio;
  const variants = reduced ? staticVariants : fadeUp;

  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A little background"
        subtitle="Who I am, where I am, and what I like to work on."
      />

      <AnimatedContainer stagger={0.1} className="mt-10 grid gap-4 lg:grid-cols-3">
        <motion.div variants={variants} className="lg:col-span-2">
          <GlassCard className="h-full p-6 sm:p-8">
            <h3 className="text-lg font-semibold">{role}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              <span>{location}</span>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={variants}>
          <GlassCard className="h-full p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-semibold">Focus areas</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <li key={interest}>
                  <GlassBadge variant="outline">{interest}</GlassBadge>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        {education.length > 0 ? (
          <motion.div variants={variants} className="lg:col-span-3">
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {education.map((item) => (
                  <li
                    key={`${item.degree}-${item.institution}`}
                    className="rounded-xl bg-secondary/60 p-5"
                  >
                    <p className="font-medium">{item.degree}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">{item.duration}</p>
                    {item.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ) : null}
      </AnimatedContainer>
    </Section>
  );
}
