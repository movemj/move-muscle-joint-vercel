import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGES, SITE, SERVICES } from "@/lib/site-data";

const offerBookingUrl = SITE.newPatientOfferBookingUrl;

export const metadata: Metadata = {
  title: "$49 New Patient Offer",
  description: "Start with a $49 new patient movement assessment at Move Muscle & Joint. Learn what to expect and claim the dedicated new patient offer.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.url}/new-patient-offer` },
};

const firstVisit = [
  ["01", "Movement Assessment", "We evaluate posture, mobility, movement patterns, and loading to understand what may be driving the problem."],
  ["02", "Personalized Diagnosis", "Your care is based on findings, not assumptions. We explain what we see and what it means."],
  ["03", "Integrated Treatment", "When clinically appropriate, your first visit may include hands-on chiropractic care, myofascial work, or movement-based treatment."],
  ["04", "Clear Path Forward", "Leave knowing what is happening, what needs to improve, and what the next step should be."],
];

export default function NewPatientOfferPage() {
  return (
    <div className="bg-white">
      <section className="bg-charcoal text-white">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
            <Breadcrumbs items={[{ label: "New Patient Offer", path: "/new-patient-offer" }]} />
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-accent">New Patient Offer</p>
            <h1 className="mt-5 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Start With Clarity.</h1>
            <p className="mt-6 max-w-lg text-xl font-semibold text-white">$49 New Patient Movement Assessment</p>
            <p className="mt-5 max-w-xl leading-relaxed text-steel">Your first visit is built to understand how your body moves, identify what is limiting you, and determine the right path forward — not simply treat where it hurts.</p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <CTAButton href={offerBookingUrl} label="Claim the $49 New Patient Offer" variant="white" size="lg" showArrow external />
              <span className="text-sm text-steel">New patients only.</span>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[620px]">
            <Image src={IMAGES.assessment} alt="Movement assessment at Move Muscle & Joint" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeading tag="Your First Visit" title="A clearer starting point for better movement." align="center" />
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {firstVisit.map(([number, title, description]) => (
            <article key={number} className="border-t border-border pt-6">
              <p className="font-mono text-sm font-semibold tracking-widest text-accent">{number}</p>
              <h2 className="mt-4 text-xl font-bold text-charcoal">{title}</h2>
              <p className="mt-3 max-w-lg leading-relaxed text-steel">{description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-light-gray">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[380px] overflow-hidden rounded-md">
            <Image src={IMAGES.provider} alt="Dr. Joseph Hugunin working with a patient" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
          <div>
            <SectionHeading tag="The Move Approach" title="More Than a Routine Chiropractic Visit." />
            <p className="mt-6 max-w-xl leading-relaxed text-steel">Move combines assessment, treatment, and movement retraining to help you understand what is happening and build confidence in how you move.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div key={service.title} className="flex items-start gap-3 border-t border-border pt-4">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-semibold text-charcoal">{service.title}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm italic leading-relaxed text-muted">Your clinician will recommend the right tools based on your assessment. Not every modality is included in every appointment.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-navy" className="text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">A better first step</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Ready to Move Better?</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/75">Start with a clear assessment and a plan built around how your body actually moves.</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <CTAButton href={offerBookingUrl} label="Claim the $49 New Patient Offer" variant="white" size="lg" showArrow external />
          <span className="text-sm text-white/65">New patients only.</span>
        </div>
      </SectionWrapper>
    </div>
  );
}
