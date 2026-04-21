import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CoreFrame Technologies",
  description:
    "How CoreFrame Technologies collects, uses, shares, and protects information across our websites, services, and the corsys.ai applied-AI initiative.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
