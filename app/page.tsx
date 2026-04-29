import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { BrandPhilosophy } from "@/components/home/brand-philosophy";
import { FirstVisit } from "@/components/home/first-visit";
import { MoveMethod } from "@/components/home/move-method";
import { IntegratedCare } from "@/components/home/integrated-care";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhoWeHelp } from "@/components/home/who-we-help";
import { ProviderPreview } from "@/components/home/provider-preview";
import { ConditionsPreview } from "@/components/home/conditions-preview";
import { FAQPreview } from "@/components/home/faq-preview";
import { FinalCTA } from "@/components/home/final-cta";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Chiropractic Care in Overland Park, KS | Move Muscle & Joint",
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    description:
      "Integrated chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park, KS.",
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressStreet,
      addressLocality: SITE.addressCity,
      addressRegion: SITE.addressState,
      postalCode: SITE.addressZip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.lat,
      longitude: SITE.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Overland Park" },
      { "@type": "City", name: "Leawood" },
      { "@type": "City", name: "Prairie Village" },
      { "@type": "City", name: "Olathe" },
      { "@type": "City", name: "Kansas City" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeHero />
      <BrandPhilosophy />
      <FirstVisit />
      <MoveMethod />
      <IntegratedCare />
      <ServicesPreview />
      <WhoWeHelp />
      <ProviderPreview />
      <ConditionsPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
