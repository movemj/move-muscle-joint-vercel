"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { IMAGES } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ClipboardCheck, Eye, Dumbbell, Target } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "Movement Assessment",
    desc: "We start by watching how your body moves — evaluating posture, gait, mobility, and loading patterns to uncover what's really driving your pain.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized Diagnosis",
    desc: "Your care is built around findings, not assumptions. We identify the root cause and explain your plan in clear, honest terms.",
  },
  {
    icon: Dumbbell,
    title: "Integrated Treatment",
    desc: "Your session may include hands-on chiropractic care, soft tissue work, and movement-based rehab — all in one visit.",
  },
  {
    icon: Target,
    title: "A Clear Path Forward",
    desc: "You leave with more than temporary relief. You leave with a plan designed to build lasting improvement.",
  },
];

export function FirstVisit() {
  return (
    <SectionWrapper bg="bg-secondary">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
            <Image
              src={IMAGES.assessment}
              alt="Whole-body movement assessment at Move Muscle & Joint"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </motion.div>
        <div className="order-1 lg:order-2">
          <SectionHeading tag="Your First Visit" title="More than a routine appointment." />
          <div className="space-y-6 -mt-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{step.title}</h3>
                  <p className="text-sm text-steel mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton href="/book" label="Schedule Your First Visit" showArrow />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
