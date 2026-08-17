"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CTAButton } from "@/components/ui/cta-button";
import { IMAGES } from "@/lib/site-data";
import { motion } from "framer-motion";

export function ProviderPreview() {
  return (
    <SectionWrapper bg="bg-secondary" padding="py-14 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0 relative">
            <Image
              src={IMAGES.provider}
              alt="Dr. Joseph Hugunin, Founder of Move Muscle & Joint"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 400px"
              loading="lazy"
            />
          </div>
        </motion.div>
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-softblue mb-4 block">
            Your Provider
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
            Dr. Joseph Hugunin
          </h2>
          <p className="text-sm text-steel mt-1 font-medium">Founder / Chiropractor</p>
          <div className="mt-6 space-y-4 text-steel leading-relaxed">
            <p>
              Dr. Joseph Hugunin helps patients uncover the root cause of pain
              through a blend of chiropractic care, movement assessment,
              myofascial release therapy, and rehab-based treatment.
            </p>
            <p>
              His approach focuses on restoring function, reducing flare-ups, and
              helping patients build long-term confidence in the way they move.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-full">
            <CTAButton href="/book" label="Book With Dr. Hugunin" showArrow />
            <CTAButton href="/about" label="Learn More" variant="ghost" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
