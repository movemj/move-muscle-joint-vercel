import Link from "next/link";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";

const AREAS_SERVED = [
  { name: "Overland Park", isPrimary: true },
  { name: "Leawood", isPrimary: false },
  { name: "Lenexa", isPrimary: false },
  { name: "Prairie Village", isPrimary: false },
  { name: "Olathe", isPrimary: false },
  { name: "Shawnee", isPrimary: false },
  { name: "Kansas City", isPrimary: false },
];

export function AreasWeServe() {
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-softblue" />
        <h3 className="text-lg font-semibold text-charcoal">Areas We Serve</h3>
      </div>
      <p className="text-sm text-steel mb-4">
        {SITE.name} provides chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab to patients throughout the Kansas City metro area.
      </p>
      <div className="flex flex-wrap gap-2">
        {AREAS_SERVED.map((area) => (
          <Link
            key={area.name}
            href="/contact"
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              area.isPrimary
                ? "bg-navy text-white hover:bg-navy/90"
                : "bg-lightgray text-steel hover:bg-softblue/20 hover:text-charcoal"
            }`}
          >
            {area.name}
            {area.isPrimary && ", KS"}
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs text-steel">
        Located at {SITE.address}. Call <a href={`tel:${SITE.phone}`} className="text-navy hover:underline">{SITE.phone}</a> to schedule.
      </p>
    </div>
  );
}
