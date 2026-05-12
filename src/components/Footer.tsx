import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const PLAN_LINKS = [
  { href: "/plans#aca", label: "ACA Health Plans" },
  { href: "/plans#short-term", label: "Short-Term Medical" },
  { href: "/plans#supplemental", label: "Supplemental Insurance" },
  { href: "/plans#life", label: "Life Insurance" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/contact#form", label: "Get a Quote" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/licensing", label: "Licensing" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#003D99" }}>
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-blue-700">
          {/* Brand column */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Dadzie Insurance Group"
              width={160}
              height={54}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="text-blue-200 text-sm leading-relaxed">
              Trusted health &amp; life insurance guidance from licensed agents who put you first.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@dadzieinsurancegroup.com"
                className="flex items-center gap-2 text-white text-sm hover:text-orange-300 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@dadzieinsurancegroup.com
              </a>
              <p className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Atlanta, GA
              </p>
            </div>
          </div>

          {/* Plans */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#93C5FD", fontFamily: "var(--font-work-sans)" }}
            >
              Our Plans
            </h4>
            <ul className="space-y-2.5">
              {PLAN_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white text-sm hover:text-orange-300 transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#93C5FD", fontFamily: "var(--font-work-sans)" }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white text-sm hover:text-orange-300 transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Social */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#93C5FD", fontFamily: "var(--font-work-sans)" }}
            >
              Office Hours
            </h4>
            <p className="text-blue-200 text-sm mb-1">Mon – Fri: 8am – 8pm ET</p>
            <p className="text-blue-200 text-sm mb-6">Sat: 9am – 5pm ET</p>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#93C5FD", fontFamily: "var(--font-work-sans)" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { label: "Facebook", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-blue-600 transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-xs">
            © {new Date().getFullYear()} Dadzie Insurance Group. All rights reserved. A subsidiary of BLADE Holdings LLC.
          </p>
          <div className="flex gap-4">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-blue-300 text-xs hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-4 text-blue-400 text-xs leading-relaxed">
          Dadzie Insurance Group is a licensed insurance brokerage. Products and availability vary by state.
          This website is for informational purposes only and does not constitute a binding offer of insurance.
          By submitting your information, you consent to being contacted by a licensed agent.
        </p>
      </div>
    </footer>
  );
}
