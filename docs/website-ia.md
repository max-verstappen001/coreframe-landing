# Coreframe Technologies — Website Information Architecture & Content Blueprint

> Working reference for building the marketing site. Positioning, structure, page-by-page
> content specs, and ready-to-paste homepage copy.
>
> **Placeholders** appear as `[like this]` — leadership names, entity details, client names,
> and metrics are intentionally not invented. Fill them before publishing.
>
> **Positioning:** Enterprise AI Engineering · Private AI Infrastructure · Applied AI Research · Digital Transformation.
> Commercial weighting — 70% Private/Enterprise AI Engineering · 20% Software Engineering & Transformation · 10% Labs/Edge/R&D.

---

## PART 1 — FINAL SITEMAP

```
/
├── /capabilities
│   ├── /capabilities/private-ai
│   ├── /capabilities/enterprise-ai
│   ├── /capabilities/ai-agents
│   ├── /capabilities/ai-infrastructure
│   ├── /capabilities/software-engineering
│   ├── /capabilities/ai-strategy-governance
│   └── /capabilities/edge-ai
│
├── /industries
│   ├── /industries/industrial-energy
│   ├── /industries/retail-hospitality
│   ├── /industries/enterprise
│   └── /industries/technology
│
├── /labs
│   ├── /labs/research
│   ├── /labs/open-source
│   └── /labs/publications
│
├── /work
│   └── /work/[case-study-slug]        (anonymized until attribution approved)
│
├── /insights
│   ├── /insights/[category]
│   └── /insights/[article-slug]
│
├── /company
│   ├── /company/about
│   └── /company/careers
│
├── /contact
├── /security
├── /responsible-ai
│
└── /legal
    ├── /legal/privacy
    ├── /legal/terms
    ├── /legal/cookies
    ├── /legal/vulnerability-disclosure   (also linked as /vulnerability-disclosure)
    ├── /legal/acceptable-use             (add when SaaS/API/portal launches)
    ├── /legal/subprocessors              (add when SaaS/API/portal launches)
    └── /legal/dpa                        (add when SaaS/API/portal launches)
```

**Routing note (repo convention):** each route is `app/<route>/page.tsx` (server, owns metadata)
importing a sibling `*Client.tsx` (`"use client"`, owns animation/state/content arrays).
Capability, industry, and labs sub-pages are static routes now; `/work` and `/insights`
detail pages should be dynamic segments backed by hardcoded content arrays (no CMS yet).

---

## PART 2 — NAVIGATION ARCHITECTURE

**Primary nav (left → right):**

`Capabilities ▾` · `Industries ▾` · `Coreframe Labs` · `Work` · `Insights` · `Company ▾` · **[ Discuss a Project ]**

- **Capabilities** is the single commercial umbrella. No competing "Services / Solutions / Products / Technologies" labels anywhere.
- Contact lives inside the persistent **Discuss a Project** CTA button (accent-filled), not as a plain nav link.

**Mega-menu — Capabilities (▾):** two-column dropdown

| Column A — By capability | Column B — By outcome |
|---|---|
| Private AI & On-Premise LLMs | "Deploy AI on our own infrastructure" → private-ai |
| Enterprise AI & Knowledge Systems | "Make our documents searchable & intelligent" → enterprise-ai |
| AI Agents & Autonomous Workflows | "Automate complex operational workflows" → ai-agents |
| AI Infrastructure & Engineering | "Stand up production AI infrastructure" → ai-infrastructure |
| Software Engineering & Digital Transformation | "Modernize core software & platforms" → software-engineering |
| AI Strategy, Governance & Evaluation | "Decide where and how to start" → ai-strategy-governance |
| Edge AI & Intelligent Systems | "Run intelligence at the edge / on-device" → edge-ai |

Footer of mega-menu: `→ View all capabilities` (to `/capabilities`).

**Mega-menu — Industries (▾):** Industrial, Energy & Engineering · Retail & Hospitality · Enterprise & Professional Services · Technology & Digital Platforms.

**Company (▾):** About · Coreframe Labs · Work · Insights · Careers · Security · Contact.

**Mobile nav:** accordion; Capabilities and Industries expand to the lists above; sticky **Discuss a Project** button pinned to the bottom of the sheet.

**Utility:** theme toggle (existing `data-theme` mechanism) stays top-right; keep it out of the primary nav semantics.

---

## PART 3 — GLOBAL CONTENT SYSTEM

### Standard page content template (applied to every page section-by-section)
1. Page objective 2. Target audience 3. Hero headline 4. Hero supporting copy 5. CTA
6. Sections in order 7. Section headings 8. Draft copy 9. Visual/content components
10. Trust signals 11. FAQs 12. Internal links 13. SEO title 14. Meta description
15. URL 16. Wording to avoid.

### Global CTAs
- **Primary:** `Discuss a Project` → `/contact`
- **Secondary:** `Explore Capabilities` → `/capabilities`
- Capability/industry pages add a contextual tertiary: `Read a related case study` → `/work`.

### Global trust signals (reused, never fabricated)
- Deployment-model badges: **On-Premise · Private Cloud · Hybrid · Edge**.
- Positioning tags: **Private AI · Enterprise AI · Digital Transformation**.
- "Research → Engineering → Transformation" operating model band.
- Engagement-model clarity (assessment → architecture → build → deploy → operate).
- Security posture summary + link to `/security` and `/responsible-ai`.
- Company entity line: **Coreframe Technologies Private Limited**, India.
- **Do not** display client logos, metrics, certifications, or partner names until real and approved.

### Global "wording to avoid" (applies site-wide)
- Guarantees: "100% secure", "zero data leakage", "hack-proof", "completely private", "unbreakable".
- Hype: "revolutionizing", "cutting-edge", "empowering businesses", "next-gen", "game-changer", "world-class".
- Downmarket framing: "web development services", "we build chatbots", "get a quote", "cheapest", "fully automated so you don't need people".
- Fabricated proof: fake metrics/percentages, fake certifications (SOC 2 / ISO) until actually held, fake client names, fake awards.
- Absolute legal overreach: "no liability under any circumstances", "we guarantee compliance".

### Tone
Technical, enterprise, sophisticated, concise, confident, research-oriented, commercially credible. Short declarative sentences. Specific over grand.

---

## PART 4 — HOMEPAGE `/`

