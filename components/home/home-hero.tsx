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
      overlayOpacity="bg-gradient-to-b from-charcoal/85 via-charcoal/15 to-transparent md:bg-gradient-to-r md:from-charcoal/85 md:via-charcoal/60 md:to-charcoal/15"
      mobileImagePosition="object-[68%_center]"
      minHeight="md:min-h-[calc(100vh-5rem)]"
    >
      <div className="mx-auto flex w-full max-w-7xl items-start px-6 pb-10 pt-24 sm:px-8 sm:py-14 md:items-center md:px-8 md:py-16 lg:min-h-[calc(100vh-5rem)] lg:py-16">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 whitespace-nowrap text-[clamp(10px,3vw,12px)] font-semibold uppercase tracking-[0.08em] text-softblue md:text-xs md:tracking-[0.25em]"
          >
            Chiropractor in Overland Park, KS
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
            Movement-based chiropractic care, myofascial release therapy, shockwave therapy and targeted rehab.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-7 hidden flex-wrap gap-3 md:flex"
          >
            <CTAButton href="/new-patient-offer" label="Book your $49 first visit" variant="white" size="lg" showArrow />
            <CTAButton
              href="tel:+19133030989"
              label="Call or text (913) 303-0989"
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
