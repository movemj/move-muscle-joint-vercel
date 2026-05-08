import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Our Chiropractic Clinic in Overland Park, KS",
  description: "Meet Move Muscle & Joint, an Overland Park chiropractic and rehab clinic focused on movement-based care and lasting results.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
