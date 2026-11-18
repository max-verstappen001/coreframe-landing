# Product positioning audit

18 November 2026. Audit recorded before implementation. Scope: existing Next.js repository and read-only public evidence. Local implementation; publication is separate.

## Before editing

| Area | Existing evidence and gap | Planned change |
| --- | --- | --- |
| Homepage | Engineering-led hero and enquiry CTA. Products follow services and clients; two engineering offerings share the product grid. Custos appears only in Labs. | Lead with products and enterprise engineering, put owned initiatives first, retain the service practice, clients and visual system. |
| Products | `/products` labels Call Intelligence under development, but no dedicated route, demonstrable implementation, architecture direction or preview exists in this repository. | Add `/products/ai-call-intelligence` with planned capabilities, deployment questions, proposed technical direction and an explicitly synthetic interactive concept. Preserve existing anchor URLs. |
| Custos | Labs links the public repository, demo source and design documents. Licensing, installation, maturity and direct package/history links are missing. | Verify public source; add a product narrative and inspectable evidence without adoption, security guarantee or corporate IP claims. |
| Work | Four founder-approved public engagements are separate from illustrative use cases. Authorization and anonymous-client safeguards already exist in `lib/engagements.ts`. | Preserve descriptions, identities, logos and scope; add business challenges derived only from that public context and clarify client IP boundaries. No outcome metrics are available. |
| Services/capabilities | Eight real commercial services and seven technical capabilities already exist. Knowledge and voice pathways are harder to identify; IoT remains visible in client work and edge engineering. | Add six buyer-oriented capability areas, with problems, approaches, illustrative examples and enquiry paths; retain all existing services and URLs. |
| Company/About | `/about` redirects to `/company`. Product development is secondary; legal name and founder are present. | Explain the product and customer engineering business together; add the founder-supplied founding year, without inventing an exact incorporation date. |
| Contact | Four required fields; query-driven intent; real `/api/contact` with validation, provider/webhook acceptance and honest failure handling. No visible area-of-interest field. | Add a fifth field with product/demo/pilot, engineering and partnership intents; preserve attribution, delivery, error retention and privacy disclosures. |
| SEO/discovery | Shared canonical, regional alternates, social metadata, JSON-LD, sitemap, robots and machine-readable endpoints already exist. | Extend to new routes and product status; keep engineering offerings distinct in discovery. Avoid pricing, reviews, release and partnership markup. |
| Program claims | No NVIDIA membership claim found. Sarvam participation is founder-supplied text only in existing approved content. | Maintain program-readiness records privately, outside this public repository. Do not imply membership or endorsement. Preserve existing Sarvam text without adding logo or benefit claims. |
| Legacy routes | `/projects`, `/about`, `/case-studies` and `/case-studies/wiral` redirect to canonical pages. `/showcase` is noindex. Historical unapproved project data is not used by public routes. | Preserve redirects, index boundaries and existing public portfolio guards. |

## Evidence and publication boundaries

- The attached brief supplies the legal entity, founding year (2026) and product direction. Exact incorporation date, corporate IP assignments, current product maturity beyond this repository, revenue composition and program eligibility require private business records.
- Call Intelligence has marketing descriptions only in this checkout. The preview will be deterministic browser UI with authored fictional conversations, no audio processing, AI inference, uploads or backend integrations.
- Existing client records explicitly record founder authorization for public names, scope and logos. This update does not broaden those permissions or infer outcomes from a client's own website.
- [Custos public repository](https://github.com/sanjaynandanj/custos) identifies Python/Node implementations, MCP policy checks, signed decision records, a WebMCP adapter and a simulated operations example. Its README identifies Apache-2.0 and `custos-mcp`; package/installation details are checked separately before publication. Public code is evidence of implementation, not evidence of production security or company ownership.
- [NVIDIA's official Inception FAQ](https://www.nvidia.com/en-us/startups/) excludes consulting and outsourced development firms and requires incorporation, an operating founder, a working website, a company under ten years old and a clear NVIDIA use case. The actual mixed product/service business needs NVIDIA clarification. Website copy cannot resolve eligibility.

## After implementation

| Area | Implemented result |
| --- | --- |
| Homepage | Product-led hero, product and enterprise-project CTAs, two product initiatives before capabilities, six buyer-oriented capability cards, preserved approved client showcase and existing visual identity. |
| Call Intelligence | Independent `/products/ai-call-intelligence` page with problem, vision, all planned capability groups, deployment questions, proposed architecture and evaluation candidates. An interactive synthetic preview switches conversations/views and models local reviewer decisions without calling an API. |
| Custos | Independent `/products/custos` narrative with public-source implementation scope, pre-1.0 maturity, verified npm version 0.4.2, installation/demo commands, Apache-2.0 license, documentation, changelog and deployment limits. Labs, navigation and footer link to the page. |
| Products vs engineering | Two product initiatives are presented separately from scoped knowledge/agent engagements; old product anchors remain valid. `/api/agent` v2.0 exposes distinct `products` and `engineeringOfferings` arrays. |
| Enterprise capabilities | Shared six-area section on Services and Capabilities with buyer problems, approaches, suitable uses, illustrative examples and relevant contact intents. All eight commercial services and existing technical routes remain. |
| Work | All four previously approved engagements retained; public-context challenge summaries added alongside industry, contribution and disciplines. Client IP and illustrative scenarios stay distinct. No results or confidential implementation details were added. |
| Company | Founder-supplied 2026 founding year and explicit product/service operating model. No invented statutory date, title, revenue split or product-release claim. |
| Conversion | Five-field form with editable area of interest; demo, future-pilot, engineering and partnership paths use the existing contact API. The selected interest reaches email/webhook delivery with validation and HTML escaping. Existing analytics/first-touch attribution and honest delivery failures remain. Privacy disclosure updated. |
| SEO/performance | New routes have canonical URLs, regional alternates, social previews and breadcrumbs; sitemap, social headline, discovery endpoints and chat positioning are consistent. Static rendering and the existing optimized image pipeline are preserved. No new project dependency or decorative image added. |
| Internal readiness | A local checklist records private business verification tasks in the ignored `docs/internal/` directory, excluded from this public repository and application assets. No NVIDIA membership, endorsement or integration claim was added. |

See [validation and remaining business checks](product-positioning-validation.md) for executed checks and limits. This update completes the website implementation locally; it does not establish product production readiness or startup-program eligibility.
