import type { Metadata } from "next";
import { ServicesOverviewContent } from "./services-overview-content";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Integrated Chiropractic, Soft Tissue & Rehab",
  description:
    "Four integrated services at Move Muscle & Joint: chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Move Muscle & Joint",
    description:
      "Four integrated services at Move Muscle & Joint: chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park.",
    url: `${SITE.url}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesOverviewContent />;
}
