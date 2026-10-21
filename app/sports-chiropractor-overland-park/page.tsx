import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLdSchema } from "@/components/schema-json-ld";
import { schemas } from "@/lib/schemas";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sports Chiropractor in Overland Park",
  description:
    "Sports chiropractic care for runners, golfers, lifters and pickleball players in Overland Park, with movement assessment, hands-on care and rehab.",
  alternates: { canonical: "/sports-chiropractor-overland-park" },
  openGraph: {
    title: "Sports Chiropractor in Overland Park | Move Muscle & Joint",
    description:
      "Sports chiropractic care for runners, golfers, lifters and pickleball players in Overland Park, with movement assessment, hands-on care and rehab.",
    url: `${SITE.url}/sports-chiropractor-overland-park`,
  },
};

export default function SportsChiropractorOverlandParkPage() {
  const faqs = [
    {
      question: "Do I need to be injured to see a sports chiropractor?",
      answer:
        "No. Many active adults visit when they notice a change in mobility, recurring soreness, or a plateau in training. An assessment can identify movement limitations before they become a larger problem.",
    },
    {
      question: "Can care fit around my training schedule?",
      answer:
        "Yes. We discuss your current training, competitions, work demands, and recovery habits so the plan matches what you need to do. Recommendations may change as your symptoms and movement improve.",
    },
    {
      question: "What if my pain needs more than an adjustment?",
      answer:
        "Your visit includes an evaluation rather than a one-size-fits-all treatment. When appropriate, care can include myofascial release therapy, shockwave therapy, and targeted rehab alongside chiropractic care.",
    },
  ];

  return (
    <>
      <JsonLdSchema
        data={schemas.breadcrumb([
          { name: "Home", url: SITE.url },
          { name: "Sports Chiropractor", url: `${SITE.url}/sports-chiropractor-overland-park` },
        ])}
      />
      <section className="bg-charcoal py-28 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Sports Chiropractor", path: "/sports-chiropractor-overland-park" }]} />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-softblue">For active adults</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Sports Chiropractor in Overland Park
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Movement-focused care for runners, golfers, lifters, and pickleball players who want to understand what is limiting performance and get back to doing what they enjoy.
          </p>
          <div className="mt-8"><CTAButton href="/book" label="Book Your Assessment" variant="white" size="lg" showArrow campaign="services" content="sports-chiropractor" /></div>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-steel">
          <p>Sports chiropractic care is not only for professional athletes or acute injuries. It can help active people make sense of recurring aches, restricted movement, and the difference between feeling capable and feeling ready. At Move Muscle & Joint, Dr. Joseph Hugunin, DC, evaluated athletes and active adults through a movement-first lens. His past experience included serving as a team chiropractor for Sporting Kansas City and working with people who needed to move well under real demands.</p>
          <p>Runners may notice calf tightness, hip discomfort, or a stride that feels uneven. Golfers may feel limited through the hips, thoracic spine, or shoulder during rotation. Lifters may have trouble reaching a position under load, and pickleball players may be managing repeated starts, stops, lunges, and overhead shots. These patterns can be useful information. Instead of focusing only on the sore spot, we look at how joints, muscles, and movement strategies work together.</p>
          <p>The goal is a clear plan that respects your activity. Care may include chiropractic treatment, hands-on work, exercise, load-management guidance, or referrals when another type of evaluation is more appropriate. We do not promise a particular outcome, and we do not assume every athlete needs the same treatment.</p>
          <p>For runners, we may consider how the foot, ankle, knee, hip, pelvis, and trunk share the work of each stride. For golfers, rotation and the ability to load one side of the body can matter as much as the area that feels sore. Lifters often benefit from examining the positions they can control before adding more weight. Pickleball players may need a plan that accounts for quick lateral movement, repeated reaches, and the recovery between matches.</p>
          <p>That does not mean your sport is reduced to a set of drills. We want to understand the demands you actually face and the parts of your week that affect recovery, including sleep, work, travel, and training volume. Small changes to warm-up, exercise selection, technique, or workload may be discussed when they are relevant to your presentation.</p>
          <p>Care is collaborative. You can ask questions, describe what has or has not helped, and decide whether a recommendation fits your goals. If imaging, medical evaluation, or another professional service is indicated, we can explain that next step rather than continuing with a plan that does not match the problem.</p>
          <p>For an active adult, the first visit is a chance to connect the details of your daily life with the way you move. We begin with a movement assessment that considers the positions, ranges, and tasks your activity requires. We may then use myofascial release therapy when hands-on care is appropriate for an area that feels restricted or sensitive. You will also discuss a rehab plan that can include simple exercises for strength, control, mobility, or gradual return to training. The plan is explained in practical terms so you know what to do between visits and what changes should guide the next progression.</p>
          <p>Booking is straightforward: use the booking link on this page to choose an available appointment, or visit our <Link href="/new-patient-offer" className="text-navy font-medium underline underline-offset-2">new patient offer</Link> to review the first-visit option. If you are unsure which appointment fits your needs, contact the clinic before scheduling so we can help direct you.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="Your first visit" title="A practical assessment before a treatment plan." />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6"><h2 className="text-xl font-bold text-charcoal">What we discuss</h2><p className="mt-3 leading-relaxed text-steel">We review your goals, symptoms, training history, recent changes in activity, and what you need to be able to do. Bring the context that matters: upcoming races, tournaments, lifting goals, or a golf season you want to enjoy.</p></div>
          <div className="rounded-xl bg-white p-6"><h2 className="text-xl font-bold text-charcoal">What we assess</h2><p className="mt-3 leading-relaxed text-steel">We look at relevant joint motion, tissue tolerance, strength, balance, coordination, and functional patterns. The assessment is shaped by your activity rather than a generic checklist.</p></div>
          <div className="rounded-xl bg-white p-6"><h2 className="text-xl font-bold text-charcoal">What you leave with</h2><p className="mt-3 leading-relaxed text-steel">You receive an explanation of the findings and a next-step recommendation. That may be a focused episode of care, a home exercise plan, or a referral if your needs fall outside our scope.</p></div>
          <div className="rounded-xl bg-white p-6"><h2 className="text-xl font-bold text-charcoal">How we progress</h2><p className="mt-3 leading-relaxed text-steel">As capacity improves, we can adjust exercises, movement strategies, and activity demands. The plan is intended to help you participate more confidently, not create dependence on appointments.</p></div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading tag="Integrated care" title="Choose the tools that fit your movement problem." />
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/services/shockwave-therapy" className="rounded-xl border border-border p-6 transition-shadow hover:shadow-md"><h2 className="font-bold text-charcoal">Shockwave therapy</h2><p className="mt-2 text-sm leading-relaxed text-steel">Learn how this treatment may fit into care for persistent soft-tissue concerns.</p></Link>
          <Link href="/services/myofascial-release-therapy" className="rounded-xl border border-border p-6 transition-shadow hover:shadow-md"><h2 className="font-bold text-charcoal">Myofascial release therapy</h2><p className="mt-2 text-sm leading-relaxed text-steel">Explore hands-on work for tissue mobility and areas that feel restricted.</p></Link>
          <Link href="/services/targeted-rehab" className="rounded-xl border border-border p-6 transition-shadow hover:shadow-md"><h2 className="font-bold text-charcoal">Targeted rehab</h2><p className="mt-2 text-sm leading-relaxed text-steel">Build strength, control, and tolerance for the movements your sport requires.</p></Link>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <div className="mx-auto max-w-3xl"><SectionHeading tag="Questions" title="Sports chiropractic FAQ" /> <div className="space-y-3">{faqs.map((faq) => <details key={faq.question} className="rounded-xl bg-white px-6 py-5"><summary className="cursor-pointer font-semibold text-charcoal">{faq.question}</summary><p className="pt-4 leading-relaxed text-steel">{faq.answer}</p></details>)}</div></div>
      </SectionWrapper>

      <section className="bg-navy py-20"><div className="mx-auto max-w-3xl px-6 text-center lg:px-8"><h2 className="text-3xl font-bold text-white md:text-4xl">Ready to understand what is holding you back?</h2><p className="mt-4 text-lg text-white/70">Start with an assessment built around how you move and what you want to return to.</p><div className="mt-8"><CTAButton href="/new-patient-offer" label="See the New Patient Offer" variant="white" size="lg" showArrow campaign="services" content="offer" /></div></div></section>
    </>
  );
}
