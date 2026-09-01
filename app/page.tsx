import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Coreframe Technologies — Enterprise & Private AI Engineering",
  description:
    "Coreframe is an AI research and engineering company. We design, deploy and operate private AI, enterprise knowledge systems and autonomous workflows — on-premise, private cloud, hybrid or edge.",
};

export default function HomePage() {
  return <HomeClient />;
}
