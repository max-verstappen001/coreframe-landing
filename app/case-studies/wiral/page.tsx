import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wiral.ai — Case Study",
  description:
    "How CoreFrame served as the implementation partner for Wiral.ai — handling product engineering, core workflows, and production-ready deployment.",
};

export default function WiralPage() {
  return (
    <>
      <Section>
        <Link
          href="/case-studies"
          className="font-sans text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          ← Back to Case Studies
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-widest text-muted">
            Case Study
          </p>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl tracking-tight text-foreground">
            Wiral.ai
          </h1>
          <p className="mt-2 font-sans text-base text-accent">
            Implementation partnership — product engineering and deployment
          </p>
        </div>
      </Section>

      <Section background="surface">
        <div className="max-w-2xl space-y-14">
          {/* Context */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Context
            </h2>
            <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
              Wiral.ai needed an implementation partner who could take ownership
              of product engineering and deliver a production-ready system. The
              engagement required moving from concept to shipped product with
              reliability, speed, and technical rigor.
            </p>
          </div>

          {/* Problem */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Problem
            </h2>
            <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
              The team needed to go from early-stage architecture to a deployed,
              stable product — without the overhead of building a full
              engineering team internally. They required a partner who could own
              the technical execution end-to-end and deliver production-grade
              quality.
            </p>
          </div>

          {/* Approach */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Approach
            </h2>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Embedded as the core engineering partner with direct ownership
                of the product build
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Defined system architecture and technical foundations
                collaboratively with the Wiral.ai team
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Worked in structured delivery cycles with clear milestones and
                deployable increments
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Prioritized stability, maintainability, and production readiness
                at every stage
              </li>
            </ul>
          </div>

          {/* Deliverables */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              System Design &amp; Deliverables
            </h2>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Core product engineering — end-to-end feature development and
                system architecture
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Primary workflow implementation — the key user-facing flows that
                define the product
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Automation and integration work where relevant to reduce manual
                overhead
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Deployment pipeline and production infrastructure setup
              </li>
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Outcomes
            </h2>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Delivered a stable, production-ready product on timeline
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Established reliable core workflows that support the
                product&rsquo;s primary use cases
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Enabled the Wiral.ai team to operate and iterate on a solid
                technical foundation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Reduced time-to-market through focused, senior-led execution
              </li>
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Stack
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Cloud Infrastructure",
                "Integrations",
                "CI/CD",
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-sans text-xs px-3 py-1.5 rounded border border-border text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="font-serif text-2xl tracking-tight text-foreground">
            Need an implementation partner?
          </h2>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Request a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
