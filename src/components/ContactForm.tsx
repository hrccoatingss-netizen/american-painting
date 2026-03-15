"use client";

import { useState } from "react";

const serviceOptions = [
  "Interior House Painting",
  "Exterior House Painting",
  "Commercial Painting",
  "Cabinet Refinishing",
  "Deck & Fence Staining",
  "Drywall Repair & Texturing",
  "Color Consultation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-surface py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-secondary/20">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-[var(--font-dm-serif)] text-primary mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600">
              We&apos;ve received your request. A member of our team will
              contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-surface py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-gray-600 text-lg">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a detailed estimate.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-primary mb-2"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-primary mb-2"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors"
                placeholder="Smith"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-primary mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-primary mb-2"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors"
                placeholder="(405) 555-0123"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors bg-white"
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors resize-none"
              placeholder="Tell us about your project: rooms to paint, square footage, timeline, etc."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-accent to-accent-warm text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Request Free Estimate"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Or call us directly at{" "}
            <a
              href="tel:+14058752475"
              className="text-accent font-semibold hover:underline"
            >
              (405) 875-2475
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
