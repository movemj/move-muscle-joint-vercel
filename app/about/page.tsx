import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Move Muscle & Joint",
  description: "Meet Move Muscle & Joint, an Overland Park chiropractic and rehab clinic with a modern movement-focused facility and care built for lasting results.",
  twitter: {
    card: "summary_large_image",
    title: "About Move Muscle & Joint",
    description: "Meet Move Muscle & Joint, an Overland Park chiropractic and rehab clinic with a modern movement-focused facility and care built for lasting results.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
