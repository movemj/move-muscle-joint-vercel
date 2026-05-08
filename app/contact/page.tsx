import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Chiropractor in Overland Park, KS | Move Muscle & Joint",
  description: "Contact Move Muscle & Joint in Overland Park, KS for chiropractic care, myofascial release therapy, shockwave therapy, and rehab.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
