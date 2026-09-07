'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  Car,
  Clock,
  Shirt,
  ClipboardList,
  CreditCard,
  RotateCcw,
  ArrowRight,
} from 'lucide-react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTAButton } from '@/components/ui/cta-button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { JsonLdSchema } from '@/components/schema-json-ld';
import { schemas } from '@/lib/schemas';
import { SITE, SERVICES } from '@/lib/site-data';
import { getTestimonialsByTag } from '@/lib/testimonials';
import { TestimonialsStatic } from '@/components/testimonials/testimonials-static';

const bookTestimonial = getTestimonialsByTag('book')[0];

export function BookContent() {
  return (
    <>
      <JsonLdSchema data={schemas.bookWebPage()} />

      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Book Now", path: "/book" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl mt-4">
            Book a Chiropractor in Overland Park, KS
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-5 text-lg text-white/70 max-w-xl leading-relaxed">
            Schedule your visit at Move Muscle & Joint and get on the calendar in a couple of minutes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <CTAButton href="/book" label="Book Online" variant="white" size="lg" showArrow />
            <a href="tel:+19133030989" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
              <Phone className="w-4 h-4" />
              Call or text (913) 303-0989
            </a>
          </motion.div>
        </div>
      </section>

      {/* New patient minor line */}
      <div className="border-b border-border bg-light-gray py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-steel">
            New patient?{" "}
            <Link href="/new-patient-offer" className="font-semibold text-navy hover:underline">
              Start with the $49 first visit
            </Link>
          </p>
        </div>
      </div>

      {/* Visit Details */}
      <SectionWrapper>
        <SectionHeading tag="Visit Details" title="Where to find us." />
        <div className="grid gap-8 sm:grid-cols-2 -mt-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-navy shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal">Address</p>
              <p className="text-sm text-steel">{SITE.address}</p>
              <p className="text-sm text-steel mt-1">The clinic is located inside Fit House, near 119th & Roe.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-navy shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal">Parking</p>
              <p className="text-sm text-steel">Free parking is available in the Fit House lot, directly outside the building entrance.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-navy shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal">Hours</p>
              <p className="text-sm text-steel">Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p className="text-sm text-steel">Saturday – Sunday: Closed</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-navy shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal">Phone</p>
              <a href="tel:+19133030989" className="text-sm text-steel hover:text-navy">{SITE.phone}</a>
              <p className="text-xs text-steel mt-0.5">Call or text us at (913) 303-0989.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What to Bring & Wear */}
      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="Before You Arrive" title="What to bring & what to wear." />
        <div className="grid gap-8 sm:grid-cols-2 -mt-8">
          <div className="flex items-start gap-3">
            <ClipboardList className="w-5 h-5 text-navy shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal">What to bring</p>
              <p className="text-sm text-steel">A photo ID, a list of current medications, and any relevant imaging or medical records you may have.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shirt className="w-5 h-5 text-navy shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal">What to wear</p>
              <p className="text-sm text-steel">Comfortable clothing that allows you to move naturally, such as athletic wear.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Payment & Insurance */}
      <SectionWrapper>
        <SectionHeading tag="Payment & Insurance" title="Straightforward payment options." />
        <div className="max-w-3xl -mt-8 space-y-4 text-steel leading-relaxed">
          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-navy shrink-0 mt-1" />
            <p>We accept cash, credit and debit cards, HSA, and FSA. Our team can walk you through pricing before your visit so there are no surprises.</p>
          </div>
          <p className="pl-8">Insurance coverage varies by plan. Contact our office and we&apos;ll help you understand your options before you book.</p>
        </div>
      </SectionWrapper>

      {/* What You Can Book */}
      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="What You Can Book" title="Choose the right visit for you." />
        <div className="grid sm:grid-cols-2 gap-4 -mt-8">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={s.slug}
              className="flex items-center justify-between p-5 rounded-xl bg-white hover:shadow-md transition-all group"
            >
              <span className="font-medium text-charcoal group-hover:text-navy text-sm">{s.title}</span>
              <ArrowRight className="w-4 h-4 text-steel group-hover:text-navy transition-colors" />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Returning Patients */}
      <SectionWrapper>
        <SectionHeading tag="Returning Patients" title="Booking a follow-up visit." />
        <div className="max-w-3xl -mt-8 text-steel leading-relaxed">
          <p>Already a patient at Move? Use the same online booking link to schedule your next visit, or call or text our office and we&apos;ll get you on the schedule.</p>
        </div>
      </SectionWrapper>

      {/* Cancellation Policy */}
      <SectionWrapper bg="bg-secondary">
        <div className="max-w-3xl mx-auto flex items-start gap-3 text-center sm:text-left">
          <RotateCcw className="w-5 h-5 text-navy shrink-0 mt-0.5 hidden sm:block" />
          <p className="text-sm text-steel leading-relaxed">We ask for advance notice if you need to cancel or reschedule so we can offer your spot to another patient. Please call or text our office to make any changes to your appointment.</p>
        </div>
      </SectionWrapper>

      {/* Testimonial */}
      {bookTestimonial && (
        <TestimonialsStatic testimonials={[bookTestimonial]} bg="bg-white" centered />
      )}

      {/* Closing CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to get started?</h2>
          <p className="mt-5 text-lg text-white/70">Book your visit at Move Muscle & Joint in Overland Park.</p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CTAButton href="/book" label="Book Online" variant="white" size="lg" showArrow />
            <a href="tel:+19133030989" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
              <Phone className="w-4 h-4" />
              Call or text (913) 303-0989
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
