import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/home/home-hero";
import { BrandPhilosophy } from "@/components/home/brand-philosophy";
import { FirstVisit } from "@/components/home/first-visit";
import { MoveMethod } from "@/components/home/move-method";
import { IntegratedCare } from "@/components/home/integrated-care";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhoWeHelp } from "@/components/home/who-we-help";
import { ProviderPreview } from "@/components/home/provider-preview";
import { LocalArea } from "@/components/home/local-area";
import { TestimonialsCarousel } from "@/components/testimonials/testimonials-carousel";
import { ConditionsPreview } from "@/components/home/conditions-preview";
import { FAQPreview } from "@/components/home/faq-preview";
import { FinalCTA } from "@/components/home/final-cta";
import { JsonLdSchema } from "@/components/schema-json-ld";
import { schemas } from "@/lib/schemas";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Chiropractor in Overland Park, KS | Move Muscle & Joint" },
  description: "Movement-based chiropractor in Overland Park and Leawood. Chiropractic, myofascial release therapy, shockwave and rehab. $49 first visit. Book online.",
  twitter: {
    card: "summary_large_image",
    title: "Chiropractor in Overland Park, KS | Move Muscle & Joint",
    description: "Movement-based chiropractor in Overland Park and Leawood. Chiropractic, myofascial release therapy, shockwave and rehab. $49 first visit. Book online.",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chiropractor in Overland Park, KS | Move Muscle & Joint",
    description: "Movement-based chiropractor in Overland Park and Leawood. Chiropractic, myofascial release therapy, shockwave and rehab. $49 first visit. Book online.",
    url: "https://www.movemuscleandjoint.com",
  },
};

export default function Home() {
  return (
    <>
      <JsonLdSchema data={schemas.localBusinessChiropractor()} />
      <HomeHero />
      <BrandPhilosophy />
      <FirstVisit />
      <MoveMethod />
      <IntegratedCare />
      <ServicesPreview />
      <div className="bg-secondary px-6 py-8 text-center">
        <Link href="/sports-chiropractor-overland-park" className="font-semibold text-navy underline underline-offset-4">
          Sports chiropractic care for active adults in Overland Park
        </Link>
      </div>
      <WhoWeHelp />
      <ProviderPreview />
      <LocalArea />
      <TestimonialsCarousel />
      <ConditionsPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
