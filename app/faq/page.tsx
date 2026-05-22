import type { Metadata } from "next";
import { FAQContent } from "./faq-content";

export const metadata: Metadata = {
  title: "Chiropractic FAQ in Overland Park",
  description: "Answers about chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab at Move Muscle & Joint.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FAQContent />;
}
