import type { Metadata } from "next";
import { FAQContent } from "./faq-content";

export const metadata: Metadata = {
  title: "Chiropractic FAQ in Overland Park, KS | Move Muscle & Joint",
  description: "Answers about chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab at Move Muscle & Joint.",
};

export default function FAQPage() {
  return <FAQContent />;
}
