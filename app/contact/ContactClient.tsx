"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";

type StepType = "text" | "email" | "textarea" | "choice";

interface Step {
  key: "name" | "email" | "company" | "projectType" | "timeline" | "message";
  type: StepType;
  question: string;
  placeholder?: string;
  optional?: boolean;
  options?: string[];
}

const STEPS: Step[] = [
  { key: "name", type: "text", question: "What's your name?", placeholder: "Your full name" },
  { key: "email", type: "email", question: "What's your email?", placeholder: "you@company.com" },
  { key: "company", type: "text", question: "What's your company?", placeholder: "Company name", optional: true },
  {
    key: "projectType",
    type: "choice",
    question: "What are you building?",
    options: [
      "AI agent / automation",
      "Full product build",
      "Systems & integration",
      "Digital transformation",
      "Something else",
    ],
  },
  {
    key: "timeline",
    type: "choice",
    question: "What's your timeline?",
    options: ["ASAP", "1–3 months", "This quarter", "Just exploring"],
  },
  {
    key: "message",
    type: "textarea",
    question: "Tell us about the problem.",
    placeholder: "What are you trying to solve, and where do things stand today?",
  },
];

type Answers = Record<Step["key"], string>;
const EMPTY: Answers = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  timeline: "",
  message: "",
};

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function ContactClient() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const current = STEPS[step];
  const total = STEPS.length;
  const value = answers[current.key];
  const isLast = step === total - 1;

  useEffect(() => {
    setError(null);
    if (current.type !== "choice") inputRef.current?.focus();
  }, [step, current.type]);

  const validate = () => {
    if (current.optional) return true;
    if (!value.trim()) {
      setError("This field is required.");
      return false;
    }
    if (current.type === "email" && !emailOk(value)) {
      setError("Please enter a valid email.");
      return false;
    }
    return true;
  };

  const goNext = () => {
    if (!validate()) return;
    if (isLast) {
      submit();
      return;
    }
    setDir(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step === 0) return;
    setDir(-1);
    setStep((s) => s - 1);
  };

  const setValue = (v: string) =>
    setAnswers((a) => ({ ...a, [current.key]: v }));

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !(current.type === "textarea" && e.shiftKey)) {
      e.preventDefault();
      goNext();
    }
  };

  const pickChoice = (opt: string) => {
    setAnswers((a) => ({ ...a, [current.key]: opt }));
    if (isLast) return;
    setDir(1);
    setTimeout(() => setStep((s) => s + 1), 140);
  };

  async function submit() {
    setStatus("sending");
    const message = [
      answers.projectType && `Project: ${answers.projectType}`,
      answers.timeline && `Timeline: ${answers.timeline}`,
      "",
      answers.message,
    ]
      .filter((l) => l !== undefined)
      .join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name,
          email: answers.email,
          company: answers.company,
          message,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const progress = ((step + 1) / total) * 100;

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16">
      <Container>
        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              [ Received ]
            </p>
            <h1 className="font-display font-medium text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              Thanks, {answers.name.split(" ")[0] || "there"}.
            </h1>
            <p className="mt-6 font-sans text-body-lg text-muted max-w-lg leading-relaxed">
              We&apos;ve got your note and will come back within 1–2 business
              days with a path to shipped. In the meantime, feel free to reach us
              directly.
            </p>
            <a
              href="mailto:info@coreframetech.in"
              className="mt-6 inline-block font-mono text-accent hover:text-foreground transition-colors"
            >
              info@coreframetech.in
            </a>
          </motion.div>
        ) : (
          <>
            <h1 className="sr-only">Contact Coreframe Technologies</h1>
            {/* progress header */}
            <div className="max-w-3xl">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-subtle mb-3">
                <span>Book a discovery call</span>
                <span className="tabular-nums">
                  {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
              <div className="h-px w-full bg-border overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>

            {/* step body */}
            <div className="max-w-3xl mt-12 md:mt-16 min-h-[240px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  initial={{ opacity: 0, y: dir > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: dir > 0 ? -40 : 40 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <label
                    htmlFor={current.key}
                    className="block font-display font-medium text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.08] tracking-[-0.02em] text-foreground"
                  >
                    {current.question}
                    {current.optional && (
                      <span className="ml-3 align-middle font-mono text-sm text-subtle tracking-[0.1em] uppercase">
                        optional
                      </span>
                    )}
                  </label>

                  {current.type === "choice" ? (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {current.options!.map((opt) => {
                        const active = value === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => pickChoice(opt)}
                            className={`rounded-lg border px-5 h-12 font-mono text-[13px] uppercase tracking-[0.08em] transition-all duration-300 ${
                              active
                                ? "border-accent bg-accent text-on-accent"
                                : "border-border text-foreground hover:border-border-hover hover:bg-surface"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  ) : current.type === "textarea" ? (
                    <textarea
                      id={current.key}
                      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onKeyDown={onKeyDown}
                      rows={3}
                      placeholder={current.placeholder}
                      className="mt-8 w-full resize-none bg-transparent border-b border-border pb-3 font-display text-2xl md:text-3xl text-foreground placeholder:text-subtle/60 focus:outline-none focus:border-accent transition-colors"
                    />
                  ) : (
                    <input
                      id={current.key}
                      ref={inputRef as React.RefObject<HTMLInputElement>}
                      type={current.type === "email" ? "email" : "text"}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onKeyDown={onKeyDown}
                      placeholder={current.placeholder}
                      className="mt-8 w-full bg-transparent border-b border-border pb-3 font-display text-2xl md:text-3xl text-foreground placeholder:text-subtle/60 focus:outline-none focus:border-accent transition-colors"
                    />
                  )}

                  {error && (
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-red-500">
                      {error}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* controls */}
            <div className="max-w-3xl mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted hover:text-foreground disabled:opacity-0 transition-colors"
              >
                ← Back
              </button>
              <div className="flex items-center gap-4">
                {current.type !== "choice" && (
                  <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.1em] text-subtle">
                    Press Enter ↵
                  </span>
                )}
                <button
                  type="button"
                  onClick={goNext}
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300 disabled:opacity-60"
                >
                  {isLast
                    ? status === "sending"
                      ? "Sending…"
                      : "Submit"
                    : "Continue"}
                  {!isLast && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {status === "error" && (
              <p className="max-w-3xl mt-6 font-mono text-xs uppercase tracking-[0.1em] text-red-500">
                Something went wrong. Email us at info@coreframetech.in
              </p>
            )}
          </>
        )}
      </Container>
    </section>
  );
}
