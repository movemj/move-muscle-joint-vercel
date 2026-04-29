'use client';

import type { Metadata } from "next";
import { ConditionPageTemplate } from '@/components/templates/condition-page-template';
import { SERVICES, CONDITIONS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: "Knee Pain Treatment in Overland Park, KS | Chiropractic Care",
  description: "Find knee pain treatment in Overland Park, KS with chiropractic care, movement retraining, myofascial release therapy, and rehab.",
};

export default function KneePainPage() {
  return (
    <ConditionPageTemplate
      title="Knee Pain"
      h1="Knee Pain Treatment in Overland Park"
      breadcrumbLabel="Knee Pain"
      breadcrumbPath="/conditions/knee-pain"
      introText={<>
        <p>Knee pain treatment at Move Muscle & Joint in Overland Park goes beyond the knee. We evaluate hip mechanics, ankle mobility, and lower extremity strength to find the movement dysfunctions that are stressing your knee — then build an integrated treatment plan to resolve them.</p>
      </>}
      whatItIs={<>
        <p>Knee pain can involve the patellofemoral joint, meniscus, ligaments, tendons, or surrounding soft tissue. It may present as pain with squatting, stairs, running, or simply walking. Because the knee sits between the hip and ankle, it&apos;s often the victim — not the cause — of dysfunction above or below.</p>
      </>}
      symptoms={[
        "Pain with squatting, lunging, or stairs",
        "Swelling or stiffness around the knee",
        "Clicking, locking, or giving way",
        "Pain during or after running or walking",
        "Difficulty kneeling or sitting cross-legged",
        "Pain that worsens with impact or loading",
      ]}
      causes={<>
        <p>Knee pain often results from hip weakness, poor ankle mobility, faulty landing mechanics, muscle imbalances, and overuse without adequate recovery. Training errors, sudden increases in activity, and lack of strength are common contributors.</p>
      </>}
      howWeEvaluate={<>
        <p>Our knee pain evaluation includes joint assessment, hip and ankle mobility testing, lower extremity strength screening, gait analysis, and functional movement evaluation. We look at the full chain to understand why the knee is being stressed.</p>
      </>}
      treatmentApproach={<>
        <p>Treatment may include chiropractic adjustments for the knee, hip, and pelvis, myofascial release for the quadriceps, IT band, and calf, and progressive lower extremity rehab focused on hip strengthening, single-leg stability, and proper loading mechanics.</p>
        <p>For tendon-related knee conditions like patellar tendinopathy, shockwave therapy may be incorporated to support tissue healing.</p>
      </>}
      whyChooseMove={<>
        <p>Patients in Overland Park choose Move for knee pain because we treat the whole lower extremity — not just the knee. Our integrated model addresses the hip, ankle, and muscle imbalances that are driving your symptoms.</p>
      </>}
      relatedServices={SERVICES}
      relatedConditions={CONDITIONS.filter(c => ["Hip Pain", "Plantar Fasciitis", "Sports Injuries"].includes(c.title))}
      faqs={[
        { q: "Can I still run with knee pain?", a: "It depends on the cause and severity. Our assessment will help determine what activities are safe and what modifications may be needed during recovery." },
        { q: "Do I need a brace for knee pain?", a: "Braces provide temporary support but don't address the underlying cause. Our focus is on building the strength and mechanics that eliminate the need for external support." },
      ]}
    />
  );
}
