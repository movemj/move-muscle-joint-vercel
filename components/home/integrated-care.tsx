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
      <div className="care-feature-surface rounded-[2rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
        <SectionHeading
          tag="Integrated Care"
          title="One system. Four connected tools."
          subtitle="Treatment plans are built around you — not around selling one modality. Every tool serves the larger goal of durable, confident movement."
          align="center"
        />
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="care-feature-card group rounded-2xl p-6 sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
                  0{i + 1}
                </span>
                <span className="size-2 rounded-full bg-navy/30 transition-colors duration-300 group-hover:bg-navy" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-charcoal">{p.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-steel">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12">
          <CTAButton href="/our-approach" label="Learn About Our Approach" variant="outline" showArrow />
        </div>
      </div>
    </SectionWrapper>
  );
}
