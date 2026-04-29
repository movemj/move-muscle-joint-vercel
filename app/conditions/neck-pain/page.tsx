import type { Metadata } from "next";
import { ConditionPageTemplate } from "@/components/templates/condition-page-template";
import { SERVICES, CONDITIONS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Neck Pain Treatment in Overland Park, KS | Move Muscle & Joint",
  description:
    "Neck pain treatment in Overland Park, KS with chiropractic care, posture work, myofascial release therapy, and targeted rehab.",
  openGraph: {
    title: "Neck Pain Treatment in Overland Park, KS | Move Muscle & Joint",
    description:
      "Neck pain treatment in Overland Park, KS with chiropractic care, posture work, myofascial release therapy, and targeted rehab.",
    url: `${SITE.url}/conditions/neck-pain`,
  },
};

export default function NeckPainPage() {
  const relatedConditions = CONDITIONS.filter((c) =>
    ["Headaches & Tension", "Shoulder Pain", "Low Back Pain"].includes(c.title)
  );

  return (
    <ConditionPageTemplate
      title="Neck Pain"
      h1="Neck Pain Treatment in Overland Park"
      breadcrumbLabel="Neck Pain"
      breadcrumbPath="/conditions/neck-pain"
      customHeadings={{
        whatItIs: "What Is Neck Pain?",
        symptoms: "Common Neck Pain Symptoms",
      }}
      introText={
        <p>
          Neck pain treatment at Move Muscle & Joint in Overland Park goes beyond temporary relief.
          We assess the full kinetic chain — from your cervical spine to your thoracic mobility,
          shoulder mechanics, and postural habits — to uncover what&apos;s driving your neck pain and
          build a lasting solution through integrated care.
        </p>
      }
      whatItIs={
        <>
          <p>
            Neck pain encompasses a range of conditions affecting the cervical spine, surrounding
            muscles, and associated nerves. It can present as local stiffness, radiating pain into
            the shoulders or arms, headaches, or restricted range of motion.
          </p>
          <p>
            While neck pain is one of the most common musculoskeletal complaints, the underlying
            cause varies widely — from postural strain and disc dysfunction to facet irritation and
            muscular tension. Effective treatment requires understanding your specific pattern.
          </p>
        </>
      }
      symptoms={[
        "Stiffness or restricted range of motion in the neck",
        "Pain radiating into the shoulder, arm, or upper back",
        "Headaches originating from the base of the skull",
        "Muscle tightness in the upper trapezius and levator scapulae",
        "Pain that worsens with prolonged desk work or screen time",
        "Grinding or clicking sensations with neck movement",
      ]}
      causes={
        <>
          <p>
            Neck pain often stems from prolonged poor posture, especially forward head position from
            desk work and device use. But it can also result from cervical disc dysfunction, facet
            joint irritation, thoracic stiffness, and weak deep neck flexors.
          </p>
          <p>
            At Move, we evaluate the broader movement context — including thoracic mobility,
            scapular control, and breathing mechanics — because neck pain is rarely isolated. It&apos;s
            often a symptom of dysfunction elsewhere in the chain.
          </p>
        </>
      }
      howWeEvaluate={
        <p>
          Our neck pain evaluation includes cervical range of motion testing, segmental joint
          assessment, neurological screening, postural analysis, and thoracic mobility assessment.
          We identify the specific structures involved and the movement patterns contributing to
          your symptoms.
        </p>
      }
      treatmentApproach={
        <>
          <p>
            Treatment may include cervical and thoracic chiropractic adjustments, myofascial release
            for the upper trapezius, suboccipitals, and scalenes, and targeted rehab to strengthen
            the deep cervical flexors and improve scapular stability.
          </p>
          <p>
            For chronic or stubborn presentations, shockwave therapy may be used to address
            associated soft tissue dysfunction. Our goal is to restore pain-free mobility and build
            the strength and awareness to maintain it long-term.
          </p>
        </>
      }
      whyChooseMove={
        <p>
          Patients in Overland Park choose Move for neck pain because we look beyond the neck
          itself. Our whole-body movement assessment identifies the underlying contributors — and
          our integrated treatment model addresses all of them under one roof.
        </p>
      }
      relatedServices={SERVICES}
      relatedConditions={relatedConditions}
      faqs={[
        {
          q: "Can neck pain cause headaches?",
          a: "Yes. Cervicogenic headaches originate from the neck and are a common presentation we treat at Move through a combination of manual therapy and corrective exercise.",
        },
        {
          q: "Is it safe to have my neck adjusted?",
          a: "Chiropractic adjustments to the cervical spine are well-researched and considered safe when performed by a trained clinician based on thorough assessment.",
        },
        {
          q: "How long does neck pain treatment take?",
          a: "Many patients experience significant improvement within a few weeks of integrated care. Duration depends on the chronicity and complexity of your condition.",
        },
      ]}
    />
  );
}