1. **Objective:** In one screen, establish Coreframe as a serious AI engineering + private-AI + applied-research company; route qualified buyers to Capabilities or Contact.
2. **Audience:** Enterprise decision-makers (CIO/CTO/Head of Digital/Head of Engineering/COO) in oil & gas, manufacturing/EPC, hospitality, professional services, technology — evaluating a technical partner for a serious engagement.
3. **Hero headline:** **Engineering intelligent systems for the real world.**
4. **Hero supporting copy:** Coreframe is an AI research and engineering company helping enterprises deploy private AI, intelligent software and autonomous systems across their operations — on their own infrastructure, inside their real workflows.
5. **CTA:** Primary `Discuss a Project` · Secondary `Explore Capabilities`. Tags beneath: `Private AI · Enterprise AI · Digital Transformation`.

6–8. **Sections in order (headings + draft copy):**

- **Hero** — as above. Deployment badges: On-Premise · Private Cloud · Hybrid · Edge.
- **What we do (three pillars)** — heading *"Design. Deploy. Operate."*
  - *We design serious AI systems.* — We architect AI systems around your data, constraints and threat model — not around a demo. Retrieval, agents, evaluation and infrastructure engineered to hold up in production.
  - *We deploy into real environments.* — We integrate intelligence into the systems, documents and operational workflows your business already runs on, with human oversight where it matters.
  - *We can run AI privately.* — On-premise, private cloud, hybrid or edge. Your data stays on infrastructure you control.
- **Capabilities overview** — heading *"Capabilities"*, sub *"One partner across the AI engineering lifecycle."* Seven cards (see Part 5 card copy), each linking to its capability page.
- **Private AI band (flagship)** — heading *"Your data. Your infrastructure. Your intelligence."* Copy: Many enterprises can't send confidential contracts, engineering documents or operational data to public AI services. Coreframe builds private AI systems — including on-premise and air-gapped deployments — so your models run where your data lives. → `Explore Private AI`.
- **Industries** — heading *"Built for document-heavy, high-stakes operations."* Four cards: Industrial & Energy · Retail & Hospitality · Enterprise & Professional Services · Technology. Each → industry page.
- **How we work (operating model)** — heading *"Research → Engineering → Transformation."* Copy: Research generates technical capability. Engineering turns it into production systems. Transformation integrates it into how your business actually operates. Sub-band: engagement path *Assess → Architect → Build → Deploy → Operate*.
- **Coreframe Labs** — heading *"Applied research, not innovation theatre."* Copy: Coreframe Labs is our applied research practice — private AI, small language models, agent infrastructure, evaluation and safety. Research feeds directly into what we deploy. → `Visit Coreframe Labs`.
- **Selected work** — heading *"Selected work."* 2–3 anonymized case-study cards (category-led, no fabricated metrics). → `View all work`.
- **Security & responsibility** — heading *"Security and responsible AI by design."* Copy: Security architecture is determined by the requirements, deployment environment and threat model of each engagement. We build with customer-controlled data, human-in-the-loop review and honest handling of AI limitations. → `Security` · `Responsible AI`.
- **Technology ecosystem (LOW on page)** — heading *"Technology ecosystem."* Copy: We work across the modern AI and cloud stack and select tools per engagement rather than by default. Restrained logo row (open weights, orchestration, vector DBs, GPU/inference, cloud) — muted, secondary styling.
- **Closing CTA band** — heading *"Let's discuss what you're trying to build."* Sub: Tell us about your data, your constraints and your environment. We'll tell you what's realistic. → `Discuss a Project`.

9. **Components:** sticky nav w/ mega-menu; hero with deployment badges; 3-pillar grid; 7 capability cards; flagship split band; industry cards; horizontal process/stepper; Labs teaser; case-study cards; security/responsibility two-up; muted tech logo strip; footer. Reuse `Container`, `Section`, `Card`, `Button`, `Reveal`/stagger from `lib/animations.tsx`.
10. **Trust signals:** deployment badges, operating-model band, engagement path, security/responsible-AI links, entity line. No fake logos/metrics.
11. **FAQs:** none on home (keep it a routing page).
12. **Internal links:** all 7 capabilities, all 4 industries, `/labs`, `/work`, `/security`, `/responsible-ai`, `/contact`.
13. **SEO title:** `Coreframe Technologies — Enterprise & Private AI Engineering`
14. **Meta description:** `Coreframe is an AI research and engineering company. We design, deploy and operate private AI, enterprise knowledge systems and autonomous workflows — on-premise, private cloud, hybrid or edge.`
15. **URL:** `/`
16. **Avoid:** leading with tech logos; "revolutionizing/cutting-edge/empowering"; any security guarantee; fake metrics/logos.

*(Full ready-to-paste homepage copy is in Part 17.)*

---

## PART 5 — CAPABILITIES OVERVIEW `/capabilities`

1. **Objective:** Present the full capability taxonomy as one coherent umbrella and route to the seven landing pages.
2. **Audience:** Buyers scoping a program; procurement mapping Coreframe to an RFP.
3. **Hero headline:** **Capabilities across the AI engineering lifecycle.**
4. **Supporting copy:** From strategy and architecture through private deployment and long-term operation — Coreframe covers the full path from AI opportunity to production system. Engage us for a single capability or an end-to-end program.
5. **CTA:** `Discuss a Project` / secondary `Talk to an engineer`.

6–8. **Sections & the seven cards (title · one-line · "for you if"):**
- **Private AI & On-Premise LLMs** — Run production AI on infrastructure you control. *For you if your data can't leave your environment.* → `/capabilities/private-ai`
- **Enterprise AI & Knowledge Systems** — Turn millions of pages of documents into evidence-backed enterprise intelligence. *For you if your knowledge is trapped in files.* → `/capabilities/enterprise-ai`
- **AI Agents & Autonomous Workflows** — Tool-using agents that execute real operational workflows with human oversight. *For you if automation has hit the limits of rules.* → `/capabilities/ai-agents`
- **AI Infrastructure & Engineering** — Model serving, GPU clusters, LLMOps and evaluation built for production. *For you if you need infrastructure, not API glue.* → `/capabilities/ai-infrastructure`
- **Software Engineering & Digital Transformation** — Enterprise platforms, cloud-native software and legacy modernization. *For you if AI has to plug into real systems.* → `/capabilities/software-engineering`
- **AI Strategy, Governance & Evaluation** — Readiness, roadmap, evaluation, red-teaming and governance. *For you if you're deciding where to start.* → `/capabilities/ai-strategy-governance`
- **Edge AI & Intelligent Systems** — Inference at the edge, computer vision and embedded intelligence. *For you if intelligence has to run on-device or offline.* → `/capabilities/edge-ai`

Additional sections: **How we engage** (Assess → Architect → Build → Deploy → Operate, with a line each); **Deployment models** (On-Premise / Private Cloud / Hybrid / Edge explainer grid); **Where to start** (three entry points: a scoped assessment, an architecture engagement, or a targeted build); **Closing CTA**.

