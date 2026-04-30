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
import { JsonLdSchema } from "@/components/schema-json-ld";
import { schemas } from "@/lib/schemas";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Chiropractic Care in Overland Park, KS | Move Muscle & Joint",
  description: "Chiropractic care, myofascial release therapy, shockwave therapy, and rehab in Overland Park, KS to help you move better.",
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
      <WhoWeHelp />
      <ProviderPreview />
      <ConditionsPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
