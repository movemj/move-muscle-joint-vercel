"use client";

import { HeroMedia } from "@/components/ui/hero-media";
import { CTAButton } from "@/components/ui/cta-button";
import { IMAGES } from "@/lib/site-data";
import { motion } from "framer-motion";
export function HomeHero() {
  return (
    <HeroMedia
      imageSrc={IMAGES.hero}
      alt="Movement assessment and rehabilitation at Move Muscle & Joint in Overland Park"
      overlayOpacity="bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/15"
      mobileImagePosition="object-[68%_center]"
    >
      <div className="mx-auto flex w-full max-w-7xl items-end px-6 pb-5 pt-28 sm:px-8 sm:py-28 lg:min-h-[calc(100vh-5rem)] lg:items-center lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-softblue"
          >
            Overland Park, KS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg text-4xl font-bold leading-[1.06] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-6xl"
          >
            Move Like Your Body Was Designed To.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Movement-based care in Overland Park combining chiropractic care,
            myofascial release therapy, shockwave therapy, and targeted rehab
            to improve how your body moves — not just where it hurts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <CTAButton href="/book" label="Book Now" variant="white" size="lg" showArrow />
            <CTAButton
              href="https://us.fullscript.com/welcome/move"
              label="Supplements"
              variant="outlineWhite"
              size="lg"
              external
            />
          </motion.div>
        </div>
      </div>
    </HeroMedia>
  );
}
