import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { GOOGLE_REVIEWS_URL } from "@/lib/testimonials";

const testimonials = [
  {
    quote: "Excellent communication, service and overall care received by working with Dr. Joseph Hugunin. He spent time listening to my needs, and quickly was able to identify the root cause of many of my issues based upon his wealth of experience. Highly recommend meeting with him!",
    name: "Sierra M.",
  },
  {
    quote: "He provides the best movement based care I've found in Overland Park. He is not your typical chiropractor. He takes the time to provide the care you need and not just a quick adjustment.",
    name: "Bekah F.",
  },
  {
    quote: "A single session of 30 minutes already increased the mobility in my right shoulder and relieved tensions. Joey was extremely respectful as well. So grateful!",
    name: "McKenna Z.",
  },
];

export function TestimonialsCarousel() {
  return (
    <SectionWrapper bg="bg-secondary">
      <SectionHeading tag="Google Reviews" title="What patients are saying." align="center" />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-1 text-sm text-navy" aria-label="5 stars">
              <span aria-hidden="true">★★★★★</span>
              <span className="sr-only">5 stars</span>
            </div>
            <blockquote className="mt-4 text-sm leading-7 text-charcoal">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-steel">
              {testimonial.name} <span className="font-normal">· Google review</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline underline-offset-4">
          Read all reviews on Google
        </Link>
      </div>
    </SectionWrapper>
  );
}
