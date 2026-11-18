import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/region";
import CallIntelligencePreview from "./CallIntelligencePreview";

const PATH = "/products/ai-call-intelligence";
export const metadata = pageMetadata({
  title: "AI Call Intelligence — Product in Development",
  description: "CoreFrame's multilingual conversation intelligence product is under development. Explore planned quality-review workflows and an interactive concept using synthetic data.",
  path: PATH,
});

const CAPABILITY_GROUPS = [
  { title: "Understand the conversation", items: ["Speech-to-text processing and multilingual transcription", "Conversation summaries and customer intent identification", "Customer concerns, unresolved issues and missed commitments"] },
  { title: "Make quality review consistent", items: ["Automated quality evaluation with custom scorecards", "Policy and compliance checks for human review", "Reviewer corrections and evaluation workflows"] },
  { title: "Connect insight to operations", items: ["Follow-up detection and agent performance analytics", "Supervisor dashboards and enterprise reporting", "CRM and operational-system integrations"] },
];

const DEPLOYMENT = [
  { title: "Private infrastructure & residency", body: "Assess on-premise or private-cloud processing, storage locations and retention requirements against the workload and available models." },
  { title: "Enterprise security & access", body: "Design authentication, role-based access, recording consent and separation of reviewer, supervisor and administrator responsibilities." },
  { title: "Auditability & model flexibility", body: "Plan traceable evaluations, reviewer decisions and model versions, with model selection guided by language coverage, quality and operating cost." },
];

