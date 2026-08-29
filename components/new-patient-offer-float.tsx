"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NewPatientOfferFloat() {
  const pathname = usePathname();

  if (
    pathname === "/new-patient-offer" ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/thank-you")
  ) {
    return null;
  }

  return (
    <Link
      href="/new-patient-offer"
      aria-label="Claim the $49 Initial Move Session offer"
      className="fixed bottom-7 right-7 z-40 hidden min-h-[64px] w-[220px] flex-col justify-center rounded-md bg-navy px-5 py-3 text-white shadow-[0_8px_24px_rgba(25,29,36,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:flex"
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
        New Patient Offer
      </span>
      <span className="text-sm font-semibold tracking-wide">
        $49 Initial Move Session: Evaluation and Treatment <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export function NewPatientOfferMobileFloat() {
  const pathname = usePathname();

  if (
    pathname === "/new-patient-offer" ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/thank-you")
  ) {
    return null;
  }

  return (
    <Link
      href="/new-patient-offer"
      aria-label="View the New Patient Offer for $49"
      className="fixed inset-x-0 bottom-0 z-40 flex min-h-14 items-center justify-between gap-4 bg-navy px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] text-white shadow-[0_-4px_16px_rgba(25,29,36,0.12)] transition duration-200 hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset md:hidden"
    >
      <span className="text-sm font-semibold tracking-wide">New Patient Offer — $49</span>
      <span className="shrink-0 text-sm font-semibold">View Offer <span aria-hidden="true">→</span></span>
    </Link>
  );
}

export function NewPatientOfferFloatGroup() {
  return (
    <>
      <NewPatientOfferFloat />
      <NewPatientOfferMobileFloat />
    </>
  );
}
