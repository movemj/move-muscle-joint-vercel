import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { IMAGES, CONDITIONS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Myofascial Release Therapy in Overland Park | Move Muscle & Joint",
  description:
    "Release chronic tension, improve tissue mobility, and support recovery through targeted hands-on soft tissue work at Move Muscle & Joint in Overland Park.",
  openGraph: {
    title: "Myofascial Release Therapy in Overland Park | Move Muscle & Joint",
    description:
      "Release chronic tension, improve tissue mobility, and support recovery through targeted hands-on soft tissue work.",
    url: `${SITE.url}/services/myofascial-release-therapy`,
  },
};

export default function MyofascialReleasePage() {
  const relatedConditions = CONDITIONS.filter((c) =>
    ["Neck Pain", "Low Back Pain", "Shoulder Pain", "Hip Pain", "Headaches & Tension", "Sports Injuries"].includes(
      c.title
    )
  );

  return (
    <ServicePageTemplate
      title="Myofascial Release Therapy"
      h1="Myofascial Release Therapy in Overland Park"
      heroImage={IMAGES.myofascial}
      breadcrumbLabel="Myofascial Release Therapy"
      breadcrumbPath="/services/myofascial-release-therapy"
      introText={
        <>
          <p>
            Myofascial release therapy at Move Muscle & Joint in Overland Park targets the soft
            tissue restrictions that limit how your body moves. Through skilled hands-on techniques,
            we address chronic tension, adhesions, and fascial tightness to restore tissue mobility
            and support long-term recovery.
          </p>
          <p>
            This isn&apos;t a spa massage. It&apos;s a clinical, targeted approach to soft tissue dysfunction
            — integrated into your broader care plan alongside chiropractic treatment and
            movement-based rehab.
          </p>
        </>
      }
      whatItIs={
        <>
          <p>
            Myofascial release therapy is a form of manual therapy that applies sustained pressure
            to connective tissue restrictions. It targets the fascia — the web of tissue that
            surrounds and connects muscles, joints, and organs — to reduce tension, improve
            circulation, and restore tissue extensibility.
          </p>
          <p>
            At Move, myofascial release is used strategically as part of an integrated approach.
            When combined with chiropractic adjustments and corrective exercise, it helps create
            more lasting improvements in mobility and function.
          </p>
        </>
      }
      whoItHelps={
        <>
          <p>
            Myofascial release therapy is ideal for patients dealing with chronic tightness,
            recurring muscle tension, restricted range of motion, or soft tissue pain that hasn&apos;t
            responded to stretching alone.
          </p>
          <p>
            Whether you&apos;re a runner with persistent calf tightness, a desk worker with shoulder
            tension, or an athlete recovering from overuse, myofascial release at Move addresses the
            tissue-level restrictions that hold back your progress.
          </p>
        </>
      }
      whatToExpect={
        <>
          <p>
            During a myofascial release session, your clinician will use hands-on pressure and
            specific techniques to identify and treat areas of restriction. Treatment is guided by
            your movement assessment and may focus on different areas than where you feel pain —
            because fascial restrictions often refer symptoms elsewhere.
          </p>
          <p>
            Sessions may also include instrument-assisted techniques and are often followed by
            movement retraining to reinforce the changes made during treatment.
          </p>
        </>
      }
      benefits={[
        "Reduced chronic muscle tension",
        "Improved tissue mobility and flexibility",
        "Better recovery from physical activity",
        "Enhanced circulation and tissue healing",
        "Support for joint mobility improvements",
        "Integrated with chiropractic and rehab care",
      ]}
      moveMethodFit={
        <>
          <p>
            Myofascial release therapy supports the Move Method by addressing the soft tissue layer
            of dysfunction. While chiropractic care restores joint position, soft tissue work
            ensures the muscles and fascia can support that improved alignment.
          </p>
          <p>
            As you progress through the stages of care, myofascial release helps prepare the body
            for movement retraining and strength building — creating a more complete and durable
            recovery.
          </p>
        </>
      }
      relatedConditions={relatedConditions}
      faqs={[
        {
          q: "Is myofascial release therapy painful?",
          a: "Some pressure is applied to restricted areas, which may cause mild discomfort. Your clinician adjusts technique and pressure based on your tolerance and feedback.",
        },
        {
          q: "How is this different from massage?",
          a: "Myofascial release is a clinical treatment targeting fascial restrictions and tissue dysfunction. It's assessment-driven and integrated with your broader care plan.",
        },
        {
          q: "How many sessions will I need?",
          a: "It depends on the severity and chronicity of your soft tissue restrictions. Most patients see improvement within a few sessions when combined with corrective exercise.",
        },
      ]}
    />
  );
}
