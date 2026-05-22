import type { Metadata } from "next";
import { ConditionPageTemplate } from '@/components/templates/condition-page-template';
import { SERVICES, CONDITIONS, SITE } from '@/lib/site-data';

export const metadata: Metadata = {
  title: "Hip Pain Treatment in Overland Park",
  description: "Hip pain treatment in Overland Park, KS using chiropractic care, mobility work, myofascial release therapy, and targeted rehab.",
  alternates: {
    canonical: "/conditions/hip-pain",
  },
  openGraph: {
    url: `${SITE.url}/conditions/hip-pain`,
  },
};

export default function HipPainPage() {
  return (
    <ConditionPageTemplate
      title="Hip Pain"
      h1="Hip Pain Treatment in Overland Park"
      breadcrumbLabel="Hip Pain"
      breadcrumbPath="/conditions/hip-pain"
      introText={<>
        <p>Hip pain treatment at Move Muscle & Joint in Overland Park addresses the structural, muscular, and movement-based factors contributing to hip dysfunction. Through integrated chiropractic care, myofascial release therapy, and targeted rehab, we restore hip mobility and build the strength to keep it.</p>
      </>}
      whatItIs={<>
        <p>Hip pain can involve the hip joint itself, the surrounding musculature (hip flexors, glutes, adductors), the labrum, or referred pain from the lumbar spine or SI joint. It may present as groin pain, lateral hip pain, deep joint stiffness, or difficulty with walking, sitting, and athletic movement.</p>
      </>}
      symptoms={[
        "Deep aching in the groin or front of the hip",
        "Lateral hip pain, especially when sleeping on the affected side",
        "Stiffness that worsens after sitting or driving",
        "Pain with squatting, lunging, or single-leg activities",
        "Difficulty crossing legs or putting on shoes",
        "Snapping or clicking sensations in the hip",
      ]}
      causes={<>
        <p>Hip pain frequently develops from hip flexor tightness, gluteal weakness, poor pelvic alignment, and repetitive loading patterns. Sedentary lifestyles, training errors, and lack of adequate hip mobility are common contributors.</p>
      </>}
      howWeEvaluate={<>
        <p>Our hip pain evaluation includes hip range of motion testing, SI joint assessment, lumbar screening, gluteal strength testing, and functional movement analysis. We determine whether the hip itself or a surrounding structure is the primary driver of your symptoms.</p>
      </>}
      treatmentApproach={<>
        <p>Treatment may include pelvic and hip chiropractic adjustments, myofascial release for the hip flexors, glutes, and adductors, and progressive hip rehab focused on gluteal strengthening, hip mobility, and functional loading patterns.</p>
      </>}
      whyChooseMove={<>
        <p>Patients in Overland Park choose Move for hip pain because we evaluate the hip as part of a system — including the lumbar spine, pelvis, and lower extremity. Our integrated treatment addresses all contributing factors under one roof.</p>
      </>}
      relatedServices={SERVICES}
      relatedConditions={CONDITIONS.filter(c => ["Low Back Pain", "Sciatica", "Knee Pain", "Sports Injuries"].includes(c.title))}
      faqs={[
        { q: "Is hip pain always from the hip?", a: "No. Hip pain can be referred from the lumbar spine or SI joint. Our assessment differentiates the source so treatment is directed appropriately." },
        { q: "Can hip pain be treated without surgery?", a: "Many hip conditions respond well to conservative care including chiropractic treatment, soft tissue therapy, and progressive rehab." },
      ]}
    />
  );
}
