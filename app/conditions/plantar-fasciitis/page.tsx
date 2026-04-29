'use client';

import type { Metadata } from "next";
import { ConditionPageTemplate } from '@/components/templates/condition-page-template';
import { SERVICES, CONDITIONS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: "Plantar Fasciitis Treatment in Overland Park, KS",
  description: "Treat plantar fasciitis in Overland Park, KS with shockwave therapy, myofascial release therapy, mobility work, and targeted rehab.",
};

export default function PlantarFasciitisPage() {
  return (
    <ConditionPageTemplate
      title="Plantar Fasciitis"
      h1="Plantar Fasciitis Treatment in Overland Park"
      breadcrumbLabel="Plantar Fasciitis"
      breadcrumbPath="/conditions/plantar-fasciitis"
      introText={<>
        <p>Plantar fasciitis treatment at Move Muscle & Joint in Overland Park combines shockwave therapy, myofascial release, chiropractic care, and targeted rehab to address the full picture — from foot mechanics to calf mobility to lower extremity loading patterns.</p>
      </>}
      whatItIs={<>
        <p>Plantar fasciitis is inflammation and degeneration of the plantar fascia — the thick band of tissue that runs along the bottom of the foot. It&apos;s one of the most common causes of heel pain and can significantly limit walking, running, and daily activity.</p>
        <p>While it&apos;s often treated as a local foot problem, plantar fasciitis frequently reflects dysfunction in the calf, ankle, and lower extremity mechanics. Effective treatment addresses the foot and the chain above it.</p>
      </>}
      symptoms={[
        "Sharp heel pain, especially with first steps in the morning",
        "Pain that improves with movement but returns after rest",
        "Tenderness along the arch or heel",
        "Pain that worsens with prolonged standing or walking",
        "Stiffness in the calf and ankle",
        "Difficulty with running or impact activities",
      ]}
      causes={<>
        <p>Plantar fasciitis often develops from calf tightness, weak intrinsic foot muscles, excessive pronation, poor footwear, and sudden increases in loading or activity. Reduced ankle dorsiflexion is one of the most common contributing factors.</p>
      </>}
      howWeEvaluate={<>
        <p>Our evaluation includes foot and ankle assessment, calf flexibility testing, gait analysis, and lower extremity movement screening. We identify the biomechanical contributors to your plantar fascia stress and build a targeted treatment plan.</p>
      </>}
      treatmentApproach={<>
        <p>Treatment often includes shockwave therapy to stimulate healing in the plantar fascia, myofascial release for the calf and posterior chain, chiropractic adjustments for the foot and ankle, and progressive rehab to improve calf flexibility, foot strength, and loading tolerance.</p>
        <p>Shockwave therapy is particularly effective for plantar fasciitis and is a cornerstone of our treatment approach for this condition.</p>
      </>}
      whyChooseMove={<>
        <p>Patients in Overland Park choose Move for plantar fasciitis because we combine shockwave therapy with comprehensive foot and lower extremity rehabilitation. Our integrated approach addresses the tissue and the movement patterns that caused it.</p>
      </>}
      relatedServices={SERVICES}
      relatedConditions={CONDITIONS.filter(c => ["Knee Pain", "Hip Pain", "Sports Injuries"].includes(c.title))}
      faqs={[
        { q: "Is shockwave therapy effective for plantar fasciitis?", a: "Yes. Shockwave therapy is one of the most well-researched treatments for plantar fasciitis and is often effective when other approaches haven't provided relief." },
        { q: "How long does plantar fasciitis take to heal?", a: "With integrated treatment including shockwave therapy, most patients see significant improvement within four to eight weeks." },
        { q: "Do I need orthotics?", a: "Orthotics can be helpful in some cases, but our focus is on building foot strength and addressing the underlying mechanics. We'll recommend orthotics only if indicated." },
      ]}
    />
  );
}
