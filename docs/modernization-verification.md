# Modernization verification

Completed against the local implementation on 31 October 2026:

- `npm test`: 9 passing tests covering contact input rejection, total and per-field size limits, preservation of a full brief with service context, HTML escaping, trusted regional attribution, confirmed webhook delivery and failure states. Providers are mocked; no external messages are sent.
- `npx tsc --noEmit`: passed. Both production builds also completed Next.js type validation.
- `NEXT_PUBLIC_SITE_REGION=uae npm run build`: passed.
- `npm run check:build -- uae`: passed across 36 sitemap pages, eight services and four industries.
- `NEXT_PUBLIC_SITE_REGION=global npm run build`: passed.
- `npm run check:build -- global`: passed across the same route inventory.
- Build checks validate one H1 per indexed page, self-canonical origin/path, exact India/UAE/x-default alternate URLs, regional homepage copy, responsive hero markup, parsable JSON-LD, internal page links, sitemap origin, robots, llms.txt and the agent interface.
- `node scripts/check-http.mjs` against local UAE and global production builds: all 36 indexed pages returned 200; five permanent redirects preserved query strings; unknown service and industry slugs returned 404; malformed contact input returned 400.
- Optimized image requests returned 200. At 640px and quality 80, the light hero was 21,626 bytes (original 2,027,722), dark hero 17,182 bytes (original 1,792,902), and light engagement image 36,466 bytes (original 2,040,156). These are individual asset measurements, not page-load or Core Web Vitals scores.
- `git diff --check`: passed.

## Verification limits

The in-app browser execution tool was unavailable. Responsive visual inspection, real keyboard interaction, real-device performance/Core Web Vitals and end-to-end inbox delivery remain launch checks. Hero and engagement artwork now use Next.js responsive image optimization; other section backgrounds remain large original PNGs. The build's JavaScript estimates do not measure their transfer cost. No Lighthouse score is claimed.

Next.js reported stale Browserslist data and recommended its optional `sharp` dependency during local image optimization; optimization requests nevertheless succeeded. Confirm image delivery on the Netlify preview. Standalone ESLint was not run because the repository has no ESLint dependency/configuration; production TypeScript checks passed. Google Fonts required network access outside the sandbox. Local preview servers were stopped after testing; the final local build is global.

Existing client summaries and team profiles are repository-sourced. No newly invented client names, metrics, credentials or vendor relationships were introduced. Detailed client-approved delivery evidence is still needed for richer public case studies.

The repository and read-only response headers from the India production site identify Netlify. Authenticated hosting-account attachments and the Hostinger DNS zone were not inspected. No DNS targets are guessed. No production deployment or DNS change was made.
