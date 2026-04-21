import Link from "next/link";
import { Section } from "@/components/Section";

const SECTIONS = [
  { id: "information-we-collect", label: "1. Information We Collect" },
  { id: "how-we-use", label: "2. How We Use Information" },
  { id: "how-we-share", label: "3. How We Share Information" },
  { id: "retention", label: "4. Data Retention" },
  { id: "security", label: "5. Data Security" },
  { id: "cookies", label: "6. Cookies & Similar Technologies" },
  { id: "your-rights", label: "7. Your Rights & Choices" },
  { id: "international", label: "8. International Transfers" },
  { id: "children", label: "9. Children's Privacy" },
  { id: "third-party", label: "10. Third-Party Links" },
  { id: "changes", label: "11. Changes to This Policy" },
  { id: "contact", label: "12. Contact" },
];

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
            <span className="text-subtle">Effective date:</span> April 21, 2026
          </span>
          <span>
            <span className="text-subtle">Governed by:</span> CoreFrame
            Technologies Private Limited
          </span>
        </div>
        <p className="mt-8 font-sans text-body text-muted leading-relaxed">
          CoreFrame Technologies Private Limited ({'"'}CoreFrame,{'"'}{" "}
          {'"'}we,{'"'} {'"'}us,{'"'} {'"'}our{'"'}) respects your privacy.
          This Privacy Policy explains how we collect, use, share, and protect
          information when you visit our websites &mdash; including{" "}
          <span className="text-foreground">coreframetech.in</span> and{" "}
          <span className="text-foreground">corsys.ai</span>, our applied-AI
          research and product initiative &mdash; engage us for services, or
          otherwise interact with us. By using our Services, you consent to the
          practices described here.
        </p>
      </div>

      <nav
        aria-label="On this page"
        className="mt-12 rounded-2xl border border-border bg-bg-card p-6 md:p-8"
      >
        <p className="font-display text-caption uppercase tracking-[0.15em] text-subtle">
          On this page
        </p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="font-sans text-body-sm text-muted hover:text-accent transition-colors duration-300"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <article className="prose-legal mt-16 space-y-14">
        <Clause id="information-we-collect" title="1. Information We Collect">
          <h3>Information you provide directly</h3>
          <ul>
            <li>
              <strong>Contact details</strong> &mdash; name, email, phone
              number, company, role, and any other information you share when
              contacting us, requesting a consultation, or subscribing to
              updates.
            </li>
            <li>
              <strong>Business information</strong> &mdash; details about your
              business, objectives, systems, and constraints shared during the
              discovery and engagement process.
            </li>
            <li>
              <strong>Content you submit</strong> &mdash; messages, files,
              data, feedback, or other content you send us.
            </li>
          </ul>

          <h3>Information collected automatically</h3>
          <ul>
            <li>
              <strong>Usage data</strong> &mdash; pages visited, time on page,
              referring URLs, device type, browser, operating system, and
              general location (country / region).
            </li>
            <li>
              <strong>Technical data</strong> &mdash; IP address, session
              identifiers, performance metrics, and diagnostic logs.
            </li>
            <li>
              <strong>Cookies and similar technologies</strong> &mdash; see
              Section 6 below.
            </li>
          </ul>

          <h3>Information from third parties</h3>
          <p>
            Where permitted by law, we may receive information from analytics,
            email, CRM, or lead-enrichment providers integrated with our
            systems.
          </p>
        </Clause>

        <Clause id="how-we-use" title="2. How We Use Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Provide, operate, and improve our websites, research, and
              Services.
            </li>
            <li>
              Respond to inquiries and communicate about engagements,
              proposals, and support.
            </li>
            <li>
              Send product, research, and operational updates &mdash; including
              those associated with corsys.ai &mdash; to people who have opted
              in.
            </li>
            <li>Monitor security, detect abuse, and prevent fraud.</li>
            <li>Comply with legal and regulatory obligations.</li>
            <li>
              Conduct internal research and analytics to improve our offerings.
            </li>
          </ul>
          <p>
            We do not use your information to make automated decisions that
            produce significant effects on you without human oversight.
          </p>
        </Clause>

        <Clause id="how-we-share" title="3. How We Share Information">
          <p>
            We do <strong>not sell</strong> your personal information.
          </p>
          <p>We may share information with:</p>
          <ul>
            <li>
              <strong>Service providers</strong> &mdash; third-party tools we
              use for hosting, email, analytics, CRM, customer support, and
              infrastructure, each bound by contractual confidentiality and
              data-protection obligations.
            </li>
            <li>
              <strong>Professional advisors</strong> &mdash; legal, accounting,
              and insurance advisors, where reasonably necessary.
            </li>
            <li>
              <strong>Authorities</strong> &mdash; when required by law, court
              order, or to protect rights, property, or safety.
            </li>
            <li>
              <strong>Business transfers</strong> &mdash; in connection with a
              merger, acquisition, financing, or sale of assets, subject to
              equivalent protections.
            </li>
          </ul>
        </Clause>

        <Clause id="retention" title="4. Data Retention">
          <p>
            We retain information only for as long as necessary for the
            purposes described in this Policy, or as required by applicable
            law, contract, or accounting obligations. When information is no
            longer needed, we securely delete or anonymize it.
          </p>
        </Clause>

        <Clause id="security" title="5. Data Security">
          <p>
            We use reasonable technical and organizational measures to protect
            information from unauthorized access, disclosure, alteration, or
            destruction &mdash; including access controls, encryption in
            transit, secure credential storage, and regular review of our
            security posture.
          </p>
          <p>
            No method of transmission or storage is entirely secure. If we
            become aware of a breach affecting your personal information, we
            will notify you as required by law.
          </p>
        </Clause>

        <Clause id="cookies" title="6. Cookies & Similar Technologies">
          <p>Our websites use cookies and similar technologies to:</p>
          <ul>
            <li>Remember your preferences (e.g., theme selection).</li>
            <li>Measure site performance and usage.</li>
            <li>Understand how visitors interact with our content.</li>
          </ul>
          <p>
            You may disable cookies in your browser settings, though some parts
            of the site may not function as intended without them.
          </p>
        </Clause>

        <Clause id="your-rights" title="7. Your Rights & Choices">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your personal information.</li>
            <li>
              Object to, or restrict, certain types of processing.
            </li>
            <li>Port your information to another provider.</li>
            <li>
              Withdraw consent where processing is based on consent.
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a
              href="mailto:info@coreframetech.in"
              className="text-accent hover:text-foreground transition-colors duration-300"
            >
              info@coreframetech.in
            </a>
            . We will respond within a reasonable timeframe and in accordance
            with applicable law. You may also unsubscribe from non-essential
            communications at any time using the link provided in our emails.
          </p>
        </Clause>

        <Clause id="international" title="8. International Transfers">
          <p>
            We are based in India. If you access our Services from outside
            India, your information may be transferred to, processed, and
            stored in India or in other countries where our service providers
            operate. We take appropriate steps to ensure your information is
            treated securely and in accordance with this Policy.
          </p>
        </Clause>

        <Clause id="children" title="9. Children's Privacy">
          <p>
            Our Services are intended for business use and are not directed to
            children under 18. We do not knowingly collect personal information
            from children. If you believe a child has provided us with personal
            information, contact us and we will promptly delete it.
          </p>
        </Clause>

        <Clause id="third-party" title="10. Third-Party Links">
          <p>
            Our websites may contain links to third-party sites or services. We
            are not responsible for the privacy practices of those sites. We
            encourage you to review their policies before sharing any
            information.
          </p>
        </Clause>

        <Clause id="changes" title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be announced on our websites or communicated directly
            where appropriate. The {'"'}Effective date{'"'} at the top of this
            page indicates the most recent revision.
          </p>
        </Clause>

        <Clause id="contact" title="12. Contact">
          <p>
            If you have questions, requests, or concerns about this Privacy
            Policy or our handling of your information, contact:
          </p>
          <p>
            <strong>CoreFrame Technologies Private Limited</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:info@coreframetech.in"
              className="text-accent hover:text-foreground transition-colors duration-300"
            >
              info@coreframetech.in
            </a>
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
          Terms of Service &rarr;
        </Link>
      </div>
    </Section>
  );
}

function Clause({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-heading text-display-sm text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 font-sans text-body text-muted leading-relaxed [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 hover:[&_a]:decoration-accent [&_strong]:text-foreground [&_strong]:font-medium [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-body [&_h3]:text-foreground [&_h3]:font-medium [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:marker:text-accent/60">
        {children}
      </div>
    </section>
  );
}
