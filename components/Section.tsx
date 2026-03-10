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
        padding === "default" && "py-24 md:py-32",
        padding === "large" && "py-32 md:py-40",
        padding === "hero" && "pt-32 pb-24 md:pt-44 md:pb-32",
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
