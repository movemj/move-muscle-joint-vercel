"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const previewFaqs = [
  {
    q: "What should I expect at my first visit?",
    a: "Your first visit begins with a whole-body movement assessment. We evaluate how your body moves, identify compensations, and build a personalized care plan that may include hands-on treatment and movement-based rehab in the same session.",
  },
  {
    q: "Do you combine chiropractic care with rehab?",
    a: "Yes. Our integrated model combines chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab based on what your body needs — often within the same visit.",
  },
  {
    q: "What makes Move different from a traditional chiropractor?",
    a: "We focus on the full movement picture, not just isolated symptoms. Our care integrates assessment, hands-on treatment, and progressive rehab inside a modern gym-based setting to build lasting results.",
  },
];

export function FAQPreview() {
  return (
    <SectionWrapper bg="bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeading tag="FAQ" title="Questions we hear often." align="center" />
        <Accordion type="single" collapsible className="space-y-3">
          {previewFaqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-navy text-sm py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-steel leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-sm font-semibold text-navy hover:text-navy/70 transition-colors"
          >
            View All FAQs →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
