import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { AnimatedContainer } from "@/components/ui/animated-container";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialButton } from "@/components/ui/social-button";
import { portfolio } from "@/data/portfolio";
import { spring } from "@/lib/motion";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-input bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none";

export function Contact() {
  const { email, social, location, contactFormEndpoint } = portfolio;
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // No endpoint configured? Fall back to the visitor's mail client.
    if (!contactFormEndpoint) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    try {
      setStatus("sending");
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Send a message, or reach out on any of these."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        <AnimatedContainer className="lg:col-span-2">
          <GlassCard className="flex h-full flex-col gap-6 p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-1 inline-flex items-center gap-2 font-medium break-all transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {email}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Based in
              </p>
              <p className="mt-1 inline-flex items-center gap-2 font-medium">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {location}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Elsewhere
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <SocialButton kind="github" href={social.github} showLabel />
                <SocialButton kind="linkedin" href={social.linkedin} showLabel />
                <SocialButton kind="twitter" href={social.twitter} showLabel />
                <SocialButton kind="website" href={social.website} showLabel />
              </div>
            </div>
          </GlassCard>
        </AnimatedContainer>

        <AnimatedContainer className="lg:col-span-3" delay={0.08}>
          <GlassCard className="relative h-full overflow-hidden p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => update("name")(event.target.value)}
                    placeholder="Ada Lovelace"
                    className={fieldClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => update("email")(event.target.value)}
                    placeholder="ada@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => update("message")(event.target.value)}
                  placeholder="Tell me about your project…"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <GlassButton
                  type="submit"
                  variant="primary"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto"
                >
                  <Send aria-hidden="true" />
                  {status === "sending" ? "Sending…" : "Send message"}
                </GlassButton>
                {status === "error" ? (
                  <p role="alert" className="text-sm text-destructive">
                    Something went wrong. Please email me directly.
                  </p>
                ) : null}
              </div>

              <p className="text-xs text-muted-foreground">
                {contactFormEndpoint
                  ? "Submissions go to the form service configured in src/data/portfolio.ts."
                  : "This opens your mail app — no backend or API keys required."}
              </p>
            </form>

            <AnimatePresence>
              {status === "sent" ? (
                <motion.div
                  className="glass-strong absolute inset-0 flex flex-col items-center justify-center gap-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  role="status"
                >
                  <motion.span
                    className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={spring}
                  >
                    <Check className="size-7" aria-hidden="true" />
                  </motion.span>
                  <p className="text-lg font-semibold">Message on its way</p>
                  <GlassButton size="sm" onClick={() => setStatus("idle")}>
                    Send another
                  </GlassButton>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </GlassCard>
        </AnimatedContainer>
      </div>
    </Section>
  );
}
