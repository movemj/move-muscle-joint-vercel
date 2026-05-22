import type { Metadata } from "next";
import { OurApproachContent } from "./our-approach-content";

export const metadata: Metadata = {
  title: "Our Movement-Based Approach",
  description: "See how the Move Method blends chiropractic care, myofascial release therapy, shockwave therapy, and rehab in Overland Park, KS.",
  alternates: {
    canonical: "/our-approach",
  },
};

export default function OurApproachPage() {
  return <OurApproachContent />;
}
