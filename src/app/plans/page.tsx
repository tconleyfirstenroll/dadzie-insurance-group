import Link from "next/link";
import { Shield, Heart, FileText, Star, CheckCircle, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Plans | Dadzie Insurance Group",
  description:
    "Explore ACA health plans, short-term medical, supplemental, and life insurance options from Dadzie Insurance Group's licensed agents.",
};

const PLANS = [
  {
    id: "aca",
    icon: Heart,
    title: "ACA / Marketplace Health Plans",
    tagline: "Comprehensive Coverage, Tax Credits Available",
    description:
      "The Affordable Care Act marketplace offers comprehensive health coverage with essential benefits including preventive care, prescriptions, hospitalization, and mental health services. Most households qualify for premium tax credits that significantly reduce monthly costs.",
    features: [
      "10 essential health benefits required by law",
      "Premium tax credits based on household income",
      "No denial for pre-existing conditions",
      "Enrollment period October through January; special enrollment for qualifying life events",
      "Individual, family, and small business plans available",
      "Catastrophic plans available for those under 30",
    ],
    cta: "See ACA Plans",
    badge: "Most Popular",
  },
  {
    id: "short-term",
    icon: Shield,
    title: "Short-Term Medical Insurance",
    tagline: "Flexible Coverage for Coverage Gaps",
    description:
      "Short-term health plans provide temporary coverage during transitions — between jobs, waiting for employer benefits, or bridging to Medicare. Plans can be customized with different deductibles and benefit maximums to match your budget.",
    features: [
      "Coverage available within 24 hours of approval",
      "Flexible plan durations (30 days to 12 months)",
      "Customizable deductible and benefit levels",
      "Large network of physicians and hospitals",
      "Prescription drug discounts included",
      "Renewable options available",
    ],
    cta: "Explore Short-Term Plans",
    badge: null,
  },
  {
    id: "supplemental",
    icon: FileText,
    title: "Supplemental Insurance",
    tagline: "Fill the Gaps in Your Coverage",
    description:
      "Supplemental plans pay cash benefits directly to you, helping cover out-of-pocket costs that primary health insurance doesn't address. These plans work alongside any existing coverage to provide an extra layer of financial protection.",
    features: [
      "Hospital indemnity — daily cash benefit during hospitalization",
      "Critical illness lump-sum payment upon diagnosis",
      "Accident insurance for unexpected injury expenses",
      "Dental and vision coverage",
      "Cancer-specific policies available",
      "Portable — coverage follows you between jobs",
    ],
    cta: "View Supplemental Options",
    badge: null,
  },
  {
    id: "life",
    icon: Star,
    title: "Life Insurance",
    tagline: "Protect Your Family's Financial Future",
    description:
      "Life insurance ensures your family is protected financially if the unexpected happens. We offer term and whole life products from top-rated carriers, and our agents help you determine the right coverage amount and policy type for your situation.",
    features: [
      "Term life — affordable coverage for a defined period",
      "Whole life — permanent coverage with cash value growth",
      "No-exam options available for qualifying applicants",
      "Coverage from $25,000 to $2,000,000+",
      "Accelerated death benefit riders available",
      "Free beneficiary review and policy checkup",
    ],
    cta: "Get a Life Insurance Quote",
    badge: null,
  },
];

export default function PlansPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ backgroundColor: "#0052CC" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FED7AA" }}>
            Our Coverage
          </p>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-work-sans)" }}>
            Insurance Plans That Fit Your Life
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            From ACA marketplace plans to life insurance, DIG agents compare options from
            20+ top-rated carriers so you get the right coverage at the right price.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {PLANS.map(({ id, icon: Icon, title, tagline, description, features, cta, badge }) => (
            <div key={id} id={id} className="scroll-mt-24">
              <div className="grid md:grid-cols-5 gap-10 items-start">
                <div className="md:col-span-3 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EFF6FF" }}>
                      <Icon className="w-7 h-7" style={{ color: "#0052CC" }} />
                    </div>
                    <div>
                      {badge && (
                        <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full mr-2" style={{ backgroundColor: "#F97316" }}>
                          {badge}
                        </span>
                      )}
                      <h2 className="text-2xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                        {title}
                      </h2>
                      <p className="text-sm font-semibold" style={{ color: "#F97316" }}>{tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                  <ul className="space-y-2.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0052CC" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 space-y-4" style={{ backgroundColor: "#F8F9FA" }}>
                    <p className="font-bold text-sm" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                      Interested in {title}?
                    </p>
                    <p className="text-gray-500 text-sm">Get a personalized quote from a licensed agent — no commitment required.</p>
                    <Link
                      href="/contact#form"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-bold text-sm"
                      style={{ backgroundColor: "#0052CC", fontFamily: "var(--font-work-sans)" }}
                    >
                      {cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-b border-gray-100" />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
              Not sure which plan is right?
            </h2>
            <p className="text-gray-500 mt-3">Tell us a bit about your situation and a licensed agent will guide you.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
