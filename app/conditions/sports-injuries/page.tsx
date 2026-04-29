'use client';

import type { Metadata } from "next";
import { ConditionPageTemplate } from '@/components/templates/condition-page-template';
import { SERVICES, CONDITIONS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: "Sports Injury Treatment in Overland Park, KS | Chiropractic Care",
  description: "Sports injury treatment in Overland Park, KS with chiropractic care, shockwave therapy, myofascial release therapy, and rehab.",
};

export default function SportsInjuriesPage() {
  return (
    <ConditionPageTemplate
      title="Sports Injuries"
      h1="Sports Injury Treatment in Overland Park"
      breadcrumbLabel="Sports Injuries"
      breadcrumbPath="/conditions/sports-injuries"
      customHeadings={{
        whatItIs: "What Are Sports Injuries?",
        symptoms: "Common Sports Injury Symptoms",
      }}
      introText={<>
        <p>Sports injury treatment at Move Muscle & Joint in Overland Park is designed to help athletes and active adults recover fully, rebuild strength, and return to their sport with confidence. Our integrated care model combines chiropractic treatment, myofascial release therapy, shockwave therapy, and progressive rehab to address both the injury and the movement patterns that contributed to it.</p>
      </>}
      whatItIs={<>
        <p>Sports injuries encompass a wide range of musculoskeletal conditions — from acute strains and sprains to chronic tendinopathy, overuse injuries, and post-surgical rehabilitation needs. They can affect any joint, muscle, tendon, or ligament in the body.</p>
        <p>What defines a sports injury isn&apos;t always the severity — it&apos;s the demand to return to a high level of physical function. That requires treatment that goes beyond pain relief and into movement retraining and performance recovery.</p>
      </>}
      symptoms={[
        "Acute pain following an impact, twist, or overexertion",
        "Swelling, bruising, or visible deformity",
        "Loss of strength or range of motion",
        "Persistent pain with sport-specific movements",
        "Recurring injuries in the same area",
        "Reduced confidence in athletic movement",
      ]}
      causes={<>
        <p>Sports injuries result from acute trauma, overuse, training errors, inadequate recovery, and underlying movement dysfunctions. Poor mobility, weak stabilizers, and asymmetrical loading patterns increase injury risk significantly.</p>
      </>}
      howWeEvaluate={<>
        <p>Our sports injury evaluation includes a thorough assessment of the injured area, functional movement screening, sport-specific testing, and evaluation of contributing factors like mobility deficits, strength imbalances, and biomechanical inefficiencies.</p>
      </>}
      treatmentApproach={<>
        <p>Treatment is progressive and goal-oriented. We begin with pain management through chiropractic care and soft tissue therapy, then progress through movement retraining and sport-specific strengthening. Shockwave therapy may be used for tendon injuries and chronic soft tissue conditions.</p>
        <p>Our gym-based clinic allows us to replicate real-world demands during rehab — from single-leg work to plyometrics to rotational loading — so you return to your sport prepared, not just pain-free.</p>
      </>}
      whyChooseMove={<>
        <p>Athletes and active adults in Overland Park choose Move because we understand that returning to sport requires more than symptom management. Our integrated approach rebuilds the full movement pattern — addressing the injury, the underlying dysfunction, and the path back to performance.</p>
      </>}
      relatedServices={SERVICES}
      relatedConditions={CONDITIONS.filter(c => !["Sports Injuries"].includes(c.title))}
      faqs={[
        { q: "How soon can I return to my sport?", a: "Return-to-sport timelines vary based on the injury and your goals. We use progressive benchmarks to ensure you return safely and with full confidence." },
        { q: "Do you work with competitive athletes?", a: "Yes. We work with athletes at all levels — from recreational to competitive. Our treatment is scaled to your goals and demands." },
        { q: "Can you help prevent future injuries?", a: "Absolutely. Our rehab programs address the underlying risk factors and movement deficits that predispose you to injury." },
      ]}
    />
  );
}
