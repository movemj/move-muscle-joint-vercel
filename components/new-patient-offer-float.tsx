"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site-data";

const offerPath = "/new-patient-offer";
const excludedPath = (pathname: string) => pathname.startsWith("/admin") || pathname.startsWith("/api") || pathname.startsWith("/thank-you");

export function NewPatientOfferFloat() {
  const pathname = usePathname();
  if (excludedPath(pathname)) return null;
  const onOfferPage = pathname === offerPath;
  return (
    <Link
      href={onOfferPage ? SITE.newPatientOfferBookingUrl : offerPath}
      target={onOfferPage ? "_blank" : undefined}
      rel={onOfferPage ? "noopener noreferrer" : undefined}
      aria-label={onOfferPage ? "Book $49 visit" : "View $49 first visit offer"}
      className="group fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center transition-transform duration-300 ease-out hover:-translate-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-x-0 md:flex"
    >
      <span className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-navy shadow-[0_8px_24px_rgba(25,29,36,0.18)] transition-transform duration-300 ease-out group-hover:rotate-2 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
        <Image src="/mmj-logo-original.png" alt="Move" width={1254} height={1254} className="size-11 rounded-full object-cover" />
      </span>
      <span className="-ml-2 flex h-16 w-44 items-center justify-between bg-softblue pl-7 pr-5 text-charcoal shadow-[0_8px_24px_rgba(25,29,36,0.12)]">
        <span className="text-xs font-bold uppercase tracking-[0.14em]">{onOfferPage ? "Book $49 Visit" : "$49 First Visit"}</span>
        <span aria-hidden="true" className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
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
