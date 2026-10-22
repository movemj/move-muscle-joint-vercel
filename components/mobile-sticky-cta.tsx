export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
      <a
        href="/new-patient-offer"
        className="block w-full rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
      >
        Book $49 visit
      </a>
    </div>
  );
}
