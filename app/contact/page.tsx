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
                Reach the Team
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                      <path d="M2 4l6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm text-foreground">General Enquiries</p>
                    <a
                      href="mailto:info@coreframetech.in"
                      className="font-sans text-[13px] text-accent hover:text-foreground transition-colors duration-300"
                    >
                      info@coreframetech.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                      <path d="M14.05 10.32l-2.12-.53a1 1 0 0 0-.98.27l-.93.93a11.36 11.36 0 0 1-4.98-4.98l.93-.93a1 1 0 0 0 .27-.98L5.71 1.98A1 1 0 0 0 4.74 1.2l-2.47.41A1 1 0 0 0 1.43 2.7 14.56 14.56 0 0 0 13.3 14.57a1 1 0 0 0 1.09-.84l.41-2.47a1 1 0 0 0-.75-.94z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm text-foreground">Phone</p>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <a
                          href="tel:+918072870268"
                          className="font-sans text-[13px] text-accent hover:text-foreground transition-colors duration-300"
                        >
                          +91 80728 70268
                        </a>
                        <a
                          href="https://wa.me/918072870268"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/30 transition-colors duration-300"
                          aria-label="WhatsApp +91 80728 70268"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href="tel:+916383831327"
                          className="font-sans text-[13px] text-accent hover:text-foreground transition-colors duration-300"
                        >
                          +91 6383831327
                        </a>
                        <a
                          href="https://wa.me/916383831327"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/30 transition-colors duration-300"
                          aria-label="WhatsApp +91 6383831327"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
