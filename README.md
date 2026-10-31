# Coreframe Technologies website

Enterprise AI engineering and implementation website built on the existing Next.js 14 App Router, TypeScript, Tailwind CSS and Framer Motion stack. The shared codebase retains the established typography, artwork, light/dark themes, portfolio and contact integrations.

## Local development

Use Node 20, matching `netlify.toml`.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Configure delivery credentials only when an enquiry should be sent; automated tests mock providers and send no messages.

## Regional builds

| Audience | Build setting | Canonical origin |
| --- | --- | --- |
| India/global | `NEXT_PUBLIC_SITE_REGION=global` | https://coreframetech.in |
| UAE/GCC | `NEXT_PUBLIC_SITE_REGION=uae` | https://coreframe.ae |

Build and host the two regions separately from the same approved commit. The setting is embedded at build time and controls copy, metadata, canonical URLs, regional alternates, discovery endpoints and enquiry attribution. Rebuild after changing it. Do not attach both regional apex domains to one build.

```sh
npm test
NEXT_PUBLIC_SITE_REGION=global npm run build
npm run check:build -- global
NEXT_PUBLIC_SITE_REGION=uae npm run build
npm run check:build -- uae
```

To inspect a completed build locally:

```sh
npm start -- --port 3100
# In a second terminal:
node scripts/check-http.mjs http://127.0.0.1:3100
```

`npm test` covers contact validation and delivery outcomes. `check:build` checks the generated route inventory, canonical URLs, regional alternates, JSON-LD, internal links, robots, sitemap and discovery endpoints. HTTP checks cover indexed pages, redirects, unknown slugs and malformed contact input. TypeScript validation runs during production builds; `npx tsc --noEmit` is also available. The inherited `lint` script requires an ESLint setup that is not installed in this repository.

## Content and routes

| Location | Purpose |
| --- | --- |
| `app/HomeClient.tsx`, `app/home.css` | Homepage positioning and established design |
| `lib/service-catalog.ts`, `lib/services.ts` | Eight commercial services and delivery details |
| `/services/[slug]` | Claude, forward deployed engineering, private/sovereign AI, agents, readiness, training, governance and managed operations |
| `lib/industries.ts`, `app/industries/[slug]/page.tsx` | Industrial/energy, retail/hospitality, enterprise/professional services and technology landing pages |
| `lib/delivery.ts` | Discover → Design → Deploy → Operate |
| `/capabilities/*` | Supporting technical capability pages |
| `/work`, `/projects` | Existing engagement summaries and project portfolio |
| `/about`, `/company` | Existing team information and delivery principles |
| `/labs/*` | Applied research, distinct from commercial services |
| `/contact` | Discovery or assessment enquiry with source and campaign attribution |
| `lib/region.ts`, `lib/seo.ts` | Regional identity, metadata and structured data |
| `app/sitemap.ts`, `app/robots.ts`, `/llms.txt`, `/api/agent` | Search and machine-readable discovery |

Keep claims traceable to approved evidence. Do not add client identities, measured results, partnerships, certifications or UAE office/legal claims without verification. Historical IoT projects remain in the portfolio; IoT is excluded from primary service positioning. Legacy case-study routes redirect to `/work`; see `next.config.js` for the full redirect map.

## Enquiry delivery and attribution

The contact API validates required fields and size limits, escapes email HTML, and derives region/domain from server configuration. Success requires the configured email provider or webhook to accept the request. Actual inbox receipt must be verified separately before launch. The form retains the visitor's answers on failure.

First-touch landing path and UTM values stay in session storage for the current tab and accompany an enquiry. Intent and originating CTA are included. WhatsApp links include the regional website in their prefilled message; they do not record whether a message is sent.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_REGION` | `global` (default) or `uae`; build-time setting |
| `RESEND_API_KEY` | Email delivery credentials |
| `NOTIFICATION_EMAIL` | Enquiry recipient; required with Resend |
| `CONTACT_FROM_EMAIL` | Verified sender; defaults to the existing India sender |
| `WEBHOOK_URL` | Optional existing notification endpoint for contact/chat |
| `GROQ_API_KEY`, `GROQ_MODEL` | Existing chat API provider configuration |
| `OPENAI_API_KEY`, `OPENAI_MODEL` | Existing chat provider fallback configuration |

`.env.example` is the environment template. Keep credentials out of source control. The existing `/api/chat` route uses Groq when configured, then OpenAI when configured, and otherwise rule-based replies. The global layout currently exposes WhatsApp; the chat widget component remains available in the repository.

## Hosting and launch

`netlify.toml` uses Node 20, `.next` and `@netlify/plugin-nextjs`. Read-only inspection of the India production response also returned Netlify headers. Hostinger manages the UAE domain; that does not establish its application hosting target. Verify the authenticated hosting configuration and current DNS zone before choosing record values.

Production deployment and DNS changes require explicit approval. No deployment or DNS mutation is part of the local implementation.

- [Implementation plan](docs/modernization-plan.md)
- [Verification record](docs/modernization-verification.md)
- [UAE launch and deployment checklist](docs/uae-launch-checklist.md)

The existing Google Fonts build integration requires network access on a cold cache. Hero and engagement artwork use Next.js responsive image optimization; other section backgrounds remain original assets. Browser visual QA and measured performance are separate launch checks.
