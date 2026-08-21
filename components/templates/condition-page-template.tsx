"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLdSchema } from "@/components/schema-json-ld";
import { schemas } from "@/lib/schemas";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ConditionPageTemplateProps {
  title: string;
  h1: string;
  breadcrumbLabel: string;
  breadcrumbPath: string;
  introText: React.ReactNode;
  whatItIs: React.ReactNode;
  symptoms: string[];
  causes: React.ReactNode;
  howWeEvaluate: React.ReactNode;
  treatmentApproach: React.ReactNode;
  whyChooseMove: React.ReactNode;
  relatedServices: Array<{ title: string; slug: string }>;
  relatedConditions: Array<{ title: string; slug: string }>;
  faqs: Array<{ q: string; a: string }>;
}

export function ConditionPageTemplate({
  title,
  h1,
  breadcrumbLabel,
  breadcrumbPath,
  introText,
  whatItIs,
  symptoms,
  causes,
  howWeEvaluate,
  treatmentApproach,
  whyChooseMove,
  relatedServices,
  relatedConditions,
  faqs,
}: ConditionPageTemplateProps) {
  // Build schema data
  const medicalConditionSchema = schemas.medicalCondition(
    title,
    title,
    typeof introText === 'string' ? introText : 'A musculoskeletal condition treated at Move Muscle & Joint.',
    symptoms.map((s) => ({ name: s })),
    'Integrated Chiropractic and Rehab Treatment',
    'Treatment includes spinal manipulation, myofascial release therapy, and targeted rehab.'
  );

  const faqSchema = faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <>
      <JsonLdSchema data={medicalConditionSchema} />
      {faqs && faqs.length > 0 && <JsonLdSchema data={schemas.faqPage(faqSchema)} />}
      <section className="flex min-h-[calc(100svh-5rem)] items-center bg-charcoal py-28 sm:min-h-[calc(100vh-5rem)] sm:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Conditions", path: "/conditions" },
              { label: breadcrumbLabel, path: breadcrumbPath },
            ]}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl mt-4"
          >
            {h1}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6">
            <CTAButton href="/book" label="Book Your Visit" variant="white" showArrow />
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl">
          <div className="space-y-5 text-steel leading-relaxed text-lg">{introText}</div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading tag="Understanding" title={`What is ${title.toLowerCase()}?`} />
            <div className="space-y-4 text-steel leading-relaxed -mt-8">{whatItIs}</div>
          </div>
          <div>
            <SectionHeading tag="Symptoms" title="Common signs and symptoms." />
            <div className="space-y-2 -mt-8">
              {symptoms.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-navy shrink-0 mt-1" />
                  <span className="text-sm text-steel">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading tag="Root Causes" title="Why this happens." />
        <div className="max-w-3xl space-y-4 text-steel leading-relaxed -mt-8">{causes}</div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="Our Evaluation" title="How Move evaluates this condition." />
        <div className="max-w-3xl space-y-4 text-steel leading-relaxed -mt-8">{howWeEvaluate}</div>
        <div className="mt-8">
          <CTAButton href="/book" label="Schedule Your Assessment" showArrow />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading tag="Treatment" title="Our integrated treatment approach." align="center" />
        <div className="max-w-3xl mx-auto space-y-4 text-steel leading-relaxed -mt-8">{treatmentApproach}</div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="Why Move" title="Why patients in Overland Park choose Move." />
        <div className="max-w-3xl space-y-4 text-steel leading-relaxed -mt-8">{whyChooseMove}</div>
      </SectionWrapper>

      {relatedServices && (
        <SectionWrapper>
          <SectionHeading tag="Related Services" title="Services that may be part of your care." />
          <div className="grid sm:grid-cols-2 gap-4 -mt-8">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={s.slug}
                className="flex items-center justify-between p-5 rounded-xl border border-border hover:shadow-md transition-all group"
              >
                <span className="font-medium text-charcoal group-hover:text-navy text-sm">{s.title}</span>
                <ArrowRight className="w-4 h-4 text-steel group-hover:text-navy transition-colors" />
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}

      {relatedConditions && relatedConditions.length > 0 && (
        <SectionWrapper bg="bg-secondary">
          <SectionHeading tag="Related Conditions" title="Other conditions we treat." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 -mt-8">
            {relatedConditions.map((c) => (
              <Link
                key={c.slug}
                href={c.slug}
                className="flex items-center justify-between p-4 rounded-xl bg-white hover:shadow-md transition-all group"
              >
                <span className="font-medium text-charcoal group-hover:text-navy text-sm">{c.title}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Don&apos;t wait for it to get worse.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Book your visit at Move Muscle & Joint in Overland Park and take the first step toward lasting relief.
          </p>
          <div className="mt-8">
            <CTAButton href="/book" label="Book Your Visit" variant="white" size="lg" showArrow />
          </div>
        </div>
      </section>
    </>
  );
}
