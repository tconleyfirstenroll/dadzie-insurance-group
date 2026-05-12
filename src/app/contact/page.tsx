import { Mail, Clock, MapPin } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Dadzie Insurance Group",
  description:
    "Reach a licensed Dadzie Insurance Group agent by email or our online form. No pressure — just honest guidance.",
};

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@dadzieinsurancegroup.com",
    href: "mailto:info@dadzieinsurancegroup.com",
    sub: "We respond within one business day",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 8am–8pm ET",
    href: null,
    sub: "Saturday 9am–5pm ET",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Atlanta, GA",
    href: null,
    sub: "Licensed to serve clients nationwide",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#0052CC" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FED7AA" }}>
            Reach Us
          </p>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-work-sans)" }}>
            Let&apos;s Talk Insurance
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            No scripts, no pressure — just a licensed agent who genuinely wants to help
            you find the right coverage.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                  Contact Information
                </h2>
                <p className="text-gray-500 text-sm">
                  Reach out by email or use the form to request a callback from a licensed agent.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href, sub }) => (
                  <div key={label} className="p-5 rounded-2xl border border-gray-100 shadow-sm space-y-2" style={{ backgroundColor: "#F8F9FA" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EFF6FF" }}>
                      <Icon className="w-5 h-5" style={{ color: "#0052CC" }} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="block font-bold text-sm hover:text-orange-500 transition-colors"
                        style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-bold text-sm" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                        {value}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">{sub}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-6 space-y-2" style={{ backgroundColor: "#EFF6FF" }}>
                <p className="font-bold text-sm" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                  Fastest Response
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fill out the form and a licensed agent will reach out within one business day
                  to walk you through your options — no commitment required.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div id="form" className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
