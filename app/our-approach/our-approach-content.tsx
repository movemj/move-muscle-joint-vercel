'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layers, Repeat, Brain, HeartPulse, Shield, Zap } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTAButton } from '@/components/ui/cta-button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { HeroMedia } from '@/components/ui/hero-media';
import { IMAGES } from '@/lib/site-data';
import { MoveMethod } from '@/components/home/move-method';

const differentiators = [
  { icon: Brain, title: "Assessment-Driven", desc: "Every treatment plan starts with understanding how your body moves, compensates, and loads — not with assumptions." },
  { icon: Layers, title: "Integrated, Not Isolated", desc: "Chiropractic care, soft tissue therapy, shockwave, and rehab work together inside one coordinated model." },
  { icon: Repeat, title: "Movement Retraining", desc: "We don't just treat symptoms. We retrain the patterns that caused them, so results last." },
  { icon: HeartPulse, title: "Whole-Body Perspective", desc: "Pain in one area often stems from dysfunction elsewhere. We evaluate the entire kinetic chain." },
  { icon: Shield, title: "Durability Over Dependency", desc: "Our goal is to build resilience and self-sufficiency — not ongoing dependency on passive care." },
  { icon: Zap, title: "Modern Setting", desc: "A gym-based clinic designed for hands-on care and progressive rehab under one roof." },
];

export function OurApproachContent() {
  return (
    <>
      <HeroMedia imageSrc={IMAGES.assessment} alt="Movement assessment" overlayOpacity="bg-charcoal/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
          <Breadcrumbs items={[{ label: "Our Approach", path: "/our-approach" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Our Approach to Integrated Movement Care
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">
            At Move Muscle & Joint, we combine assessment, hands-on treatment, and progressive rehabilitation into one cohesive care model designed for lasting results.
          </motion.p>
        </div>
      </HeroMedia>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <SectionHeading tag="Philosophy" title="Why integrated care matters." />
          <div className="space-y-5 text-steel leading-relaxed -mt-8">
            <p>Most traditional care models are built around isolated treatments — an adjustment here, a stretch there, and a follow-up scheduled for next week. That fragmented approach leaves gaps in recovery and often leads to recurring flare-ups.</p>
            <p>At Move Muscle & Joint, we built a different model. Our care is designed around how the body actually works — as an interconnected system where pain in one area often reflects dysfunction somewhere else. When you address the root cause through coordinated hands-on treatment and movement retraining, results are more durable and meaningful.</p>
            <p>This isn't about more visits. It's about better visits. Every session is designed to move you forward, with clarity about where you are and where you're going.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="How We Evaluate" title="Understanding how your body moves." subtitle="Before any treatment begins, we assess your movement as a system — identifying restrictions, compensations, and loading imbalances that contribute to pain." align="center" />
        <div className="max-w-3xl mx-auto space-y-5 text-steel leading-relaxed">
          <p>Our assessment looks beyond the site of pain. We evaluate posture, gait, joint mobility, stability patterns, and functional movement to understand what's driving dysfunction — not just where it hurts.</p>
          <p>This comprehensive evaluation forms the basis of every treatment plan. It allows us to integrate the right combination of chiropractic, soft tissue work, shockwave therapy, and rehab for your specific needs.</p>
        </div>
      </SectionWrapper>

      <MoveMethod />

      <SectionWrapper>
        <SectionHeading tag="How Services Work Together" title="One system, not a menu." subtitle="Each treatment modality at Move supports the others — creating a care experience that builds on itself over time." align="center" />
        <div className="max-w-3xl mx-auto space-y-5 text-steel leading-relaxed">
          <p>Chiropractic restores joint position and mobility. Myofascial release therapy addresses the soft tissue restrictions that limit movement quality. Shockwave therapy accelerates healing for stubborn conditions. And targeted rehab rebuilds the strength and motor control that prevent recurrence.</p>
          <p>Rather than choosing one modality, your treatment plan draws from all of them based on what your body needs at each stage of recovery. This is what makes the Move Method work — it's progressive, it's personalized, and it's designed to end well.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="What Makes Us Different" title="Built different from the start." align="center" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white p-8 rounded-xl">
              <d.icon className="w-6 h-6 text-navy mb-4" />
              <h3 className="font-bold text-charcoal">{d.title}</h3>
              <p className="text-sm text-steel mt-2 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading tag="Your First Visit" title="What to expect when you walk in." align="center" />
          <div className="space-y-5 text-steel leading-relaxed -mt-8">
            <p>Your first visit begins with a conversation and a whole-body movement assessment. We want to understand your history, your goals, and how your body is functioning right now.</p>
            <p>From there, we'll explain what we've found, outline a clear treatment plan, and often begin integrated care in the same session. You leave with a real understanding of what's happening and a defined path forward — not just temporary relief.</p>
          </div>
          <div className="mt-10">
            <CTAButton href="/book" label="Schedule Your First Visit" size="lg" showArrow />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
