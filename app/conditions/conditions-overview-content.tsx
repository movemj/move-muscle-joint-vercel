"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CONDITIONS, SERVICES } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need a referral to be seen for a specific condition?",
    a: "No referral is needed. You can book directly through our online scheduling system.",
  },
  {
    q: "What if my condition isn't listed here?",
    a: "We treat a wide range of musculoskeletal conditions. If you're unsure whether we can help, book an initial assessment and we'll evaluate your situation.",
  },
  {
    q: "How do you determine the cause of my pain?",
    a: "Every new patient receives a comprehensive movement assessment that evaluates how your body moves, where it compensates, and what structures are involved.",
  },
];

export function ConditionsOverviewContent() {
  return (
    <>
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Conditions", path: "/conditions" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl mt-4"
          >
            Conditions We Treat in Overland Park
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed"
          >
            Every condition is evaluated through an integrated lens — understanding the full movement
            picture, addressing the root cause, and building a plan for lasting relief.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeading
          tag="Conditions"
          title="What we treat at Move."
          subtitle="Click any condition to learn about our integrated approach to treatment in Overland Park."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONDITIONS.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={c.slug}
                className="block p-6 rounded-xl border border-border hover:border-softblue/40 hover:shadow-lg transition-all duration-300 group h-full"
              >
                <h3 className="text-lg font-bold text-charcoal group-hover:text-navy transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-steel mt-2 leading-relaxed">
                  Integrated treatment in Overland Park combining chiropractic care, soft tissue
                  therapy, and targeted rehab.
                </p>
                <span className="mt-4 text-sm font-semibold text-navy flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <div className="max-w-3xl">
          <SectionHeading tag="Our Evaluation" title="How Move evaluates pain and movement." />
          <div className="space-y-5 text-steel leading-relaxed -mt-8">
            <p>
              At Move, treatment begins with understanding. Before we address your condition, we
              evaluate how your body moves as a system — identifying the structural, muscular, and
              movement-based factors that contribute to your pain.
            </p>
            <p>
              This comprehensive assessment allows us to build a treatment plan that addresses the
              root cause, not just the symptoms. Whether your pain is acute or chronic, our
              integrated approach gives us the tools to help you recover and stay well.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          tag="Related Services"
          title="The tools behind your treatment."
          subtitle="Every condition we treat is addressed using a combination of these integrated services."
        />
        <div className="grid sm:grid-cols-2 gap-4 -mt-8">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={s.slug}
              className="flex items-center justify-between p-5 rounded-xl border border-border hover:shadow-md transition-all group"
            >
              <div>
                <h3 className="font-semibold text-charcoal group-hover:text-navy transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-steel mt-1">{s.shortDesc.substring(0, 80)}...</p>
              </div>
              <ArrowRight className="w-5 h-5 text-steel group-hover:text-navy shrink-0 ml-4" />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <div className="max-w-3xl mx-auto">
          <SectionHeading tag="FAQ" title="Questions about conditions." align="center" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border-none px-6">
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

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Find relief that lasts.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Book your assessment at Move Muscle & Joint in Overland Park.
          </p>
          <div className="mt-8">
            <CTAButton href="/book" label="Book Your Visit" variant="white" size="lg" showArrow />
          </div>
        </div>
      </section>
    </>
  );
}
