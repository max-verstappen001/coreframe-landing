"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionQueryProps {
  section: string;
  prompt?: string;
  placeholder?: string;
}

export function SectionQuery({ section, prompt, placeholder }: SectionQueryProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website visitor",
          email,
          company: `Section enquiry — ${section}`,
          message,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-12 border-t border-border pt-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="font-display text-sm text-muted">
              We received your message — we&rsquo;ll follow up shortly.
            </p>
          </motion.div>
        ) : !open ? (
          <motion.button
            key="trigger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 group"
            type="button"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border-hover group-hover:border-accent transition-colors duration-300 shrink-0">
              <span className="font-display text-xs text-accent">?</span>
            </span>
            <span className="font-display text-sm text-muted group-hover:text-foreground transition-colors duration-300">
              {prompt ?? `Have a question about ${section}?`}
            </span>
          </motion.button>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 font-sans text-body-sm border border-border rounded-xl px-4 py-3 bg-bg-card text-foreground placeholder:text-subtle focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,255,0,0.1)] transition-all duration-300"
            />
            <input
              type="text"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={placeholder ?? `Ask about ${section}…`}
              className="flex-[2] font-sans text-body-sm border border-border rounded-xl px-4 py-3 bg-bg-card text-foreground placeholder:text-subtle focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,255,0,0.1)] transition-all duration-300"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 rounded-xl bg-accent text-black font-display text-sm font-medium hover:bg-accent-dark transition-colors duration-300 disabled:opacity-50 shrink-0"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full font-sans text-xs text-red-400 mt-1"
                >
                  Something went wrong — please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
