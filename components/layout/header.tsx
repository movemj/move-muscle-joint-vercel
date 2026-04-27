"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/site-data";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-navy" : "text-white"}`}>
              MOVE
            </span>
            <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${scrolled ? "text-steel" : "text-white/70"}`}>
              Muscle & Joint
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${
                    scrolled ? "text-charcoal hover:text-navy" : "text-white/90 hover:text-white"
                  } ${pathname === item.path ? (scrolled ? "text-navy" : "text-white") : ""}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && openDropdown === item.path && (
                  <div className="absolute top-full left-0 pt-2">
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg shadow-xl border border-border/50 py-2 min-w-[260px]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block px-5 py-2.5 text-sm text-charcoal hover:text-navy hover:bg-secondary/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className={`hidden lg:inline-flex px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
                scrolled
                  ? "bg-navy text-white hover:bg-navy/90"
                  : "bg-white text-navy hover:bg-white/90"
              }`}
            >
              Book Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? "text-charcoal" : "text-white"}`}
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
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <nav className="px-6 py-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.path}>
                  <Link
                    href={item.path}
                    className="block py-3 text-base font-medium text-charcoal hover:text-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block py-2 text-sm text-steel hover:text-navy transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/book"
                  className="block w-full py-3 px-6 bg-navy text-white text-center rounded-full font-semibold text-sm tracking-wide"
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
