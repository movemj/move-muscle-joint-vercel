import type { Metadata } from "next";
import Link from "next/link";
import { ConditionPageTemplate } from "@/components/templates/condition-page-template";
import { SERVICES, CONDITIONS, SITE } from "@/lib/site-data";

const title = "Sports Injury Relief in Overland Park";
const description = "Sports injury relief in Overland Park with movement-focused chiropractic care, myofascial release therapy, and progressive rehab for active adults.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/conditions/sports-injuries" },
  openGraph: { title, description, url: `${SITE.url}/conditions/sports-injuries` },
  twitter: { card: "summary_large_image", title, description },
};

export default function SportsInjuriesPage() {
  return (
    <ConditionPageTemplate
      title="Sports Injuries"
      h1="Sports Injury Treatment in Overland Park"
      breadcrumbLabel="Sports Injuries"
      breadcrumbPath="/conditions/sports-injuries"
      introText={
        <>
          <p>Sports injury treatment at Move Muscle & Joint in Overland Park is built for active adults, recreational athletes, and competitive performers who want to recover well and return with confidence. We assess the whole movement system instead of focusing only on the painful spot.</p>
          <p>Whether you are dealing with a new strain, recurring tendon pain, or an injury that has changed how you move, our integrated approach combines chiropractic care, myofascial release therapy, and targeted rehab around your goals. Learn more about our <Link href="/sports-chiropractor-overland-park" className="font-medium text-navy underline underline-offset-2">sports chiropractor in Overland Park</Link> approach.</p>
        </>
      }
      whatItIs={
        <>
          <p>Sports injuries include sprains, strains, tendinopathy, joint irritation, muscle pulls, and overuse problems. They may happen during a single event or build gradually when training load, recovery, mobility, and strength are out of balance.</p>
          <p>A strong recovery plan identifies the tissue involved, the reason it was overloaded, and the capacity you need to rebuild before returning to full activity.</p>
        </>
      }
      symptoms={["Pain during running, lifting, jumping, or cutting", "Swelling, bruising, or tenderness after an injury", "Reduced strength, mobility, or confidence", "Recurring pain during training", "Compensation in nearby joints or muscles", "Difficulty returning to your usual sport or activity"]}
      causes={<>
        <p>Sports injuries can result from a collision, awkward landing, sudden change of direction, excessive training volume, or a lack of strength and control. Sleep, recovery, footwear, technique, and rapid increases in workload can also affect tissue tolerance.</p>
        <p>We look at these contributing factors so care addresses both the current symptoms and the pattern that made the injury likely.</p>
      </>}
      howWeEvaluate={<p>Our assessment includes injury history, joint and tissue testing, range of motion, strength, balance, gait or sport-specific movement, and a review of your current training demands. We identify what is safe now and what needs to improve before progression.</p>}
      treatmentApproach={<>
        <p>Treatment may include chiropractic care to restore joint motion, myofascial release for restricted muscle and connective tissue, and progressive exercises for strength, control, and confidence. Your plan changes as your capacity improves.</p>
        <p>For persistent tendon or myofascial release therapy symptoms, shockwave therapy may be considered when clinically appropriate. We coordinate each intervention around a clear return-to-activity plan.</p>
      </>}
      whyChooseMove={<p>Active patients in Overland Park choose Move because recovery is more than reducing pain. Dr. Joseph Hugunin combines hands-on care with movement retraining so you can understand your injury, rebuild capacity, and return to the activities that matter to you.</p>}
      relatedServices={SERVICES}
      relatedConditions={CONDITIONS.filter((c) => ["Knee Pain", "Hip Pain", "Shoulder Pain", "Plantar Fasciitis"].includes(c.title))}
      faqs={[
        { q: "When should I get a sports injury assessed?", a: "Get assessed when pain, swelling, weakness, or loss of function changes how you move, or when symptoms are not improving as expected." },
        { q: "Can I keep training while an injury heals?", a: "Often, yes, with the right modifications. We help you identify safe ways to maintain activity while restoring the injured tissue's capacity." },
        { q: "How do I prevent the injury from returning?", a: "A gradual return, appropriate strength and mobility work, and a realistic training and recovery plan reduce the chance of recurrence." },
      ]}
    />
  );
}
