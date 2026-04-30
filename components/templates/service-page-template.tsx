"use client";

import Link from "next/link";
import { HeroMedia } from "@/components/ui/hero-media";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLdSchema } from "@/components/schema-json-ld";
import { schemas } from "@/lib/schemas";
import { MOVE_METHOD_STEPS } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServicePageTemplateProps {
  title: string;
  h1: string;
  heroImage: string;
  introText: React.ReactNode;
  whatItIs: React.ReactNode;
  whoItHelps: React.ReactNode;
  whatToExpect: React.ReactNode;
  benefits: string[];
  moveMethodFit: React.ReactNode;
  relatedConditions: Array<{ title: string; slug: string }>;
  faqs: Array<{ q: string; a: string }>;
  breadcrumbLabel: string;
  breadcrumbPath: string;
}

export function ServicePageTemplate({
  title,
  h1,
  heroImage,
  introText,
  whatItIs,
  whoItHelps,
  whatToExpect,
  benefits,
  moveMethodFit,
  relatedConditions,
  faqs,
  breadcrumbLabel,
  breadcrumbPath,
}: ServicePageTemplateProps) {
  // Build schema data
  const serviceSchema = schemas.service(title, breadcrumbPath);

  const faqSchema = faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <>
      <JsonLdSchema data={serviceSchema} />
      {faqs && faqs.length > 0 && <JsonLdSchema data={schemas.faqPage(faqSchema)} />}
      <HeroMedia imageSrc={heroImage} alt={title} minHeight="min-h-[55vh]" overlayOpacity="bg-charcoal/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: breadcrumbLabel, path: breadcrumbPath },
            ]}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl"
          >
            {h1}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6">
            <CTAButton href="/book" label="Book Now" variant="white" showArrow />
          </motion.div>
        </div>
      </HeroMedia>

      <SectionWrapper>
        <div className="max-w-3xl">
          <div className="space-y-5 text-steel leading-relaxed text-lg">{introText}</div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading tag="What It Is" title={`Understanding ${title.toLowerCase()}.`} />
            <div className="space-y-4 text-steel leading-relaxed -mt-8">{whatItIs}</div>
          </div>
          <div>
            <SectionHeading tag="Who It Helps" title="Is this right for you?" />
            <div className="space-y-4 text-steel leading-relaxed -mt-8">{whoItHelps}</div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading tag="What to Expect" title="Your experience with this service." align="center" />
        <div className="max-w-3xl mx-auto space-y-4 text-steel leading-relaxed -mt-8">{whatToExpect}</div>
        <div className="mt-10 text-center">
          <CTAButton href="/book" label="Schedule Your Visit" showArrow />
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="Key Benefits" title="What you can expect to gain." align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto -mt-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 bg-white p-5 rounded-xl"
            >
              <CheckCircle className="w-5 h-5 text-navy shrink-0 mt-0.5" />
              <span className="text-sm text-charcoal font-medium">{b}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading tag="The Move Method" title="How this fits into your care plan." align="center" />
        <div className="max-w-3xl mx-auto space-y-4 text-steel leading-relaxed -mt-8">{moveMethodFit}</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 rounded-xl mt-10 max-w-4xl mx-auto">
          {MOVE_METHOD_STEPS.map((s) => (
            <div key={s.step} className="bg-white p-4 text-center rounded-lg shadow-sm">
              <span className="text-xs font-bold text-softblue">{s.step}</span>
              <p className="text-xs font-semibold text-charcoal mt-1">{s.title}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {relatedConditions && relatedConditions.length > 0 && (
        <SectionWrapper bg="bg-secondary">
          <SectionHeading tag="Related Conditions" title="Conditions we commonly treat with this service." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 -mt-8">
            {relatedConditions.map((c) => (
              <Link
                key={c.slug}
                href={c.slug}
                className="flex items-center justify-between p-4 rounded-xl bg-white hover:shadow-md transition-all group"
              >
                <span className="font-medium text-charcoal group-hover:text-navy text-sm transition-colors">
                  {c.title}
                </span>
                <ArrowRight className="w-4 h-4 text-steel group-hover:text-navy transition-colors" />
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}

      {faqs && faqs.length > 0 && (
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <SectionHeading tag="FAQ" title={`Common questions about ${title.toLowerCase()}.`} align="center" />
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-secondary rounded-xl border-none px-6">
                  <AccordionTrigger className="text-left font-semibold text-charcoal text-sm py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-steel leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionWrapper>
      )}

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to get started?</h2>
          <p className="mt-5 text-lg text-white/70">Book your visit at Move Muscle & Joint in Overland Park.</p>
          <div className="mt-8">
            <CTAButton href="/book" label="Book Your Visit" variant="white" size="lg" showArrow />
          </div>
        </div>
      </section>
    </>
  );
}
