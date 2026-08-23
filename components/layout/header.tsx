"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/site-data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className="absolute top-0 left-0 right-0 z-[100] isolate pointer-events-auto w-full max-w-full overflow-x-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full max-w-full overflow-x-hidden">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Move Muscle & Joint home">
            <Image
              src="/images/move-logo-white.webp"
              alt="Move Muscle & Joint"
              width={220}
              height={88}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = Boolean(item.children && !["Services", "Conditions"].includes(item.label));

              return (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 text-white/90 hover:text-white ${pathname === item.path ? "text-white" : ""}`}
                >
                  {item.label}
                </Link>
                {hasDropdown && openDropdown === item.path && (
                  <div className="absolute top-full left-0 pt-3 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-charcoal rounded-lg shadow-xl border border-white/15 py-2 min-w-[280px] w-max"
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block px-5 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="hidden lg:inline-flex px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all bg-white text-navy hover:bg-white/90"
            >
              Book Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/10 overflow-x-hidden"
          >
            <nav className="px-6 py-6 space-y-1 w-full max-w-full">
              {NAV_ITEMS.map((item) => (
                <div key={item.path}>
                  <Link
                    href={item.path}
                    className="block py-3 text-base font-medium text-white hover:text-softblue transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/book"
                  className="block w-full py-3 px-6 bg-navy text-white text-center rounded-full font-semibold text-sm tracking-wide break-words"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
