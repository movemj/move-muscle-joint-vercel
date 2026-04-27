"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGES } from "@/lib/site-data";
import { motion } from "framer-motion";

export function BrandPhilosophy() {
  return (
    <SectionWrapper bg="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionHeading tag="Our Philosophy" title="Everything begins with clarity." />
          <div className="space-y-5 text-steel leading-relaxed -mt-8">
            <p>
              At Move Muscle & Joint, everything begins with clarity — in
              diagnosis, in movement, and in purpose.
            </p>
            <p>
              We believe great care is not rushed, fragmented, or reactive. It is
              intentional. Every session is designed to understand how your body
              moves, where it&apos;s compensating, and what&apos;s limiting long-term
              performance.
            </p>
            <p>
              Our clinicians combine hands-on chiropractic care, myofascial
              release therapy, targeted rehab, and real-world movement training
              inside a modern gym-based setting. This integrated approach allows
              us to address pain at the source — not just manage symptoms.
            </p>
            <p className="font-medium text-charcoal">
              We don&apos;t chase temporary relief. We build durable movement.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
            <Image
              src={IMAGES.handsOn}
              alt="Hands-on chiropractic care at Move Muscle & Joint"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-navy text-white px-6 py-4 rounded-xl shadow-lg hidden lg:block">
            <p className="text-sm font-semibold">Integrated Care Model</p>
            <p className="text-xs text-white/70 mt-1">Chiropractic · Soft Tissue · Rehab</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