9. **Components:** 7-card grid, engagement stepper, deployment-model grid, CTA band.
10. **Trust signals:** operating model, deployment badges, engagement clarity.
11. **FAQs:** *Can we engage for just one capability?* Yes. *Do you only do AI?* No — software engineering and modernization are first-class. *Can you work inside our security/compliance constraints?* Yes; architecture is set per engagement.
12. **Internal links:** all 7 capability pages, `/industries`, `/work`, `/contact`.
13. **SEO title:** `Capabilities — Enterprise & Private AI Engineering | Coreframe`
14. **Meta description:** `Private AI, enterprise knowledge systems, AI agents, AI infrastructure, software engineering and AI governance — Coreframe's capabilities across the full AI engineering lifecycle.`
15. **URL:** `/capabilities`
16. **Avoid:** listing raw service words as a wall; tech logos up top; "solutions" language.

---

## PART 6 — CAPABILITY PAGE TEMPLATE + THE SEVEN PAGES

### Shared section skeleton (every capability page, in order)
1. **Hero** — headline + supporting copy + primary/secondary CTA + deployment badges where relevant.
2. **The problem** — the specific enterprise pain this capability addresses.
3. **What Coreframe provides** — grouped service clusters (not a flat dump).
4. **Use cases** — concrete, industry-flavored.
5. **Architecture / how it works** — a described reference architecture or process (diagram placeholder).
6. **Deployment models** — On-Prem / Private Cloud / Hybrid / Edge applicability.
7. **Security considerations** — defensible, threat-model-based language.
8. **Technologies** (where relevant, restrained, secondary styling).
9. **Engagement model** — how a buyer starts and what phases look like.
10. **FAQs.**
11. **Related work + related capabilities + CTA.**

Below, each page's distinguishing content. (Section skeleton is shared; only the specifics differ.)

---

### 6.1 `/capabilities/private-ai` — Private AI & On-Premise LLMs *(flagship)*
- **Hero:** **Private AI. Your data. Your infrastructure. Your intelligence.** — Deploy production language models inside your own environment — on-premise, private cloud, hybrid or air-gapped — so confidential data never has to leave infrastructure you control.
- **Problem:** Confidential contracts, engineering documents and operational data can't be sent to public AI APIs — for legal, regulatory, contractual or sovereignty reasons.
- **What we provide (clusters):** *Deployment* — on-premise LLM deployment, private-cloud AI, hybrid infrastructure, air-gapped environments, local inference, enterprise AI appliances, offline AI. *Models* — small language models (SLMs), model selection/optimization, quantization. *Infrastructure* — GPU/inference infrastructure, dedicated AI infrastructure. *Applications* — private enterprise copilots, secure document intelligence. *Governance* — data-sovereignty architecture.
- **Use cases:** private copilot over confidential engineering docs; air-gapped assistant for a secure facility; on-prem contract intelligence; SLM on modest hardware for a specific task.
- **Architecture:** data plane stays in-environment; ingestion → private vector store → retrieval → in-VPC/on-prem inference → application; no data egress to third-party model APIs in the private-deployment pattern.
- **Deployment models:** all four; this page owns the deployment-model explainer in depth.
- **Security (defensible):** "In private and air-gapped deployments, inference and data remain within infrastructure you control. Specific controls — encryption, network isolation, access management, retention — are defined by your requirements and threat model per engagement." Avoid "zero leakage / 100% secure".
- **Technologies:** open-weight model families, quantization/serving runtimes, private vector stores, GPU orchestration — named generically, secondary styling.
- **Engagement:** feasibility & sizing → hardware/model selection → deployment → evaluation → operate.
- **FAQs:** *Can this run fully offline / air-gapped?* Yes, subject to your environment. *Do we need our own GPUs?* Not necessarily — on-prem, private cloud or hybrid are all options; we size to the workload. *Open-source or commercial models?* We select per requirement; private deployment favors open-weight models you can host. *Can our data be used to train anyone else's model?* In private deployments your data stays in your environment; we design for that explicitly.
- **SEO title:** `Private AI & On-Premise LLM Deployment | Coreframe`
- **Meta:** `On-premise, private-cloud, hybrid and air-gapped LLM deployment. Small language models, local inference and data-sovereignty architecture — AI that runs where your data lives.`
- **Avoid:** "zero data leakage", "100% secure", "completely private", "hack-proof".

### 6.2 `/capabilities/enterprise-ai` — Enterprise AI & Knowledge Systems
- **Hero:** **Enterprise intelligence over your own knowledge.** — Turn thousands — or millions — of pages of contracts, standards, drawings and technical documents into searchable, evidence-backed intelligence your teams can trust.
- **Problem:** Critical knowledge is trapped across contracts, engineering documents, certifications, standards, submissions and approved/rejected records — unsearchable and unusable at scale.
- **What we provide:** enterprise RAG, enterprise search, AI knowledge assistants, document/contract intelligence, technical-document & SOP/policy assistants, standards & certification knowledge systems, knowledge graphs, citation/evidence-backed answers, multimodal document processing, role-based access.
- **Use cases:** an EPC firm searching decades of standards and certifications; contract intelligence across a portfolio; a technical copilot grounded in approved engineering documents with citations.
- **Architecture:** ingestion & parsing (incl. drawings/tables) → chunking & indexing → hybrid retrieval → grounded generation with citations → role-based access → evaluation loop.
- **Security:** role-based access, source-scoping, and audit; position as "evidence-backed" and human-verifiable, not authoritative.
- **Engagement:** knowledge audit → retrieval architecture → pilot on one corpus → expand.
- **FAQs:** *How many documents can it handle?* Designed for large corpora; scale is an architecture decision. *Will it cite sources?* Yes — evidence-backed answers with references are a core requirement we design for. *Does it replace our experts?* No — it accelerates them; outputs require human review for critical decisions (see Responsible AI).
- **SEO title:** `Enterprise AI & Knowledge Systems — RAG, Document Intelligence | Coreframe`
- **Meta:** `Enterprise RAG, document and contract intelligence, and evidence-backed knowledge assistants over your contracts, standards and engineering documents.`
- **Avoid:** "chatbot"; implying AI answers need no verification.

