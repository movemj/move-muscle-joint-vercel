'use client';

import type { Metadata } from "next";
import { ConditionPageTemplate } from '@/components/templates/condition-page-template';
import { SERVICES, CONDITIONS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: "Tension Headache Treatment in Overland Park, KS",
  description: "Get tension headache treatment in Overland Park, KS with chiropractic care, posture work, myofascial release therapy, and targeted rehab.",
};

export default function HeadachesTensionPage() {
  return (
    <ConditionPageTemplate
      title="Headaches & Tension"
      h1="Headache & Tension Treatment in Overland Park"
      breadcrumbLabel="Headaches & Tension"
      breadcrumbPath="/conditions/headaches-tension"
      introText={<>
        <p>Headache and tension treatment at Move Muscle & Joint in Overland Park addresses the musculoskeletal contributors to chronic headaches — including cervical joint dysfunction, myofascial tension, postural strain, and upper body movement deficits. Our integrated approach combines chiropractic care, soft tissue therapy, and corrective exercise for lasting relief.</p>
      </>}
      whatItIs={<>
        <p>Tension headaches and cervicogenic headaches are among the most common types seen in clinical practice. They originate from dysfunction in the cervical spine, suboccipital muscles, and upper trapezius — often driven by poor posture, stress, and repetitive strain.</p>
        <p>Unlike migraines, which are primarily neurological, tension and cervicogenic headaches respond well to manual therapy and movement-based treatment that addresses the structural triggers.</p>
      </>}
      symptoms={[
        "Dull, band-like pressure around the forehead or temples",
        "Pain at the base of the skull that radiates forward",
        "Neck stiffness accompanying headache episodes",
        "Increased frequency with stress or prolonged desk work",
        "Tender spots in the neck, shoulders, and upper back",
        "Headaches that improve with movement or position changes",
      ]}
      causes={<>
        <p>Tension and cervicogenic headaches are commonly driven by forward head posture, cervical joint restriction, suboccipital tightness, upper trapezius overactivity, thoracic stiffness, and poor breathing mechanics. Stress, poor sleep, and desk-based work compound these factors.</p>
      </>}
      howWeEvaluate={<>
        <p>Our headache evaluation includes cervical joint assessment, postural analysis, upper body movement screening, and palpation of the suboccipital, cervical, and thoracic musculature. We differentiate cervicogenic headaches from other types and identify the specific musculoskeletal drivers.</p>
      </>}
      treatmentApproach={<>
        <p>Treatment typically includes cervical and thoracic chiropractic adjustments, myofascial release for the suboccipitals, upper trapezius, and SCM, and targeted rehab to strengthen the deep neck flexors, improve thoracic mobility, and retrain postural awareness.</p>
        <p>By addressing the structural and muscular triggers alongside long-term movement correction, we help reduce headache frequency and severity sustainably.</p>
      </>}
      whyChooseMove={<>
        <p>Patients in Overland Park choose Move for headache treatment because we go beyond symptom management. Our approach identifies and treats the underlying musculoskeletal patterns that contribute to recurring headaches — and builds the strength and awareness to prevent them.</p>
      </>}
      relatedServices={SERVICES}
      relatedConditions={CONDITIONS.filter(c => ["Neck Pain", "Shoulder Pain"].includes(c.title))}
      faqs={[
        { q: "Can chiropractic care help with headaches?", a: "Yes. Cervicogenic and tension headaches are well-supported conditions for chiropractic care, especially when combined with soft tissue therapy and corrective exercise." },
        { q: "How do I know if my headache is cervicogenic?", a: "Cervicogenic headaches typically originate from the neck, are associated with neck stiffness, and may be triggered or worsened by neck movement or sustained positions." },
        { q: "How quickly will I notice improvement?", a: "Many patients notice a reduction in headache frequency and intensity within the first few sessions of integrated treatment." },
      ]}
    />
  );
}
