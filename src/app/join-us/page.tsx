"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, CheckCircle, DollarSign, BookOpen, Users,
  TrendingUp, Shield, Award, Loader2, Star, Zap, Heart,
} from "lucide-react";
import { AgentAvatar } from "@/components/AgentAvatar";
import type { Metadata } from "next";

const TESTIMONIALS = [
  {
    variant: "marcus" as const,
    name: "Marcus T.",
    title: "Licensed Agent",
    location: "Atlanta, GA",
    tenure: "1 year at DIG",
    stars: 5,
    quote:
      "Joining DIG was the best career decision I've ever made. The training program gave me everything I needed to pass my license exam and hit the ground running. Leadership actually cares about your growth — not just your numbers. I was writing policies within my first month and haven't looked back.",
  },
  {
    variant: "priya" as const,
    name: "Priya S.",
    title: "Licensed Agent",
    location: "Miami, FL",
    tenure: "8 months at DIG",
    stars: 5,
    quote:
      "I came from retail with zero insurance experience. DIG covered my licensing fees, paid me during training, and connected me with clients who genuinely needed help. The culture is warm and inclusive — my manager checks in on me every week, not to micromanage, but because they genuinely want me to succeed.",
  },
  {
    variant: "derek" as const,
    name: "Derek M.",
    title: "Senior Agent",
    location: "Charlotte, NC",
    tenure: "2 years at DIG",
    stars: 5,
    quote:
      "I've worked at two other brokerages, and nothing compares to DIG. Two years in and I'm already mentoring newer agents. The compliance culture here is real — we're taught to put the client first, always. The earning potential is legitimate if you're willing to be consistent and do the work.",
  },
];

const WHY_JOIN = [
  {
    icon: BookOpen,
    title: "We Pay for Your License",
    description:
      "DIG covers 100% of your pre-licensing course, exam fees, and state licensing costs. We pay you during training. No out-of-pocket to start your new career.",
  },
  {
    icon: DollarSign,
    title: "Uncapped Earning Potential",
    description:
      "Year 1 earnings typically range from $58,000 to $62,000. Top performers reach $75,000 or more. Base salary plus commissions plus bonuses — the more clients you help, the more you earn.",
  },
  {
    icon: Zap,
    title: "Real Leads. No Cold Calling.",
    description:
      "We invest in marketing so you don't have to prospect from scratch. You focus on serving clients — we make sure the clients come to you.",
  },
  {
    icon: TrendingUp,
    title: "Promote From Within",
    description:
      "Over half of our leadership started as agents. We actively develop people who want to grow into training, management, and leadership roles.",
  },
  {
    icon: Users,
    title: "Genuine Team Culture",
    description:
      "No cutthroat competition. Our agents collaborate, share best practices, and lift each other up. We're serious about building a team people actually enjoy working with.",
  },
  {
    icon: Shield,
    title: "Compliance & Integrity First",
    description:
      "We train you to do the right thing for every client, every time. Our compliance-first culture protects you, your clients, and the DIG reputation.",
  },
];

const BENEFITS = [
  { category: "Compensation", items: ["Competitive base salary", "Uncapped commission structure", "Performance bonuses", "Renewal commissions", "Year 1: $58K–$62K typical", "Top performers: $75,000+"] },
  { category: "Training & Growth", items: ["Paid pre-licensing course", "All exam & licensing fees covered", "Ongoing product training", "Leadership development track", "Mentorship program"] },
  { category: "Support & Tools", items: ["Qualified leads provided", "CRM & quoting technology", "Dedicated compliance support", "Manager weekly check-ins", "Agent resource library"] },
  { category: "Work & Culture", items: ["Remote-friendly options", "Work-life balance focus", "Inclusive team environment", "Regular team events", "Recognition & rewards"] },
];

const PATHS = [
  {
    icon: Star,
    title: "New to Insurance",
    description:
      "No experience? No problem. We'll cover your licensing, train you from day one, and set you up for success. Many of our best agents started exactly where you are.",
    cta: "Start Your Career",
  },
  {
    icon: Award,
    title: "Already Licensed",
    description:
      "Bring your experience to a brokerage that values it. Access top carriers, real leads, competitive comp, and a culture that lets you do your best work.",
    cta: "Join Our Team",
  },
  {
    icon: Heart,
    title: "Career Changers",
    description:
      "Coming from customer service, retail, or another field? Your people skills are exactly what we need. We provide everything else — training, licensing, and support.",
    cta: "Make the Switch",
  },
];

function ApplyForm() {
  const [form, setForm] = useState({ name: "", email: "", state: "", experience: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-3">
        <CheckCircle className="w-16 h-16 mx-auto" style={{ color: "#0052CC" }} />
        <h3 className="text-xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
          Application Received!
        </h3>
        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          Our recruiting team will review your information and reach out within 2 business days.
        </p>
      </div>
    );
  }

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
          <input className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Smith" required />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
          <input type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@email.com" required />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">State *</label>
          <input className={inputClass} value={form.state} onChange={(e) => update("state", e.target.value)} placeholder="e.g. Georgia" required />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Insurance Experience</label>
          <select className={inputClass} value={form.experience} onChange={(e) => update("experience", e.target.value)}>
            <option value="">Select…</option>
            <option>No experience — I&apos;m brand new</option>
            <option>Licensed but no experience</option>
            <option>1–2 years experience</option>
            <option>3–5 years experience</option>
            <option>5+ years experience</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Tell us about yourself (optional)</label>
        <textarea
          className={inputClass}
          rows={3}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="What interests you about insurance? What are your career goals?"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
        style={{ backgroundColor: submitting ? "#999" : "#0052CC", fontFamily: "var(--font-work-sans)" }}
      >
        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" />Submitting…</> : <>Submit Application <ArrowRight className="w-4 h-4" /></>}
      </button>
      <p className="text-xs text-gray-400 leading-relaxed">
        By submitting, you consent to being contacted by a Dadzie Insurance Group recruiting team member via email or phone. Message and data rates may apply. Reply <strong>STOP</strong> to opt out of text messages at any time.
      </p>
    </form>
  );
}

