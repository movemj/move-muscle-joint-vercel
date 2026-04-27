import type { Metadata } from "next";
import { ConditionsOverviewContent } from "./conditions-overview-content";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Conditions We Treat in Overland Park | Move Muscle & Joint",
  description:
    "We treat sciatica, neck pain, low back pain, shoulder pain, knee pain, hip pain, plantar fasciitis, sports injuries, and headaches at Move Muscle & Joint in Overland Park.",
  openGraph: {
    title: "Conditions We Treat in Overland Park | Move Muscle & Joint",
    description:
      "We treat sciatica, neck pain, low back pain, shoulder pain, knee pain, hip pain, plantar fasciitis, sports injuries, and headaches.",
    url: `${SITE.url}/conditions`,
  },
};

export default function ConditionsPage() {
  return <ConditionsOverviewContent />;
}
