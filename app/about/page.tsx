'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTAButton } from '@/components/ui/cta-button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { HeroMedia } from '@/components/ui/hero-media';
import { IMAGES, SITE } from '@/lib/site-data';

const communities = ["Overland Park", "Leawood", "Prairie Village", "Olathe", "Shawnee", "Lenexa", "Kansas City metro"];

export default function AboutPage() {
  return (
    <>
      <HeroMedia imageSrc={IMAGES.clinic} alt="Move Muscle & Joint clinic" minHeight="min-h-[60vh]" overlayOpacity="bg-charcoal/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
          <Breadcrumbs items={[{ label: "About", path: "/about" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl">
            About Move Muscle & Joint
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">
            A modern movement-focused chiropractic and rehab clinic in Overland Park built around integrated care and long-term results.
          </motion.p>
        </div>
      </HeroMedia>

      <SectionWrapper>
        <div className="max-w-3xl">
          <SectionHeading tag="Why Move Exists" title="Built for care that lasts." />
          <div className="space-y-5 text-steel leading-relaxed -mt-8">
            <p>We don't believe in rushed care or generic treatment plans. At Move Muscle & Joint, every session is designed around how your body moves, where it is compensating, and what it needs to recover fully.</p>
            <p>Our approach blends hands-on treatment with movement education and progressive rehab so you can build results that last. No cookie-cutter plans. No endless appointments without a clear goal. Just intentional care designed to help you move better and stay that way.</p>
            <p>Move was founded on the belief that chiropractic care is most effective when it's part of a bigger picture — one that includes soft tissue work, rehab-based exercise, and a commitment to understanding the whole person, not just the painful spot.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <img src={IMAGES.provider} alt="Dr. Joseph Hugunin" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          <div>
            <SectionHeading tag="Your Provider" title="Dr. Joseph Hugunin" />
            <p className="text-sm text-steel font-medium -mt-10 mb-6">Founder / Chiropractor</p>
            <div className="space-y-4 text-steel leading-relaxed">
              <p>Dr. Joseph Hugunin helps patients uncover the root cause of pain through a blend of chiropractic care, movement assessment, myofascial release therapy, and rehab-based treatment.</p>
              <p>His approach focuses on restoring function, reducing flare-ups, and helping patients build long-term confidence in the way they move.</p>
              <p>With a focus on whole-body evaluation and integrated care, Dr. Hugunin works with patients in Overland Park and the surrounding Kansas City metro area who want more than temporary relief — they want lasting improvement.</p>
            </div>
            <div className="mt-8">
              <CTAButton href="/book" label="Book With Dr. Hugunin" showArrow />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading tag="Community" title="Proudly serving the Kansas City metro." subtitle="Move Muscle & Joint is located in Overland Park and serves patients across the region." />
        <div className="flex flex-wrap gap-3 -mt-8">
          {communities.map((c) => (
            <span key={c} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary text-sm text-charcoal font-medium">
              <MapPin className="w-3.5 h-3.5 text-navy" />
              {c}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience the difference.</h2>
          <p className="mt-5 text-lg text-white/70">Book your first visit and see what movement-focused care feels like.</p>
          <div className="mt-8">
            <CTAButton href="/book" label="Book Your Visit" variant="white" size="lg" showArrow />
          </div>
        </div>
      </section>
    </>
  );
}
