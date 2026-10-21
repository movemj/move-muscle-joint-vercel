import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
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
import { FAQPreview, HOME_FAQS } from "@/components/home/faq-preview";
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
      <JsonLdSchema data={schemas.faqPage([...HOME_FAQS])} />
      <HomeHero />
      <section aria-label="Patient trust" className="border-b border-border bg-white px-6 py-5 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-sm text-steel md:justify-between md:text-left">
          <a href="https://maps.google.com/?cid=15832245689117076245" target="_blank" rel="noopener noreferrer" className="font-semibold text-charcoal hover:text-navy">5.0 on Google (27 reviews)</a>
          <p>20+ years of experience</p>
          <p>Former team chiropractor, Sporting Kansas City and KU Athletics</p>
          <p>One provider, one-on-one visits</p>
        </div>
      </section>
      <BrandPhilosophy />
      <FirstVisit />
      <section className="bg-white px-6 py-12 text-center sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-navy">What it costs</h2>
          <p className="mt-4 leading-relaxed text-steel">$49 first visit. Follow-up visits are $50 to $80 depending on the visit. We are in network with many major insurance plans. Coverage varies by plan, so contact us and we&apos;ll verify your benefits before your first visit.</p>
        </div>
      </section>
      <MoveMethod />
      <IntegratedCare />
      <ServicesPreview />
      <LocalArea />
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-16" aria-labelledby="visit-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">Visit the clinic</p>
            <h2 id="visit-heading" className="mt-3 text-3xl font-bold tracking-tight text-charcoal">Care in Overland Park, close to home.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-steel">Move Muscle &amp; Joint is inside Fit House KC in Overland Park. Your visit is built around a clear movement assessment, hands-on care and practical next steps you can use between appointments.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy/90">Get directions</Link>
              <Link href="/book" className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white">Book your $49 first visit</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary p-6 text-sm text-steel">
            <iframe title="Map to Move Muscle & Joint" src="https://www.google.com/maps?q=10701+El+Monte+St+Studio+2+Overland+Park+KS+66211&output=embed" className="mb-6 h-56 w-full rounded-xl border-0" loading="lazy" />
            <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy" /><p>{SITE.address}<br />Located inside Fit House KC</p></div>
            <div className="mt-5 flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-navy" /><a href="tel:+19133030989" className="hover:text-navy">{SITE.phone}</a></div>
            <div className="mt-5 flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-navy" /><p>Monday–Friday<br />9:00 AM–6:00 PM</p></div>
          </div>
        </div>
      </section>
      <div className="bg-secondary px-6 py-8 text-center">
        <Link href="/sports-chiropractor-overland-park" className="font-semibold text-navy underline underline-offset-4">
          Sports chiropractic care for active adults in Overland Park
        </Link>
      </div>
      <WhoWeHelp />
      <ProviderPreview />
      <TestimonialsCarousel />
      <ConditionsPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
