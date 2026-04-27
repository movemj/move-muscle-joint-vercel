"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Chiropractic Care",
    desc: "Joint-focused manual therapy to restore alignment, reduce restriction, and improve how your body moves as a system.",
  },
  {
    title: "Myofascial Release Therapy",
    desc: "Targeted soft tissue work to release chronic tension, improve tissue quality, and support the body's ability to heal.",
  },
  {
    title: "Shockwave Therapy",
    desc: "Acoustic wave technology to accelerate healing in stubborn tendon and soft tissue conditions.",
  },
  {
    title: "Targeted Rehab",
    desc: "Progressive exercise-based rehabilitation to rebuild strength, retrain movement, and prevent recurrence.",
  },
];

export function IntegratedCare() {
  return (
    <SectionWrapper bg="bg-white">
      <SectionHeading
        tag="Integrated Care"
        title="One system. Four connected tools."
        subtitle="Treatment plans are built around you — not around selling one modality. Every tool serves the larger goal of durable, confident movement."
        align="center"
      />
      <div className="grid md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-border rounded-xl p-8 hover:shadow-lg hover:border-softblue/30 transition-all duration-300"
          >
            <div className="w-1 h-8 bg-navy rounded-full mb-5" />
            <h3 className="text-lg font-bold text-charcoal">{p.title}</h3>
            <p className="text-sm text-steel mt-3 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CTAButton href="/our-approach" label="Learn About Our Approach" variant="outline" showArrow />
      </div>
    </SectionWrapper>
  );
}
