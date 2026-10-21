import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: { absolute: "Directions & Contact | Overland Park Chiropractor" },
  description: "Directions and contact information for Move Muscle & Joint, your Overland Park chiropractor for movement-based care and rehab services.",
  twitter: {
    card: "summary_large_image",
    title: "Directions & Contact | Overland Park Chiropractor",
    description: "Directions and contact information for Move Muscle & Joint, your Overland Park chiropractor for movement-based care and rehab services.",
  },
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Directions & Contact | Overland Park Chiropractor",
    description: "Directions and contact information for Move Muscle & Joint, your Overland Park chiropractor for movement-based care and rehab services.",
    url: "https://www.movemuscleandjoint.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
