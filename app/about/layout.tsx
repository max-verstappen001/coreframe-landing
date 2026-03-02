import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — CoreFrame Technologies",
  description:
    "Meet the team behind CoreFrame Technologies. Learn about our experience in AI, our mission, and the people driving digital transformation.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
