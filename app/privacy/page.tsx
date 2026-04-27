'use client';

import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SITE } from '@/lib/site-data';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy", path: "/privacy" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-4">
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl prose prose-sm prose-gray">
          <p className="text-steel leading-relaxed">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">Introduction</h2>
          <p className="text-steel leading-relaxed">{SITE.name} ("we," "us," or "our") is committed to protecting the privacy of our patients and website visitors. This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website at {SITE.domain} or use our services.</p>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">Information We Collect</h2>
          <p className="text-steel leading-relaxed">We may collect personal information that you voluntarily provide when you:</p>
          <ul className="text-steel space-y-1">
            <li>Submit a contact form on our website</li>
            <li>Book an appointment through our scheduling platform</li>
            <li>Subscribe to communications</li>
            <li>Interact with our website</li>
          </ul>
          <p className="text-steel leading-relaxed">This information may include your name, email address, phone number, and any message content you provide.</p>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">How We Use Your Information</h2>
          <p className="text-steel leading-relaxed">We use the information we collect to:</p>
          <ul className="text-steel space-y-1">
            <li>Respond to your inquiries and requests</li>
            <li>Schedule and manage appointments</li>
            <li>Improve our website and services</li>
            <li>Send relevant communications about your care</li>
          </ul>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">Third-Party Services</h2>
          <p className="text-steel leading-relaxed">We use third-party services including JaneApp for appointment scheduling and analytics tools to improve our website. These services have their own privacy policies governing how they handle your information.</p>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">Data Security</h2>
          <p className="text-steel leading-relaxed">We take reasonable measures to protect your personal information. However, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security of your data.</p>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">Your Rights</h2>
          <p className="text-steel leading-relaxed">You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us using the information provided on our Contact page.</p>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">Changes to This Policy</h2>
          <p className="text-steel leading-relaxed">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">Contact</h2>
          <p className="text-steel leading-relaxed">{SITE.name}<br />{SITE.address}<br />{SITE.phone}</p>
        </div>
      </SectionWrapper>
    </>
  );
}
