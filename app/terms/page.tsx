import Link from "next/link";
import { Section } from "@/components/Section";

export default function TermsPage() {
  return (
    <Section padding="hero" containerSize="narrow">
      <div className="max-w-3xl">
        <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
          Legal
        </span>
        <h1 className="mt-4 font-heading text-display-lg text-foreground">
          Terms &amp; Conditions
        </h1>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-sans text-body-sm text-muted">
          <span>
            <span className="text-subtle">Last updated:</span> May 2026
          </span>
          <span>
            <span className="text-subtle">Governed by:</span> CoreFrame
            Technologies Private Limited
          </span>
        </div>
      </div>

      <article className="prose-legal mt-14 space-y-12">
        <Clause title="1. Use of Service">
          <p>
            By using our website and services, you agree to comply with all
            applicable laws and avoid any activity that harms the platform,
            other users, or the integrity of our systems.
          </p>
        </Clause>

        <Clause title="2. Intellectual Property">
          <p>
            All content, trademarks, and intellectual property are owned by
            CoreFrame Technologies Private Limited or its licensors.
            Reproduction or derivative works require our prior written
            permission.
          </p>
        </Clause>

        <Clause title="3. Disclaimer">
          <p>
            The service is provided {'"'}as is{'"'} without warranties of any
            kind. We make no guarantees regarding uptime, accuracy, or
            error-free functionality.
          </p>
        </Clause>

        <Clause title="4. Limitation of Liability">
          <p>
            CoreFrame is not liable for any indirect, incidental, or
            consequential damages arising from the use of our service.
          </p>
        </Clause>

        <Clause title="5. Changes to Terms">
          <p>
            We may update these terms from time to time. Continued use of the
            service indicates acceptance of any modifications.
          </p>
        </Clause>

        <Clause title="6. Contact">
          <p>
            Questions about these terms can be directed to{" "}
            <a
              href="mailto:info@coreframetech.in"
              className="text-accent hover:text-foreground transition-colors duration-300"
            >
              info@coreframetech.in
            </a>
            .
          </p>
        </Clause>
      </article>

      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-sans text-caption text-subtle">
          &copy; {new Date().getFullYear()} CoreFrame Technologies Private
          Limited. All rights reserved.
        </p>
        <Link
          href="/privacy"
          className="font-display text-body-sm text-accent hover:text-foreground transition-colors duration-300"
        >
          Privacy Policy &rarr;
        </Link>
      </div>
    </Section>
  );
}

function Clause({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-display-sm text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 font-sans text-body text-muted leading-relaxed [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 hover:[&_a]:decoration-accent [&_strong]:text-foreground [&_strong]:font-medium">
        {children}
      </div>
    </section>
  );
}
