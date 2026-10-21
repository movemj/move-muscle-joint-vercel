import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { IMAGES, CONDITIONS, SITE } from "@/lib/site-data";

const chiropracticTitle = "Chiropractic Care in Overland Park, KS | Move Muscle & Joint";
const chiropracticDescription =
  "Chiropractic care in Overland Park for neck pain, low back pain, and sciatica, with adjustments, movement assessment, and targeted rehab support.";

export const metadata: Metadata = {
  title: { absolute: chiropracticTitle },
  description: chiropracticDescription,
  twitter: {
    card: "summary_large_image",
    title: "Chiropractic Care Overland Park KS",
    description: "Chiropractic care in Overland Park, KS focused on restoring joint function and mobility. Personalized, assessment-driven treatment integrated with rehab.",
  },
  alternates: {
    canonical: "/services/chiropractic-care",
  },
  openGraph: {
    title: "Chiropractic Care Overland Park KS",
    description:
      "Chiropractic care in Overland Park, KS focused on restoring joint function and mobility. Personalized, assessment-driven treatment integrated with rehab.",
    url: `${SITE.url}/services/chiropractic-care`,
  },
};

export default function ChiropracticCarePage() {
  return (
      <ServicePageTemplate
        title="Chiropractic"
        h1="Chiropractic Care in Overland Park, KS"
        heroImage={IMAGES.chiropractic}
        breadcrumbLabel="Chiropractic"
        breadcrumbPath="/services/chiropractic-care"
      introText={
        <>
          <p>
            Chiropractic at Move Muscle & Joint in Overland Park goes beyond routine
            adjustments. It&apos;s a personalized, assessment-driven approach to restoring joint
            function, improving mobility, and addressing the underlying movement dysfunctions that
            contribute to pain.
          </p>
          <p>
            Every session is tailored to how your body moves — not to a one-size-fits-all protocol.
            Whether you&apos;re dealing with acute pain or chronic stiffness, chiropractic at Move
            is designed to work alongside myofascial release therapy and rehabilitation to create results
            that last.
          </p>
        </>
      }
      whatItIs={
        <>
          <p>
            Chiropractic involves skilled manual therapy focused on the joints and spine. By
            restoring proper joint mechanics, chiropractic treatment helps reduce pain, improve
            range of motion, and support the body&apos;s ability to move and heal efficiently.
          </p>
          <p>
            At Move, chiropractic is never isolated. It&apos;s one tool inside a broader care model
            that includes myofascial release therapy, shockwave therapy, and targeted rehab — all
            coordinated around your specific needs and goals.
          </p>
        </>
      }
      whoItHelps={
        <>
          <p>
            Chiropractic at Move is ideal for anyone experiencing joint pain, stiffness,
            restricted movement, or recurring musculoskeletal issues. Whether you&apos;re an active
            adult, a desk worker, or recovering from an injury, this service addresses the
            structural component of your movement dysfunction.
          </p>
          <p>
            Patients throughout Overland Park, Leawood, Prairie Village, and the Kansas City metro
            come to Move for chiropractic that&apos;s part of a smarter, more integrated approach.
          </p>
        </>
      }
      whatToExpect={
        <>
          <p>
            Your chiropractic session begins with a review of your movement assessment findings.
            Treatment is targeted based on where your body shows restriction, compensation, or
            dysfunction — not based on guesswork.
          </p>
          <p>
            You may experience joint mobilization, spinal manipulation, or extremity adjustments as
            part of a session that also includes myofascial release therapy and corrective exercise. Each
            visit builds on the last, progressing you toward full movement confidence.
          </p>
        </>
      }
      benefits={[
        "Improved joint mobility and range of motion",
        "Reduced pain and inflammation",
        "Better spinal alignment and posture",
                "Support for injury recovery",
        "Integrated with rehab for lasting results",
      ]}
      moveMethodFit={
        <>
          <p>
            Chiropractic plays a key role across every stage of the Move Method. In the early
            stages, it helps reduce pain and restore alignment. As care progresses, it supports the
            foundation for movement retraining and strength building.
          </p>
          <p>
            Because it&apos;s integrated with myofascial release therapy and targeted rehab, chiropractic
            at Move delivers results that compound over time rather than requiring indefinite
            maintenance.
          </p>
          <p>Learn more about <a className="text-navy underline" href="/services/myofascial-release-therapy">myofascial release therapy</a> and <a className="text-navy underline" href="/services/targeted-rehab">targeted rehab</a> as part of an integrated plan.</p>
          <p>A typical care plan is 3 to 6 visits, depending on the person.</p>
        </>
      }
      relatedConditions={CONDITIONS}
      faqs={[
        {
          q: "Is chiropractic safe?",
          a: "Yes. Chiropractic is a well-established, evidence-supported treatment for musculoskeletal conditions. At Move, every session is based on thorough assessment and tailored to your body.",
        },
        {
          q: "Do I need a referral?",
          a: "No referral is needed. Dr. Hugunin is a doctor, so you can book directly."
        },
        {
          q: "How often will I need treatment?",
          a: "A typical care plan is 3 to 6 visits, depending on the person, your condition, goals, and how your body responds. We'll outline a clear plan after your initial assessment.",
        },
        {
          q: "Is chiropractic combined with other treatments?",
          a: "Yes. At Move, chiropractic is part of an integrated model that may include myofascial release therapy, shockwave therapy, and targeted rehab in the same visit.",
        },
        {
          q: "What happens at my first visit?",
          a: "We review your history and goals, assess how you move, explain the findings, and discuss an appropriate care plan before treatment.",
        },
      ]}
    />
  );
}
