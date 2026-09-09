import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/testimonials";

interface TestimonialQuoteProps {
  testimonial: Testimonial;
  className?: string;
  light?: boolean;
  centered?: boolean;
  variant?: "inline" | "featured";
}

export function TestimonialQuote({
  testimonial,
  className,
  light = false,
  centered = false,
  variant = "inline",
}: TestimonialQuoteProps) {
  return (
    <blockquote
      className={cn(
        "flex flex-col gap-4",
        variant === "featured" ? "max-w-2xl" : "max-w-xl",
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
          variant === "featured"
            ? "text-lg leading-7 font-medium text-balance sm:text-xl"
            : "text-base leading-7 font-medium text-balance sm:text-lg",
          light ? "text-white" : "text-charcoal"
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <cite
        className={cn(
          "block text-sm leading-5 font-medium not-italic",
          light ? "text-white/70" : "text-steel"
        )}
      >
        {testimonial.name}
      </cite>
    </blockquote>
  );
}