export default function JoinUsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#0052CC" }} className="py-24 overflow-hidden relative">
        {/* Decorative arc */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: "#F97316", transform: "translate(40%, -40%)" }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: "white", transform: "translate(-30%, 40%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: "rgba(249,115,22,0.15)", color: "#FED7AA" }}
          >
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            Now Recruiting — Licensed &amp; Pre-Licensed Agents
          </div>
          <h1
            className="text-5xl lg:text-6xl font-black text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            Build Your Career.<br />
            <span style={{ color: "#F97316" }}>Protect Your Community.</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Join a growing team of licensed agents at Dadzie Insurance Group — where your
            success is our mission and your clients always come first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-colors"
              style={{ backgroundColor: "#F97316", fontFamily: "var(--font-work-sans)" }}
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#why-dig"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 text-white transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.4)", fontFamily: "var(--font-work-sans)" }}
            >
              Learn About Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#F97316" }}>
        <div className="max-w-7xl mx-auto px-6 py-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "$58K–$75K+", label: "Year 1 Earnings Range" },
              { value: "100%", label: "Paid Licensing & Training" },
              { value: "Day 1", label: "Leads Provided" },
              { value: "50%+", label: "Leadership Promoted From Within" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-work-sans)" }}>{value}</p>
                <p className="text-orange-100 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE'RE LOOKING FOR ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
              You Belong Here
            </p>
            <h2 className="text-4xl font-bold mb-3" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
              We Hire People, Not Just Résumés
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Whether you&apos;re brand new to insurance or a seasoned agent looking for a better home, DIG has a place for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PATHS.map(({ icon: Icon, title, description, cta }) => (
              <div key={title} className="rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all group" style={{ backgroundColor: "#F8F9FA" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm" style={{ backgroundColor: "#0052CC" }}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all"
                  style={{ color: "#F97316", fontFamily: "var(--font-work-sans)" }}
                >
                  {cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN DIG ── */}
      <section id="why-dig" className="py-24 scroll-mt-24" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
              The DIG Difference
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
              Why Agents Choose DIG
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_JOIN.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EFF6FF" }}>
                  <Icon className="w-5 h-5" style={{ color: "#0052CC" }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
              Hear It From the Team
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
              What Our Agents Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ variant, name, title, location, tenure, stars, quote }) => (
              <div
                key={name}
                className="rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col gap-5"
                style={{ backgroundColor: "#F8F9FA" }}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F97316" }} />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">&ldquo;{quote}&rdquo;</p>
                {/* Agent info */}
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                  <AgentAvatar variant={variant} size={56} />
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>{name}</p>
                    <p className="text-xs text-gray-500">{title} · {location}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#F97316" }}>{tenure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL BENEFITS ── */}
      <section style={{ backgroundColor: "#0052CC" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FED7AA" }}>
              What You Get
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-work-sans)" }}>
              A Complete Package from Day One
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(({ category, items }) => (
              <div key={category} className="rounded-2xl p-6 space-y-4" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <h3 className="font-bold text-sm uppercase tracking-wider" style={{ color: "#F97316", fontFamily: "var(--font-work-sans)" }}>
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-blue-100">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#F97316" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE SECTION ── */}
      <section className="py-24" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F97316" }}>
                Our Culture
              </p>
              <h2 className="text-4xl font-bold" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                Five Letters That Define How We Work
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At DIG, culture isn&apos;t a poster on the wall. It&apos;s how we actually operate — from the way
                leadership communicates to the way agents treat every client. We&apos;re building something
                special, and we want people who want to be part of it.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 font-bold text-sm"
                style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}
              >
                Join the Team <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-3">
              {[
                { letter: "F", word: "Family", text: "We invest in each other. Your win is our win." },
                { letter: "F", word: "Focused", text: "Client-first in every conversation, every time." },
                { letter: "F", word: "Fair", text: "Transparent compensation. No hidden games." },
                { letter: "I", word: "Integrity", text: "We do the right thing — especially when it's hard." },
                { letter: "G", word: "Growth", text: "We promote from within and invest in your career." },
              ].map(({ letter, word, text }) => (
                <div key={word} className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-black text-lg"
                    style={{ backgroundColor: "#0052CC", fontFamily: "var(--font-work-sans)" }}
                  >
                    {letter}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>{word}</p>
                    <p className="text-gray-500 text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY FORM ── */}
      <section id="apply" className="py-24 scroll-mt-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F97316" }}>
                  Ready to Start?
                </p>
                <h2 className="text-4xl font-bold mb-3" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                  Apply to Join DIG
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Fill out this short form and our recruiting team will reach out within two
                  business days to walk you through next steps — no commitment required.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "2-minute application — no resume required to start",
                  "Our team reaches out within 2 business days",
                  "We'll explain licensing, training, and compensation in full",
                  "No experience required — we train you from scratch",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#F97316" }} />
                    <p className="text-gray-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-6 space-y-2" style={{ backgroundColor: "#EFF6FF" }}>
                <p className="font-bold text-sm" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                  Already Licensed?
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Let us know your license status in the application and we&apos;ll fast-track your
                  onboarding to get you writing business as quickly as possible.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-1" style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>
                Agent Interest Form
              </h3>
              <p className="text-gray-400 text-sm mb-6">Tell us a little about yourself to get started.</p>
              <ApplyForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
