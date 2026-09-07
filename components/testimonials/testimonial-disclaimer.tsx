import { cn } from "@/lib/utils";

interface TestimonialDisclaimerProps {
  className?: string;
  light?: boolean;
}

export function TestimonialDisclaimer({ className, light = false }: TestimonialDisclaimerProps) {
  return (
    <p className={cn("text-xs", light ? "text-white/50" : "text-steel/70", className)}>
      Individual results vary. Reviews reflect the experience of individual patients.
    </p>
  );
}
