import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLdSchema } from "@/components/schema-json-ld";
import { schemas } from "@/lib/schemas";
import { IMAGES, SITE, SERVICES } from "@/lib/site-data";
import { getTestimonialsByTag } from "@/lib/testimonials";
import { TestimonialsStatic } from "@/components/testimonials/testimonials-static";

const offerTestimonial = getTestimonialsByTag("offer")[0];

const offerTitle = "$49 New Patient Special | Chiropractor in Overland Park, KS";
const offerDescription = "New patient special at Move Muscle & Joint in Overland Park: $49 for a full movement assessment, clinical evaluation, and hands-on treatment when appropriate.";

export const metadata: Metadata = {
  title: { absolute: offerTitle },
  description: offerDescription,
  openGraph: {
    url: `${SITE.url}/new-patient-offer`,
    title: offerTitle,
    description: offerDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: offerTitle,
    description: offerDescription,
  },
  alternates: { canonical: `${SITE.url}/new-patient-offer` },
};

const firstVisit = [
  ["01", "WE WATCH YOU MOVE", "We look beyond the painful spot to understand how your body is actually moving."],
  ["02", "WE CONNECT THE DOTS", "We explain what we see, what may be contributing to the problem, and why it matters."],
  ["03", "WE START TREATMENT", "When clinically appropriate, hands-on treatment can begin during your first visit."],
  ["04", "YOU LEAVE WITH A PLAN", "Know what to work on, what comes next, and what progress should look like."],
];

const faqs: Array<[string, string | [string, string]]> = [
  ["What happens at my first visit?", "Your first visit begins with a comprehensive whole-body movement assessment. We discuss your history and goals, explain our findings, and often begin integrated treatment in the same session."],
  ["Will I be treated during the first visit?", "When clinically appropriate, your first visit may include hands-on chiropractic care, myofascial work, or movement-based treatment."],
  ["Do I have to sign up for a long treatment plan?", "No. We explain what we find and recommend a clear next step based on your goals and assessment."],
  ["Who is the $49 first visit for?", "This dedicated offer is for new patients beginning care at Move Muscle & Joint."],
  ["What should I wear?", "Wear comfortable clothing that allows you to move naturally."],
  ["Where is Move Muscle & Joint located?", [`We’re at ${SITE.address}.`, "https://www.google.com/maps/place/?q=place_id:ChIJN-zGIIPpwIcRCDPsBaLbDtg"]],
];

