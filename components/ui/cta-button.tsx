import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href?: string;
  label?: string;
  variant?: "primary" | "white" | "outline" | "outlineWhite" | "ghost";
  size?: "sm" | "default" | "lg";
  showArrow?: boolean;
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href = "/book",
  label = "Book Now",
  variant = "primary",
  size = "default",
  showArrow = false,
  className = "",
  external = false,
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

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
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
