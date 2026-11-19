import Link from "next/link";
import { Section } from "@/components/Section";
import { ENGINEERING_OFFERINGS, OWNED_PRODUCTS } from "@/lib/products";
import { contactHref } from "@/lib/region";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products & Innovation",
  description: "Explore CoreFrame AI Call Intelligence, under development, and Custos open-source agent governance. Discover enterprise engineering offerings separately.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Products", path: "/products" }])) }} />
      <Section padding="hero">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Products &amp; innovation</p>
        <h1 className="mt-6 max-w-4xl font-display text-display-lg leading-[1.05] tracking-tight">AI products for operations.<br />Engineering for your business.</h1>
        <p className="mt-8 max-w-2xl text-body-lg text-muted leading-relaxed">CoreFrame develops multilingual call intelligence and open-source agent governance tooling alongside customer-specific enterprise engineering. Product maturity and delivery scope are stated separately below.</p>
        <nav aria-label="Product initiatives" className="mt-10 flex flex-wrap gap-3">
          {OWNED_PRODUCTS.map(p => <Link key={p.id} href={p.href} className="rounded-lg border border-border px-4 py-3 text-sm hover:border-accent">{p.name} →</Link>)}
          <a href="#engineering-offerings" className="rounded-lg border border-border px-4 py-3 text-sm hover:border-accent">Enterprise engineering ↓</a>
        </nav>
      </Section>
      <Section padding="large" background="elevated">
        <h2 className="font-display text-display-md">CoreFrame product initiatives.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">{OWNED_PRODUCTS.map(p => <article key={p.id} id={p.id} className="flex flex-col rounded-2xl border border-border bg-bg-card p-7 md:p-9"><p className="font-mono text-xs uppercase tracking-widest text-accent">{p.kind}</p><h3 className="mt-5 font-display text-3xl">{p.name}</h3><p className="mt-5 text-muted leading-relaxed">{p.summary}</p><p className="mt-6 font-mono text-xs text-accent">{p.status}</p><p className="mt-4 text-sm text-muted leading-relaxed">{p.boundary}</p><Link href={p.href} className="mt-auto pt-7 text-sm text-accent underline">{p.id === "call-intelligence" ? "Explore the product and concept preview" : "Explore implementation, licensing and installation"} →</Link></article>)}</div>
      </Section>
      <Section id="engineering-offerings" padding="large"><h2 className="font-display text-display-md">Customer-specific engineering.</h2><p className="mt-5 max-w-2xl text-muted leading-relaxed">Knowledge systems and governed agent workflows are scoped engineering engagements. These offerings are separate from our reusable product initiatives and from client-owned software shown on the Work page.</p><Link href="/services" className="mt-5 inline-block text-accent underline">Explore all enterprise services →</Link></Section>
      {ENGINEERING_OFFERINGS.map((p, i) => (
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
              {p.id === "governed-agents" && <Link href="/products/custos" className="inline-block text-sm text-accent underline">Explore the separate Custos open-source project →</Link>}
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
