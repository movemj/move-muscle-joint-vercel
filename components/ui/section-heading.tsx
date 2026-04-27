import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right",
  };

  return (
    <div className={cn("max-w-3xl mb-12 lg:mb-16", alignment[align])}>
      {tag && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 block text-softblue">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            light ? "text-white/70" : "text-steel"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
