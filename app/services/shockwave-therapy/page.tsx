import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { IMAGES, CONDITIONS, SITE } from "@/lib/site-data";

const shockwaveTitle = "Shockwave Therapy in Overland Park, KS | Move Muscle & Joint";
const shockwaveDescription =
  "Shockwave therapy in Overland Park for persistent tendon and fascia concerns, also called acoustic wave therapy or ESWT, with movement-focused care.";

export const metadata: Metadata = {
  title: { absolute: shockwaveTitle },
  description: shockwaveDescription,
  twitter: {
    card: "summary_large_image",
    title: shockwaveTitle,
    description: shockwaveDescription,
  },
  alternates: {
    canonical: "/services/shockwave-therapy",
  },
  openGraph: {
    title: shockwaveTitle,
    description: shockwaveDescription,
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
            Shockwave therapy at Move Muscle & Joint in Overland Park, also called acoustic wave therapy or ESWT, uses acoustic pulses as part of care for persistent tendon and fascia concerns. When tendon pain, plantar fasciitis, or chronic tissue dysfunction hasn&apos;t responded to conventional treatment, shockwave therapy may be considered alongside a broader movement plan.
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
            Shockwave therapy, also called acoustic wave therapy or ESWT, uses a STORZ MEDICAL shockwave therapy device to deliver acoustic pulses to a targeted area. {/* [CONFIRM: model name] */}
          </p>
          <p>
            Shockwave therapy — also known as extracorporeal shockwave therapy (ESWT) — delivers
            acoustic pulses to a targeted area. Your clinician explains what the session involves and
            adjusts the approach based on the area being treated and your feedback.
          </p>
          <p>
            It may be considered for conditions involving tendons and fascia as part of a plan that
            can also include chiropractic care, myofascial release therapy, and targeted rehab.
          </p>
        </>
      }
      whoItHelps={
        <>
          <p>
            Shockwave therapy at Move is ideal for patients with persistent tendon-related pain,
            chronic myofascial release therapy conditions, or conditions that have plateaued with other treatments.
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
            treatment area.             You may feel pressure and some discomfort during the session, but most patients tolerate it well. Sessions are typically short and may be followed by myofascial release therapy and corrective exercise.
          </p>
          <p>
            The number and spacing of visits depend on your presentation and care plan. Progress is tracked through ongoing movement assessments.
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
      testimonialId="kyle-f"
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
          q: "Is shockwave therapy extra?",
          a: "Shockwave is part of our $80-and-up visits when it's recommended for you. It isn't included in the $49 first visit or the $50 visits, and there is no separate per-session add-on.",
        },
        {
          q: "What conditions respond best to shockwave?",
          a: "Plantar fasciitis, Achilles tendinopathy, tennis elbow, rotator cuff tendinopathy, and other chronic tendon and fascia conditions tend to respond well.",
        },
      ]}
    />
  );
}
