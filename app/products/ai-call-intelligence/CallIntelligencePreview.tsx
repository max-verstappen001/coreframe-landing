"use client";

import { useState } from "react";

/** Authored fiction. Scores are examples, never results from an analysis service. */
const CALLS = [
  {
    id: "sample-01", title: "Delivery follow-up", language: "English",
    summary: "A customer reports a late delivery. The advisor offers to check the order but does not agree a callback deadline.",
    transcript: [
      { role: "Customer", time: "00:00", text: "My delivery was expected yesterday. Can you tell me when it will arrive?" },
      { role: "Advisor", time: "00:08", text: "I'm sorry it hasn't arrived. I'll check the delivery status with our dispatch team." },
      { role: "Customer", time: "00:17", text: "I need it before Friday. Will someone call me back today?" },
      { role: "Advisor", time: "00:24", text: "I'll ask the team to get in touch once we have an update." },
    ],
    concern: "Delivery timing remains unresolved; the customer needs an answer before Friday.",
    intent: "Delivery status and callback request",
    evidence: "“Will someone call me back today?” — 00:17",
    scorecard: [
      { criterion: "Acknowledges the issue", passed: true, note: "Apology and acknowledgement at 00:08." },
      { criterion: "Identifies the next step", passed: true, note: "Advisor will contact dispatch at 00:08." },
      { criterion: "Responds respectfully", passed: true, note: "Courteous response in this fictional excerpt." },
      { criterion: "Agrees a follow-up deadline", passed: false, note: "The response at 00:24 gives no callback time." },
    ],
    actions: ["Confirm delivery status with dispatch.", "Agree a callback owner and deadline with the customer.", "Review the conversation before closing the issue."],
  },
  {
    id: "sample-02", title: "Billing clarification", language: "Tamil + English",
    summary: "A customer queries a duplicate charge. The advisor acknowledges the issue, but the refund review and follow-up time remain open.",
    transcript: [
      { role: "Customer", time: "00:00", text: "என் bill-ல் இரண்டு charges இருக்கு. ஒரே order தான் செய்தேன்.", lang: "ta", translation: "There are two charges on my bill. I placed only one order." },
      { role: "Advisor", time: "00:09", text: "I understand. I will send this to the billing team for review." },
      { role: "Customer", time: "00:16", text: "Refund எப்போது கிடைக்கும்?", lang: "ta", translation: "When will I receive the refund?" },
      { role: "Advisor", time: "00:22", text: "The team needs to review it first. We'll update you." },
    ],
    concern: "A duplicate charge needs investigation; no refund decision or update deadline was agreed.",
    intent: "Duplicate-charge investigation",
    evidence: "“The team needs to review it first. We'll update you.” — 00:22",
    scorecard: [
      { criterion: "Acknowledges the issue", passed: true, note: "Advisor acknowledges the concern at 00:09." },
      { criterion: "Identifies the next step", passed: true, note: "Referral to the billing team at 00:09." },
      { criterion: "Clarifies the disputed charge", passed: false, note: "The excerpt contains no confirmation of which charge is disputed." },
      { criterion: "Agrees a follow-up deadline", passed: false, note: "No update time is given at 00:22." },
    ],
    actions: ["Check the disputed charge in the authorized billing system.", "Assign the billing review and confirm an update time.", "Ask a reviewer to verify the summary and language interpretation."],
  },
];
const VIEWS = ["Transcript", "Quality review", "Follow-up"] as const;
type View = (typeof VIEWS)[number];

