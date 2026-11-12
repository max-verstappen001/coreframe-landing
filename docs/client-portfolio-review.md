# Selected clients and engagements

13 November 2026. Local implementation; no deployment or external message was sent.

The founder confirmed that all four organizations are CoreFrame clients and authorized proceeding. The restaurant software client must be anonymized as **AI-Native Restaurant OS**. This supersedes the earlier pending-publication state.

## Public presentation

- The homepage displays Sultanahmet, Wiral, AI-Native Restaurant OS and SETCCO in a static typography row below Services. The row uses four columns on desktop and two on tablet/mobile. Each wordmark links to its Work entry.
- Work entries identify the direct CoreFrame relationship, industry, a broad engagement description and related CoreFrame service links. Sultanahmet retains its verified Ontario, Canada context; SETCCO retains Saudi Arabia. No market is inferred for the other entries.
- Named client links are [Sultanahmet](https://sultanahmet.ca/), [Wiral](https://wiral.ai/) and [SETCCO](https://www.setcco.com/en). These were inspected during the preceding phase; the founder's go-ahead followed the question identifying the SETCCO site.
- AI-Native Restaurant OS has a generic name and `restaurant-os` identifier, without a website, identifying URL, original brand label or unverified geography. The legacy unused portfolio entry is also anonymized to avoid reintroducing the identity later.
- `/api/agent`, `/llms.txt` and the assistant's portfolio copy match the confirmed client list and anonymity instruction. Only the public label AI-Native Restaurant OS is available to the assistant.
- Descriptions stay at client relationship / industry / technology-delivery level. Related service links are capabilities for exploration, not a claim that a specific stack or deliverable was provided. No new precise deliverables, customer metrics, results, proprietary details or testimonials are asserted.
- Official client logos are not used. No trademark-use permission, endorsement, partnership or customer testimonial is implied. Illustrative use cases remain a separate section below confirmed client entries.

## Main files

- `lib/engagements.ts`: confirmed client catalog, anonymous restaurant entry and public projection.
- `components/SelectedClients.tsx`, `components/ClientEngagements.tsx`: homepage strip and Work entries.
- `app/page.tsx`, `app/work/page.tsx`: approved entries render in normal production output; the development preview and pending notices were removed.
- `app/HomeClient.tsx`, `app/home.css`, `app/work/WorkClient.tsx`: integration with the existing layouts and separate illustrative examples.
- `app/api/agent/route.ts`, `app/llms.txt/route.ts`, `app/api/chat/route.ts`: aligned public discovery and assistant content.
- `lib/projects.ts`: the legacy restaurant software record is anonymized and no longer carries identifying links or old metrics.
- `tests/engagements.test.mjs`, `scripts/check-build.mjs`, `scripts/check-client-portfolio.mjs`: publication and anonymity checks.

The editorial filter still excludes incomplete or unauthorized future records. The earlier development-only preview flag is no longer needed or supported.

## Verification

- `npm run lint`, `npm run typecheck` and all 14 unit tests passed after enabling the records.
- UAE and India/global production builds passed; each regional build check passed across all 35 indexed pages. Generated pages and discovery endpoints contain the confirmed labels and exclude the anonymous client's original identity.
- Local HTTP checks passed: 35 indexed pages return 200, seven redirects preserve campaign queries, unknown service/industry routes return 404 and optimized image requests succeed.
- Focused Chromium QA passed for 12 page/viewport/theme combinations (homepage and Work; 1440, 768 and 390 px; light and dark). Scoped WCAG 2/2.1 A/AA scans identified no violations. No horizontal overflow or browser console/runtime errors were detected.
- Browser checks confirm four typography wordmarks, four direct CoreFrame relationships, three named-client website links, the anonymous entry without an external website, working homepage-to-Work navigation and no identity leakage through `/llms.txt` or `/api/agent`.
- Screenshots were visually reviewed in `/private/tmp/coreframe-clients-approved-qa`. The final local build is India/global; the owned preview server was stopped after testing.
- `git diff --check` passed. Existing Google Fonts build-time network access and the stale Browserslist / optional local `sharp` warnings remain.

Browser QA uses local Chromium because the in-app browser execution tool is unavailable. No production deployment or DNS change is included.

## Pre-commit review

The review identified a fallback-chat routing issue: client questions could match broad greeting/about rules before the portfolio reply. Client intent now takes priority, with regression coverage for common phrasings and anonymous labels. Runtime package versions remain unchanged; the lockfile additions are lint tooling and its development dependencies. Fresh UAE/global builds, 35-page route checks, 14 unit tests and the 12-case responsive/accessibility portfolio check passed before committing.
