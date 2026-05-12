"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Our Plans" },
  { href: "/about", label: "About Us" },
  { href: "/join-us", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className={`bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Dadzie Insurance Group"
              width={720}
              height={240}
              className="h-[160px] w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-[#0052CC] transition-colors"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              className="px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-colors"
              style={{ backgroundColor: "#F97316", fontFamily: "var(--font-work-sans)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EA6A0A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F97316")}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 font-semibold text-sm border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#form"
              className="block mt-2 text-center px-5 py-3 rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: "#F97316" }}
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
