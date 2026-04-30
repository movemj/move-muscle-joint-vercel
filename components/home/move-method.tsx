"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { MOVE_METHOD_STEPS } from "@/lib/site-data";
import { motion } from "framer-motion";

export function MoveMethod() {
  return (
    <SectionWrapper bg="bg-charcoal">
      <SectionHeading
        tag="The Move Method"
        title="A framework for lasting results."
        subtitle="Our four-stage care model guides every patient from pain relief through full movement confidence."
        align="center"
        light
      />
      <div className="grid md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
        {MOVE_METHOD_STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-charcoal p-8 text-center"
          >
            <span className="text-softblue text-xs font-bold tracking-widest">{s.step}</span>
            <h3 className="text-white font-bold text-lg mt-3">{s.title}</h3>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
