# Coreframe modernization implementation plan

1. Preserve Next.js 14 App Router, existing components, image assets, typography, light/dark themes and current service URLs.
2. Introduce eight commercial service pages under `/services`, sharing the existing ServiceLanding component. Link the services from the homepage, navigation and footer; retain technical capability pages as supporting detail.
3. Rewrite the homepage around enterprise outcomes, constraints and Discover → Design → Deploy → Operate. Keep Labs distinct as applied research.
4. Add four industry landing pages using existing sector data and explicit use-case / acceptance-criteria framing.
5. Improve delivery evidence without inventing results: preserve existing anonymized summaries, expose their limitations, connect team profiles and explain what evidence a buyer should request.
6. Use two independently built Netlify sites from this repository. `NEXT_PUBLIC_SITE_REGION=global` serves coreframetech.in; `uae` serves coreframe.ae. Bind region, canonical origin, metadata, sitemap and lead attribution at build time. Never put both apex domains on one regional build.
7. Extend lead qualification and attribution, validate input, escape email content and show success only after confirmed delivery. Preserve the existing Resend/webhook integration.
8. Verify TypeScript, production builds for both regions, route/SEO inventory, redirects, contact error handling and responsive layouts where tooling permits. Prepare a gated deployment checklist; do not publish or change DNS.

## Hosting evidence

`netlify.toml` declares `.next`, Node 20 and `@netlify/plugin-nextjs`. No Netlify site ID or UAE hosting target is committed. Hostinger is the UAE domain manager per the project brief, not evidence of application hosting. Live Netlify site ownership, domain attachment and DNS records must be confirmed before DNS values can be specified.

## Completion audit

The working tree already contained the modernization above when this review began. Preserve those changes and complete the following before handoff:

1. Repair contact step navigation, focus after animated transitions, field limits and accessible delivery feedback; retain campaign and regional attribution.
2. Route the existing hero and engagement artwork through Next.js responsive image optimization while preserving the original assets and theme treatment.
3. Align documentation and supporting CTAs with the implemented services, regional builds and actual notification configuration.
4. Re-run contact tests, both production builds, generated SEO checks and HTTP checks. Document browser and delivery checks that cannot be completed locally.

Read-only production inspection on 31 October 2026 returned `server: Netlify` and Next.js cache headers for `https://coreframetech.in`, corroborating the repository configuration. The UAE URL was not accessible through the web inspection tool; this does not establish its DNS configuration. No account-level site attachment or Hostinger zone has been verified.
