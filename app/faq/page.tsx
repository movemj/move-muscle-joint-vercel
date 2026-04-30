'use client';

import type { Metadata } from "next";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTAButton } from '@/components/ui/cta-button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { JsonLdSchema } from '@/components/schema-json-ld';
import { schemas } from '@/lib/schemas';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: "What conditions do you treat?",
    a: "We treat a wide range of musculoskeletal conditions including sciatica, neck pain, low back pain, shoulder pain, knee pain, hip pain, plantar fasciitis, sports injuries, and headaches. Our integrated approach combines chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab to address each condition thoroughly."
  },
  {
    q: "What should I expect at my first visit?",
    a: "Your first visit begins with a comprehensive whole-body movement assessment. We evaluate how your body moves, identify restrictions and compensations, and discuss your history and goals. From there, we explain our findings, outline a personalized care plan, and often begin integrated treatment in the same session."
  },
  {
    q: "Do you combine chiropractic care with rehab?",
    a: "Yes. This is one of the core features of our integrated care model. Most sessions include hands-on chiropractic treatment combined with targeted movement-based rehab — because lasting results require both manual therapy and active retraining."
  },
  {
    q: "Is shockwave therapy painful?",
    a: "Most patients experience some discomfort during shockwave therapy, but it is generally well-tolerated. Intensity is adjusted throughout the session based on your feedback. Many patients report that the temporary discomfort is very manageable compared to the relief it provides."
  },
  {
    q: "Do you serve patients outside Overland Park?",
    a: "Yes. While our clinic is located in Overland Park, we serve patients from Leawood, Prairie Village, Olathe, Shawnee, Lenexa, and throughout the greater Kansas City metro area."
  },
  {
    q: "How many visits do most people need?",
    a: "It depends on the complexity of your condition and your goals. Some patients resolve their primary complaint in a handful of sessions, while more complex or chronic issues may require a longer course of care. We always outline clear expectations and benchmarks during your initial assessment."
  },
  {
    q: "What makes Move different from a traditional chiropractor?",
    a: "Move is built around an integrated care model — not isolated adjustments. Every visit is assessment-driven, combines hands-on treatment with movement retraining, and takes place in a modern gym-based clinical setting. Our goal is durable movement and long-term function, not dependency on passive care."
  },
  {
    q: "How do I book an appointment?",
    a: "The easiest way to book is through our online scheduling system. Simply visit our Book Now page and you'll be guided through the process. We operate as a receptionless office, so online booking is the fastest and most reliable way to schedule your visit."
  },
];

export const metadata: Metadata = {
  title: "Chiropractic FAQ in Overland Park, KS | Move Muscle & Joint",
  description: "Answers about chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab at Move Muscle & Joint.",
};

export default function FAQPage() {
  const faqSchema = faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <>
      <JsonLdSchema data={schemas.faqPage(faqSchema)} />
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "FAQ", path: "/faq" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl mt-4">
            Frequently Asked Questions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">
            Get answers about chiropractic care, rehab, shockwave therapy, appointments, and what to expect at Move Muscle & Joint in Overland Park.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-secondary rounded-xl border-none px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-navy text-sm py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-steel leading-relaxed pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading tag="Still have questions?" title="We're here to help." align="center" />
          <div className="flex flex-wrap gap-4 justify-center -mt-8">
            <CTAButton href="/contact" label="Contact Us" variant="outline" />
            <CTAButton href="/book" label="Book Your Visit" showArrow />
          </div>
          <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-steel">
            <Link href="/services" className="hover:text-navy transition-colors">View Our Services →</Link>
            <Link href="/conditions" className="hover:text-navy transition-colors">Conditions We Treat →</Link>
            <Link href="/our-approach" className="hover:text-navy transition-colors">Our Approach →</Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
