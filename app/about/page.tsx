import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: { absolute: "Dr. Joseph Hugunin, DC | Overland Park Chiropractor" },
  description: "Meet Dr. Joseph Hugunin, DC, a movement-focused chiropractor serving Overland Park and Leawood with personalized care and rehab programs.",
  twitter: {
    card: "summary_large_image",
    title: "Dr. Joseph Hugunin, DC | Overland Park Chiropractor",
    description: "Meet Dr. Joseph Hugunin, DC, a movement-focused chiropractor serving Overland Park and Leawood with personalized care and rehab programs.",
  },
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Dr. Joseph Hugunin, DC | Overland Park Chiropractor",
    description: "Meet Dr. Joseph Hugunin, DC, a movement-focused chiropractor serving Overland Park and Leawood with personalized care and rehab programs.",
    url: "https://www.movemuscleandjoint.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
