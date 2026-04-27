'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg mx-auto text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
          <CheckCircle className="w-16 h-16 text-navy mx-auto" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-charcoal mt-6 tracking-tight">
          Thank you for reaching out.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 text-steel leading-relaxed">
          We&apos;ve received your message and will get back to you as soon as possible. If you&apos;re looking to schedule an appointment, the fastest way is to book online.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-4 justify-center">
          <CTAButton href="/book" label="Book an Appointment" showArrow />
          <CTAButton href="/" label="Back to Home" variant="outline" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8">
          <Link href="/faq" className="text-sm text-steel hover:text-navy transition-colors">View FAQs →</Link>
        </motion.div>
      </div>
    </section>
  );
}
