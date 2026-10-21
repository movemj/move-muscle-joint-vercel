import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { IMAGES, CONDITIONS, SITE } from "@/lib/site-data";

const shockwaveTitle = "Shockwave Therapy in Overland Park, KS | Move Muscle & Joint";
const shockwaveDescription =
  "Shockwave therapy in Overland Park for persistent tendon and fascia concerns, also called acoustic wave therapy or ESWT, with movement-focused care.";

export const metadata: Metadata = {
  title: { absolute: shockwaveTitle },
  description: shockwaveDescription,
  twitter: { card: "summary_large_image", title: shockwaveTitle, description: shockwaveDescription },
  alternates: { canonical: "/services/shockwave-therapy" },
  openGraph: { title: shockwaveTitle, description: shockwaveDescription, url: `${SITE.url}/services/shockwave-therapy` },
};

export default function ShockwaveTherapyPage() {
  const relatedConditions = CONDITIONS.filter((c) =>
    ["Plantar Fasciitis", "Knee Pain", "Shoulder Pain", "Hip Pain", "Sports Injuries"].includes(c.title),
  );

  return (
    <ServicePageTemplate
      title="Shockwave Therapy"
      h1="Shockwave Therapy in Overland Park"
      heroImage={IMAGES.shockwave}
      breadcrumbLabel="Shockwave Therapy"
      breadcrumbPath="/services/shockwave-therapy"
      introText={
        <>
          <p>
            Shockwave therapy at Move Muscle &amp; Joint in Overland Park, also called acoustic wave therapy or ESWT, is a non-invasive option for persistent tendon and fascia concerns. Extracorporeal shockwave therapy (ESWT) may be considered when a focused movement plan needs another tool, not as a replacement for a careful assessment. Research on acoustic wave therapy is condition-specific: some studies report improvements in pain or function, while evidence varies by diagnosis, protocol, and follow-up period.
          </p>
          <p>
            We pair shockwave therapy with chiropractic care, myofascial release therapy, and targeted rehab. The goal is to understand how you move, discuss reasonable options, and choose care that fits your presentation. A visit may involve acoustic wave therapy or ESWT only when it is recommended after assessment.
          </p>
        </>
      }
      whatItIs={
        <>
          <h2 className="text-2xl font-bold text-charcoal">Shockwave therapy, also called acoustic wave therapy or ESWT</h2>
          <p>
            Shockwave therapy uses mechanical acoustic pulses applied to a selected area. It is also called acoustic wave therapy, ESWT, or extracorporeal shockwave therapy (ESWT). We use a STORZ MEDICAL shockwave therapy device. {/* [CONFIRM: model name] */} Your clinician explains the sensation, checks your feedback, and adjusts the session to the area and your tolerance.
          </p>
          <p>
            Acoustic wave therapy does not mean the same thing for every condition. Extracorporeal shockwave therapy (ESWT) protocols can differ in energy, frequency, treatment location, and number of visits. We discuss what the available evidence does and does not show rather than promising a particular result.
          </p>
          <p>
            For background reading, see the <a className="text-navy underline" href="https://pubmed.ncbi.nlm.nih.gov/33298373/" rel="noreferrer">PubMed review of extracorporeal shockwave therapy (ESWT)</a>, the <a className="text-navy underline" href="https://pubmed.ncbi.nlm.nih.gov/30884882/" rel="noreferrer">PubMed review of shockwave therapy for plantar fasciitis</a>, and the <a className="text-navy underline" href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010389.pub2/full" rel="noreferrer">Cochrane review of shockwave therapy for tendinopathy</a>. These sources describe mixed, diagnosis-dependent evidence; they do not establish that acoustic wave therapy works for every person or every pain complaint.
          </p>
        </>
      }
      whoItHelps={
        <>
          <p>
            Shockwave therapy may be discussed with runners managing persistent plantar fascia, Achilles, or calf concerns; lifters working through tendon irritation related to loading; golfers dealing with elbow or shoulder symptoms; and pickleball players with recurring elbow, knee, or shoulder complaints. It may also be relevant for desk workers with a persistent tendon or fascia issue that has not settled with basic changes. These groups are examples, not a diagnosis. Extracorporeal shockwave therapy (ESWT) is considered only after your history and movement are reviewed.
          </p>
          <p>
            The visit is still about the whole movement problem. Acoustic wave therapy or ESWT may be one part of care alongside load modification, myofascial release therapy, mobility work, and targeted rehab. We will talk through alternatives when shockwave therapy is not a reasonable fit.
          </p>
          <p>
            For a runner, that might mean discussing weekly mileage, footwear, hills, and how the foot or calf handles load. A lifter may need to review technique, volume, and the difference between training soreness and a persistent tendon complaint. Golfers and pickleball players may benefit from looking at the repeated swings, reaches, and recovery demands that keep symptoms active. A desk worker may need a plan that fits short movement breaks and gradual return to regular activity. These details help us decide whether acoustic wave therapy belongs in the plan and how to pair it with exercises you can use outside the clinic.
          </p>
          <p>
            We also explain what you may feel during extracorporeal shockwave therapy (ESWT), how to communicate during treatment, and what changes would prompt a follow-up conversation. The intent is a clear, shared plan: understand the working problem, choose an appropriate tool, and keep building capacity through movement rather than relying on a passive session alone.
          </p>
        </>
      }
      whatToExpect={
        <>
          <h2 className="text-2xl font-bold text-charcoal">What a visit looks like, step by step</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li><strong>Discuss:</strong> We review your symptoms, activity, training or work demands, medical history, and what you have already tried.</li>
            <li><strong>Assess:</strong> Your clinician observes relevant movement and examines the area so the plan is based on more than a symptom location.</li>
            <li><strong>Plan:</strong> We explain whether shockwave therapy, acoustic wave therapy, extracorporeal shockwave therapy (ESWT), or another option makes sense, including expected sensations and alternatives.</li>
            <li><strong>Treat:</strong> If recommended, acoustic pulses are applied to the selected area. You can give feedback throughout the session.</li>
            <li><strong>Build forward:</strong> We may pair ESWT with myofascial release therapy, exercise, and a practical plan for loading or modifying activity between visits.</li>
            <li><strong>Review:</strong> We discuss follow-up, what to monitor, and when to contact us with questions.</li>
          </ol>
          <p>
            Sessions are planned around your presentation rather than a fixed promise. Some people may need a short course; others may be directed toward different care. Progress is reviewed through symptoms, function, and movement, not through a guarantee of a specific outcome.
          </p>
        </>
      }
      benefits={["Non-invasive treatment option", "Movement-informed care", "Integrated with hands-on care and rehab", "Supports a progressive loading plan", "Short, clinician-guided sessions", "Care adjusted to your feedback"]}
      moveMethodFit={
        <>
          <p>
            Shockwave therapy can fit into the Move Method when a persistent tendon or fascia concern is limiting movement. Extracorporeal shockwave therapy (ESWT), acoustic wave therapy, and ESWT are tools within a broader plan, not the plan by themselves. We connect the session to mobility, strength, and activity decisions.
          </p>
          <p>
            The care plan may include chiropractic treatment, myofascial release therapy, and targeted rehab. We use follow-up visits to review how you are moving and whether the next step should be acoustic wave therapy, exercise progression, or another approach.
          </p>
        </>
      }
      relatedConditions={relatedConditions}
      testimonialId="kyle-f"
      faqs={[
        { q: "Is shockwave therapy painful?", a: "Most patients feel pressure or tapping and some discomfort during treatment. Intensity is adjusted based on your feedback throughout the session." },
        { q: "How many shockwave sessions will I need?", a: "A typical care plan is 3 to 6 visits, depending on the person, your condition, goals, and response. We will discuss the appropriate plan after assessment." },
          { q: "Do I need a referral?", a: "No referral is needed to book. You can schedule directly through our online scheduling system." },
        { q: "Is shockwave therapy extra?", a: "Shockwave is part of our $80-and-up visits when it's recommended for you. It isn't included in the $49 first visit or the $50 visits, and there is no separate per-session add-on." },
        { q: "What conditions respond best to shockwave?", a: "Shockwave therapy may be considered for some persistent tendon and fascia concerns, including plantar fascia, Achilles, elbow, and shoulder presentations. Evidence and response vary by condition." },
        { q: "What is shockwave therapy?", a: "Shockwave therapy uses mechanical acoustic pulses applied to a selected area. It is also called acoustic wave therapy, ESWT, or extracorporeal shockwave therapy (ESWT), and it is considered as part of an individualized plan." },
        { q: "Is shockwave therapy the same as acoustic wave therapy?", a: "The terms are often used for related acoustic pulse treatments. We discuss the specific device, protocol, condition, and evidence rather than assuming every treatment is identical." },
        { q: "Who should not have shockwave therapy?", a: "Tell us before treatment if you are pregnant, have a pacemaker or implanted device, a bleeding disorder or take blood thinners, or have an infection or open wound over the area. We review your history at your first visit and will tell you if this care is not right for you. Seek urgent care for severe or rapidly worsening symptoms, significant swelling, chest pain, trouble breathing, or another emergency." },
        { q: "Is your shockwave the same as SoftWave?", a: "SoftWave is a brand of shockwave device made by another company. We use a STORZ MEDICAL shockwave system. Different devices use different shockwave technologies. What matters most is an accurate assessment and a plan built around how you move." },
      ]}
    />
  );
}