### 6.3 `/capabilities/ai-agents` — AI Agents & Autonomous Workflows
- **Hero:** **Agents that do the work, not just chat about it.** — Tool-using AI agents and multi-agent systems that execute real operational workflows — with human oversight and approval where it matters.
- **Problem:** Rules-based automation breaks on judgment, unstructured inputs and long multi-step processes.
- **What we provide:** AI agents, multi-agent systems, agentic workflows, business-process automation, human-in-the-loop workflows, enterprise workflow agents, tool-using agents, MCP integrations, systems integration, workflow orchestration, automated research/reporting, approval workflows, AI customer support, internal operations agents.
- **Use cases:** approval-routing agent with human sign-off; automated reporting from multiple systems; an operations agent that reads a request, gathers data across tools, drafts an action, and asks a human to approve.
- **Architecture:** planner → tools/integrations (MCP, APIs, DBs) → memory/state → guardrails → human-in-the-loop checkpoints → observability & evaluation.
- **Security:** least-privilege tool access, approval gates on consequential actions, full audit trail.
- **Engagement:** map one workflow → build the agent + guardrails → shadow-run → enable with oversight.
- **FAQs:** *Do agents act without a human?* Only where you explicitly allow; consequential actions default to human approval. *How do you stop it doing something wrong?* Least-privilege tools, guardrails, approval gates and logging. *Can it use our existing tools?* Yes — via APIs and MCP integrations.
- **SEO title:** `AI Agents & Autonomous Workflow Automation | Coreframe`
- **Meta:** `Tool-using AI agents, multi-agent systems and agentic workflow automation with human-in-the-loop oversight, MCP integrations and full auditability.`
- **Avoid:** "fully autonomous, no humans needed"; "we build chatbots".

### 6.4 `/capabilities/ai-infrastructure` — AI Infrastructure & Engineering
- **Hero:** **Production AI infrastructure — not API glue.** — Model serving, GPU clusters, LLMOps, vector databases and evaluation infrastructure engineered for reliability at scale.
- **Problem:** Prototypes that work in a notebook fall over in production — no serving strategy, no evaluation, no observability, no lifecycle.
- **What we provide:** AI architecture, model serving, GPU infrastructure, Kubernetes, private inference clusters, cloud AI architecture, hybrid infrastructure, vector databases, data pipelines, AI gateways, LLMOps/MLOps, observability, AI evaluation infrastructure, high-availability systems, inference optimization, deployment engineering, model lifecycle management.
- **Use cases:** stand up a private inference cluster; add evaluation + observability to an existing AI product; optimize inference cost/latency; build an AI gateway across models.
- **Architecture:** gateway → routing → serving (GPU/CPU) → vector/data layer → evaluation & observability → lifecycle/CI-CD for models.
- **Security:** network isolation, secrets management, tenancy boundaries per environment.
- **Engagement:** architecture review → build/harden → production readiness → operate.
- **FAQs:** *Cloud or on-prem?* Both, plus hybrid. *Do you operate it after build?* Yes — operate/managed engagements are available. *Can you optimize our existing stack?* Yes.
- **SEO title:** `AI Infrastructure, Model Serving & LLMOps | Coreframe`
- **Meta:** `GPU infrastructure, private inference clusters, vector databases, LLMOps, evaluation and observability — production AI infrastructure engineered for reliability.`
- **Avoid:** implying infra alone guarantees model quality.

### 6.5 `/capabilities/software-engineering` — Software Engineering & Digital Transformation
- **Hero:** **Software engineering that AI can build on.** — Enterprise platforms, cloud-native applications and legacy modernization — the systems intelligent capabilities plug into.
- **Problem:** AI can't deliver value on top of brittle, disconnected or legacy systems.
- **What we provide:** enterprise software, SaaS platforms, cloud-native & web/mobile applications, API development, systems integration, legacy modernization, internal enterprise platforms, workflow systems, data platforms, cloud migration, infrastructure modernization.
- **Use cases:** modernize a legacy operations system; build the platform an AI capability sits inside; integrate disconnected systems; new internal enterprise platform.
- **Architecture:** modern service architecture, API layer, data platform, integration fabric — described, not logo-led.
- **Engagement:** discovery → architecture → build → integrate → operate.
- **FAQs:** *Is this "web development"?* No — enterprise software engineering and modernization. *Can you take over an existing codebase?* Yes. *AI-only?* No — this is a first-class capability.
- **SEO title:** `Software Engineering & Digital Transformation | Coreframe`
- **Meta:** `Enterprise software, SaaS platforms, cloud-native applications, systems integration and legacy modernization — the engineering foundation for enterprise AI.`
- **Avoid:** "website/web development services"; "get a quote".

### 6.6 `/capabilities/ai-strategy-governance` — AI Strategy, Governance & Evaluation
- **Hero:** **Decide where AI is worth it — and where it isn't.** — Readiness assessments, roadmaps, evaluation, red-teaming and governance that de-risk enterprise AI before and after you build.
- **Problem:** Enterprises struggle to choose high-value use cases, evaluate models honestly, and govern AI responsibly.
- **What we provide:** AI readiness assessments, opportunity discovery, enterprise AI roadmap, architecture consulting, build-vs-buy analysis, transformation strategy, model evaluation, LLM benchmarking, hallucination testing, AI red-teaming, security testing, AI governance, data governance, AI risk assessment, deployment strategy, ROI modelling, responsible AI, adoption consulting.
- **Use cases:** an AI readiness assessment before committing budget; independent evaluation of a vendor's model; a governance framework for enterprise rollout; red-teaming a deployed system.
- **Process:** discovery → prioritization → architecture options → evaluation plan → governance framework → roadmap.
- **Engagement:** fixed-scope assessment → roadmap → optional build.
- **FAQs:** *Can you evaluate a system you didn't build?* Yes — independent evaluation and red-teaming are offered. *Do you push us to build?* No — build-vs-buy is part of the analysis, including "don't build".
- **SEO title:** `AI Strategy, Governance & Evaluation | Coreframe`
- **Meta:** `AI readiness assessments, roadmaps, model evaluation, red-teaming and governance — advisory that de-risks enterprise AI before and after deployment.`
- **Avoid:** guaranteeing ROI or compliance outcomes.

### 6.7 `/capabilities/edge-ai` — Edge AI & Intelligent Systems *(secondary, growing)*
- **Hero:** **Intelligence at the edge.** — Inference on-device and offline — computer vision, sensor intelligence and embedded AI for physical operations.
- **Problem:** Some intelligence has to run where connectivity, latency or privacy rule out the cloud.
- **What we provide:** edge inference, IoT systems, computer vision, sensor intelligence, embedded AI, industrial monitoring, predictive systems, physical AI, offline AI, edge computing, intelligent devices.
- **Use cases:** on-site visual inspection; predictive monitoring on industrial equipment; offline inference in low-connectivity environments.
- **Architecture:** sensor/device → optimized on-device model → local decisioning → optional sync.
- **Engagement:** feasibility → prototype → field pilot → scale.
- **FAQs:** *Fully offline?* Yes, where the use case requires. *Existing hardware?* We assess constraints and optimize models to fit.
- **SEO title:** `Edge AI & Intelligent Systems | Coreframe`
- **Meta:** `Edge inference, computer vision, sensor intelligence and embedded AI for industrial and physical operations — intelligence that runs on-device and offline.`
- **Avoid:** overstating maturity; treating this as the lead offering.

