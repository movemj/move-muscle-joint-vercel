import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-data";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export function Breadcrumbs({ items, light = true }: BreadcrumbsProps) {
  const crumbs = [{ label: "Home", path: "/" }, ...items];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE.url}${item.path || ""}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol
        className={cn(
          "flex items-center gap-1.5 text-sm flex-wrap",
          light ? "text-white/60" : "text-steel"
        )}
      >
        {crumbs.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight
                className={cn(
                  "w-3.5 h-3.5",
                  light ? "text-white/30" : "text-steel/40"
                )}
              />
            )}
            {i === crumbs.length - 1 ? (
              <span
                className={cn(
                  "font-medium",
                  light ? "text-white/90" : "text-charcoal"
                )}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.path}
                className={cn(
                  "transition-colors flex items-center gap-1",
                  light ? "hover:text-white" : "hover:text-navy"
                )}
              >
                {i === 0 && <Home className="w-3.5 h-3.5" />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
