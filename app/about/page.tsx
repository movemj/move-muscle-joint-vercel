import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Move Muscle & Joint",
  description: "Meet Move Muscle & Joint, a modern movement-focused chiropractic and rehab clinic in Overland Park, located inside Fit House KC for convenient access to a professional strength and conditioning environment and long-term results.",
  twitter: {
    card: "summary_large_image",
    title: "About Move Muscle & Joint",
    description: "Meet Move Muscle & Joint, a modern movement-focused chiropractic and rehab clinic in Overland Park, located inside Fit House KC for convenient access to a professional strength and conditioning environment and long-term results.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
