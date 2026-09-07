import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/testimonials";

interface TestimonialQuoteProps {
  testimonial: Testimonial;
  className?: string;
  light?: boolean;
  centered?: boolean;
}

export function TestimonialQuote({
  testimonial,
  className,
  light = false,
  centered = false,
}: TestimonialQuoteProps) {
  return (
    <blockquote
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        centered && "items-center text-center",
        className
      )}
    >
      <span
        className={cn("block h-px w-10", light ? "bg-white/40" : "bg-accent")}
        aria-hidden="true"
      />
      <p
        className={cn(
          "text-lg leading-relaxed font-medium text-balance md:text-xl",
          light ? "text-white" : "text-charcoal"
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <cite
        className={cn(
          "block text-sm font-semibold not-italic",
          light ? "text-white/70" : "text-steel"
        )}
      >
        {testimonial.name}
      </cite>
    </blockquote>
  );
}