---

## PART 7 — INDUSTRIES

### `/industries` (overview)
- **Hero:** **Depth in a few industries, not a claim on all of them.** — We focus where document-heavy, high-stakes operations make private, enterprise-grade AI genuinely valuable.
- **Sections:** four industry cards + "how our capabilities map to your operations" + CTA.
- **SEO title:** `Industries — Where Coreframe Works | Coreframe`
- **Meta:** `Industrial, energy & engineering; retail & hospitality; enterprise & professional services; technology & digital platforms — focused enterprise AI and software engineering.`
- **Avoid:** claiming expertise across 20 industries.

**Per-industry page skeleton:** Hero → The environment (their reality) → Where AI helps (use cases) → Relevant capabilities (links) → Deployment/security notes → Related work → CTA.

- **`/industries/industrial-energy` — Industrial, Energy & Engineering.** *Hero:* **AI for the most document-heavy industry there is.** Oil & gas, EPC, manufacturing, engineering & industrial operations. *Use cases:* contract intelligence, standards & certification search, engineering knowledge systems, technical-document intelligence, equipment documentation, compliance workflows, project-document intelligence, maintenance intelligence, internal technical copilots. *Lead capabilities:* Private AI, Enterprise AI, AI Agents. *SEO title:* `AI for Industrial, Energy & Engineering | Coreframe`.
- **`/industries/retail-hospitality` — Retail & Hospitality.** *Hero:* **Operational intelligence for multi-location operators.** *Use cases:* restaurant operations, operational intelligence, intelligent ordering, customer engagement, POS integrations, workflow automation, demand intelligence, multi-location systems, AI customer service, internal operations systems. *Lead capabilities:* AI Agents, Software Engineering, Enterprise AI. *SEO title:* `AI for Retail & Hospitality | Coreframe`.
- **`/industries/enterprise` — Enterprise & Professional Services.** *Hero:* **Knowledge and workflow intelligence for the enterprise.** *Use cases:* internal knowledge copilots, enterprise search, contract intelligence, reporting automation, document processing, workflow automation, operations agents, internal business platforms. *Lead capabilities:* Enterprise AI, AI Agents, Software Engineering. *SEO title:* `Enterprise & Professional Services AI | Coreframe`.
- **`/industries/technology` — Technology & Digital Platforms.** *Hero:* **Infrastructure and engineering for AI-native products.** *Use cases:* SaaS development, AI-native software products, AI infrastructure, platform engineering, agent infrastructure, cloud architecture, enterprise software modernization. *Lead capabilities:* AI Infrastructure, Software Engineering, AI Agents. *SEO title:* `AI Infrastructure & Engineering for Technology Companies | Coreframe`.

Each industry meta: one sentence naming the industry + top 3 use cases + relevant capabilities. **Avoid:** fabricated client names, sector metrics.

---

## PART 8 — COREFRAME LABS

### `/labs`
1. **Objective:** Establish Coreframe as an applied research + engineering company; feed credibility into commercial work.
2. **Audience:** Technical evaluators, senior engineers, prospective hires, partners.
3. **Hero:** **Coreframe Labs — applied research that ships.** 4. **Copy:** Coreframe Labs is our applied research practice. We investigate the hard problems in private and enterprise AI, and the results feed directly into what we build for customers. No innovation theatre — experiments, reports, benchmarks and code.
5. **CTA:** `Read our research` / `See open-source`.
6–8. **Sections:** Research areas grid (Applied AI Research · Private AI · Small Language Models · Agent Infrastructure · AI Evaluation & Safety · Edge Intelligence · Human-AI Systems · Enterprise AI Infrastructure) → Latest from the Labs (posts/reports) → Open source → Publications → How Labs connects to engagements → Careers/collaborate CTA.
9. **Components:** research-area cards, report/publication list, repo cards, "research → engineering" band.
10. **Trust signals:** technical depth, honest framing ("early-stage", "exploratory" where true), links to real repos/reports only.
11. **FAQs:** *Is Labs real work or marketing?* Applied — outputs are used in production engagements. *Do you publish?* As results warrant; we don't pad.
12. **Links:** `/labs/research`, `/labs/open-source`, `/labs/publications`, `/company/careers`, capabilities.
13. **SEO title:** `Coreframe Labs — Applied AI Research`
14. **Meta:** `Applied research in private AI, small language models, agent infrastructure and AI evaluation. Experiments, technical reports, benchmarks and open-source from Coreframe Labs.`
15. **URL:** `/labs`
16. **Avoid:** fake "innovation lab" language; announcing research that doesn't exist; overstated claims.

**Sub-pages:**
- `/labs/research` — index of research areas + posts/technical reports (list layout: title, area tag, date, abstract). Empty-state: "Early work is underway; reports are published as results mature."
- `/labs/open-source` — repo cards (name, description, language, link). Only real repos.
- `/labs/publications` — formal publications/preprints (title, authors, venue/status, link). Honest status labels.

---

## PART 9 — COMPANY

### `/company`
1. **Objective:** Communicate what Coreframe is, believes, and how it operates — without clichés.
2. **Audience:** Buyers doing diligence, partners, hires.
3. **Hero:** **A research, engineering and transformation company.** 4. **Copy:** Coreframe Technologies is an AI research and engineering company. Research generates technical capability. Engineering turns it into production systems. Transformation integrates it into how businesses actually operate.
5. **CTA:** `Discuss a Project` / `See open roles`.
6–8. **Sections:** Operating model (Research → Engineering → Transformation, expanded) → What we believe (3–5 principles, e.g. *AI belongs in production, not demos*; *Private by design where it matters*; *Honest about limits*; *Evidence over hype*) → Engineering philosophy → Research philosophy → Company information (entity, location, focus) → Leadership `[names/roles TBD]` → Careers link.
9. **Components:** principles list, operating-model diagram, leadership grid (photos/bios when available), company facts panel.
10. **Trust signals:** entity name & registration `[CIN/office — fill]`, clear operating model, real leadership only.
11. **FAQs:** *Where are you based?* India `[city]`, serving customers internationally. *How big is the team?* `[state honestly or omit]`. *Do you work with customers outside India?* Yes.
12. **Links:** `/company/about`, `/company/careers`, `/labs`, `/work`, `/contact`.
13. **SEO title:** `Company — Coreframe Technologies`
14. **Meta:** `Coreframe Technologies is an AI research and engineering company — research generates capability, engineering builds production systems, transformation integrates them into operations.`
15. **URL:** `/company` (About at `/company/about` for a fuller narrative; keep one canonical, avoid duplication).
16. **Avoid:** startup clichés, meaningless mission statements, invented headcount/history/awards, fake leadership.

