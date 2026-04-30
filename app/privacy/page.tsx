import type { Metadata } from "next";
import { PrivacyContent } from "./privacy-content";
import { SITE } from '@/lib/site-data';

export const metadata: Metadata = {
  title: "Privacy Policy | Move Muscle & Joint",
  description: "Read the privacy policy for Move Muscle & Joint, a chiropractic and rehab clinic serving Overland Park, KS.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
