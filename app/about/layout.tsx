import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — CoreFrame Technologies",
  description:
    "CoreFrame bridges business strategy and technical execution. We think like operators and build like engineers — a senior-led team delivering AI-native systems that serve real commercial outcomes.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
