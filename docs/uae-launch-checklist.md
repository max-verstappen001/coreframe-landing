# Coreframe regional launch checklist

## Shared architecture

Use two Netlify sites connected to this repository and the same approved commit. Keep the existing India site and its production domain attachment. Create the UAE site only after deployment approval. Both use `npm run build`, `.next`, Node 20 and the existing Next.js Netlify plugin.

| Deployment | Build environment | Canonical origin | Audience |
| --- | --- | --- | --- |
| India/global | `NEXT_PUBLIC_SITE_REGION=global` | `https://coreframetech.in` | India and international organizations |
| UAE/GCC | `NEXT_PUBLIC_SITE_REGION=uae` | `https://coreframe.ae` | UAE and GCC organizations |

This is a build-time setting. Changing it requires a rebuild. Do not attach both regional apex domains to the same build. Canonical URLs, regional alternates, sitemap, robots, social metadata, machine-readable discovery content and lead attribution follow the selected region. Both versions remain English; no Arabic translation is claimed.

## Before approval

- Confirm the current Netlify account, India site ID, connected repository/branch, build settings and production rollback deploy. `netlify.toml` and read-only India production response headers identify Netlify; no authenticated hosting account was inspected in this task.
- Confirm access to the Hostinger DNS zone for coreframe.ae and inspect its existing records, nameservers, email provider and current hosting. Preserve mail and verification records.
- Review the proposed UAE copy, commercial delivery arrangements and public team profiles. No UAE office, incorporation, tax, local model availability or certification is asserted. Existing anonymized work summaries have no newly added client identities or performance metrics.
- Confirm which approved client references, diagrams, evaluation results and deployment artifacts may be published later. Public evidence is limited to existing repository summaries and team information.
- Provision Resend credentials and a verified sender. Set `RESEND_API_KEY`, `NOTIFICATION_EMAIL`, optionally `CONTACT_FROM_EMAIL`, and the existing `WEBHOOK_URL` if required. A verified existing India sender may receive UAE leads; changing the website domain does not require inventing a UAE mailbox.
- Run the checks below for each regional build. Use private previews with platform access protection and prevent preview indexing.
- Complete visual QA at 360, 768, 1024 and 1440 pixels in both themes: navigation, dropdown focus/Escape, mobile menu, hero CTA wrapping, service/industry cards, contact steps, carousel buttons, keyboard focus, skip link and reduced motion. Contact choices now require Continue, avoiding unintended step changes; verify focus after transitions and error/success announcements with a screen reader. Browser automation was unavailable in this session; visual QA and real-device performance scores remain unverified.
- Submit one approved test enquiry per region in preview, checking inbox/webhook delivery, source CTA, intent, UTM fields and server-derived region. Confirm failed delivery shows an error. Automated delivery tests use mocks and send no messages.

## Checks

```sh
npm test
NEXT_PUBLIC_SITE_REGION=global npm run build
npm run check:build -- global
NEXT_PUBLIC_SITE_REGION=uae npm run build
npm run check:build -- uae
# With a production preview running locally:
node scripts/check-http.mjs http://127.0.0.1:3100
```

The build checker checks all 36 sitemap pages, eight service pages, four industry pages, one H1 per page, canonical URLs, regional alternates, parsable JSON-LD, internal page links, robots, llms.txt and the agent interface. The contact tests cover invalid input, size limits, escaping, trusted region attribution and actual delivery outcomes.

HTTP checks also request optimized hero artwork in both themes and an engagement image. Confirm Next.js image optimization in the Netlify preview, including theme switching and lazy loading of engagement artwork. Other section backgrounds still use the existing large PNGs; measure total transfer and Core Web Vitals before launch.

## Only after explicit production / DNS approval

1. Publish the approved India and UAE builds to their separate Netlify sites. Confirm each environment and canonical origin before attaching domains.
2. Add coreframe.ae and www.coreframe.ae to the UAE Netlify site. Obtain that site's exact DNS instructions from Netlify's domain configuration. No DNS record values are specified here because the live target and current DNS zone have not been verified.
3. Apply only the approved website DNS records in Hostinger. Avoid changing nameservers or unrelated records unless specifically required and approved.
4. Verify apex HTTPS, certificate provisioning, and www → apex redirects for each region. Verify paths and query strings survive redirects. No cross-region redirect is intended.
5. Smoke-test `/`, `/services`, all eight services, all four industries, `/contact`, `/labs`, `/work`, `/robots.txt`, `/sitemap.xml` and `/llms.txt`. Check unknown service/industry slugs return 404. Check legacy `/case-studies` and `/case-studies/wiral` redirect to `/work`.
6. Confirm regional metadata, reciprocal alternates and contact routing on live hosts. Register each domain separately in Search Console and submit its own sitemap.
7. Review field performance and lead delivery after launch. Roll back the affected Netlify site to its previous deploy if required; preserve the recorded DNS state for any separately approved DNS rollback.

No production deployment, hosting-account mutation or DNS modification was performed during implementation.

Builds use the existing `next/font/google` configuration and need access to Google Fonts on a cold cache. The dependency warning about stale Browserslist data predates this work and does not block compilation.

Claude provider boundary reference: [Claude in Amazon Bedrock, official documentation](https://platform.claude.com/docs/en/build-with-claude/claude-in-amazon-bedrock). Validate current model access and regional service behavior for each engagement.
