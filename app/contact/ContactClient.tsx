"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { region } from "@/lib/region";
import { Container } from "@/components/Container";

const INTENTS: Record<string, string> = {
  assessment: "Request an AI readiness assessment",
  "call-intelligence": "Discuss a future call-intelligence pilot",
  "knowledge-intelligence": "Scope an enterprise knowledge system",
  "governed-agents": "Discuss a governed agent workflow",
};

export default function ContactClient() {
  const [intent, setIntent] = useState("discovery");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const sending = useRef(false);
  const successHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("intent") || "discovery";
    setIntent(Object.hasOwn(INTENTS, selected) ? selected : "discovery");
  }, []);
  useEffect(() => { if (status === "sent") successHeading.current?.focus(); }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(["name", "email", "company", "message", "website"].map(key => [key, String(data.get(key) || "").trim()]));
    if (!values.name || !values.email || !values.company || !values.message) {
      setError("Please complete all four fields.");
      setStatus("error");
      return;
    }
    sending.current = true;
    setStatus("sending");
    setError("");
    let entry: Record<string, unknown> = {};
    try {
      const stored: unknown = JSON.parse(sessionStorage.getItem("coreframe-entry") || "{}");
      if (stored && typeof stored === "object" && !Array.isArray(stored)) entry = stored as Record<string, unknown>;
    } catch { /* Attribution is optional when browser storage is unavailable. */ }
    const params = new URLSearchParams(window.location.search);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, attribution: { ...entry, intent, source: params.get("source") || "contact" } }),
        signal: AbortSignal.timeout(25000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(typeof result.error === "string" ? result.error : "We could not deliver your enquiry. Please try again or email us.");
      }
      setFirstName(values.name.split(/\s+/)[0]);
      setStatus("sent");
    } catch (reason) {
      setError(reason instanceof Error && reason.name !== "TimeoutError" ? reason.message : "Delivery could not be confirmed. Please try again or email us.");
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  const inputClass = "mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent disabled:opacity-60";
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact CoreFrame</p>
            <h1 className="mt-6 font-display text-display-md leading-[1.08]">{INTENTS[intent] || region.cta}</h1>
            <p className="mt-6 text-body-lg text-muted leading-relaxed">Share the business challenge. We’ll follow up to understand your requirements and arrange a conversation.</p>
            <p className="mt-5 text-sm text-muted lg:hidden">Prefer email? <a href="mailto:info@coreframetech.in" className="text-accent underline">info@coreframetech.in</a></p>
            <div className="hidden lg:block">
              <p className="mt-6 text-sm text-muted leading-relaxed">{region.delivery}</p>
              <div className="mt-8 border-t border-border pt-6">
                <h2 className="font-display text-lg">Prefer email?</h2>
                <a href="mailto:info@coreframetech.in" className="mt-3 inline-block text-accent underline break-all">info@coreframetech.in</a>
                <p className="mt-4 text-sm text-muted">Please send a brief overview. Avoid including confidential documents or sensitive personal information.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-6 md:p-9">
            {status === "sent" ? (
              <div role="status">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">Enquiry submitted</p>
                <h2 ref={successHeading} tabIndex={-1} className="mt-5 font-display text-3xl">Thanks, {firstName}.</h2>
                <p className="mt-5 text-muted leading-relaxed">Your enquiry has been accepted for delivery. We’ll follow up to discuss scope and next steps.</p>
                <Link href="/products" className="mt-7 inline-block text-accent underline">Explore our products and offerings →</Link>
              </div>
            ) : (
              <form method="post" onSubmit={submit} aria-label="AI initiative enquiry" aria-busy={status === "sending"}>
                <h2 className="font-display text-2xl">Tell us what you’re working on.</h2>
                <p className="mt-3 text-sm text-muted">All four fields are required.</p>
                <fieldset disabled={status === "sending"} className="mt-7 space-y-6">
                  <legend className="sr-only">Your details and business challenge</legend>
                  <div><label htmlFor="name" className="text-sm font-medium">Name</label><input id="name" name="name" autoComplete="name" required maxLength={150} pattern=".*\S.*" className={inputClass} /></div>
                  <div><label htmlFor="email" className="text-sm font-medium">Work email</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" className={inputClass} /></div>
                  <div><label htmlFor="company" className="text-sm font-medium">Company</label><input id="company" name="company" autoComplete="organization" required maxLength={200} pattern=".*\S.*" className={inputClass} /></div>
                  <div><label htmlFor="message" className="text-sm font-medium">Business challenge</label><textarea id="message" name="message" required maxLength={10000} rows={5} aria-describedby="challenge-help" className={`${inputClass} resize-y`} /><p id="challenge-help" className="mt-2 text-sm text-muted">What needs to improve, and what would a useful outcome look like?</p></div>
                  <div className="contact-trap" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={200} /></div>
                </fieldset>
                <p className="mt-6 text-sm text-muted leading-relaxed">We use your details and enquiry attribution to respond to your request. <Link href="/privacy" className="text-accent underline">Privacy policy</Link></p>
                {status === "error" && <p role="alert" className="mt-5 text-sm text-foreground">{error} Your answers are still here. You can also <a href="mailto:info@coreframetech.in" className="text-accent underline">email us</a>.</p>}
                <button type="submit" disabled={status === "sending"} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm text-bg hover:bg-accent hover:text-on-accent disabled:opacity-60">{status === "sending" ? "Sending…" : "Send enquiry →"}</button>
                <p role="status" className="sr-only">{status === "sending" ? "Sending your enquiry." : ""}</p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
