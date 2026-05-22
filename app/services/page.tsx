import type { Metadata } from "next";
import { ServicesOverviewContent } from "./services-overview-content";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Chiropractic & Rehab Services",
  description:
    "Four integrated services at Move Muscle & Joint: chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Chiropractic & Rehab Services",
    description:
      "Four integrated services at Move Muscle & Joint: chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park.",
    url: `${SITE.url}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesOverviewContent />;
}
