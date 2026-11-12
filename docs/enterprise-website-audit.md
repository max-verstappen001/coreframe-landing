# Enterprise website audit and implementation

12 November 2026. Local implementation only; no deployment, DNS change or external enquiry was sent.

Follow-up: [13 November client portfolio confirmation and anonymity changes](client-portfolio-review.md) supersede the earlier publication hold for the four requested clients.

## Audit findings and decisions

| Area | Finding | Implemented decision |
| --- | --- | --- |
| Architecture and identity | Next.js 14 App Router, shared Tailwind tokens, original artwork, dual themes and separate regional builds already provide a coherent foundation. | Retained the framework, fonts, logo, palette, imagery, service architecture and hosting configuration. Standardized public copy, metadata, social artwork and assistant responses to **CoreFrame**. |
| Homepage | Enterprise positioning was present, but product innovation, founder background and trust information were hard to discover. | Added the enterprise-operations hero, work CTA, product overview, security/responsible-AI links, founder context and restrained startup-program text. Preserved the original visual treatment. |
| Products | No product route or clear distinction between owned development and client-specific delivery. | Added `/products`: AI Call Intelligence is under development; Enterprise Knowledge Intelligence and Governed AI Agents are scoped engineering offerings. Each covers the problem, intended customer, approach, capabilities, status, differentiation, expected value and enquiry path. |
| Company | `/about` asserted CEO/CTO/director titles and additional biographical claims; `/company` lacked a substantive leadership profile. | Consolidated into `/company`, with the supplied founder background and title **Founder**. `/about` permanently redirects. Added the approved regional city and retained existing business contacts. |
| Work | Anonymized summaries lacked publication records; `/projects` contained named clients, delivery claims and numerical outcomes with no approval evidence in the checkout. | Replaced public examples with explicitly illustrative scenarios covering challenge, context, potential contribution, technology categories, implementation approach and expected value. `/projects` redirects to `/work`. Existing case-study redirects remain. No new client identities, private architecture or outcomes were published. |
| Labs and Insights | Labs emphasized broad research aspirations despite an existing public Custos reference. Insights listed unpublished article ideas. | Featured the inspectable Custos repository, demo source and design documents. Distinguished research directions and engineering documentation from formal publications and benchmark results. Added a short pilot-scoping guide to Insights. |
| Security | Some copy implied universal implemented controls or that an assessment could prove compliance/safety. | Framed controls as engagement-specific design and review requirements. Removed broad compliance assurances. Existing certification limitations remain explicit. |
| Conversion | Six sequential steps required service/timeline choices before submission. | Replaced with one accessible form: name, work email, company and business challenge. Preserved Resend/webhook semantics, size validation, escaping and attribution. Added a spam trap, origin validation, loading/error/success states, duplicate-submit protection, retained answers and success focus management. No scheduling URL was invented. |
| SEO and navigation | Canonical/hreflang/OG helpers, structured data, robots, sitemap and discovery endpoints were already useful. | Extended them for products and consistent identity, excluded consolidated URLs from the sitemap, retained incoming URL redirects and aligned machine-readable content with development status and illustrative work. |
| Accessibility and maintenance | Heading jumps, faint secondary text, reduced-motion transitions and a nonfunctional lint command needed attention. | Improved heading hierarchy, contrast tokens, fragment offsets, navigation semantics and reduced-motion handling. Added ESLint configuration and a typecheck command without adding runtime dependencies. |

## Claim sources and publication boundaries

