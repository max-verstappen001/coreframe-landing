import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "CoreFrame Technologies — Strategic Digital Transformation",
  description:
    "CoreFrame bridges business strategy and technical execution. AI agents, automation, systems modernization, and full-stack product builds — built by a team that understands your commercial goals as well as your tech stack.",
};

export default function HomePage() {
  return <HomeClient />;
}