export default function CallIntelligencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Products", path: "/products" }, { name: "AI Call Intelligence", path: PATH }])) }} />
      <Section padding="hero">
        <Link href="/products" className="text-sm text-accent underline">← Products &amp; innovation</Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-accent">CoreFrame AI Call Intelligence</p>
        <h1 className="mt-6 max-w-4xl font-display text-display-lg leading-[1.05] tracking-tight">Turn conversations into<br />operational clarity.</h1>
        <p className="mt-7 max-w-2xl text-body-lg text-muted leading-relaxed">A multilingual conversation intelligence platform under development, designed to help quality teams understand customer concerns, review agent performance and track what needs to happen next.</p>
        <p className="mt-6 inline-flex rounded-full border border-border px-4 py-2 font-mono text-xs">Under development</p>
        <p className="mt-4 max-w-2xl text-sm text-muted leading-relaxed">The interface below is a concept preview. Commercial availability, supported languages, integrations and deployment options have not been announced.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={contactHref("call-intelligence-demo", PATH)}>Request a Product Demo</Button>
          <Button variant="secondary" href={contactHref("call-intelligence", PATH)}>Discuss a Pilot Deployment</Button>
        </div>
        <a href="#concept-preview" className="mt-7 inline-block text-sm text-accent underline">Explore the interactive concept ↓</a>
      </Section>

      <Section padding="large" background="elevated">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div><p className="font-mono text-xs uppercase tracking-widest text-accent">The problem</p><h2 className="mt-5 font-display text-display-md leading-tight">A recording is only useful<br />when someone can act on it.</h2></div>
          <div className="space-y-5 text-muted leading-relaxed"><p>Customer conversations contain unresolved issues, policy risks and commitments that are easy to miss when quality teams review only a small sample of calls. Different languages and inconsistent scorecards make the picture harder to trust.</p><p>Our product direction brings transcripts, structured evaluation and human review into one workflow. Supervisors should be able to inspect the evidence behind an assessment and turn it into coaching or follow-up work.</p><p className="text-sm">Intended for contact centers, support and sales operations, including regulated teams where recording consent, information access and review requirements must be established before a pilot.</p></div>
        </div>
      </Section>

      <Section padding="large">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Product direction</p>
        <h2 className="mt-5 font-display text-display-md">Planned capabilities.</h2>
        <p className="mt-5 max-w-2xl text-muted leading-relaxed">These describe the intended product scope. The preview illustrates the review experience; it does not establish that transcription, evaluation or integrations are implemented.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CAPABILITY_GROUPS.map(group => <article key={group.title} className="rounded-2xl border border-border bg-bg-card p-7"><p className="font-mono text-xs text-accent">Planned</p><h3 className="mt-4 font-display text-xl">{group.title}</h3><ul className="mt-5 space-y-4 text-sm text-muted leading-relaxed">{group.items.map(item => <li key={item} className="border-l-2 border-accent/30 pl-4">{item}</li>)}</ul></article>)}
        </div>
      </Section>

      <Section id="concept-preview" padding="large" background="elevated">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Explore the workflow</p>
        <h2 className="mt-5 font-display text-display-md">Interactive concept preview.</h2>
        <p id="concept-disclosure" className="mt-5 max-w-3xl text-muted leading-relaxed">Synthetic conversations and authored example evaluations. No real customer data, audio processing or live AI analysis. Changes stay in this page and reset on reload. Language samples illustrate the design, not verified model support.</p>
        <div className="mt-10"><CallIntelligencePreview /></div>
      </Section>

      <Section padding="large">
        <h2 className="font-display text-display-md">Deployment starts with your constraints.</h2>
        <p className="mt-5 max-w-2xl text-muted leading-relaxed">Potential deployment considerations for discovery and pilot design. These are requirements to evaluate, rather than released product controls.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{DEPLOYMENT.map(item => <article key={item.title} className="border-t border-border pt-6"><h3 className="font-display text-xl">{item.title}</h3><p className="mt-4 text-sm text-muted leading-relaxed">{item.body}</p></article>)}</div>
      </Section>

      <Section padding="large" background="elevated">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Technical direction · proposed evaluation</p>
        <h2 className="mt-5 font-display text-display-md">Evaluate the pipeline,<br />from speech to review.</h2>
        <p className="mt-5 max-w-3xl text-muted leading-relaxed">The proposed architecture separates speech recognition, language analysis, scorecard evaluation and reviewer decisions. Technology selection and validation are future engineering work; no NVIDIA integration or benchmark is claimed.</p>
        <ol aria-label="Proposed analysis pipeline" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Consent & recording intake", "Multilingual transcription", "LLM analysis & evaluation", "Human review & reporting"].map((step, index) => <li key={step} className="rounded-xl border border-border bg-bg-card p-5"><span className="font-mono text-xs text-accent">0{index + 1}</span><p className="mt-3 font-display text-lg">{step}</p></li>)}
        </ol>
        <div className="mt-10 grid gap-7 md:grid-cols-2">
          <article><h3 className="font-display text-xl">Speech and language models</h3><p className="mt-3 text-sm text-muted leading-relaxed">Evaluation candidates include <a href="https://docs.nvidia.com/deeplearning/riva/user-guide/docs/index.html" className="text-accent underline">NVIDIA Riva for speech AI</a> and multilingual speech models. Language coverage, domain vocabulary and transcription errors must be tested on representative, authorized recordings.</p></article>
          <article><h3 className="font-display text-xl">Serving and inference</h3><p className="mt-3 text-sm text-muted leading-relaxed">Candidates for evaluation include <a href="https://docs.nvidia.com/nim/" className="text-accent underline">NVIDIA NIM for model serving</a> and <a href="https://github.com/NVIDIA/TensorRT-LLM" className="text-accent underline">TensorRT / TensorRT-LLM for inference optimization</a>. GPU acceleration would need to justify its cost through workload measurements.</p></article>
          <article><h3 className="font-display text-xl">Analysis and evaluation</h3><p className="mt-3 text-sm text-muted leading-relaxed">LLM-based summaries, intent detection and scorecards need versioned prompts, source evidence and human evaluation. A policy flag should create a review task, not an automated compliance determination.</p></article>
          <article><h3 className="font-display text-xl">Pilot evidence</h3><p className="mt-3 text-sm text-muted leading-relaxed">Agree transcription quality, reviewer agreement, missed issues, processing time and cost criteria before a pilot. No performance improvements or production readiness have been established here.</p></article>
        </div>
      </Section>

      <Section padding="large">
        <h2 className="font-display text-display-md">Define a useful first pilot.</h2>
        <p className="mt-5 max-w-2xl text-muted leading-relaxed">Bring your review process, languages, recording permissions and operational goals. We can discuss the concept, current development scope and what evidence a future pilot would need.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button href={contactHref("call-intelligence-demo", PATH)}>Request a Product Demo</Button><Button variant="secondary" href={contactHref("call-intelligence", PATH)}>Discuss a Pilot Deployment</Button></div>
      </Section>
    </>
  );
}
