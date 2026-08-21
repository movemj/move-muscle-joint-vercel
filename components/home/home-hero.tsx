"use client";

import { HeroMedia } from "@/components/ui/hero-media";
import { CTAButton } from "@/components/ui/cta-button";
import { IMAGES } from "@/lib/site-data";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const trustIndicators = [
  "One-on-one care",
  "Chiropractic + rehab under one roof",
  "Movement-based treatment plans",
  "Located in Overland Park",
];

export function HomeHero() {
  return (
    <HeroMedia
      imageSrc={IMAGES.hero}
      alt="Woman performing a mobility exercise during movement rehabilitation at Move Muscle & Joint in Overland Park"
      overlayOpacity="bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/30"
      minHeight="min-h-[720px] sm:min-h-[780px] lg:min-h-[90vh]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 sm:py-32 lg:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-softblue mb-6"
          >
            Overland Park, KS
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance"
          >
            Move Like Your Body Was Designed To.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl"
          >
            Movement-based care in Overland Park combining chiropractic care,
            myofascial release therapy, shockwave therapy, and targeted rehab
            to improve how your body moves — not just where it hurts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <CTAButton href="/book" label="Book Now" variant="white" size="lg" showArrow />
            <CTAButton href="/our-approach" label="Our Approach" variant="outlineWhite" size="lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2"
          >
            {trustIndicators.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                <CheckCircle className="w-3.5 h-3.5 text-softblue" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">Integrated Chiropractic Care &amp; Rehab in Overland Park</h1>
    </HeroMedia>
  );
}
