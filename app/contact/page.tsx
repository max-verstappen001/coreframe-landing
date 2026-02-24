"use client";

import { useState, FormEvent } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

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

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
            Get in Touch
          </h1>
          <p className="mt-4 font-sans text-base text-muted leading-relaxed">
            We take on a limited number of engagements. If you think there may
            be a fit, reach out and we&rsquo;ll schedule a conversation.
          </p>

          <div className="mt-10">
            <h2 className="font-serif text-lg font-bold text-foreground">
              What to include
            </h2>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li>Your current systems and tech stack</li>
              <li>Primary pain points or operational gaps</li>
              <li>Timeline and urgency</li>
              <li>What &ldquo;success&rdquo; looks like for you</li>
            </ul>
          </div>

          <div className="mt-10">
            <p className="font-sans text-sm text-muted">
              Or email us directly at
            </p>
            <a
              href="mailto:info@coreframetech.in"
              className="font-sans text-sm font-medium text-accent-dark hover:text-foreground transition-colors duration-200"
            >
              info@coreframetech.in
            </a>
          </div>
        </div>

        <div>
          {status === "sent" ? (
            <div className="border border-border rounded p-8">
              <h2 className="font-serif text-xl font-bold text-foreground">
                Message received.
              </h2>
              <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
                We&rsquo;ll review your inquiry and respond within 2 business
                days if there&rsquo;s a potential fit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-foreground mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full font-sans text-sm border border-border rounded px-4 py-3 bg-background text-foreground placeholder:text-muted/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-medium text-foreground mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full font-sans text-sm border border-border rounded px-4 py-3 bg-background text-foreground placeholder:text-muted/50"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block font-sans text-sm font-medium text-foreground mb-1.5"
                >
                  Company
                  <span className="text-muted font-normal ml-1">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full font-sans text-sm border border-border rounded px-4 py-3 bg-background text-foreground placeholder:text-muted/50"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full font-sans text-sm border border-border rounded px-4 py-3 bg-background text-foreground placeholder:text-muted/50 resize-y"
                  placeholder="Describe your situation, systems, and what you're looking to solve."
                />
              </div>

              <Button type="submit" variant="primary">
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>

              {status === "error" && (
                <p className="font-sans text-sm text-red-600">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
