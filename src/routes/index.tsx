import { createFileRoute } from "@tanstack/react-router";

import { Navigation } from "@/components/navigation";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Skills } from "@/components/sections/skills";
import { portfolio } from "@/data/portfolio";

const { meta } = portfolio;

// All SEO values come from portfolio.meta in src/data/portfolio.ts.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { name: "author", content: portfolio.name },
      { name: "theme-color", content: meta.themeColor },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(meta.ogImage
        ? [
            { property: "og:image", content: meta.ogImage },
            { name: "twitter:image", content: meta.ogImage },
          ]
        : []),
    ],
    ...(meta.siteUrl ? { links: [{ rel: "canonical", href: meta.siteUrl }] } : {}),
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceTimeline />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
