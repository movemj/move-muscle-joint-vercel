import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialQuote } from "./testimonial-quote";
import { GoogleReviewsLink } from "./google-reviews-link";
import { TestimonialDisclaimer } from "./testimonial-disclaimer";
import type { Testimonial } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialsStaticProps {
  testimonials: Testimonial[];
  bg?: string;
  tag?: string;
  title?: string;
  centered?: boolean;
  className?: string;
}

// Static testimonial cards for condition/service/offer/book/about pages.
// Renders one centered testimonial, or a side-by-side pair on desktop
// (stacked on mobile). Intentionally no card chrome, borders, or shadows.
export function TestimonialsStatic({
  testimonials,
  bg = "bg-white",
  tag = "Patient Stories",
  title = "What patients are saying.",
  centered = false,
  className,
}: TestimonialsStaticProps) {
  if (!testimonials.length) return null;

  const isSingle = testimonials.length === 1;

  return (
    <SectionWrapper bg={bg} className={className}>
      <div className={cn(centered && "mx-auto max-w-3xl text-center")}>
        <SectionHeading tag={tag} title={title} align={centered ? "center" : "left"} />
        <div
          className={cn(
            "-mt-4",
            isSingle
              ? cn("mx-auto max-w-2xl", centered && "text-center")
              : "grid gap-12 sm:grid-cols-2 sm:gap-16"
          )}
        >
          {testimonials.map((t) => (
            <TestimonialQuote key={t.id} testimonial={t} centered={centered && isSingle} />
          ))}
        </div>
        <div className={cn("mt-10 flex flex-col gap-2", centered && "items-center text-center")}>
          <GoogleReviewsLink />
          <TestimonialDisclaimer />
        </div>
      </div>
    </SectionWrapper>
  );
}
