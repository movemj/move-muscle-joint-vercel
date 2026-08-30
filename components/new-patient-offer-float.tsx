"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site-data";

const offerPath = "/new-patient-offer";
const excludedPath = (pathname: string) => pathname.startsWith("/admin") || pathname.startsWith("/api") || pathname.startsWith("/thank-you");

export function NewPatientOfferFloat() {
  const pathname = usePathname();
  if (excludedPath(pathname)) return null;
  const onOfferPage = pathname === offerPath;
  if (onOfferPage) return null;
  return (
    <Link
      href={offerPath}
      aria-label="See the $49 First Move Session offer"
      className="group fixed right-0 top-1/2 z-40 hidden h-[64px] w-[216px] -translate-y-1/2 items-center rounded-l-[6px] bg-softblue px-5 text-charcoal shadow-[0_8px_24px_rgba(25,29,36,0.14)] transition duration-200 ease-out hover:-translate-x-2 hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:flex"
    >
      <span className="flex flex-col gap-1 text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em]">New Patient Offer</span>
        <span className="text-sm font-semibold tracking-wide">$49 First Move Session <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span></span>
      </span>
    </Link>
  );
}

export function NewPatientOfferMobileFloat() {
  const pathname = usePathname();
  if (excludedPath(pathname)) return null;
  const onOfferPage = pathname === offerPath;
  return (
    <Link
      href={onOfferPage ? SITE.newPatientOfferBookingUrl : offerPath}
      target={onOfferPage ? "_blank" : undefined}
      rel={onOfferPage ? "noopener noreferrer" : undefined}
      aria-label={onOfferPage ? "Book my $49 First Visit" : "See what is included in the $49 First Visit"}
      className="fixed inset-x-4 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 flex min-h-14 items-center justify-between gap-4 rounded-md bg-navy px-5 py-3 text-white shadow-[0_8px_24px_rgba(25,29,36,0.16)] transition duration-200 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:hidden"
    >
      <span className="text-sm font-semibold">{onOfferPage ? "Book My $49 First Visit" : "$49 First Visit"}</span>
      <span className="shrink-0 text-sm font-semibold">{onOfferPage ? "Book Now" : "See What’s Included"} <span aria-hidden="true">→</span></span>
    </Link>
  );
}

export function NewPatientOfferFloatGroup() {
  return <><NewPatientOfferFloat /><NewPatientOfferMobileFloat /></>;
}
