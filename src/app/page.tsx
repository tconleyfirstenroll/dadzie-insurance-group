import Link from "next/link";
import { Shield, Heart, FileText, Star, ArrowRight, CheckCircle, Phone, Users, Award } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

const PRODUCTS = [
  {
    icon: Heart,
    title: "ACA Health Plans",
    slug: "aca",
    description:
      "Marketplace plans covering essential health benefits with premium tax credits available to most families.",
    badge: "Most Popular",
  },
  {
    icon: Shield,
    title: "Short-Term Medical",
    slug: "short-term",
    description:
      "Flexible, budget-friendly coverage for gaps — between jobs, awaiting employer benefits, or major life transitions.",
    badge: null,
  },
  {
    icon: FileText,
    title: "Supplemental Plans",
    slug: "supplemental",
    description:
      "Hospital indemnity, critical illness, accident, and dental/vision plans that fill the gaps your primary insurance leaves behind.",
    badge: null,
  },
  {
    icon: Star,
    title: "Life Insurance",
    slug: "life",
    description:
      "Term and whole life policies to protect your family's financial future at a price that fits your budget.",
    badge: null,
  },
];

const STEPS = [
  {
    number: "01",
    title: "Tell Us About You",
    description:
      "Share a few details — your ZIP, household size, and what you need. Takes under two minutes.",
  },
  {
    number: "02",
    title: "We Compare Your Options",
    description:
      "A licensed DIG agent reviews top carriers and finds plans matched to your needs and budget.",
  },
  {
    number: "03",
    title: "You Choose — We Handle the Rest",
    description:
      "Pick your plan and we take care of enrollment, paperwork, and ongoing support.",
  },
];

const TRUST_STATS = [
  { value: "500+", label: "Families Covered" },
  { value: "20+", label: "Carrier Partners" },
  { value: "4.9★", label: "Client Rating" },
  { value: "100%", label: "Licensed Agents" },
];

const WHY_DIG = [
  "Licensed agents — never call center scripts",
  "We shop every carrier so you don't have to",
  "Plain-language explanations of every plan",
  "ACA compliance expertise built-in",
  "Ongoing support after you enroll",
  "No hidden fees — we're paid by carriers",
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-white pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div className="space-y-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#EFF6FF", color: "#0052CC" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F97316" }} />
                Licensed Health &amp; Life Insurance Brokers · Established 2026
              </div>

              <h1
                className="text-5xl lg:text-6xl leading-tight"
                style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)", fontWeight: 800 }}
              >
                Health &amp; Life Insurance,{" "}
                <span style={{ color: "#F97316" }}>Done Right.</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Dadzie Insurance Group guides families and individuals through ACA plans,
                short-term medical, supplemental, and life insurance — with licensed agents
                who explain every option in plain language.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact#form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-base transition-colors"
                  style={{ backgroundColor: "#0052CC", fontFamily: "var(--font-work-sans)" }}
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+18005551234"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-colors"
                  style={{ borderColor: "#0052CC", color: "#0052CC", fontFamily: "var(--font-work-sans)" }}
                >
                  <Phone className="w-4 h-4" />
                  (800) 555-1234
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["No-cost consultation", "Licensed in multiple states", "No pressure — ever"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#F97316" }} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: lead form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0052CC" }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TRUST_STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-work-sans)" }}>
                  {value}
                </p>
                <p className="text-blue-200 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────── */}
      <section id="plans" className="py-24" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
              Coverage Options
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
              Plans for Every Stage of Life
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">
              We work with top-rated carriers to find the right fit — not just the cheapest option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(({ icon: Icon, title, slug, description, badge }) => (
              <Link
                key={slug}
                href={`/plans#${slug}`}
                className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col"
              >
                {badge && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold text-white px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "#F97316" }}
                  >
                    {badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#EFF6FF" }}>
                  <Icon className="w-6 h-6" style={{ color: "#0052CC" }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors"
                  style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
                <p
                  className="mt-4 text-sm font-semibold flex items-center gap-1"
                  style={{ color: "#F97316", fontFamily: "var(--font-work-sans)" }}
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
              The DIG Process
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
              Simple. Transparent. Yours.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map(({ number, title, description }) => (
              <div key={number} className="text-center space-y-4">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-md"
                  style={{ backgroundColor: "#0052CC" }}
                >
                  <span className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-work-sans)" }}>
                    {number}
                  </span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-base"
              style={{ backgroundColor: "#F97316", fontFamily: "var(--font-work-sans)" }}
            >
              Start My Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY DIG ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0052CC" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#FED7AA" }}>
                Why Dadzie Insurance Group
              </p>
              <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-work-sans)" }}>
                Insurance Shouldn&apos;t Feel{" "}
                <span style={{ color: "#F97316" }}>Complicated.</span>
              </h2>
              <p className="text-blue-200 leading-relaxed">
                Most people feel lost when shopping for health insurance. Too many plans, too much
                jargon, and salespeople who just want to close. DIG is different — we take the time
                to understand your situation and explain every option until you feel confident.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white font-bold border-b-2 pb-0.5 hover:text-orange-300 transition-colors"
                style={{ borderColor: "#F97316", fontFamily: "var(--font-work-sans)" }}
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {WHY_DIG.map((item) => (
                <div key={item} className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#F97316" }} />
                  <span className="text-white font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEAD CAPTURE ─────────────────────────────────────── */}
      <section id="get-quote" className="py-24" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
                  Ready to Get Covered?
                </p>
                <h2 className="text-4xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                  Talk to a Licensed Agent Today
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  Our licensed agents are available Mon–Fri 8am–8pm ET and Sat 9am–5pm ET.
                  Call us directly or fill out the form and we&apos;ll call you.
                </p>
              </div>

              <div className="rounded-2xl p-6" style={{ backgroundColor: "#EFF6FF" }}>
                <a href="tel:+18005551234" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#0052CC" }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Call us directly</p>
                    <p
                      className="text-2xl font-bold group-hover:text-orange-500 transition-colors"
                      style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}
                    >
                      (800) 555-1234
                    </p>
                  </div>
                </a>
              </div>

              <div className="space-y-3">
                {[
                  { Icon: Users, text: "100% licensed, trained agents — no outsourced call centers" },
                  { Icon: Award, text: "Compliance-first approach following all state and federal guidelines" },
                  { Icon: Shield, text: "Your data is private — we never sell or share your information" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#F97316" }} />
                    <p className="text-gray-600 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
