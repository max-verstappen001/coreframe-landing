# SEO implementation report

Date: 24 September 2026

## Scope and verified findings

The site uses Next.js 14 App Router with React server route components and client presentation components. Route metadata and JSON-LD are generated server-side; the production build statically generates marketing routes where possible. Deployment is configured for Netlify.

Verified strengths retained:

- Central metadata helper already provided per-page titles, descriptions, canonicals, Open Graph, Twitter cards and index controls.
- The primary navigation and footer use crawlable links.
- The logo mark is a real 452 × 452 PNG, above Google’s 112 × 112 Organization-logo minimum, and the application icon is 452 × 452.
- Public marketing pages are indexable, `/showcase` is explicitly `noindex`, and API routes plus the showcase are intentionally excluded in `robots.txt`.
- `robots.txt` already references the canonical sitemap.
- Nested marketing pages already use `BreadcrumbList`; priority service pages use `Service` markup.
- The retired `/case-studies` routes invoke Next.js `notFound()` and return genuine 404 responses in production.

Verified defects addressed:

- The requested brand title would previously have inherited the global title template, creating a repeated homepage brand. The homepage now uses an absolute title.
- There was no `WebSite` entity to state the preferred Google site name.
- Legal identity was inconsistently styled as `CoreFrame`; centralized identity now uses `Coreframe Technologies Private Limited`.
- The sitemap assigned the current build time as `lastmod` to every URL even when no real modification date was available. Those timestamps were removed.
- Edge AI and AI Infrastructure cards linked to the generic capabilities page because dedicated pages did not exist.
- Top-level `BreadcrumbList` blocks contained only one list item, below Google’s minimum of two for breadcrumb eligibility.
- The visible homepage positioning did not directly name private LLMs, on-premise AI and edge AI.
- A `www` host redirect was not declared in repository deployment configuration.
- A stale `app/favicon.ico` was actually a non-square 690 × 516 PNG advertised as `image/x-icon`; it competed with the valid square brand icon.

Recommendations or account checks, not code defects:

- Google chooses site names and title links algorithmically. The new markup is a preference signal, not a guarantee.
- Search Console ownership, submitted sitemaps, indexed canonicals, branded query performance and Business Profile ownership cannot be verified from this repository.
- No analytics integration or Google Search Console verification token was found. Add either only after the company selects an analytics approach and supplies a verified token/account.
- Netlify’s domain settings and DNS must still make the apex domain primary and provision HTTPS. The repository redirect covers the `www` HTTPS alias once that alias reaches this site.

## Implemented changes

- Standardized visible and machine-readable naming:
  - Display name: `Coreframe Technologies`
  - Legal name: `Coreframe Technologies Private Limited`
  - Preferred origin: `https://coreframetech.in`
- Set homepage title to `Coreframe Technologies | Private AI & Edge AI` and aligned its meta description and hero copy with private LLM, on-premise AI and edge AI services.
- Added homepage-only `WebSite` JSON-LD with a stable ID, canonical URL, preferred name, alternate name and Organization publisher relationship.
- Refined Organization JSON-LD with the published email and telephone, a contact point, the real logo, conservative expertise topics, the existing official LinkedIn URL and the stable `/#organization` ID. No address, rating, review, certification, founding date or unverified profile was added.
- Added substantive service routes:
  - `/capabilities/edge-ai`
  - `/capabilities/ai-infrastructure`
- Each new route contains buyer problems, use cases, deliverables, deployment patterns, integration inputs, qualified security/operations language, an implementation process, enquiry CTA and related links. Each also has unique metadata, canonical, Service JSON-LD and BreadcrumbList JSON-LD.
- Updated the centralized breadcrumb generator to prepend Home, giving top-level pages the required two-item trail and nested pages their full hierarchy.
- Connected capability cards, navigation dropdowns, homepage cards and footer links to the new service pages through the centralized capability model.
- Added the new canonical URLs to the sitemap and removed unsupported generated `lastmod` values.
- Added an apex-host redirect for `https://www.coreframetech.in/*` in Netlify configuration.
- Removed the malformed legacy favicon so Next.js uses the real 452 × 452 `app/icon.png` brand asset.
- Added `docs/google-presence-checklist.md` for authorized Business Profile, Search Console and social-identity work.

## Content and trust review

The primary `/company` route publishes only the verified legal entity and country; it does not claim an unverified address. `/contact` publishes email and telephone but no physical office. LocalBusiness markup was intentionally not added because the repository does not establish a customer-facing location, complete address or eligibility.

Claims requiring an internal evidence review before they are promoted further:

- `lib/projects.ts` contains named and anonymized project descriptions, deployment status language and metrics. Confirm client permission and supporting records for every named client, geography, `Production` status and metric.
- `app/about/AboutClient.tsx` contains leadership biographies, founding/timeline claims, experience durations, performance language and a world-record claim. This legacy route is not in primary navigation, but each claim should be approved and evidenced.
- `/work` correctly labels engagements as anonymized and avoids outcome metrics, but the team should confirm that every listed engagement is a client deployment rather than a pilot, prototype or internal demonstration.
- Air-gapped, on-premise, edge, evaluation and operational language on service pages describes offered engineering scope, not proof of an existing deployment. Keep that distinction in future case studies.

The repository currently has both `/about` and `/company`, and both `/projects` and `/work`. They are not exact duplicates, so no destructive redirect was introduced, but the older routes are absent from primary navigation. Decide after the evidence review whether to consolidate each pair and redirect the retired URL.

## Validation

Completed locally:

- `npx tsc --noEmit`: passed after production type artifacts were generated.
- `npm run build`: passed; all public marketing routes were statically generated.
- Generated HTML inspection: passed for the home page and all three priority service routes. Each has the expected title, description, canonical, index directive, Open Graph/Twitter metadata, exactly one H1 and crawlable internal links.
- Local JSON parsing: passed for every JSON-LD block on the inspected routes. This verifies syntax only; it is not a claim of Google validation or rich-result eligibility.
- 404 artifacts: `/case-studies`, `/case-studies/wiral` and the generic not-found route all carry status `404` in their generated metadata.
- `/showcase`: generated HTML contains `noindex, nofollow`.
- Sitemap: contains the new canonical service routes and no unsupported `lastmod` fields. `robots.txt` references the canonical sitemap.

Validation limitation:

- `npm run lint` could not run non-interactively because this repository has no ESLint configuration; Next.js opened its first-time configuration wizard and exited. No lint errors were reported because linting never started. Configure ESLint as a separate tooling change.
- A final browser viewport review should be performed in a deployment preview. The new shared page uses the existing responsive grid breakpoints and the generated mobile-first markup was inspected, but this environment did not permit binding the local server port for a visual browser pass.

## Remaining inputs needed

- Confirm the public telephone remains `+91 63838 31327`.
- Confirm the LinkedIn company URL is controlled by Coreframe Technologies.
- Supply the registered address and, separately, any staffed operating/customer-facing office address. Specify which may be published.
- Supply official hours and the approved Google Business Profile category.
- Confirm the status and eligibility of the Erode Business Profile.
- Provide Search Console access/verification details and any approved verification token.
- Decide whether privacy-conscious analytics should be added; no analytics account/configuration exists in the repository.
- Approve evidence and client permission for project/client/metric claims listed above.
- Provide approved logo variants and genuine team, office and demonstration photographs for the Business Profile.

## Guidance references

- [Google Search Central: Site names](https://developers.google.com/search/docs/appearance/site-names)
- [Google Search Central: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google Search Central: Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Google Search Central: Canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
- [Google Search Central: Title links](https://developers.google.com/search/docs/appearance/title-link)
