import type { Metadata } from "next";
import { ConditionsOverviewContent } from "./conditions-overview-content";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Conditions We Treat in Overland Park | Move Muscle & Joint",
  description: "Find treatment for sciatica, neck pain, low back pain, knee pain, hip pain, headaches, plantar fasciitis, and sports injuries in Overland Park.",
  openGraph: {
    title: "Conditions We Treat in Overland Park | Move Muscle & Joint",
    description: "Find treatment for sciatica, neck pain, low back pain, knee pain, hip pain, headaches, plantar fasciitis, and sports injuries.",
    url: `${SITE.url}/conditions`,
  },
};

export default function ConditionsPage() {
  return <ConditionsOverviewContent />;
}
