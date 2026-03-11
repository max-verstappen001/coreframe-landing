import { ReactNode } from "react";
import { Container } from "./Container";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "elevated" | "card";
  padding?: "default" | "large" | "hero";
  containerSize?: "default" | "narrow" | "wide";
}

export function Section({
  children,
  className = "",
  id,
  background = "default",
  padding = "default",
  containerSize = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative",
        padding === "default" && "py-16 md:py-24",
        padding === "large" && "py-20 md:py-28",
        padding === "hero" && "pt-32 pb-20 md:pt-40 md:pb-28",
        background === "default" && "bg-bg",
        background === "elevated" && "bg-bg-elevated",
        background === "card" && "bg-bg-card",
        className
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