export default function NewPatientOfferPage() {
  return (
    <main className="bg-white pb-28 md:pb-0">
      <JsonLdSchema data={schemas.newPatientOffer()} />
      <section className="relative isolate h-[100svh] min-h-[620px] overflow-hidden bg-charcoal text-white">
        <Image src={IMAGES.assessment} alt="Clinician guiding a patient through a standing movement assessment" fill priority className="z-0 object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/25" aria-hidden="true" />
        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">New to Move? Start here.</p>
            <h1 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Move Better Starts With Knowing Why.</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">Your first Move session is designed to uncover what may be contributing to the problem—not simply chase where it hurts. Get a comprehensive movement assessment, a clear explanation of what we find, and treatment when clinically appropriate.</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              {['Movement assessment', 'Treatment', 'No obligation'].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-4 text-accent" aria-hidden="true" />{item}</span>)}
            </div>
            <div className="mt-9 text-white">
              <span className="text-8xl font-bold leading-none tracking-[-0.08em] drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-9xl">$49</span>
            </div>
          </div>
        </div>
      </section>


      <SectionWrapper>
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <SectionHeading tag="What brought you here?" title="You Don’t Have to Know What’s Wrong Yet." />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">Pain, stiffness, recurring injuries, or movement that just doesn’t feel right—we start by looking at how your body is working as a whole.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-light-gray">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading tag="Your First Move Session" title="What Happens When You Walk Through the Door." />
            <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-md">
              <Image src={IMAGES.handsOn} alt="Hands-on movement care at Move Muscle & Joint" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
          <div className="relative flex flex-col gap-8 pl-8 before:absolute before:bottom-4 before:left-3 before:top-4 before:w-px before:bg-accent/70">
            {firstVisit.map(([number, title, description]) => <article key={number} className="relative grid gap-5 pl-16 sm:grid-cols-[100px_1fr] sm:pl-0">
              <span className="text-5xl font-bold tracking-tight text-navy/15 sm:text-6xl">{number}</span>
              <div><h2 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">{title}</h2><p className="mt-3 max-w-lg leading-relaxed text-steel">{description}</p></div>
            </article>)}
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-24 lg:px-16">
          <div className="lg:border-l lg:border-white/15 lg:pl-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">New patient offer</p><p className="mt-3 text-8xl font-bold leading-none tracking-[-0.07em] text-white sm:text-9xl">$49</p><p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#c9d8eb]">First Move Session</p><p className="mt-6 max-w-sm text-lg leading-relaxed text-white/70">No guessing. No generic protocol. Start with clarity.</p></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Your first visit includes</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">More Than an Adjustment.</h2><div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">{["Whole-body movement assessment", "Clinical evaluation", "Explanation of findings", "Personalized recommendations", "Hands-on treatment when clinically appropriate", "A clear next step"].map((item) => <div key={item} className="flex gap-3 border-t border-white/15 pt-4 text-sm text-white/80"><Check className="size-4 shrink-0 text-accent" aria-hidden="true" />{item}</div>)}</div><div className="mt-9"><CTAButton campaign="new-patient-offer" treatment={6} label="Book My $49 First Visit" variant="white" size="lg" showArrow /></div></div>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeading tag="Why Move feels different" title="If You’ve Tried Care Before, This May Feel Different." align="center" />
        <div className="mx-auto mt-12 max-w-4xl divide-y divide-border border-y border-border">
          {[["Rush in. Adjust. Leave.", "Assess. Treat. Retrain."], ["Treat only where it hurts.", "Look at how the entire system is moving."], ["Endless visits without direction.", "A plan built around progress."]].map(([not, move]) => <div key={not} className="grid gap-5 py-8 sm:grid-cols-2 sm:gap-10"><div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal">Not</p><p className="mt-2 text-lg font-medium text-charcoal/80 line-through decoration-accent/70">{not}</p></div><div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Move</p><p className="mt-2 text-xl font-bold tracking-tight text-navy">{move}</p></div></div>)}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-light-gray">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="relative aspect-[4/3] overflow-hidden rounded-md"><Image src={IMAGES.provider} alt="Joseph Hugunin, DC — Founder, Move Muscle & Joint" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 45vw" /></div><div><SectionHeading tag="Your Provider" title="You’ll Know Who You’re Seeing." /><p className="mt-2 font-medium text-navy">One-on-one care with Dr. Joseph Hugunin.</p><div className="mt-6 flex flex-col gap-4 leading-relaxed text-steel"><p>Dr. Joseph Hugunin helps patients uncover the root cause of pain through a blend of chiropractic care, movement assessment, myofascial release therapy, and rehab-based treatment.</p><p>His approach focuses on restoring function, reducing flare-ups, and helping patients build long-term confidence in the way they move.</p></div></div></div>
      </SectionWrapper>

      <SectionWrapper><div className="mx-auto max-w-3xl"><SectionHeading tag="Questions" title="A few things to know." align="center" /><Accordion type="single" collapsible className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="py-6 text-left font-semibold text-charcoal hover:text-navy">{question}</AccordionTrigger><AccordionContent className="pb-6 leading-relaxed text-steel">{Array.isArray(answer) ? <a className="text-navy underline underline-offset-4" href={answer[1]} target="_blank" rel="noreferrer">{answer[0]}</a> : answer}</AccordionContent></AccordionItem>)}</Accordion></div></SectionWrapper>

      {offerTestimonial && (
        <TestimonialsStatic testimonials={[offerTestimonial]} bg="bg-light-gray" centered />
      )}


    </main>
  );
}
