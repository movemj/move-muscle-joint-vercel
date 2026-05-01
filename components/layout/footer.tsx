import Link from "next/link";
import { SITE, SERVICES, CONDITIONS } from "@/lib/site-data";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full max-w-full">
          {/* Brand */}
          <div className="lg:col-span-1 overflow-hidden">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight break-words">MOVE</span>
              <span className="text-xs font-medium tracking-widest uppercase text-white/60 ml-2 break-words">Muscle & Joint</span>
            </Link>
            <p className="text-sm text-white/50 italic mb-6 break-words">{SITE.tagline}</p>
            <div className="space-y-3 text-sm text-white/70 overflow-hidden">
              <div className="flex items-start gap-2 overflow-hidden">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-softblue" />
                <span className="break-words overflow-wrap-break-word">{SITE.address}</span>
              </div>
              <div className="flex items-center gap-2 overflow-hidden">
                <Phone className="w-4 h-4 shrink-0 text-softblue" />
                <span className="break-words">{SITE.phone}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="overflow-hidden">
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-5 text-white/80 break-words">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug} className="overflow-hidden">
                  <Link href={s.slug} className="text-sm text-white/60 hover:text-white transition-colors break-words">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div className="overflow-hidden">
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-5 text-white/80 break-words">Conditions</h4>
            <ul className="space-y-3">
              {CONDITIONS.map((c) => (
                <li key={c.slug} className="overflow-hidden">
                  <Link href={c.slug} className="text-sm text-white/60 hover:text-white transition-colors break-words">{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="overflow-hidden">
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-5 text-white/80 break-words">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Approach", path: "/our-approach" },
                { label: "About", path: "/about" },
                { label: "Blog", path: "/blog" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
                { label: "Book Now", path: "/book" },
              ].map((link) => (
                <li key={link.path} className="overflow-hidden">
                  <Link href={link.path} className="text-sm text-white/60 hover:text-white transition-colors break-words">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-full overflow-hidden">
          <p className="text-xs text-white/40 break-words">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/60 transition-colors break-words">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
