import Link from "next/link";
import { Section } from "@/components/Section";

const SECTIONS = [
  { id: "definitions", label: "1. Definitions" },
  { id: "use-of-services", label: "2. Use of Services" },
  { id: "engagements", label: "3. Engagements & Work Product" },
  { id: "intellectual-property", label: "4. Intellectual Property" },
  { id: "confidentiality", label: "5. Confidentiality" },
  { id: "fees", label: "6. Fees, Invoicing & Payment" },
  { id: "warranties", label: "7. Warranties & Disclaimers" },
  { id: "liability", label: "8. Limitation of Liability" },
  { id: "indemnification", label: "9. Indemnification" },
  { id: "termination", label: "10. Termination" },
  { id: "governing-law", label: "11. Governing Law" },
  { id: "changes", label: "12. Changes to These Terms" },
  { id: "contact", label: "13. Contact" },
];

export default function TermsPage() {
  return (
    <Section padding="hero" containerSize="narrow">
      <div className="max-w-3xl">
        <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
          Legal
        </span>
        <h1 className="mt-4 font-heading text-display-lg text-foreground">
          Terms of Service
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
          Welcome to CoreFrame. These Terms of Service ({'"'}Terms{'"'}) govern
          your access to and use of the websites, consulting, engineering,
          research, and product offerings operated by CoreFrame Technologies
          Private Limited ({'"'}CoreFrame,{'"'} {'"'}we,{'"'} {'"'}us,{'"'}{" "}
          {'"'}our{'"'}) &mdash; including{" "}
          <span className="text-foreground">coreframetech.in</span> and{" "}
          <span className="text-foreground">corsys.ai</span>, our applied-AI
          research and product initiative. By accessing our websites, engaging
          our services, or using any software we provide, you agree to these
          Terms. If you do not agree, please do not use our services.
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
        <Clause id="definitions" title="1. Definitions">
          <ul>
            <li>
              <strong>{'"'}Services{'"'}</strong> means any consulting,
              engineering, research, product, or advisory offering delivered by
              CoreFrame &mdash; including offerings released under the{" "}
              <strong>corsys.ai</strong> initiative.
            </li>
            <li>
              <strong>{'"'}Client{'"'}</strong> means the business or individual
              entering a commercial engagement with us under a Statement of Work
              or Master Services Agreement.
            </li>
            <li>
              <strong>{'"'}User{'"'}</strong> means anyone visiting our
              websites, reading our research, or using a publicly available
              tool we provide.
            </li>
            <li>
              <strong>{'"'}Work Product{'"'}</strong> means any deliverable,
              document, codebase, model, artifact, or output produced during an
              engagement.
            </li>
          </ul>
        </Clause>

        <Clause id="use-of-services" title="2. Use of Services">
          <p>
            You agree to use our Services only for lawful purposes and in a way
            that does not infringe the rights of, restrict, or inhibit anyone
            else&rsquo;s use of the Services. You will not:
          </p>
          <ul>
            <li>
              Attempt to gain unauthorized access to any systems, networks, or
              accounts.
            </li>
            <li>
              Reverse engineer, decompile, or disassemble any software we
              provide, except where expressly permitted by law or a separate
              license.
            </li>
            <li>
              Use our Services to develop a directly competing product or
              service.
            </li>
            <li>
              Upload malicious code or otherwise interfere with the
              availability, integrity, or security of our Services.
            </li>
            <li>
              Misrepresent your identity or affiliation with any person or
              organization.
            </li>
          </ul>
        </Clause>

        <Clause id="engagements" title="3. Engagements & Work Product">
          <p>
            Specific client engagements are governed by a separate Statement of
            Work (SOW) or Master Services Agreement (MSA). In the event of a
            conflict between these Terms and a signed engagement agreement, the
            engagement agreement controls.
          </p>
          <p>
            Unless otherwise agreed in writing, Work Product that has been
            delivered and paid for in full becomes the property of the Client
            upon receipt of final payment. CoreFrame retains the right to reuse
            generalized knowledge, methods, techniques, frameworks, and
            non-confidential background technology developed in the course of
            our work, including within the <strong>corsys.ai</strong>{" "}
            initiative.
          </p>
        </Clause>

        <Clause id="intellectual-property" title="4. Intellectual Property">
          <p>
            All content, trademarks, logos, software, research, and
            intellectual property associated with CoreFrame, corsys.ai, and our
            websites are owned by CoreFrame Technologies Private Limited or our
            licensors, and are protected by applicable intellectual property
            laws.
          </p>
          <p>
            You may not copy, modify, distribute, sell, publish, or create
            derivative works from our materials without our prior written
            consent, except as expressly permitted by these Terms or a separate
            license. Open-source components released through corsys.ai are
            governed by their respective open-source licenses.
          </p>
        </Clause>

        <Clause id="confidentiality" title="5. Confidentiality">
          <p>
            Information shared during the course of an inquiry or engagement is
            treated as confidential. We will not disclose it to third parties
            except (a) to personnel or contractors with a need to know, bound
            by confidentiality obligations, (b) where required by law or court
            order, or (c) with your express consent. Detailed confidentiality
            terms &mdash; including survival periods and permitted exceptions
            &mdash; are defined in the applicable engagement agreement.
          </p>
        </Clause>

        <Clause id="fees" title="6. Fees, Invoicing & Payment">
          <p>
            Fees, invoicing frequency, and payment terms are defined in the
            applicable SOW or engagement agreement. Unless otherwise agreed,
            invoices are due within fifteen (15) days of issue. Amounts not
            paid by the due date may accrue interest at the maximum rate
            permitted under applicable law, and we reserve the right to suspend
            ongoing work in the event of material non-payment.
          </p>
        </Clause>

        <Clause id="warranties" title="7. Warranties & Disclaimers">
          <p>
            We perform our professional services with reasonable care and skill,
            consistent with industry standards.
          </p>
          <p>
            Except as expressly stated in a signed engagement agreement, our
            websites, publicly available research under corsys.ai, and any free
            or evaluation tools we provide are offered{" "}
            <strong>{'"'}as is{'"'}</strong> and{" "}
            <strong>{'"'}as available,{'"'}</strong> without warranties of any
            kind, express or implied &mdash; including the implied warranties
            of merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that these offerings will be
            uninterrupted, error-free, or free of harmful components.
          </p>
        </Clause>

        <Clause id="liability" title="8. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, CoreFrame, its directors,
            employees, and contractors will not be liable for any indirect,
            incidental, special, consequential, exemplary, or punitive damages
            &mdash; including loss of profits, revenue, data, goodwill, or
            business opportunity &mdash; arising out of or related to your use
            of our Services, even if we have been advised of the possibility of
            such damages.
          </p>
          <p>
            Our total aggregate liability for any claim arising out of or
            related to these Terms or the use of our Services will not exceed
            the fees paid by you to CoreFrame in the twelve (12) months
            preceding the event that gave rise to the claim.
          </p>
        </Clause>

        <Clause id="indemnification" title="9. Indemnification">
          <p>
            You agree to indemnify and hold CoreFrame harmless from any claims,
            damages, liabilities, costs, or expenses (including reasonable
            attorneys&rsquo; fees) arising from your breach of these Terms,
            your misuse of our Services, or your violation of any law or
            third-party right.
          </p>
        </Clause>

        <Clause id="termination" title="10. Termination">
          <p>
            We may suspend or terminate your access to our websites and
            publicly available Services at any time, with or without notice, if
            we reasonably believe you have violated these Terms or applicable
            law. You may stop using our Services at any time. Commercial
            engagements are terminated according to the notice and wind-down
            provisions in the applicable engagement agreement.
          </p>
        </Clause>

        <Clause id="governing-law" title="11. Governing Law & Jurisdiction">
          <p>
            These Terms are governed by the laws of the Republic of India,
            without regard to its conflict of laws principles. Any dispute
            arising out of or related to these Terms will be subject to the
            exclusive jurisdiction of the courts located in Chennai, Tamil
            Nadu, India &mdash; unless otherwise agreed in a signed engagement
            agreement.
          </p>
        </Clause>

        <Clause id="changes" title="12. Changes to These Terms">
          <p>
            We may update these Terms from time to time. Material changes will
            be announced on our websites or communicated directly to active
            Clients where appropriate. Continued use of our Services after
            changes take effect constitutes acceptance of the revised Terms.
          </p>
        </Clause>

        <Clause id="contact" title="13. Contact">
          <p>
            Questions about these Terms can be directed to the team at
            CoreFrame Technologies Private Limited.
          </p>
          <p>
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
      <div className="mt-4 space-y-4 font-sans text-body text-muted leading-relaxed [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 hover:[&_a]:decoration-accent [&_strong]:text-foreground [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:marker:text-accent/60">
        {children}
      </div>
    </section>
  );
}
