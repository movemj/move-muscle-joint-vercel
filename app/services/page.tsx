import type { Metadata } from "next";
import Link from "next/link";
import { ServicesOverviewContent } from "./services-overview-content";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Chiropractic & Rehab Services",
  description:
    "Four integrated services at Move Muscle & Joint: chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park.",
  twitter: {
    card: "summary_large_image",
    title: "Chiropractic & Rehab Services",
    description: "Four integrated services at Move Muscle & Joint: chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park.",
  },
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
  return (
    <>
      <ServicesOverviewContent />
      <div className="bg-secondary px-6 py-10 text-center">
        <Link href="/sports-chiropractor-overland-park" className="font-semibold text-navy underline underline-offset-4">
          Explore sports chiropractic care in Overland Park
        </Link>
      </div>
    </>
  );
}
