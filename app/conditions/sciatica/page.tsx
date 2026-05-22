import type { Metadata } from "next";
import { ConditionPageTemplate } from "@/components/templates/condition-page-template";
import { SERVICES, CONDITIONS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sciatica Treatment in Overland Park",
  description:
    "Sciatica treatment in Overland Park, KS with chiropractic care, myofascial release therapy, mobility work, and targeted rehab.",
  alternates: {
    canonical: "/conditions/sciatica",
  },
  openGraph: {
    title: "Sciatica Treatment in Overland Park, KS | Move Muscle & Joint",
    description:
      "Sciatica treatment in Overland Park, KS with chiropractic care, myofascial release therapy, mobility work, and targeted rehab.",
    url: `${SITE.url}/conditions/sciatica`,
  },
};

export default function SciaticaPage() {
  const relatedConditions = CONDITIONS.filter((c) =>
    ["Low Back Pain", "Hip Pain", "Sports Injuries"].includes(c.title)
  );

  return (
    <ConditionPageTemplate
      title="Sciatica"
      h1="Sciatica Treatment in Overland Park"
      breadcrumbLabel="Sciatica"
      breadcrumbPath="/conditions/sciatica"
      introText={
        <p>
          Sciatica treatment at Move Muscle & Joint in Overland Park addresses the full picture —
          not just the pain running down your leg. Through integrated chiropractic care, myofascial
          release therapy, shockwave therapy, and targeted rehab, we identify what&apos;s compressing or
          irritating the sciatic nerve and build a plan to resolve it at the source.
        </p>
      }
      whatItIs={
        <>
          <p>
            Sciatica refers to pain that radiates along the path of the sciatic nerve, which runs
            from the lower back through the hips and down each leg. It&apos;s usually caused by
            compression or irritation of the nerve root in the lumbar spine — often from a herniated
            disc, spinal stenosis, or muscular tension in the glutes and piriformis.
          </p>
          <p>
            While the pain is felt in the leg, the cause is usually in the spine or hip complex.
            That&apos;s why effective treatment requires a thorough assessment of movement, posture, and
            spinal mechanics.
          </p>
        </>
      }
      symptoms={[
        "Radiating pain from the low back into the buttock and leg",
        "Numbness or tingling in the leg or foot",
        "Sharp, burning, or shooting pain with sitting or standing",
        "Weakness in the affected leg",
        "Pain that worsens with prolonged sitting or bending forward",
        "Difficulty walking or changing positions",
      ]}
      causes={
        <>
          <p>
            Sciatica often results from lumbar disc herniation, degenerative disc changes, spinal
            stenosis, or piriformis syndrome. But the deeper question is why the disc, joint, or
            muscle became compromised in the first place.
          </p>
          <p>
            At Move, we look at the movement patterns that contributed to nerve irritation — things
            like poor hip mobility, excessive lumbar flexion, weak core stabilization, and
            asymmetrical loading. By addressing these patterns alongside the acute condition, we
            create a more lasting resolution.
          </p>
        </>
      }
      howWeEvaluate={
        <p>
          Our evaluation begins with a detailed movement assessment, orthopedic testing, and
          neurological screening to determine the location and severity of nerve involvement. We
          evaluate lumbar spine mechanics, hip mobility, core stability, and gait to understand the
          contributing factors.
        </p>
      }
      treatmentApproach={
        <>
          <p>
            Sciatica treatment at Move may include spinal manipulation to restore lumbar joint
            mechanics, myofascial release therapy to address muscular tension in the glutes and hip
            rotators, and targeted rehab to strengthen the core and improve hip mobility.
          </p>
          <p>
            For patients with persistent symptoms, shockwave therapy may be used to address
            associated soft tissue dysfunction. Treatment is progressive — focused on pain reduction
            first, then movement retraining and strength building to prevent recurrence.
          </p>
        </>
      }
      whyChooseMove={
        <>
          <p>
            Patients in Overland Park choose Move for sciatica treatment because our approach goes
            beyond symptom management. We address the structural, muscular, and movement-based
            factors that contribute to sciatic nerve irritation — and we build a plan designed to
            keep it from coming back.
          </p>
          <p>
            Our integrated model means you receive chiropractic care, soft tissue work, and rehab in
            the same visit — without needing to coordinate between multiple providers.
          </p>
        </>
      }
      relatedServices={SERVICES}
      relatedConditions={relatedConditions}
      faqs={[
        {
          q: "How long does sciatica treatment take?",
          a: "Most patients begin to notice improvement within the first few visits. Full resolution depends on the severity and underlying cause, but our goal is always to progress you toward lasting relief as efficiently as possible.",
        },
        {
          q: "Can sciatica come back after treatment?",
          a: "Without addressing the underlying movement dysfunction, recurrence is common. That's why our treatment includes movement retraining and strengthening to reduce the risk of flare-ups.",
        },
        {
          q: "Do I need imaging before treatment?",
          a: "Not always. Most sciatica cases can be accurately diagnosed through clinical examination. If imaging is needed, we'll guide you through that process.",
        },
      ]}
    />
  );
}
