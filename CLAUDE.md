# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server on http://localhost:3000
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — `next lint`

There is no test runner configured.

## Stack

Next.js 14 (App Router) + React 18 + TypeScript (strict) + Tailwind CSS 3. Animations via Framer Motion; momentum scroll via Lenis. Email via Resend. Deployed on Netlify (`@netlify/plugin-nextjs`, see `netlify.toml`). Path alias `@/*` → repo root.

## Architecture

**Marketing site, not an app.** Every route is a Next.js server component (`app/<route>/page.tsx`) that imports a sibling `*Client.tsx` marked `"use client"`. The server file owns metadata; the client file owns animation, state, and content arrays. When adding a page, follow this split — don't put `"use client"` in `page.tsx`.

**Hardcoded content arrays.** Projects, team, case studies, partners, etc. are inline arrays inside the relevant `*Client.tsx` (e.g. `PROJECTS` in `app/projects/ProjectsClient.tsx`, `TEAM` in `app/about/AboutClient.tsx`, partners/investors in `app/HomeClient.tsx`). There is no CMS — edit the arrays directly.

**Design system via CSS variables.** Tailwind colors (`bg`, `accent`, `surface`, `border`, `muted`, etc.) all resolve through `var(--color-*)` defined in `app/globals.css`. Theme is toggled by a `data-theme` attribute on `<html>`, set by an inline script in `app/layout.tsx` that reads `localStorage["coreframe-theme"]` before paint to avoid FOUC. Change accent colors in `globals.css`, not in the Tailwind config.

**Animation primitives in `lib/animations.tsx`** (`Reveal`, stagger helpers, parallax, etc.) wrap Framer Motion. Reuse these instead of importing `framer-motion` directly in pages.

### API routes (`app/api/*/route.ts`)

- `chat/route.ts` — POST: takes `{ messages, sessionId }`. Picks provider by env: `GROQ_API_KEY` first (OpenAI-compatible endpoint, default model `llama-3.3-70b-versatile`), then `OPENAI_API_KEY` (default `gpt-4o-mini`). With neither key it falls back to a rule-based responder (`getFallbackResponse` in the same file). The system prompt requires the model to append a `[SUGGESTIONS: "...", ...]` line that the widget parses for follow-up chips — preserve this contract if you change the prompt. User-message count is injected into the system prompt to ramp up the consultation CTA after 3 / 5 turns.
- `contact/route.ts` — POST: validates `{ name, email, message, company? }`, sends via Resend (`RESEND_API_KEY`, `NOTIFICATION_EMAIL`, `from: send@coreframetech.in`), and fires-and-forgets to `WEBHOOK_URL` if set. Returns `{ success, emailSent, emailError? }` — failures are reported in the body, not via HTTP error.
- `notify/route.ts` — generic webhook fan-out used by client code.

Webhook calls are intentionally non-blocking (`.catch(() => {})`) so the user-facing response isn't delayed by Slack/Discord latency.

## Environment

Copy `.env.example` → `.env.local`. All keys are optional; missing keys degrade gracefully (chat → rule-based, contact → logs only). The README's env table is out of date — `RESEND_API_KEY` is the actual contact-form key (not `EMAIL_API_KEY`), and `GROQ_API_KEY` takes priority over `OPENAI_API_KEY`.

## Conventions

- Server pages stay tiny; all interactivity lives in `*Client.tsx`.
- Use the `Container`, `Section`, `Card`, `Button` components in `components/` rather than re-rolling layout primitives.
- Tailwind-only styling — no CSS modules. Reach for design tokens (`bg-accent`, `text-muted`) over raw hex.
