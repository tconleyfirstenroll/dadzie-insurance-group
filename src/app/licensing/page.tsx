import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licensing | Dadzie Insurance Group",
};

export default function LicensingPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 prose prose-blue">
        <h1 style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}>Licensing</h1>
        <p>
          Dadzie Insurance Group is a licensed insurance brokerage. Our agents hold active licenses
          in all states where they conduct business. Insurance license numbers are available upon
          request by contacting us at{" "}
          <a href="mailto:info@dadzieinsurancegroup.com" style={{ color: "#0052CC" }}>
            info@dadzieinsurancegroup.com
          </a>.
        </p>
        <p>
          Products and plan availability vary by state. Not all carriers and plans are available in
          every state. This website does not constitute an offer of insurance in any jurisdiction
          where DIG is not licensed.
        </p>
        <p className="text-sm text-gray-500">
          Dadzie Insurance Group is a subsidiary of BLADE Holdings LLC. Established 2026.
        </p>
      </div>
    </section>
  );
}
