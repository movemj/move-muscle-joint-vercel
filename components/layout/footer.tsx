import Link from "next/link";
import { SITE, SERVICES, CONDITIONS } from "@/lib/site-data";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">MOVE</span>
              <span className="text-xs font-medium tracking-widest uppercase text-white/60 ml-2">Muscle & Joint</span>
            </Link>
            <p className="text-sm text-white/50 italic mb-6">{SITE.tagline}</p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-softblue" />
                <span>{SITE.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-softblue" />
                <span>{SITE.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-softblue" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-5 text-white/80">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={s.slug} className="text-sm text-white/60 hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-5 text-white/80">Conditions</h4>
            <ul className="space-y-3">
              {CONDITIONS.map((c) => (
                <li key={c.slug}>
                  <Link href={c.slug} className="text-sm text-white/60 hover:text-white transition-colors">{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-5 text-white/80">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Approach", path: "/our-approach" },
                { label: "About", path: "/about" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
                { label: "Book Now", path: "/book" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
