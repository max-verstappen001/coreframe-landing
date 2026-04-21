import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — CoreFrame Technologies",
  description:
    "The terms governing your use of CoreFrame Technologies' websites, services, research, and the corsys.ai applied-AI initiative.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
