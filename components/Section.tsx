import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "surface";
}

export function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  const bg = background === "surface" ? "bg-surface" : "bg-background";

  return (
    <section id={id} className={`py-20 md:py-24 ${bg} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
