import type { Metadata } from "next";
import { ConditionPageTemplate } from "@/components/templates/condition-page-template";
import { SERVICES, CONDITIONS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Low Back Pain Treatment in Overland Park, KS | Move Muscle & Joint",
  description:
    "Low back pain treatment at Move Muscle & Joint is built around understanding why your back hurts through integrated chiropractic care, myofascial release therapy, and targeted rehab in Overland Park.",
  openGraph: {
    title: "Low Back Pain Treatment in Overland Park, KS | Move Muscle & Joint",
    description:
      "Low back pain treatment at Move Muscle & Joint is built around understanding why your back hurts through integrated chiropractic care, myofascial release therapy, and targeted rehab.",
    url: `${SITE.url}/conditions/low-back-pain`,
  },
};

export default function LowBackPainPage() {
  const relatedConditions = CONDITIONS.filter((c) =>
    ["Sciatica", "Hip Pain", "Sports Injuries"].includes(c.title)
  );

  return (
    <ConditionPageTemplate
      title="Low Back Pain"
      h1="Low Back Pain Treatment in Overland Park"
      breadcrumbLabel="Low Back Pain"
      breadcrumbPath="/conditions/low-back-pain"
      introText={
        <p>
          Low back pain treatment at Move Muscle & Joint in Overland Park is built around
          understanding why your back hurts — not just where. Through integrated chiropractic care,
          myofascial release therapy, and targeted rehab, we address the structural, muscular, and
          movement-based contributors to build lasting relief.
        </p>
      }
      whatItIs={
        <>
          <p>
            Low back pain is one of the most common reasons people seek care — and one of the most
            poorly managed. It can involve disc dysfunction, facet joint irritation, SI joint
            problems, muscular strain, or neural compression. Without a clear diagnosis and
            integrated treatment, it often becomes chronic and recurring.
          </p>
          <p>
            At Move, we treat low back pain as a movement problem — identifying the dysfunctions in
            hip mobility, core stability, lumbar mechanics, and loading patterns that keep the pain
            cycle going.
          </p>
        </>
      }
      symptoms={[
        "Dull aching or sharp pain in the lumbar region",
        "Stiffness that worsens after sitting or sleeping",
        "Pain with bending, lifting, or twisting",
        "Radiating symptoms into the buttock or leg",
        "Muscle spasms in the lower back",
        "Difficulty standing upright after prolonged positions",
      ]}
      causes={
        <>
          <p>
            Low back pain often develops from a combination of factors — poor hip mobility, weak
            core musculature, excessive lumbar extension or flexion, deconditioning, and repetitive
            loading without adequate recovery. Acute episodes may be triggered by lifting, prolonged
            sitting, or sudden movement.
          </p>
          <p>
            At Move, we look beyond the pain site. Our assessment examines the entire kinetic chain
            — hips, thoracic spine, pelvis, and core — to find the real drivers behind your back
            pain.
          </p>
        </>
      }
      howWeEvaluate={
        <p>
          Our low back pain evaluation includes segmental spinal assessment, hip mobility testing,
          core stability screening, neurological examination, and functional movement analysis. We
          determine which structures are involved and which movement patterns need to be addressed.
        </p>
      }
      treatmentApproach={
        <>
          <p>
            Treatment typically combines lumbar and pelvic chiropractic care, myofascial release for
            the hip flexors, glutes, and paraspinals, and progressive core rehabilitation. We
            address restriction, rebuild stability, and retrain movement — in that order.
          </p>
          <p>
            For persistent or complex cases, shockwave therapy may be incorporated to address
            chronic soft tissue dysfunction. The goal is always to progress from pain reduction to
            functional independence.
          </p>
        </>
      }
      whyChooseMove={
        <p>
          Patients in Overland Park choose Move for low back pain because we don&apos;t treat it as a
          simple spine problem. Our whole-body, movement-first approach identifies and resolves the
          full pattern — so the pain doesn&apos;t keep coming back.
        </p>
      }
      relatedServices={SERVICES}
      relatedConditions={relatedConditions}
      faqs={[
        {
          q: "Should I rest if my back hurts?",
          a: "Extended rest usually makes back pain worse. Gentle movement, guided by a professional assessment, is one of the best things you can do for low back pain recovery.",
        },
        {
          q: "How long does low back pain treatment take?",
          a: "Most patients see meaningful improvement within a few weeks. Chronic or complex cases may take longer, but our goal is always to move you toward independence efficiently.",
        },
        {
          q: "Will I need ongoing treatment?",
          a: "Our goal is to equip you with the tools to manage your back health independently. Most patients transition to self-directed maintenance after their active care phase.",
        },
      ]}
    />
  );
}
