import type { Metadata } from "next";
import { OurApproachContent } from "./our-approach-content";

export const metadata: Metadata = {
  title: "Our Approach to Chiropractic & Rehab in Overland Park, KS",
  description: "See how the Move Method blends chiropractic care, myofascial release therapy, shockwave therapy, and rehab in Overland Park, KS.",
};

export default function OurApproachPage() {
  return <OurApproachContent />;
}