- `/company/about` — long-form narrative version (story, principles, operating model, team). Keep distinct from `/company` or make `/company` redirect to it; don't duplicate copy across both.
- `/company/careers` — roles list (or honest "we're growing; introduce yourself" when no live roles), how we work, what we look for, how to apply. **Avoid** fake benefits/perks and inflated team claims.

---

## PART 10 — WORK `/work`

1. **Objective:** Provide credibility through real (anonymized) engagements without fabricating anything.
2. **Audience:** Buyers seeking proof of relevant delivery.
3. **Hero:** **Selected work.** 4. **Copy:** A selection of engagements, anonymized where clients have not yet approved public attribution. We don't publish metrics we can't substantiate.
5. **CTA:** `Discuss a Project`.
6–8. **Sections:** Filter by capability/industry → case-study cards → CTA. **Case-study card:** category label + one-line challenge + capability/industry tags (no logo unless approved).
   Starter categories: *Private Enterprise Knowledge System — Energy & Industrial* · *AI-Native Restaurant Operations Platform — Hospitality Technology* · *Enterprise Workflow Automation — Business Operations*.
   **Detail page `/work/[slug]` format:** Problem → Constraints → Architecture → Implementation → Outcome. Outcome is qualitative unless a metric is substantiated and approved.
9. **Components:** filterable card grid, case-study detail template.
10. **Trust signals:** honest anonymization note, architecture detail (shows real technical depth), qualitative outcomes.
11. **FAQs:** *Why are clients anonymized?* Until they approve attribution, we protect confidentiality. *Can we talk to a reference?* On request, subject to client approval.
12. **Links:** relevant capability + industry pages per case study; `/contact`.
13. **SEO title:** `Work & Case Studies | Coreframe`
14. **Meta:** `Selected engagements in private AI, enterprise knowledge systems and workflow automation — anonymized where attribution is pending. Problem, constraints, architecture, outcome.`
15. **URL:** `/work`
16. **Avoid:** fabricated clients, metrics, percentages, logos, or outcomes.

---

## PART 11 — INSIGHTS `/insights`

1. **Objective:** SEO engine + technical credibility.
2. **Audience:** Technical buyers researching private/enterprise AI decisions.
3. **Hero:** **Insights on building AI that holds up in production.** 4. **Copy:** Practical, technical writing on private AI, enterprise knowledge systems, infrastructure and governance — written by the people who build them.
5. **CTA:** `Discuss a Project` (soft) + optional subscribe.
6–8. **Structure — categories:** *Private AI* · *Enterprise AI & Knowledge* · *AI Agents & Automation* · *AI Infrastructure* · *AI Strategy & Governance* · *Edge AI*. Landing: featured post + latest grid + category nav.
   **Article layout:** title → deck → metadata (author, date, category, reading time) → body (H2/H3, code, diagrams) → key-takeaways box → related capability CTA → related articles.
   **Starter topics (map to categories):** On-Premise LLM vs Private Cloud LLM · When Should Enterprises Use SLMs? · Building RAG for Industrial Knowledge · Running LLMs on Enterprise Hardware · Cost of Deploying a Private LLM · AI Agents vs Traditional Automation · Enterprise AI Security Architecture · Choosing GPUs for Local AI · Contract Intelligence With LLMs · Enterprise LLM Evaluation · AI Governance for Enterprises · Private AI Architecture · AI Data Sovereignty.
9. **Components:** category nav, featured card, article grid, article template, takeaways box, related-capability CTA.
10. **Trust signals:** technical depth, real authorship, dates, honest analysis (including trade-offs and "when not to").
11. **FAQs:** n/a (per-article).
12. **Links:** each article → its capability page + related articles.
13. **SEO title:** `Insights — Private & Enterprise AI Engineering | Coreframe`
14. **Meta:** `Technical writing on private AI, on-premise LLMs, enterprise RAG, AI infrastructure and governance — from Coreframe's engineers and researchers.`
15. **URL:** `/insights` (categories `/insights/[category]`, articles `/insights/[slug]`).
16. **Avoid:** thin SEO filler, keyword stuffing, unsubstantiated claims, "revolutionizing".

---

## PART 12 — SECURITY `/security`

1. **Objective:** Give enterprise/private-AI buyers a credible, defensible security posture.
2. **Audience:** Security, procurement, compliance reviewers.
3. **Hero:** **Security architecture, matched to your requirements.** 4. **Copy:** Security architecture is determined by the requirements, deployment environment and threat model of each engagement. This page describes the practices and principles we work from — not a one-size guarantee.
5. **CTA:** `Discuss security requirements` → `/contact`.
6–8. **Sections (each a short defensible statement):** Encryption · Access controls · Environment isolation · Secrets management · Secure development practices · Vulnerability management · Logging & monitoring · Infrastructure security · Data-retention principles · Customer-controlled deployments · Incident response · Third-party infrastructure · Backup & recovery principles → Deployment models & data control → Responsible AI link → Vulnerability disclosure link → CTA.
9. **Components:** principle cards, deployment-control table, links to `/responsible-ai` and `/legal/vulnerability-disclosure`.
10. **Trust signals:** honesty ("determined per engagement"), customer-controlled deployment emphasis, disclosure channel. **Add real certifications only when held.**
11. **FAQs:** *Are you SOC 2 / ISO 27001 certified?* `[State the truth — "not currently certified; we align to recognized practices" — do not claim certifications you don't hold.]` *Where does our data live?* In deployments you control, within your environment. *Do you use our data to train models?* Not in private deployments; governed by the engagement agreement.
12. **Links:** `/responsible-ai`, `/legal/vulnerability-disclosure`, `/legal/privacy`, `/capabilities/private-ai`, `/contact`.
13. **SEO title:** `Security | Coreframe`
14. **Meta:** `Coreframe's security practices and principles — encryption, access control, environment isolation, customer-controlled deployments and incident response, matched to each engagement's threat model.`
15. **URL:** `/security`
16. **Avoid:** "100% secure", "unhackable", "zero breach", claiming uncertified standards, blanket guarantees.

---

## PART 13 — RESPONSIBLE AI `/responsible-ai`

