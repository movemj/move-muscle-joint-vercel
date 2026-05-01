import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string;
  padding?: string;
}

export function SectionWrapper({
  children,
  className = "",
  bg = "bg-white",
  id,
  padding = "py-20 lg:py-28",
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(bg, padding, className, "w-full max-w-full overflow-x-hidden")}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">{children}</div>
    </section>
  );
}
