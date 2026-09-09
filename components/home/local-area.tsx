import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";

export function LocalArea() {
  return (
    <SectionWrapper bg="bg-white">
      <SectionHeading title="Chiropractic Care in Overland Park, KS" />
      <div className="max-w-3xl space-y-5 text-steel leading-relaxed -mt-8">
        <p>
          Move Muscle & Joint is located in Overland Park at 10701 El Monte
          St, Studio 2, inside Fit House near 119th & Roe. Care here combines{" "}
          <Link href="/services/chiropractic-care" className="text-navy font-semibold hover:underline">
            chiropractic care
          </Link>
          , myofascial release therapy,{" "}
          <Link href="/services/shockwave-therapy" className="text-navy font-semibold hover:underline">
            shockwave therapy
          </Link>
          , and targeted rehab, built around one goal: figuring out what&apos;s
          actually driving the problem, not just quieting it for a few days.
        </p>
        <p>
          Most of our patients are active adults and athletes — lifters,
          runners, golfers, pickleball players, and desk workers whose bodies
          pay for long hours at a screen. Many live right here in Overland
          Park; others make the short drive from Leawood and Prairie Village.
        </p>
        <p>
          Every visit is one-on-one. You get a full appointment with the same
          provider each time, not a rotating cast or a rushed hallway
          check-in. That consistency lets us track what&apos;s actually
          changing and adjust the plan accordingly.
        </p>
        <p>
          We also don&apos;t believe in open-ended care. Treatment plans are
          finite — built to resolve the issue and get you back to training,
          working, or just moving without thinking about it, rather than
          keeping you on the schedule indefinitely.
        </p>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-full">
        <CTAButton
          href="https://maps.google.com/?cid=15832245689117076245"
          label="Get Directions"
          variant="outline"
          external
        />
        <CTAButton href="/book" label="Book Chiropractic Care" campaign="homepage" showArrow />
      </div>
    </SectionWrapper>
  );
}
