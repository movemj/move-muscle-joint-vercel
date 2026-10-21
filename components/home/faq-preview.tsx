import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";

export const HOME_FAQS = [
  { question: "What does the $49 first visit include?", answer: "Your first visit includes a movement assessment, a clear discussion of what we find, and an initial care plan. We take time to understand how your symptoms affect the way you move." },
  { question: "Do you accept insurance?", answer: "We are in network with many major insurance plans. Coverage varies by plan, so contact us and we'll verify your benefits before your first visit." },
  { question: "Should I see a chiropractor or physical therapist?", answer: "It depends on your needs. We can discuss whether chiropractic care, myofascial release therapy, targeted rehab, or a referral is an appropriate next step." },
  { question: "How many visits will I need?", answer: "Most people need about 3 to 6 visits, but it depends on the issue, your goals, and how your body responds to care." },
  { question: "Does chiropractic care hurt?", answer: "Care is designed to be comfortable and is adapted to your preferences and presentation. We will explain what we are doing and adjust as needed." },
  { question: "Do I need a referral?", answer: "No referral is generally needed to schedule an appointment. Contact us if you have questions about your insurance plan or benefits." },
  { question: "What should I wear?", answer: "Wear comfortable clothing that lets you move easily. Athletic or everyday clothes are both appropriate for an assessment and hands-on care." },
  { question: "What does the first visit include?", answer: "The first visit includes a movement assessment, time to discuss your goals and history, and an explanation of recommended next steps." },
] as const;

export function FAQPreview() {
  return (
    <SectionWrapper>
      <SectionHeading tag="FAQ" title="Common questions, answered." subtitle="Straightforward information about visits, pricing, insurance and care." align="center" />
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
        {HOME_FAQS.map(({ question, answer }) => (
          <details key={question} className="group px-6 py-5 first:rounded-t-2xl last:rounded-b-2xl">
            <summary className="cursor-pointer list-none pr-8 font-semibold text-charcoal marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="relative block after:absolute after:right-0 after:top-0 after:text-2xl after:font-normal after:leading-5 after:text-navy after:content-['+'] group-open:after:content-['−']">{question}</span>
            </summary>
            <p className="mt-3 max-w-2xl pr-8 text-sm leading-7 text-steel">{answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 text-center">
        <CTAButton href="/faq" label="View all FAQs" showArrow campaign="homepage" />
      </div>
    </SectionWrapper>
  );
}
