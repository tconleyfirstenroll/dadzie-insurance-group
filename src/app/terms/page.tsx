import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Dadzie Insurance Group",
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 prose prose-blue">
        <h1 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>Terms of Use</h1>
        <p className="text-gray-500 text-sm">Last updated: May 2026</p>
        <p>
          By accessing dadzieinsurancegroup.com, you agree to these Terms of Use. This website is operated by
          Dadzie Insurance Group, a licensed insurance brokerage and subsidiary of BLADE Holdings LLC.
        </p>
        <h2 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>Informational Use Only</h2>
        <p>
          The content on this website is for informational purposes only and does not constitute a binding
          offer or contract of insurance. Plan availability, pricing, and features vary by state and individual
          circumstances.
        </p>
        <h2 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>Licensing</h2>
        <p>
          Dadzie Insurance Group agents are licensed insurance professionals. License numbers are available
          upon request. Insurance products are offered through licensed carriers approved in each state.
        </p>
        <h2 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>Contact</h2>
        <p>
          Questions?{" "}
          <a href="mailto:info@dadzieinsurancegroup.com" style={{ color: "#0052CC" }}>
            info@dadzieinsurancegroup.com
          </a>
        </p>
      </div>
    </section>
  );
}
