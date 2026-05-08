import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { IMAGES, CONDITIONS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Targeted Rehab / Movement Retraining in Overland Park | Move Muscle & Joint",
  description:
    "Targeted rehab in Overland Park, KS to rebuild strength, improve movement patterns, and support long-term resilience after pain or injury.",
  alternates: {
    canonical: "/services/targeted-rehab",
  },
  openGraph: {
    title: "Targeted Rehab / Movement Retraining in Overland Park | Move Muscle & Joint",
    description:
      "Targeted rehab in Overland Park, KS to rebuild strength, improve movement patterns, and support long-term resilience after pain or injury.",
    url: `${SITE.url}/services/targeted-rehab`,
  },
};

export default function TargetedRehabPage() {
  return (
    <ServicePageTemplate
      title="Targeted Rehab / Movement Retraining"
      h1="Targeted Rehab in Overland Park"
      heroImage={IMAGES.rehab}
      breadcrumbLabel="Targeted Rehab"
      breadcrumbPath="/services/targeted-rehab"
      introText={
        <>
          <p>
            Targeted rehab and movement retraining at Move Muscle & Joint in Overland Park is where
            lasting results are built. While hands-on treatment addresses pain and restriction,
            rehab is what teaches your body to maintain those improvements through strength,
            stability, and motor control.
          </p>
          <p>
            This isn&apos;t generic physical therapy. It&apos;s progressive, personalized exercise-based
            rehabilitation delivered inside a gym-based clinical setting — integrated with your
            chiropractic care and soft tissue treatment from day one.
          </p>
        </>
      }
      whatItIs={
        <>
          <p>
            Targeted rehab involves structured, progressive exercises designed to rebuild strength,
            retrain movement patterns, and improve your body&apos;s capacity to handle the demands of
            daily life, training, and sport. It addresses the neuromuscular component of dysfunction
            — the way your brain communicates with your muscles.
          </p>
          <p>
            At Move, rehab isn&apos;t something you do after you feel better. It&apos;s part of your care from
            the beginning, woven into every session alongside hands-on treatment so your body learns
            to own its new range of motion and alignment.
          </p>
        </>
      }
      whoItHelps={
        <>
          <p>
            Targeted rehab is essential for anyone who wants lasting results — not just temporary
            relief. It&apos;s especially valuable for active adults returning from injury, athletes
            building resilience, and anyone with recurring pain that keeps coming back despite
            treatment.
          </p>
          <p>
            Patients in Overland Park and the surrounding Kansas City metro choose Move because our
            rehab approach goes beyond basic stretches. We build progressive programs that load
            tissue appropriately and train the movements that matter in your real life.
          </p>
        </>
      }
      whatToExpect={
        <>
          <p>
            Your rehab program is built from your movement assessment. We identify which patterns
            need retraining, which areas need strengthening, and what functional milestones matter
            to your goals. Then we build a progressive plan that evolves as you improve.
          </p>
          <p>
            Sessions take place inside our gym-based clinic using equipment like kettlebells, bands,
            and functional training tools. You&apos;ll learn how to move correctly, build strength
            safely, and take ownership of your recovery with exercises you can continue at home or
            at the gym.
          </p>
        </>
      }
      benefits={[
        "Rebuild strength after pain or injury",
        "Retrain movement patterns that cause dysfunction",
        "Improve stability and motor control",
        "Prevent recurrence of pain and injury",
        "Build confidence in real-world movement",
        "Progressive programming tailored to your goals",
      ]}
      moveMethodFit={
        <>
          <p>
            Targeted rehab is the bridge between feeling better and staying better. It plays a
            primary role in the final three stages of the Move Method — relearning movement,
            building strength, and moving with confidence.
          </p>
          <p>
            While chiropractic care and soft tissue therapy create the conditions for movement,
            rehab teaches the body how to use that new capacity. It&apos;s what makes the difference
            between short-term relief and long-term resilience.
          </p>
        </>
      }
      relatedConditions={CONDITIONS}
      faqs={[
        {
          q: "Do I need to be athletic to benefit from rehab?",
          a: "Not at all. Targeted rehab is scaled to your current ability level. Whether you're a high-level athlete or just starting to move more, your program is built for where you are.",
        },
        {
          q: "Will I get a home exercise program?",
          a: "Yes. You'll receive exercises to reinforce what we work on in-clinic. Home programs evolve as you progress.",
        },
        {
          q: "How is this different from physical therapy?",
          a: "Our rehab is integrated into your chiropractic care plan from day one — not treated as a separate program. It's progressive, gym-based, and focused on real-world movement outcomes.",
        },
        {
          q: "How long does rehab take?",
          a: "The duration depends on your condition, goals, and how your body responds. Some patients graduate in a few weeks, while others with complex presentations may continue longer.",
        },
      ]}
    />
  );
}
