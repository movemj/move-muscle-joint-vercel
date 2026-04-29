'use client';

import type { Metadata } from "next";
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, ClipboardCheck, Dumbbell, Shield } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { CTAButton } from '@/components/ui/cta-button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SITE } from '@/lib/site-data';

const trustPoints = [
  { icon: ClipboardCheck, text: "Comprehensive movement assessment included" },
  { icon: Calendar, text: "One-on-one care — no rotating providers" },
  { icon: Dumbbell, text: "Hands-on treatment + rehab in one visit" },
  { icon: Shield, text: "Integrated care model for lasting results" },
];

const expectations = [
  "Your session begins with a whole-body movement assessment",
  "We evaluate how your body moves, compensates, and loads",
  "You'll receive a clear explanation of findings and a treatment plan",
  "Treatment may begin during the same visit",
  "No referral needed — book directly online",
];

export const metadata: Metadata = {
  title: "Book Chiropractic Appointment in Overland Park, KS",
  description: "Book chiropractic care, myofascial release therapy, shockwave therapy, or targeted rehab at Move Muscle & Joint in Overland Park, KS.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Book Now", path: "/book" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl mt-4">
            Book Your Appointment
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-5 text-lg text-white/70 max-w-xl leading-relaxed">
            Take the first step toward moving better and staying strong. Schedule your visit at Move Muscle & Joint in Overland Park.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight">
              Your care starts with clarity.
            </h2>
            <p className="mt-4 text-steel leading-relaxed">
              At Move, every new patient receives a thorough assessment so we can understand exactly what your body needs. No guesswork, no generic plans — just intentional care designed around how you move.
            </p>
          </motion.div>

          {/* Trust Points */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {trustPoints.map((t, i) => (
              <motion.div
                key={t.text}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary text-left"
              >
                <t.icon className="w-5 h-5 text-navy shrink-0" />
                <span className="text-sm font-medium text-charcoal">{t.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-8 rounded-2xl bg-navy text-white"
          >
            <h3 className="text-xl font-bold">Ready to schedule?</h3>
            <p className="mt-2 text-white/70 text-sm">Click below to view available appointment times and book your visit.</p>
            <div className="mt-6">
              <CTAButton
                href={SITE.janeBookingUrl}
                label="Continue to Online Booking"
                variant="white"
                size="lg"
                showArrow
                external
              />
            </div>
          </motion.div>

          {/* What to Expect */}
          <div className="mt-16 text-left">
            <h3 className="text-xl font-bold text-charcoal mb-6">What to expect before your visit</h3>
            <div className="space-y-3">
              {expectations.map((exp, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-navy shrink-0 mt-1" />
                  <span className="text-sm text-steel">{exp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Link */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-steel">
              Know what you need?{" "}
              <a
                href={SITE.janeBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-semibold hover:underline"
              >
                Go directly to online booking →
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
