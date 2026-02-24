import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-serif text-base font-bold text-foreground">
              CoreFrame Technologies
            </p>
            <a
              href="mailto:info@coreframetech.in"
              className="font-sans text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              info@coreframetech.in
            </a>
          </div>
          <p className="font-sans text-xs text-muted">
            Selective engagements. Limited capacity.
          </p>
        </div>
      </Container>
    </footer>
  );
}
