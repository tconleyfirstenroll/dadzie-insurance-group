"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Our Plans" },
  { href: "/about", label: "About Us" },
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
      {/* Utility bar */}
      <div style={{ backgroundColor: "#0052CC" }} className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="text-white text-sm flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            Speak to a Licensed Agent — Mon–Fri 8am–8pm ET
          </span>
          <a
            href="tel:+18005551234"
            className="text-white font-bold text-sm tracking-wide hover:text-orange-300 transition-colors"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            (800) 555-1234
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Dadzie Insurance Group"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
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
              style={{
                backgroundColor: "#F97316",
                fontFamily: "var(--font-work-sans)",
              }}
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
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 text-sm font-semibold py-2"
              style={{ color: "#0052CC" }}
            >
              <Phone className="w-4 h-4" />
              (800) 555-1234
            </a>
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
