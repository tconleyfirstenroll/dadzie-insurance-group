import Link from "next/link";
import { ArrowRight, Heart, Shield, Users, Award, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dadzie Insurance Group",
  description:
    "Learn about Dadzie Insurance Group — a compliance-driven, consumer-first health and life insurance brokerage founded in 2026.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make starts with the question: what's best for this client? We won't sell you a plan that doesn't fit your life.",
  },
  {
    icon: Shield,
    title: "Compliance-Driven",
    description:
      "We follow every state and federal guideline — not because we have to, but because doing it right builds lasting trust.",
  },
  {
    icon: Users,
    title: "Agent Excellence",
    description:
      "Our agents are rigorously trained and continuously developed. We invest in people who care about the clients they serve.",
  },
  {
    icon: Award,
    title: "Trusted Guidance",
    description:
      "We don't just sell insurance. We educate, advise, and stand by you through open enrollment, claims, and renewals.",
  },
];

const COMMITMENTS = [
  "Licensed in multiple states and growing",
  "Affiliated with BLADE Holdings LLC — financial stability backing",
  "Continuous agent training and compliance education",
  "Transparent commission structure — no hidden incentives",
  "Dedicated post-enrollment support line",
  "Annual policy review for every client",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#0052CC" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FED7AA" }}>
            Our Story
          </p>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-work-sans)" }}>
            Built to Do Insurance Right
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Dadzie Insurance Group was founded on a simple belief: every American deserves
            access to honest, expert guidance when it comes to protecting their health and family.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F97316" }}>
                Our Mission
              </p>
              <h2 className="text-3xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                Delivering Trusted, Compliant, and Customer‑Focused Insurance Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We expertly guide consumers through short-term medical, supplemental, ACA,
                and life insurance options — with transparency and zero pressure. Our mission
                isn&apos;t to close deals. It&apos;s to make sure you understand exactly what you&apos;re
                buying and why it&apos;s right for you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                DIG is a subsidiary of BLADE Holdings LLC — a holding company built around
                a strong investment in training, culture, and agent development. We believe
                great insurance outcomes start with great agents, and great agents start with
                great leadership.
              </p>
              <Link
                href="/contact#form"
                className="inline-flex items-center gap-2 font-bold text-sm"
                style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}
              >
                Get Started Today <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {COMMITMENTS.map((c) => (
                <div key={c} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: "#F8F9FA" }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#0052CC" }} />
                  <span className="text-gray-700 text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 space-y-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EFF6FF" }}>
                  <Icon className="w-6 h-6" style={{ color: "#0052CC" }} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0052CC" }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-work-sans)" }}>
            Ready to Work with a Team That Puts <span style={{ color: "#F97316" }}>You First?</span>
          </h2>
          <p className="text-blue-200 text-lg">
            Get a free, no-pressure consultation with a licensed DIG agent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold"
              style={{ backgroundColor: "#F97316", fontFamily: "var(--font-work-sans)" }}
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/plans"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 text-white"
              style={{ borderColor: "rgba(255,255,255,0.4)", fontFamily: "var(--font-work-sans)" }}
            >
              View Our Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
