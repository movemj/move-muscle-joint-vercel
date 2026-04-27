"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGES } from "@/lib/site-data";
import { motion } from "framer-motion";

const personas = [
  {
    title: "Active Adults",
    desc: "You want to keep training, lifting, and staying active without pain holding you back.",
  },
  {
    title: "Desk Workers",
    desc: "Recurring tension, stiffness, and postural strain from long hours at a desk.",
  },
  {
    title: "Runners & Athletes",
    desc: "Nagging injuries, performance plateaus, and the desire to move without limitation.",
  },
  {
    title: "Busy Parents",
    desc: "Lifting kids, staying on your feet, and moving through long days without breaking down.",
  },
  {
    title: "Golfers & Lifters",
    desc: "Rotational demands, load-bearing stress, and performance-driven movement goals.",
  },
  {
    title: "Long-Term Confidence",
    desc: "People who want lasting results, not endless appointments or temporary fixes.",
  },
];

export function WhoWeHelp() {
  return (
    <SectionWrapper bg="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionHeading
            tag="Who We Help"
            title="Care that fits your life."
            subtitle="We work with people who want to feel strong and move with confidence — not just manage symptoms."
          />
          <div className="grid sm:grid-cols-2 gap-4 -mt-8">
            {personas.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-lg bg-secondary"
              >
                <h3 className="font-semibold text-sm text-charcoal">{p.title}</h3>
                <p className="text-xs text-steel mt-1.5 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
            <Image
              src={IMAGES.lifestyle}
              alt="Active adults staying strong and moving with confidence"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