1. **Objective:** Show mature, honest handling of AI limitations and responsibility.
2. **Audience:** Risk/compliance, technical buyers, governance reviewers.
3. **Hero:** **Responsible AI, stated honestly.** 4. **Copy:** AI systems are probabilistic. They can be wrong, incomplete or misleading. We design for human oversight, evidence-backed outputs and clear allocation of responsibility.
5. **CTA:** `Discuss governance` → `/contact`.
6–8. **Sections:** Our principles (human oversight; evidence & citations; evaluation; least privilege for agents; transparency about limits) → AI output limitations (may generate inaccurate info, omit information, misinterpret documents, produce probabilistic outputs, hallucinate, require human review) → Human-in-the-loop → Evaluation & red-teaming → Data responsibility (customer responsibilities: verifying outputs, regulatory compliance, data accuracy/rights, deployment & business decisions) → Governance we help implement → Links.
9. **Components:** principles list, limitations callout, responsibility split table (Coreframe vs Customer).
10. **Trust signals:** candor about limits, explicit responsibility allocation, ties to `/security` and Terms.
11. **FAQs:** *Do you guarantee the AI is accurate?* No — unless an explicit, measurable SLA/acceptance criterion is agreed; outputs require human review for critical decisions. *Who's responsible for decisions made with AI?* The customer remains responsible for decisions, compliance and verification (see Terms).
12. **Links:** `/security`, `/legal/terms`, `/capabilities/ai-strategy-governance`.
13. **SEO title:** `Responsible AI | Coreframe`
14. **Meta:** `How Coreframe handles AI limitations — human oversight, evidence-backed outputs, evaluation and clear responsibility allocation. Honest about what AI can and cannot do.`
15. **URL:** `/responsible-ai`
16. **Avoid:** guaranteeing accuracy/"no hallucinations"; implying AI removes the need for human judgment.

---

## PART 14 — CONTACT / LEAD QUALIFICATION `/contact`

1. **Objective:** Qualify serious enterprise enquiries; feel like an engineering/advisory firm, not an agency.
2. **Audience:** Buyers ready to scope an engagement.
3. **Hero:** **Discuss your project.** 4. **Copy:** Tell us what you're trying to build, your constraints and your environment. We'll respond with a realistic view of how to approach it.
5. **CTA (submit):** `Discuss Your Project`.
6–8. **Flow (multi-step form):**
   - **Step 1 — What are you looking to build?** (single/multi-select): Private / On-Premise AI · Enterprise AI · AI Agents · Software Platform · AI Strategy · AI Infrastructure · Edge / IoT · Something Else.
   - **Step 2 — About you & the project:** Name · Company · Work email · Industry (Industrial & Energy / Retail & Hospitality / Enterprise & Professional Services / Technology / Other) · Project description · Approximate timeline · Deployment preferences (On-Prem / Private Cloud / Hybrid / Edge / Not sure) · Budget band (optional).
   - **Step 3 — Confirm & submit** → success state with what happens next ("A Coreframe engineer will review and respond within `[X business days]`").
   Side panel: direct email `[email]`, entity line, security/privacy reassurance + link to `/legal/privacy`.
9. **Components:** stepped form, capability chips, deployment-preference selector, success state. **Backend:** reuse existing `app/api/contact/route.ts` (Resend + optional webhook); extend the validated payload to include the new qualification fields (`buildType`, `industry`, `timeline`, `deployment`, `budgetBand`).
10. **Trust signals:** "work email" framing, no "get a quote", privacy link, realistic-response promise.
11. **FAQs:** *Is this a sales form?* It routes to an engineer, not a call-center. *Minimum project size?* `[state or omit]`. *NDA?* Available on request before detailed discussion.
12. **Links:** `/legal/privacy`, `/security`, `/capabilities`.
13. **SEO title:** `Discuss a Project | Coreframe`
14. **Meta:** `Start an enterprise AI or software engineering engagement with Coreframe. Tell us what you're building, your constraints and deployment environment.`
15. **URL:** `/contact`
16. **Avoid:** "Get a Quote", "Free consultation!", generic Name/Email/Message only, over-collecting data without a privacy link.

---

## PART 15 — FOOTER

**Columns:**

- **COREFRAME** — one-line positioning ("Engineering intelligent systems for the real world."), deployment badges, `Discuss a Project` button.
- **Capabilities** — Private AI · Enterprise AI · AI Agents · AI Infrastructure · Software Engineering · AI Strategy.
- **Industries** — Industrial & Energy · Retail & Hospitality · Enterprise · Technology.
- **Company** — About · Coreframe Labs · Work · Insights · Careers · Contact.
- **Legal** — Privacy Policy · Terms of Use · Cookie Policy · Responsible AI · Security · Vulnerability Disclosure.

**Bottom bar:** `© 2026 Coreframe Technologies Private Limited. All rights reserved.` · `[Registered office / CIN — optional]` · theme toggle · social links (real only).

**Avoid:** tech logos in footer; fake social accounts; fake certifications/badges.

---

## PART 16 — LEGAL PAGES REQUIREMENTS

> Draft conservatively; use commercially normal risk-allocation language; do **not** write unenforceable absolutes.
> Each legal page must carry: **"This is general information, not legal advice. Final terms for any engagement are governed by the executed agreement/SOW, which should be reviewed by qualified legal counsel."** and a **Last updated** date.

### `/legal/terms` — Website Terms of Use
Cover: **Informational use** (content is general; no guarantee it is complete, error-free, current, suitable for any specific use, or that it produces specific commercial/technical results). **No professional advice** (nothing on the site or in demos is legal/financial/medical/regulatory advice, or engineering/compliance/safety certification, unless agreed under a separate engagement). **AI output disclaimer** (AI may generate inaccurate info, omit information, misinterpret documents, produce probabilistic outputs, hallucinate, and require human review; users remain responsible for verifying outputs before critical decisions). **No implied client relationship** (visiting the site, submitting a form, receiving preliminary information, or using a demo does not create a consulting/fiduciary/engineering/advisory/contractual relationship; a formal engagement exists only on execution of the applicable agreement/SOW). **Intellectual property** (site content owned by Coreframe; and the background-IP principle below). **Third-party services** (no guarantee third-party providers remain available/unchanged/identically priced/functional; no liability for failures outside reasonable control). **Limitation of liability** (disclaim, to the maximum extent legally permissible, indirect/consequential/incidental damages, lost profits/revenue/opportunity/goodwill, business interruption, and reliance on website information — without absolute "no liability ever" overreach). **Governing law** `[India / jurisdiction — fill]`. **Changes to terms.**

**IP — background vs deliverables (state on site consistently):** *Client deliverables* = outputs specifically created and paid for under a particular SOW. *Coreframe background IP* = reusable frameworks, libraries, utilities, templates, methodologies, architecture patterns, generic components, AI infrastructure, agent frameworks, internal tooling, evaluation systems, know-how, reusable code, research and processes — Coreframe retains ownership; a customer does not automatically own every reusable technology used to build their solution.

