import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { IMAGES, CONDITIONS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Shockwave Therapy in Overland Park | Move Muscle & Joint",
  description:
    "Accelerate healing for stubborn soft tissue conditions using focused acoustic wave technology at Move Muscle & Joint in Overland Park.",
  alternates: {
    canonical: "/services/shockwave-therapy",
  },
  openGraph: {
    title: "Shockwave Therapy in Overland Park | Move Muscle & Joint",
    description:
      "Accelerate healing for stubborn soft tissue conditions using focused acoustic wave technology.",
    url: `${SITE.url}/services/shockwave-therapy`,
  },
};

export default function ShockwaveTherapyPage() {
  const relatedConditions = CONDITIONS.filter((c) =>
    ["Plantar Fasciitis", "Knee Pain", "Shoulder Pain", "Hip Pain", "Sports Injuries"].includes(c.title)
  );

  return (
    <ServicePageTemplate
      title="Shockwave Therapy"
      h1="Shockwave Therapy in Overland Park"
      heroImage={IMAGES.shockwave}
      breadcrumbLabel="Shockwave Therapy"
      breadcrumbPath="/services/shockwave-therapy"
      introText={
        <>
          <p>
            Shockwave therapy at Move Muscle & Joint in Overland Park uses focused acoustic wave
            technology to accelerate healing in stubborn soft tissue conditions. When tendon pain,
            plantar fasciitis, or chronic tissue dysfunction hasn&apos;t responded to conventional
            treatment, shockwave therapy offers a non-invasive path forward.
          </p>
          <p>
            At Move, shockwave is never used in isolation. It&apos;s integrated with chiropractic care,
            myofascial release therapy, and targeted rehab to create a complete treatment approach.
          </p>
        </>
      }
      whatItIs={
        <>
          <p>
            Shockwave therapy — also known as extracorporeal shockwave therapy (ESWT) — delivers
            high-energy acoustic pulses to targeted areas of damaged or dysfunctional tissue. These
            pulses stimulate the body&apos;s natural healing response, increasing blood flow, breaking
            down calcification, and promoting tissue repair.
          </p>
          <p>
            It&apos;s an evidence-supported treatment for conditions involving tendons, fascia, and
            chronic soft tissue dysfunction — particularly when other approaches haven&apos;t delivered
            sufficient results.
          </p>
        </>
      }
      whoItHelps={
        <>
          <p>
            Shockwave therapy at Move is ideal for patients with persistent tendon-related pain,
            chronic soft tissue conditions, or conditions that have plateaued with other treatments.
            Common candidates include people dealing with plantar fasciitis, Achilles tendinopathy,
            tennis elbow, and similar conditions.
          </p>
          <p>
            Athletes, active adults, and patients in Overland Park looking for a non-invasive
            alternative to more aggressive interventions often benefit from shockwave as part of
            their integrated care plan.
          </p>
        </>
      }
      whatToExpect={
        <>
          <p>
            During a shockwave therapy session, your clinician applies the device directly to the
            treatment area. You may feel pressure and some discomfort during the session, but most
            patients tolerate it well. Sessions are typically short and are often followed by soft
            tissue work and corrective exercise.
          </p>
          <p>
            Most patients require a series of sessions spaced over several weeks for optimal
            results. Progress is tracked through your ongoing movement assessments.
          </p>
        </>
      }
      benefits={[
        "Accelerated tissue healing and repair",
        "Pain reduction for chronic conditions",
        "Non-invasive with no downtime",
        "Effective for tendon and fascia disorders",
        "Supports recovery when other treatments plateau",
        "Integrated with hands-on care and rehab",
      ]}
      moveMethodFit={
        <>
          <p>
            Shockwave therapy fits into the Move Method primarily during the pain reduction and
            alignment restoration stages. By addressing stubborn tissue dysfunction early, it
            creates a foundation for effective movement retraining and progressive loading.
          </p>
          <p>
            When combined with chiropractic care and targeted rehab, shockwave therapy accelerates
            the timeline from pain to performance — helping you move through the stages of recovery
            more efficiently.
          </p>
        </>
      }
      relatedConditions={relatedConditions}
      faqs={[
        {
          q: "Is shockwave therapy painful?",
          a: "Most patients experience some discomfort during treatment, but it is tolerable. Intensity is adjusted based on your feedback throughout the session.",
        },
        {
          q: "How many shockwave sessions will I need?",
          a: "Most protocols involve three to six sessions spaced about one week apart, though this varies based on the condition and your response to treatment.",
        },
        {
          q: "Is shockwave therapy covered by insurance?",
          a: "Coverage varies by plan. Contact your insurance provider with the specific CPT code for shockwave therapy to determine your benefits.",
        },
        {
          q: "What conditions respond best to shockwave?",
          a: "Plantar fasciitis, Achilles tendinopathy, tennis elbow, rotator cuff tendinopathy, and other chronic tendon and fascia conditions tend to respond well.",
        },
      ]}
    />
  );
}
