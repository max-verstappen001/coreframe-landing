import Link from "next/link";
import { Section } from "@/components/Section";
import { PRODUCTS } from "@/lib/products";
import { contactHref } from "@/lib/region";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products & Innovation",
  description: "Explore CoreFrame AI Call Intelligence, a product under development, and scoped engineering offerings for enterprise knowledge and governed AI agents.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Products", path: "/products" }])) }} />
      <Section padding="hero">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Products &amp; innovation</p>
        <h1 className="mt-6 max-w-4xl font-display text-display-lg leading-[1.05] tracking-tight">Owned product development.<br />Applied enterprise engineering.</h1>
        <p className="mt-8 max-w-2xl text-body-lg text-muted leading-relaxed">CoreFrame is developing multilingual call intelligence alongside its enterprise AI engineering practice. Explore what is under development and what can be scoped as an engagement.</p>
        <nav aria-label="Product initiatives" className="mt-10 flex flex-wrap gap-3">
          {PRODUCTS.map(p => <a key={p.id} href={`#${p.id}`} className="rounded-lg border border-border px-4 py-3 text-sm hover:border-accent">{p.name} ↓</a>)}
        </nav>
      </Section>
      {PRODUCTS.map((p, i) => (
        <Section key={p.id} id={p.id} padding="large" background={i % 2 === 0 ? "elevated" : "default"}>
          <article className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20" aria-labelledby={`${p.id}-title`}>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">0{i + 1} / {p.kind}</p>
              <h2 id={`${p.id}-title`} className="mt-5 font-display text-display-md leading-tight">{p.name}</h2>
              <p className="mt-6 text-body-lg text-muted leading-relaxed">{p.summary}</p>
              <p className="mt-6 inline-block rounded-full border border-border bg-bg px-4 py-2 font-mono text-xs">{p.status}</p>
              <p className="mt-4 text-sm text-muted leading-relaxed">{p.boundary}</p>
              <Link href={contactHref(p.intent, `/products#${p.id}`)} className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-foreground px-6 py-3 text-sm text-bg hover:bg-accent hover:text-on-accent">{p.cta} →</Link>
            </div>
            <div className="space-y-7">
              {[{ title: "The problem", body: p.problem }, { title: "Intended customers", body: p.customer }, { title: "Our approach", body: p.solution }].map(item => <div key={item.title}><h3 className="font-display text-lg">{item.title}</h3><p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p></div>)}
              <div><h3 className="font-display text-lg">{p.capabilitiesLabel}</h3><ul className="mt-3 space-y-3 text-sm text-muted">{p.capabilities.map(c => <li key={c} className="border-l-2 border-accent/30 pl-4">{c}</li>)}</ul></div>
              <div className="border-t border-border pt-6"><h3 className="font-display text-lg">What shapes the work</h3><p className="mt-2 text-sm text-muted leading-relaxed">{p.differentiation}</p></div>
              <div><h3 className="font-display text-lg">Business value</h3><p className="mt-2 text-sm text-muted leading-relaxed">{p.value}</p></div>
              {p.id === "governed-agents" && <Link href="/labs" className="inline-block text-sm text-accent underline">Explore the public Custos project →</Link>}
            </div>
          </article>
        </Section>
      ))}
      <Section padding="large">
        <h2 className="font-display text-display-md">Start with the operational problem.</h2>
        <p className="mt-5 max-w-2xl text-muted leading-relaxed">We can help define a focused assessment, implementation scope or future product pilot. Share your workflow and the business outcome you need.</p>
        <Link href={contactHref("discovery", "/products")} className="mt-7 inline-block text-accent underline">Discuss Your AI Initiative →</Link>
      </Section>
    </>
  );
}
