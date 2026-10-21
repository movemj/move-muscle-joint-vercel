import { Phone } from "lucide-react";
export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-white/95 p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
      <a
        href="https://mmj.janeapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
      >
        Book $49 visit
      </a>
      <a
        href="tel:+19133030989"
        className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-navy px-4 py-3 text-center text-sm font-semibold text-navy"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call or text
      </a>
    </div>
  );
}