- The brief supplies Sanjay Nanda N J's founder role, B.Tech in Electronics and Communication Engineering at VIT Vellore, previous engineering role at BlackRock, experience areas and LinkedIn URL. Only those facts are used in the new profile. LinkedIn did not provide independent profile content during this audit; no CEO, statutory director or additional credential is inferred.
- The brief supplies acceptance into the Sarvam Startup Program. The site uses factual text only, with no third-party logo, endorsement, certification, investment or customer implication. No other startup-program acceptance or partnership tier is asserted.
- The founder explicitly requested that company registration details and street address remain unpublished. Approved location copy is **Chennai, India** for `coreframetech.in` and **Dubai, UAE** for `coreframe.ae`. The existing legal entity name, email and telephone are retained; no CIN, registered address, UAE legal entity or statutory title is added.
- The call-intelligence roadmap comes from the brief. Every listed capability is planned/under development, with no release date, customer adoption, accuracy, supported-language count, revenue or commercial-deployment claim. The other two entries are engineering offerings, not asserted proprietary software releases.
- The existing public [Custos repository](https://github.com/sanjaynandanj/custos) was inspected read-only. Its linked public code and documents are engineering references; the website does not claim production adoption, ownership of all project IP or measured security guarantees.
- Client identities, testimonials, metrics and case studies need explicit publication permission and evidence before replacing the illustrative scenarios. Historical portfolio data remains in repository history/source; it is no longer rendered by the public portfolio route.

Before a future launch, the founder should review the supplied biography, product roadmap and Sarvam wording/branding conditions. Registration documents are intentionally not a publication prerequisite under the founder's instruction.

## Files and components

| Scope | Main files |
| --- | --- |
| Homepage and brand | `app/HomeClient.tsx`, `app/home.css`, `app/globals.css`, `components/Navbar.tsx`, `components/Footer.tsx`, `components/CoreframeWordmark.tsx`, `components/HeroSystemVisual.tsx`, `components/WhatsAppFloat.tsx`, `components/PartnerStrip.tsx`, `lib/animations.tsx` |
| Products | `app/products/page.tsx`, `lib/products.ts` |
| Founder and company | `components/FounderProfile.tsx`, `components/StartupProgram.tsx`, `lib/company.ts`, `app/company/CompanyClient.tsx`, `app/about/AboutClient.tsx`, `lib/region.ts` |
| Work | `lib/work.ts`, `app/work/WorkClient.tsx`, `app/projects/ProjectsClient.tsx`, `next.config.js` |
| Labs and Insights | `lib/labs.ts`, `app/labs/LabsClient.tsx`, `app/labs/LabsSubClient.tsx`, Labs subroute pages, `app/insights/InsightsClient.tsx` |
| Enquiries | `app/contact/ContactClient.tsx`, `app/api/contact/route.ts`, `app/privacy/page.tsx`, `tests/contact.test.mjs` |
| Security | `app/security/SecurityClient.tsx`, `app/capabilities/ai-strategy-governance/GovernanceClient.tsx`, its FAQ data; escaped JSX punctuation in agent/responsible-AI pages |
| SEO and discovery | `lib/seo.ts`, `app/layout.tsx`, `app/sitemap.ts`, `app/opengraph-image.tsx`, `app/llms.txt/route.ts`, `app/api/agent/route.ts`, `app/api/chat/route.ts`, existing page metadata and remaining brand copy in `lib/services.ts` |
| Checks and documentation | `.eslintrc.json`, `package.json`, `package-lock.json`, `scripts/check-build.mjs`, `scripts/check-http.mjs`, `scripts/check-browser.mjs`, `README.md`, this report and a pointer in the historical verification document |

New public route: `/products`. Existing public service/capability/industry routes remain. New permanent redirects: `/about` → `/company`, `/projects` → `/work`.

## Verification

| Check | Result |
| --- | --- |
| `npm run lint` | Passed; no warnings or errors. |
| `npm run typecheck` | Passed. |
| `npm test` | 11 passed, 0 failed; delivery providers mocked. |
| India/global production build | Passed. |
| UAE production build | Passed. |
| `check:build` for both variants | Passed: 35 indexed pages, eight services and four industries per variant. Verifies canonical URLs, exact regional alternates, JSON-LD parsing, metadata, branding, links, product status, approved city, robots and discovery endpoints. |
| HTTP checks for both variants | 35 indexed pages return 200; seven 308 redirects preserve campaign queries; unknown service/industry slugs return 404; malformed contact input returns 400. |
| UAE browser checks | Passed: 72 combinations of 12 routes × three viewports (1440, 768, 390 px) × two themes. No detected overflow, broken images or runtime/console errors. Navigation, Escape/focus restoration, dropdowns, theme switching, form validation, retained answers on failure, mocked success/focus, attribution and fragment targets passed. |
| UAE accessibility scans | 24 mobile page/theme scans using axe WCAG 2 A/AA and 2.1 A/AA rules; 0 detected violations after contrast/link fixes. Automated results do not establish full accessibility conformance. |
| India/global browser and accessibility checks | Passed: the same 72 route/viewport/theme combinations, 24 accessibility scans with 0 detected violations, navigation/form checks and no runtime/console errors. Normal-motion carousel next/previous interactions also passed. |
| Image responses | Optimized light hero: 21,626 bytes; dark hero: 17,182 bytes; work image: 36,466 bytes at 640 px / quality 80, versus roughly 1.8–2 MB originals. These are asset measurements, not Core Web Vitals. |
| `git diff --check` | Passed. |

Screenshots were visually inspected for the homepage, products, company and contact layouts, including mobile and both themes. Browser artifacts are in `/private/tmp/coreframe-qa-uae` and `/private/tmp/coreframe-qa-global`. Tests used local Node 24.13.1 and headless Chromium; Netlify retains its existing Node 20 configuration. The final local build is the India/global variant. The in-app browser execution tool was unavailable, so QA used local Playwright/Chromium. Lint dependencies are development-only; no runtime dependency was added.

## Remaining launch checks

- Confirm real inbox/webhook receipt with configured production credentials. Unit and browser tests mock successful delivery and send no external messages. A provider accepting an enquiry is not proof of inbox receipt.
- Measure real-device and field Core Web Vitals after deployment. No Lighthouse or field-performance score is claimed. Original section-background PNGs remain; the responsive hero and work images retain existing Next.js optimization.
- The inherited Google Fonts integration requires build-time network access. Next.js reports stale Browserslist data and recommends optional `sharp` for local production image optimization; the image-response checks establish actual behavior separately.
- Review founder-supplied factual copy and obtain explicit permission/evidence before publishing client case studies. Add a scheduling CTA only when an approved scheduling URL is available.
- Review the concrete local changes, then authorize production deployment separately if desired. No deployment has been attempted.