export default function CallIntelligencePreview() {
  const [selected, setSelected] = useState(CALLS[0].id);
  const [view, setView] = useState<View>("Transcript");
  const [reviewed, setReviewed] = useState<string[]>([]);
  const call = CALLS.find(item => item.id === selected)!;
  const isReviewed = reviewed.includes(call.id);
  const passed = call.scorecard.filter(item => item.passed).length;
  function toggleReviewed() {
    setReviewed(previous => previous.includes(call.id) ? previous.filter(id => id !== call.id) : [...previous, call.id]);
  }

  return (
    <div role="region" aria-label="Call intelligence concept" aria-describedby="concept-disclosure" className="overflow-hidden rounded-2xl border border-border bg-bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-5">
        <p className="font-display text-lg">Conversation review</p>
        <p className="rounded-full border border-border px-3 py-2 font-mono text-xs text-accent">Concept · synthetic data</p>
      </div>
      <dl className="grid grid-cols-3 gap-3 border-b border-border px-6 py-6">
        {[{ label: "Sample calls", value: CALLS.length }, { label: "Awaiting review", value: CALLS.length - reviewed.length }, { label: "Reviewed here", value: reviewed.length }].map(item => <div key={item.label}><dt className="text-xs text-muted">{item.label}</dt><dd className="mt-2 font-display text-3xl">{item.value}</dd></div>)}
      </dl>
      <div className="grid lg:grid-cols-[250px_minmax(0,1fr)]">
        <fieldset className="min-w-0 border-b border-border p-6 lg:border-b-0 lg:border-r">
          <legend className="sr-only">Choose a synthetic conversation</legend>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Sample conversations</p>
          <div className="space-y-3">{CALLS.map(item => <label key={item.id} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 ${selected === item.id ? "border-accent bg-accent/5" : "border-border"}`}><input type="radio" name="sample-call" value={item.id} checked={selected === item.id} onChange={() => setSelected(item.id)} className="mt-1 accent-[var(--color-accent)]" /><span><span className="block text-sm font-medium">{item.title}</span><span className="mt-2 block text-xs text-muted">{item.language}</span><span className="mt-2 block text-xs text-muted">{reviewed.includes(item.id) ? "Reviewed in preview" : "Awaiting review"}</span></span></label>)}</div>
        </fieldset>
        <div className="min-w-0 p-6 md:p-8">
          <p className="font-mono text-xs text-accent">{call.id} / {call.language}</p>
          <h3 className="mt-3 font-display text-2xl">{call.title}</h3>
          <p className="mt-4 text-sm text-muted leading-relaxed">{call.summary}</p>
          <div role="group" aria-label="Conversation views" className="mt-6 flex flex-wrap gap-2">{VIEWS.map(item => <button key={item} type="button" aria-pressed={view === item} aria-controls="conversation-view" onClick={() => setView(item)} className={`min-h-11 rounded-lg border px-4 py-2 text-sm ${view === item ? "border-foreground bg-foreground text-bg" : "border-border hover:border-accent"}`}>{item}</button>)}</div>
          <section id="conversation-view" aria-label={`${call.title}: ${view}`} className="mt-7">
            {view === "Transcript" && <><h4 className="font-display text-lg">Example transcription</h4><p className="mt-2 text-xs text-muted">Authored text and translations; no audio has been transcribed.</p><ol className="mt-5 space-y-5">{call.transcript.map(turn => <li key={turn.time} className="border-l-2 border-border pl-4"><p className="font-mono text-xs text-muted">{turn.time} · {turn.role}</p><p lang={"lang" in turn ? turn.lang : "en"} className="mt-2 text-sm leading-relaxed">{turn.text}</p>{"translation" in turn && <p className="mt-2 text-xs text-muted leading-relaxed">Example translation: {turn.translation}</p>}</li>)}</ol></>}
            {view === "Quality review" && <><div className="flex flex-wrap items-baseline justify-between gap-3"><h4 className="font-display text-lg">Example scorecard</h4><p className="font-mono text-sm text-accent">{passed}/{call.scorecard.length} criteria met</p></div><p className="mt-2 text-xs text-muted">Authored assessments for this concept, not model-generated results.</p><dl className="mt-5 space-y-4">{call.scorecard.map(item => <div key={item.criterion} className="rounded-lg border border-border p-4"><dt className="flex flex-wrap justify-between gap-2 text-sm font-medium"><span>{item.criterion}</span><span className="text-muted">{item.passed ? "Met in example" : "Needs review"}</span></dt><dd className="mt-2 text-sm text-muted leading-relaxed">{item.note}</dd></div>)}</dl></>}
            {view === "Follow-up" && <><h4 className="font-display text-lg">Suggested review actions</h4><dl className="mt-5 space-y-4 text-sm"><div><dt className="font-medium">Customer intent</dt><dd className="mt-2 text-muted">{call.intent}</dd></div><div><dt className="font-medium">Unresolved concern</dt><dd className="mt-2 text-muted leading-relaxed">{call.concern}</dd></div><div><dt className="font-medium">Conversation evidence</dt><dd className="mt-2 text-muted leading-relaxed">{call.evidence}</dd></div></dl><ol className="mt-6 list-decimal space-y-3 pl-5 text-sm text-muted leading-relaxed">{call.actions.map(action => <li key={action}>{action}</li>)}</ol><p className="mt-5 text-xs text-muted">Illustrative suggestions only. No CRM task or follow-up message is created.</p></>}
          </section>
          <div className="mt-8 border-t border-border pt-6">
            <button type="button" aria-pressed={isReviewed} onClick={toggleReviewed} className="min-h-11 rounded-lg border border-border-hover px-4 py-3 text-sm hover:border-accent">{isReviewed ? "Reopen sample review" : "Mark sample reviewed"}</button>
            <p role="status" className="mt-3 text-xs text-muted">{isReviewed ? `${call.title} marked reviewed in this preview.` : `${call.title} awaiting review in this preview.`} Changes are not saved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
