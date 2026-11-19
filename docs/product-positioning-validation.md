# Product positioning validation

18 November 2026. Local implementation against the supplied product-positioning brief. No deployment, DNS change, live enquiry, program application or external message was sent.

## Implemented scope

- Product-led homepage with product and engineering enquiry paths, preserving the existing visual identity, typography, colors, assets, theme controls and approved client showcase.
- `/products/ai-call-intelligence`: independent narrative, planned capabilities, deployment considerations and proposed technical evaluation. The interactive concept uses two authored fictional conversations, including Tamil/English text, fixed example scorecards and local review state. It performs no transcription, inference, upload or CRM operation.
- `/products/custos`: independently inspectable implementation, maturity, npm installation/demo commands, Apache-2.0 license, documentation and changelog links. Public package metadata verified as `custos-mcp` 0.4.2, Node 18+, with repository identity matching the linked source.
- Separate product initiatives, scoped engineering offerings, approved client engagements and illustrative use cases. All eight commercial services, technical routes, approved clients and legacy redirects remain.
- Six outcome-oriented enterprise capability areas with buyer problems, approaches, use cases, illustrative examples and relevant CTAs. Consulting, training, managed operations and cloud/application/IoT engineering remain visible.
- Five-field enquiry form with an editable area of interest. Demo, future-pilot, private AI, voice, knowledge, agent, governance, engineering, assessment and partnership paths reuse `/api/contact`. Interest is validated, escaped in email and included in webhook payloads. Existing campaign attribution, privacy links, failure retention and provider-confirmed success behavior remain.
- Updated company positioning, regional metadata, social headline, breadcrumbs, sitemap, navigation, footer, chat copy and machine-readable discovery. `/api/agent` is version 2.0, separating `products` from `engineeringOfferings`.
- A local readiness checklist is excluded from this public repository through the ignored `docs/internal/` directory and is outside public assets and application imports. No NVIDIA membership or integration claim was published.
- Mobile WhatsApp position moved to the right to avoid covering the left-aligned product CTAs; desktop position and contact-page behavior retained.

## Executed checks

| Check | Result |
| --- | --- |
| `npm run lint` | Passed, no warnings or errors. Also runs during production builds. |
| `npm run typecheck` | Passed. TypeScript also passed in both regional production builds. |
| `npm test` | 16 passed, 0 failed. Includes contact validation, oversized interest rejection, HTML escaping and delivery to email/webhook, provider failures, origin/spam safeguards, approved portfolio projection and anonymous-client protection. Providers are mocked. |
| India/global production build | Passed with the new routes and final mobile WhatsApp fix. The final `.next` build is India/global. |
| UAE production build | Passed. |
| `check:build` for both regions | Passed: 37 indexed pages, eight services and four industry pages. Checks canonical URLs, regional alternates, headings, metadata, JSON-LD, internal links, product/service classification, maturity copy, client presence, anonymity, sitemap, robots and discovery endpoints. |
| HTTP checks for both regions | All 37 sitemap pages return 200. Seven permanent redirects preserve campaign query strings. Unknown service and industry slugs return 404. Malformed contact input returns 400. Internal readiness document path returns 404 in both regions. |
| Global browser matrix | 96 combinations: 16 routes × 3 widths (390, 768, 1440 px) × 2 themes. No detected horizontal overflow, broken images, runtime or unexpected console errors. Includes both new product pages, Services and Capabilities. |
| Global accessibility matrix | 32 mobile route/theme scans, zero detected violations using axe WCAG 2 A/AA and 2.1 A/AA rule tags. Automated scans do not establish full accessibility conformance. |
| Browser interactions | Mobile navigation, Escape/focus restoration, desktop dropdown keyboard use, theme changes, native form validation, retained answers after mocked delivery failure, mocked success/focus, CTA attribution, editable interest selection and fragment links passed. |
| Concept behavior | Conversation selection, three views, example score changes, review/reopen and reload reset passed. Interactions generate no fetch/XHR requests. |
| UAE dynamic preview | 12 view/viewport/theme accessibility scans passed with zero detected violations. Review counters, keyboard radio selection and reload reset passed. |
| Final global dynamic preview | 12 additional view/viewport/theme accessibility scans passed with zero detected violations after the mobile fix. Review counters, keyboard radio selection, reload reset and homepage regional copy/overflow passed. |
| Visual review | Inspected desktop product layout, mobile homepage/product hero, bilingual transcript and final mobile follow-up view. The WhatsApp button no longer covers the left-aligned preview controls in the inspected view. Existing aesthetics retained. |
| Final diff | `git diff --check` passed. No new project dependency or lockfile change. |
| Image optimization | Local optimized 640 px assets: light hero 21,626 bytes (original 2,027,722), dark hero 17,182 bytes (original 1,792,902), work image 36,466 bytes (original 2,040,156). Existing Next.js pipeline retained. |
| Performance scope | Product pages are statically rendered. Call Intelligence first-load JavaScript is approximately 100 kB and Custos 97.2 kB in the production build. No project dependency was added. These are build/asset measurements, not field Core Web Vitals. |
| Public references | Custos public README, changelog, license and npm registry inspected; official NVIDIA Inception FAQ and Riva, NIM and TensorRT-LLM documentation/repository inspected. The npm HTML page rejected the research fetch with 403; package existence and metadata were verified directly through the public npm registry. No claim of a complete external-site crawl. |

Browser artifacts are outside the repository at `/private/tmp/coreframe-product-positioning-qa`, `/private/tmp/coreframe-product-preview-uae` and `/private/tmp/coreframe-product-preview-global`. In total, 56 accessibility scans detected zero violations: 32 page/theme scans and 24 dynamic preview-state scans. The in-app browser's Node REPL execution tool was unavailable, so checks used local Playwright and headless Chromium. QA used Node 24.13.1; deployment retains the existing Netlify Node 20 configuration.

## Remaining business and launch verification

1. **Program eligibility:** evaluate the actual business against the program's published criteria and obtain written clarification where needed. Website positioning does not establish eligibility. Supporting business records remain private.
2. **Corporate records and IP:** privately verify the exact incorporation date, ownership/founder operation, product IP assignments and actual revenue composition. The founding year is supplied by the brief; no statutory identifier, equity ratio or revenue share is invented.
3. **Product implementation:** Call Intelligence remains under development. Its concept preview is not a functional speech/LLM prototype. Validate any capabilities implemented outside this checkout, language coverage, integrations, security controls and deployment options before upgrading claims. Roadmap dates and pilot availability need business confirmation.
4. **Program evidence:** preserve existing founder-confirmed Sarvam text, and retain admission and permitted branding evidence privately. No new program badge, benefit, endorsement or partnership claim was added.
5. **Lead receipt:** unit/browser delivery tests use mocks and send no real messages. Confirm production provider configuration and actual inbox/webhook receipt through a separately authorized live check before launch. No scheduler URL was invented.
6. **Publication and field performance:** implementation is local. Production release requires the existing deployment process and authorization. Recheck live URLs and real-device/field Core Web Vitals after release. The inherited build reports old Browserslist data and recommends optional `sharp`; builds and image-optimization checks still pass. No dependency update was necessary for this change.

See the [before-and-after audit](product-positioning-audit.md) for scope and evidence boundaries. Private readiness records remain local in the ignored `docs/internal/` directory and must stay outside the public repository, public assets and downloads.
