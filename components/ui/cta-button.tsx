import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildJaneUrl, type JaneCampaign } from "@/lib/booking";

interface CTAButtonProps {
  href?: string;
  label?: string;
  variant?: "primary" | "white" | "outline" | "outlineWhite" | "ghost";
  size?: "sm" | "default" | "lg";
  showArrow?: boolean;
  className?: string;
  external?: boolean;
  /** Required whenever href resolves to the Jane booking link (href="/book"). */
  campaign?: JaneCampaign;
  /** utm_content value, e.g. a condition, service, or blog post slug. */
  content?: string;
  /** Deep-links to the $49 new patient treatment slot. Offer page only. */
  treatment?: number;
}

export function CTAButton({
  href = "/book",
  label = "Book Now",
  variant = "primary",
  size = "default",
  showArrow = false,
  className = "",
  external = false,
  campaign,
  content,
  treatment,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold tracking-wide transition-all duration-200 rounded-full";

  const variants = {
    primary: "bg-navy text-white hover:bg-navy/90",
    white: "bg-white text-navy hover:bg-white/90",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-navy",
    ghost: "text-navy hover:text-navy/70",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    default: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const cls = cn(base, variants[variant], sizes[size], className);
  const bookingLink = href === "/book";
  if (bookingLink && !campaign && process.env.NODE_ENV !== "production") {
    console.warn(
      `[v0] CTAButton with href="/book" is missing a "campaign" prop (label: "${label}"). Falling back to "book-page".`,
    );
  }
  const resolvedHref = bookingLink
    ? buildJaneUrl({ campaign: campaign ?? "book-page", content, treatment })
    : href;

  if (external || bookingLink) {
    return (
      <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {label}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
