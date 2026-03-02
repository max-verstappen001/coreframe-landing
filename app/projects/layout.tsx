import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — CoreFrame Technologies",
  description:
    "Explore CoreFrame's portfolio of AI apps, AI projects, digital transformation solutions, and agent workflows.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
