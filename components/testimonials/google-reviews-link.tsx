import { GOOGLE_REVIEWS_URL } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

interface GoogleReviewsLinkProps {
  className?: string;
  light?: boolean;
}

export function GoogleReviewsLink({ className, light = false }: GoogleReviewsLinkProps) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-sm underline underline-offset-2 transition-colors",
        light ? "text-white/70 hover:text-white" : "text-steel hover:text-navy",
        className
      )}
    >
      See all reviews on Google
    </a>
  );
}
