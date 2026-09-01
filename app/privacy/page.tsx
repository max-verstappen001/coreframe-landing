import Link from "next/link";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Coreframe Technologies collects, uses and protects information — what we collect, how it's used, and your choices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section padding="hero" containerSize="narrow">
      <div className="max-w-3xl">
        <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
          Legal
        </span>
        <h1 className="mt-4 font-heading text-display-lg text-foreground">
          Privacy Policy
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
        <p className="mt-8 font-sans text-body text-muted leading-relaxed">
          We respect your privacy. This policy explains what information we
          collect, how we use it, and the choices you have. We keep things
          minimal and only collect data necessary to operate and improve our
          services.
        </p>
      </div>

      <article className="prose-legal mt-14 space-y-12">
        <Clause title="Information We Collect">
          <ul>
            <li>Basic contact details you provide (e.g., name, email).</li>
            <li>Usage data to help us improve performance and reliability.</li>
            <li>Any information you intentionally share with us for support.</li>
          </ul>
        </Clause>

        <Clause title="How We Use Information">
          <ul>
            <li>To provide, maintain, and improve our products and services.</li>
            <li>To communicate with you about updates, support, and security.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </Clause>

        <Clause title="Data Sharing">
          <p>
            We do not sell your personal information. We may share data with
            trusted service providers who help us operate our services, subject
            to appropriate safeguards.
          </p>
        </Clause>

        <Clause title="Data Retention">
          <p>
            We retain information only for as long as necessary for the
            purposes set out in this policy or as required by law.
          </p>
        </Clause>

        <Clause title="Your Choices">
          <p>
            You may contact us to access, correct, or delete your information
            where applicable. You can also opt out of non-essential
            communications at any time.
          </p>
        </Clause>

        <Clause title="Contact">
          <p>
            For privacy inquiries, contact{" "}
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
          href="/terms"
          className="font-display text-body-sm text-accent hover:text-foreground transition-colors duration-300"
        >
          Terms &amp; Conditions &rarr;
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
      <div className="mt-4 space-y-4 font-sans text-body text-muted leading-relaxed [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 hover:[&_a]:decoration-accent [&_strong]:text-foreground [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:marker:text-accent/60">
        {children}
      </div>
    </section>
  );
}
