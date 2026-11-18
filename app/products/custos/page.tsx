import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CUSTOS } from "@/lib/labs";
import { contactHref } from "@/lib/region";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/products/custos";
export const metadata = pageMetadata({
  title: "Custos — Open-Source AI Agent Governance",
  description: "Inspect Custos: open-source policy enforcement and signed audit records for MCP tool calls. Explore its public packages, installation, documentation and deployment limits.",
  path: PATH,
});

const IMPLEMENTATION = [
  { title: "Policy before execution", body: "YAML rules evaluate MCP tool calls against explicit permissions, with a deny-by-default policy model and allow or deny decisions." },
  { title: "Reviewable decision records", body: "Ed25519 signatures and a SHA-256 chain make recorded policy decisions tamper-evident. Verification tools inspect the ledger offline." },
  { title: "Runtime integration", body: "Python and Node implementations expose in-process gates and a stdio proxy. The repository documents a WebMCP adapter and a simulated browser operations console." },
];

export default function CustosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Products", path: "/products" }, { name: "Custos", path: PATH }])) }} />
      <Section padding="hero">
        <Link href="/products" className="text-sm text-accent underline">← Products &amp; innovation</Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">Custos / Open-source agent governance</p>
        <h1 className="mt-6 max-w-4xl font-display text-display-lg leading-[1.05]">Give agent tool calls<br />an explicit boundary.</h1>
        <p className="mt-7 max-w-2xl text-body-lg text-muted leading-relaxed">An agent connected to business tools needs limits on what it can execute and evidence of the decisions made along the way. Custos provides inspectable runtime controls around MCP tool calls.</p>
        <p className="mt-6 inline-block rounded-full border border-border px-4 py-2 font-mono text-xs">{CUSTOS.maturity}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button href={CUSTOS.href}>Inspect the Repository ↗</Button><Button variant="secondary" href={contactHref("governed-agents", PATH)}>Discuss Agent Governance</Button></div>
      </Section>
      <Section padding="large" background="elevated">
        <h2 className="font-display text-display-md">Permissions are part of the workflow.</h2>
        <p className="mt-5 max-w-3xl text-muted leading-relaxed">Tools can read business data, change records or trigger operational actions. Teams need to decide which calls are allowed, which need a person’s approval and how a decision can be investigated. Custos makes those control points visible in code.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{IMPLEMENTATION.map(item => <article key={item.title} className="rounded-2xl border border-border bg-bg-card p-7"><h3 className="font-display text-xl">{item.title}</h3><p className="mt-4 text-sm text-muted leading-relaxed">{item.body}</p></article>)}</div>
        <p className="mt-7 text-sm text-muted leading-relaxed">The public WebMCP example demonstrates allow, human-approval and deny paths using simulated operations. It is an engineering demonstration, not a client deployment.</p>
        <a href={`${CUSTOS.href}/tree/main/examples/webmcp-control-room`} className="mt-4 inline-block text-sm text-accent underline">Review the example source ↗</a>
      </Section>
      <Section padding="large">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div><p className="font-mono text-xs uppercase tracking-widest text-accent">Install &amp; inspect</p><h2 className="mt-5 font-display text-display-md">Public code.<br />Documented interfaces.</h2><p className="mt-6 text-muted leading-relaxed">The npm registry lists custos-mcp {CUSTOS.verifiedVersion}, Node 18+ and Apache-2.0 licensing, verified on {CUSTOS.verifiedOn}. Python installation is also documented in the repository. Check package history and prerequisites before adopting it.</p><p className="mt-5 text-sm text-muted leading-relaxed">The commands run the documented mock-tool demo. For an application integration, follow the version-specific SDK and proxy documentation.</p></div>
          <div className="min-w-0"><div className="rounded-2xl border border-border bg-bg-elevated p-6"><h3 className="font-display text-lg">Node installation and local demo</h3><pre className="mt-5 overflow-x-auto whitespace-pre-wrap break-words font-mono text-sm leading-loose"><code>{"npm install custos-mcp\nnpx custos-mcp demo"}</code></pre></div><ul className="mt-6 grid gap-3 sm:grid-cols-2">{[{ label: "GitHub repository", href: CUSTOS.href }, { label: "npm package", href: CUSTOS.npm }, { label: "Installation & API docs", href: CUSTOS.docs }, { label: "Changelog", href: CUSTOS.history }, { label: "Apache-2.0 license", href: CUSTOS.license }, { label: "Security policy", href: `${CUSTOS.href}/blob/main/SECURITY.md` }].map(item => <li key={item.label}><a href={item.href} className="inline-flex min-h-11 items-center text-sm text-accent underline">{item.label} ↗</a></li>)}</ul></div>
        </div>
      </Section>
      <Section padding="large" background="elevated">
        <h2 className="font-display text-display-md">Evaluate the boundary before adoption.</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2"><div><h3 className="font-display text-xl">What a ledger can establish</h3><p className="mt-4 text-sm text-muted leading-relaxed">Signed records support inspection of the calls that reached the gate. They do not prove that every possible route to a tool was controlled. Downstream verification, credentials, network access and operational monitoring remain deployment responsibilities.</p></div><div><h3 className="font-display text-xl">What availability means here</h3><p className="mt-4 text-sm text-muted leading-relaxed">Source and packages are publicly available in a pre-1.0 project. Production suitability, integration coverage and security properties need independent evaluation for your environment. No adoption metrics, certification or guaranteed protection are claimed.</p></div></div>
        <a href={`${CUSTOS.docs.replace("#readme", "")}#what-custos-proves--and-what-it-does-not`} className="mt-7 inline-block text-sm text-accent underline">Read the documented guarantees and limits ↗</a>
      </Section>
      <Section padding="large"><h2 className="font-display text-display-md">Start with the tools your agent can reach.</h2><p className="mt-5 max-w-2xl text-muted leading-relaxed">Discuss permissions, review checkpoints and evidence requirements for your workflow. Customer-specific agent engineering is scoped separately from the open-source project.</p><div className="mt-8 flex flex-wrap gap-3"><Button href={contactHref("governed-agents", PATH)}>Discuss Agent Governance</Button><Button variant="secondary" href={contactHref("partnership", PATH)}>Explore Partnerships</Button></div></Section>
    </>
  );
}
