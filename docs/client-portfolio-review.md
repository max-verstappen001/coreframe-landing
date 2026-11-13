# Selected clients and engagements

13 November 2026. No production deployment or DNS change is included.

The founder confirmed all four organizations as CoreFrame clients, explicitly approved use of the three named clients’ official logos and supplied the delivery scopes below. The restaurant software client remains anonymized as **AI-Native Restaurant OS**.

## Confirmed delivery scope

| Client | Founder-confirmed CoreFrame work | Public presentation |
| --- | --- | --- |
| Sultanahmet | Its website. Existing portfolio records describe the multi-location web presence. | Website design and engineering, brand/location information, and a multi-location digital presence. |
| Wiral | Entire website design, AI agents, RAG and HITL. | Website design and engineering, agent development, retrieval-augmented generation and human-in-the-loop workflows. |
| AI-Native Restaurant OS | Hardware, IoT, website, web apps, AI agents and AI governance. | Those high-level delivery categories, with operations and margin optimization context. No name, identifying logo, website or inferred geography. |
| SETCCO | Engineering work including STAAD, reverse engineering and AI. | STAAD engineering work, reverse engineering and applied AI. No unverified structural specifications, certifications or project outcomes. |

## Business context and official assets

Client business context is separate from CoreFrame’s contribution. It is grounded in the [Sultanahmet website](https://sultanahmet.ca/) and its [official location information](https://ajax.sultanahmet.ca/contact-us/), [Wiral’s public product website](https://wiral.ai/), and [SETCCO’s public business website](https://www.setcco.com/en). Sultanahmet serves Ontario, Wiral’s site describes the GCC market, and SETCCO is a Saudi industrial engineering/manufacturing business serving oil and gas. No quantitative customer claims are reused.

Official logos were identified from those sites, downloaded and visually inspected. Unmodified original PNGs are in `public/logos/clients`; [the asset source manifest](../public/logos/clients/README.md) records exact URLs, dimensions, checksums and the founder’s usage confirmation. Neutral white/dark backing plates preserve each logo’s actual colors without recoloring or redrawing it. Next.js optimizes the locally hosted images; loading the portfolio does not request assets from client websites.

These logos identify client engagements. They do not state endorsement, certification, partnership or investment.

## Public experience

- The homepage displays a restrained four-column client row on desktop and two columns on mobile/tablet. Three authorized logos sit alongside the anonymous restaurant OS text treatment. Each entry links to its Work anchor; the three named clients also have direct website links.
- Work uses detailed cards with the client identity, industry/verified market, business context, CoreFrame’s contribution, concrete scope bullets, related capabilities and a clear website CTA. Confirmed engagements remain separate from illustrative use cases.
- `/api/agent`, `/llms.txt` and the assistant use the same approved content. Editorial authorization flags are excluded from public data. The anonymous entry has no logo or external URL.
- No testimonials, metrics, financial outcomes, private architecture, datasets, commercial terms or customer security controls were added.

## Main files

- `lib/engagements.ts`: public context, confirmed scope, approved logos and public field projection.
- `components/ClientIdentity.tsx`: shared logo/text treatment with accessible names and intact artwork.
- `components/SelectedClients.tsx`, `components/ClientEngagements.tsx`: homepage and Work presentation.
- `app/home.css`, `app/globals.css`: responsive client row and shared logo styles.
- `app/api/chat/route.ts`: approved delivery context for assistant replies.
- `public/logos/clients/`: official assets and provenance manifest.
- `tests/engagements.test.mjs`, `scripts/check-client-portfolio.mjs`: authorization, anonymity, logo loading, accessibility and responsive checks.

## Verification

- Lint, TypeScript and all 15 unit tests passed, including a new test that withholds logos unless their use is authorized.
- UAE and India/global production builds and 35-page build checks passed. Metadata, redirects, internal links and anonymous identity checks remain valid.
- Local HTTP checks passed for all 35 indexed pages, seven redirects, unknown slugs and optimized images.
- Focused Chromium QA passed 12 combinations of homepage/Work, desktop/tablet/mobile and light/dark themes. All three official logos loaded; contribution headings, scope details and website links were verified. Scoped WCAG 2/2.1 A/AA scans identified no violations; no runtime/console errors or horizontal overflow were detected.
- Screenshots were visually inspected in `/private/tmp/coreframe-client-details-qa`.
- Source asset checksums match the downloaded official files; `git diff --check` passed.

The in-app browser runner is unavailable, so QA used local Chromium. Google Fonts build-time network access and existing Browserslist/optional local `sharp` warnings remain. The final local build is India/global.
