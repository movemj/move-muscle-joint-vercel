"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroMedia } from "@/components/ui/hero-media";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MoveMethod } from "@/components/home/move-method";
import { SERVICES, IMAGES } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const serviceImages = [IMAGES.chiropractic, IMAGES.myofascial, IMAGES.shockwave, IMAGES.rehab];

const faqs = [
  {
    q: "Do I need to choose one service?",
    a: "No. Your treatment plan is personalized and may draw from any combination of our four services based on your assessment.",
  },
  {
    q: "Can I receive multiple services in one visit?",
    a: "Yes. Most sessions integrate hands-on treatment with movement-based rehab as part of a single coordinated visit.",
  },
  {
    q: "How do I know which service is right for me?",
    a: "That's determined during your initial assessment. We'll evaluate how your body moves and recommend the right combination of care for your goals.",
  },
];

export function ServicesOverviewContent() {
  return (
    <>
      <HeroMedia imageSrc={IMAGES.handsOn} alt="Integrated services at Move" overlayOpacity="bg-charcoal/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
          <Breadcrumbs items={[{ label: "Services", path: "/services" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl"
          >
            Services at Move Muscle & Joint
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed"
          >
            Four integrated services. One coordinated care model. Every treatment works together to help you move better and stay that way.
          </motion.p>
        </div>
      </HeroMedia>

      <SectionWrapper>
        <SectionHeading
          tag="Our Services"
          title="Integrated treatment, not isolated visits."
          subtitle="At Move, services aren't sold separately — they're woven into a personalized care plan built around your body and your goals."
          align="center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-border group hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image
                  src={serviceImages[i]}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-charcoal group-hover:text-navy transition-colors">
                  {s.title}
                </h3>
                <p className="text-steel mt-3 leading-relaxed">{s.shortDesc}</p>
                <div className="mt-6 flex items-center gap-6">
                  <Link
                    href={s.slug}
                    className="text-sm font-semibold text-navy flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                  <CTAButton href="/book" label="Book Now" size="sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <MoveMethod />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <SectionHeading tag="FAQ" title="Common questions about our services." align="center" />
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

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Find out which services are right for you.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Schedule your first visit and we&apos;ll build a plan around your body.
          </p>
          <div className="mt-8">
            <CTAButton href="/book" label="Book Your Visit" variant="white" size="lg" showArrow />
          </div>
        </div>
      </section>
    </>
  );
}
