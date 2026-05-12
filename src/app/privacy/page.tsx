import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dadzie Insurance Group",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 prose prose-blue">
        <h1 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last updated: May 2026</p>
        <p>
          Dadzie Insurance Group (&ldquo;DIG,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard the information you provide when
          visiting dadzieinsurancegroup.com or contacting our agents.
        </p>
        <h2 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>Information We Collect</h2>
        <p>
          We collect information you voluntarily provide, including your name, phone number, email address, ZIP code,
          and insurance interests. We do not sell your personal information to third parties.
        </p>
        <h2 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>How We Use Your Information</h2>
        <p>
          Information you submit is used solely to connect you with a licensed insurance agent and to provide
          personalized plan recommendations. By submitting a form on our site, you consent to being contacted
          by a DIG licensed agent via phone or email.
        </p>
        <h2 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>Contact</h2>
        <p>
          Questions about this policy? Email us at{" "}
          <a href="mailto:info@dadzieinsurancegroup.com" style={{ color: "#0052CC" }}>
            info@dadzieinsurancegroup.com
          </a>.
        </p>
      </div>
    </section>
  );
}