**AI responsibility (reflect in Terms + Responsible AI):** customers remain responsible for decisions made using AI outputs, human review where required, industry-specific regulatory compliance, accuracy of customer-provided data, their rights/authorization to provide data, end-user usage, access credentials they provide, deployment decisions, and business decisions based on outputs. Coreframe does not guarantee perfect AI accuracy absent an explicit measurable SLA/acceptance criterion.

**Enterprise-contract note (not website copy, but the intended commercial stance):** aggregate liability capped at fees paid under the applicable engagement/SOW, potentially measured over a defined prior period — final wording to be set by counsel.

### `/legal/privacy` — Privacy Policy
Cover: responsible legal entity (**Coreframe Technologies Private Limited**, `[office, contact]`); personal data collected (contact/enquiry info, work email, company, message); website analytics; cookies; device/IP information; purposes of processing; data processors/subprocessors `[Resend, hosting/Netlify, analytics, chat/LLM provider — list real ones]`; international transfers; retention; security; user rights; contact details for privacy requests; updates. Structure to support **India DPDP**, **GDPR-style expectations where applicable**, and enterprise procurement. **Avoid** compliance claims you can't substantiate ("fully GDPR compliant" → prefer "we align our practices to…").

### `/legal/cookies` — Cookie Policy
Cover: what cookies are; categories used (strictly necessary, preferences incl. the `coreframe-theme` localStorage value, analytics); purpose; managing/disabling; changes. Include a consent mechanism if/when analytics or non-essential cookies are added.

### `/legal/vulnerability-disclosure` (also `/vulnerability-disclosure`)
Cover: scope; how to report (`security@` `[address]`); safe-harbor for good-faith research; what's out of scope; expected response; no bounty commitment unless offered. Keep coordinated-disclosure tone.

### Deferred until SaaS/API/portal/demo launches
- `/legal/acceptable-use` — prohibited uses of any hosted product/API/demo.
- `/legal/subprocessors` — list of subprocessors + notification-of-change process.
- `/legal/dpa` — Data Processing Agreement for customers processing personal data through Coreframe systems.

**Legal wording to avoid everywhere:** "Coreframe has absolutely no liability under any circumstances"; "we guarantee compliance/security/accuracy"; claiming certifications/standards not held; anything unenforceable that a court would strike (weakening the whole clause).

---

## PART 17 — HOMEPAGE COPY (ready to paste)

### Hero
**Eyebrow:** Private AI · Enterprise AI · Digital Transformation
**H1:** Engineering intelligent systems for the real world.
**Sub:** Coreframe is an AI research and engineering company helping enterprises deploy private AI, intelligent software and autonomous systems across their operations — on their own infrastructure, inside their real workflows.
**Primary CTA:** Discuss a Project **Secondary CTA:** Explore Capabilities
**Badges:** On-Premise · Private Cloud · Hybrid · Edge

### Section — Design. Deploy. Operate.
**H2:** We build AI that survives contact with production.
- **We design serious AI systems.** We architect around your data, constraints and threat model — not around a demo. Retrieval, agents, evaluation and infrastructure engineered to hold up in the real world.
- **We deploy into real environments.** We integrate intelligence into the systems, documents and operational workflows your business already runs on — with human oversight where it matters.
- **We can run AI privately.** On-premise, private cloud, hybrid or edge. Your models run where your data lives.

### Section — Capabilities
**H2:** Capabilities across the AI engineering lifecycle.
**Sub:** One partner from strategy and architecture through private deployment and long-term operation.
*(Seven cards — titles + one-liners from Part 5.)*
**Link:** View all capabilities →

### Section — Private AI (flagship band)
**H2:** Your data. Your infrastructure. Your intelligence.
**Copy:** Many enterprises can't send confidential contracts, engineering documents or operational data to public AI services — for legal, regulatory or sovereignty reasons. Coreframe builds private AI systems, including on-premise and air-gapped deployments, so your models run inside infrastructure you control.
**Badges:** On-Premise · Private Cloud · Hybrid · Edge
**CTA:** Explore Private AI →

### Section — Industries
**H2:** Built for document-heavy, high-stakes operations.
**Sub:** We focus where private, enterprise-grade AI is genuinely valuable.
*(Four cards: Industrial & Energy · Retail & Hospitality · Enterprise & Professional Services · Technology.)*

### Section — How we work
**H2:** Research → Engineering → Transformation.
**Copy:** Research generates technical capability. Engineering turns it into production systems. Transformation integrates it into how your business actually operates.
**Engagement path:** Assess → Architect → Build → Deploy → Operate.

### Section — Coreframe Labs
**H2:** Applied research, not innovation theatre.
**Copy:** Coreframe Labs investigates the hard problems in private and enterprise AI — small language models, agent infrastructure, evaluation and safety — and the results feed directly into what we build.
**CTA:** Visit Coreframe Labs →

### Section — Selected work
**H2:** Selected work.
**Sub:** Anonymized where attribution is pending. We don't publish metrics we can't substantiate.
*(2–3 category-led case-study cards.)*
**Link:** View all work →

### Section — Security & responsibility
**H2:** Security and responsible AI by design.
**Copy:** Security architecture is determined by the requirements, deployment environment and threat model of each engagement. We build with customer-controlled data, human-in-the-loop review, and honest handling of what AI can and cannot do.
**Links:** Security → · Responsible AI →

### Section — Technology ecosystem (low, muted)
**H2:** Technology ecosystem.
**Copy:** We work across the modern AI and cloud stack, and select tools per engagement rather than by default.
*(Restrained, secondary-styled logo row — well below the fold.)*

### Closing CTA band
**H2:** Let's discuss what you're trying to build.
**Sub:** Tell us about your data, your constraints and your environment. We'll tell you what's realistic.
**CTA:** Discuss a Project

---

## APPENDIX — Build sequence (recommended)
1. Nav + mega-menu + footer (global shell) → wire routes as stubs.
2. Homepage (Part 17) → Capabilities overview → 7 capability pages (shared template).
3. Industries (overview + 4).
4. Contact flow (extend `app/api/contact/route.ts` payload).
5. Security · Responsible AI · Legal (terms/privacy/cookies/vuln-disclosure).
6. Company · Labs · Work · Insights (content scaffolds; fill real content over time).

**Fill-before-publish placeholders:** leadership names/bios · registered office & CIN · real client names/logos/metrics (only when approved) · certifications (only if held) · subprocessor list · response-time SLAs · governing-law jurisdiction · security contact address.
