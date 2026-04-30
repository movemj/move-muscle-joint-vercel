import Link from "next/link";
import { SERVICES } from "@/lib/site-data";

type ServiceKey = 
  | "chiropractic"
  | "myofascial"
  | "shockwave"
  | "rehab";

const SERVICE_MAP: Record<ServiceKey, { title: string; slug: string }> = {
  chiropractic: {
    title: "chiropractic care",
    slug: "/services/chiropractic-care",
  },
  myofascial: {
    title: "myofascial release therapy",
    slug: "/services/myofascial-release-therapy",
  },
  shockwave: {
    title: "shockwave therapy",
    slug: "/services/shockwave-therapy",
  },
  rehab: {
    title: "targeted rehab",
    slug: "/services/targeted-rehab",
  },
};

interface ServiceLinkProps {
  service: ServiceKey;
  children?: React.ReactNode;
  className?: string;
}

/**
 * ServiceLink - Reusable MDX component for linking to service pages
 * with consistent anchor text for internal linking.
 * 
 * Usage in MDX:
 * <ServiceLink service="chiropractic" />
 * <ServiceLink service="myofascial">custom text</ServiceLink>
 */
export function ServiceLink({ service, children, className }: ServiceLinkProps) {
  const serviceData = SERVICE_MAP[service];
  
  if (!serviceData) {
    return <span>{children || service}</span>;
  }

  return (
    <Link
      href={serviceData.slug}
      className={className || "text-navy font-medium hover:text-navy/70 underline underline-offset-2 transition-colors"}
    >
      {children || serviceData.title}
    </Link>
  );
}
