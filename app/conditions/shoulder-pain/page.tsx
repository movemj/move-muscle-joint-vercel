'use client';

import type { Metadata } from "next";
import { ConditionPageTemplate } from '@/components/templates/condition-page-template';
import { SERVICES, CONDITIONS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: "Shoulder Pain Relief in Overland Park, KS | Chiropractic Care",
  description: "Shoulder pain relief in Overland Park, KS with chiropractic care, mobility work, myofascial release therapy, and targeted rehab.",
};

export default function ShoulderPainPage() {
  return (
    <ConditionPageTemplate
      title="Shoulder Pain"
      h1="Shoulder Pain Treatment in Overland Park"
      breadcrumbLabel="Shoulder Pain"
      breadcrumbPath="/conditions/shoulder-pain"
      introText={<>
        <p>Shoulder pain treatment at Move Muscle & Joint in Overland Park looks beyond the shoulder itself. We evaluate the entire upper body kinetic chain — cervical spine, thoracic mobility, scapular mechanics, and rotator cuff function — to uncover what&apos;s actually limiting your shoulder and build an integrated treatment plan.</p>
      </>}
      whatItIs={<>
        <p>Shoulder pain can involve the rotator cuff, labrum, biceps tendon, AC joint, or the muscles and fascia surrounding the shoulder girdle. It may present as pain with overhead movement, clicking, weakness, or restricted range of motion.</p>
        <p>The shoulder is one of the most mobile joints in the body, which also makes it one of the most vulnerable. Effective treatment requires understanding not just which structure is involved, but why it&apos;s being stressed.</p>
      </>}
      symptoms={[
        "Pain with overhead reaching or lifting",
        "Weakness or instability in the shoulder",
        "Clicking, popping, or catching sensations",
        "Pain at night, especially when lying on the affected side",
        "Restricted range of motion",
        "Pain radiating from the shoulder to the arm",
      ]}
      causes={<>
        <p>Shoulder pain often develops from poor scapular mechanics, thoracic stiffness, rotator cuff weakness, and repetitive overhead loading without adequate stability. Desk work, training errors, and lack of mobility contribute to impingement, tendinopathy, and strain.</p>
      </>}
      howWeEvaluate={<>
        <p>Our shoulder evaluation includes range of motion testing, rotator cuff assessment, scapular movement analysis, cervical and thoracic screening, and functional movement testing. We pinpoint the source of dysfunction and the patterns contributing to it.</p>
      </>}
      treatmentApproach={<>
        <p>Treatment may include thoracic and cervical chiropractic adjustments, myofascial release for the rotator cuff and periscapular muscles, and progressive shoulder rehab focused on scapular stability, rotator cuff strengthening, and functional loading.</p>
        <p>For tendon-related shoulder conditions, shockwave therapy may be incorporated to accelerate tissue healing. Every plan is personalized based on your assessment findings.</p>
      </>}
      whyChooseMove={<>
        <p>Patients in Overland Park choose Move for shoulder pain because we evaluate the entire system — not just the painful joint. Our integrated approach addresses the thoracic spine, scapula, and shoulder together for more complete and lasting improvement.</p>
      </>}
      relatedServices={SERVICES}
      relatedConditions={CONDITIONS.filter(c => ["Neck Pain", "Sports Injuries", "Headaches & Tension"].includes(c.title))}
      faqs={[
        { q: "Do I need imaging for shoulder pain?", a: "Not always. Many shoulder conditions can be accurately assessed clinically. If imaging is indicated, we'll guide you through the process." },
        { q: "Can I still exercise with shoulder pain?", a: "Often, yes — with modifications. Part of our treatment includes helping you stay active safely while your shoulder heals." },
      ]}
    />
  );
}
