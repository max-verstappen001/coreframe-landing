"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Reveal, TextReveal, Magnetic } from "@/lib/animations";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full font-sans text-body-sm border border-border rounded-xl px-5 py-4 bg-bg-card text-foreground placeholder:text-subtle transition-all duration-300 hover:border-border-hover focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,255,0,0.1)]";

  return (
    <Section padding="hero">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Info */}
        <div>
          <Reveal>
            <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
              Contact
            </span>
            <TextReveal
              text="Get in Touch"
              tag="h1"
              className="mt-4 font-heading text-display-lg text-foreground"
              delay={0.2}
            />
            <p className="mt-6 font-sans text-body-lg text-muted leading-relaxed">
              We take on a limited number of engagements. If you think there may
              be a fit, reach out and we&rsquo;ll schedule a conversation.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 rounded-2xl border border-border bg-bg-card p-8">
              <h2 className="font-heading text-lg text-foreground">
                What to include
              </h2>
              <ul className="mt-5 space-y-4">
                {[
                  "Your current systems and tech stack",
                  "Primary pain points or operational gaps",
                  "Timeline and urgency",
                  "What \u201Csuccess\u201D looks like for you",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-2 h-[5px] w-[5px] rounded-full bg-accent/60 shrink-0" />
                    <span className="font-sans text-body-sm text-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-border" />
              <div>
                <p className="font-sans text-body-sm text-subtle">
                  Or email us directly at
                </p>
                <a
                  href="mailto:info@coreframetech.in"
                  className="font-display text-body text-accent hover:text-foreground transition-colors duration-300"
                >
                  info@coreframetech.in
                </a>
              </div>
            </div>
          </Reveal>

          {/* Team contacts */}
          <Reveal delay={0.5}>
            <div className="mt-8 rounded-2xl border border-border bg-bg-card p-8">
              <h2 className="font-heading text-lg text-foreground mb-6">
                Reach the Team Directly
              </h2>
              <div className="space-y-5">
                {[
                  { name: "Sanjay", role: "Founder & CEO", email: "sanjay@coreframetech.in" },
                  { name: "Technical Partner", role: "CTO", email: "tech@coreframetech.in" },
                  { name: "AI Team", role: "Applied AI", email: "ai@coreframetech.in" },
                ].map((person) => (
                  <div key={person.email} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm font-bold text-accent">
                        {person.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm text-foreground">{person.name}</p>
                      <p className="font-sans text-[12px] text-subtle">{person.role}</p>
                    </div>
                    <a
                      href={`mailto:${person.email}`}
                      className="font-display text-[12px] text-accent hover:text-foreground transition-colors duration-300 shrink-0"
                    >
                      Email
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Form */}
        <div>
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-accent/30 bg-bg-card p-10 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="font-heading text-display-sm text-foreground">
                  Message received.
                </h2>
                <p className="mt-4 font-sans text-body-sm text-muted leading-relaxed max-w-sm mx-auto">
                  We&rsquo;ll review your inquiry and respond within 2 business
                  days if there&rsquo;s a potential fit.
                </p>
              </motion.div>
            ) : (
              <Reveal key="form" delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-display text-body-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-display text-body-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClasses}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block font-display text-body-sm font-medium text-foreground mb-2"
                    >
                      Company
                      <span className="text-subtle font-normal ml-2 text-caption">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={inputClasses}
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-display text-body-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputClasses} resize-y`}
                      placeholder="Describe your situation, systems, and what you're looking to solve."
                    />
                  </div>

                  <div className="pt-2">
                    <Magnetic strength={0.08}>
                      <Button
                        type="submit"
                        variant="primary"
                        icon={<ArrowRight />}
                      >
                        {status === "sending" ? "Sending..." : "Send Message"}
                      </Button>
                    </Magnetic>
                  </div>

                  <AnimatePresence>
                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="font-sans text-body-sm text-red-400"
                      >
                        Something went wrong. Please try again or email us
                        directly.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </Reveal>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
