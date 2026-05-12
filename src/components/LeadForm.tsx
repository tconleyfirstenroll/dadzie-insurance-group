"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  planType: string;
}

const PLAN_OPTIONS = [
  "ACA / Marketplace Plan",
  "Short-Term Medical",
  "Supplemental Insurance",
  "Life Insurance",
  "Not Sure — Help Me Choose",
];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    planType: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.zip) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
        <CheckCircle className="w-14 h-14" style={{ color: "#0052CC" }} />
        <h3
          className="text-xl font-bold"
          style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}
        >
          You&apos;re all set!
        </h3>
        <p className="text-gray-600 text-sm max-w-xs">
          A licensed agent will reach out within one business day to walk you through your options.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!compact && (
        <div>
          <h3
            className="text-2xl font-bold mb-1"
            style={{ color: "#0052CC", fontFamily: "var(--font-work-sans)" }}
          >
            Get Your Free Quote
          </h3>
          <p className="text-gray-500 text-sm">
            A licensed agent will contact you — no pressure, no obligation.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
        <input
          type="tel"
          className={inputClass}
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="(555) 000-0000"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className={inputClass}
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="jane@email.com"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            ZIP Code <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            maxLength={5}
            className={inputClass}
            value={form.zip}
            onChange={(e) => update("zip", e.target.value)}
            placeholder="30301"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Plan Interest</label>
          <select
            className={inputClass}
            value={form.planType}
            onChange={(e) => update("planType", e.target.value)}
          >
            <option value="">Select…</option>
            {PLAN_OPTIONS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
        style={{
          backgroundColor: submitting ? "#999" : "#0052CC",
          fontFamily: "var(--font-work-sans)",
        }}
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Request a Free Consultation"
        )}
      </button>

      <p className="text-xs text-gray-400 leading-relaxed">
        By submitting this form, you consent to being contacted by a licensed insurance agent.
        We never sell your information to third parties.
      </p>
    </form>
  );
}
