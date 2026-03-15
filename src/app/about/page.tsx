import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About American Painting | Oklahoma City Painting Professionals",
  description:
    "Learn about American Painting, Oklahoma City's trusted painting professionals. Licensed, insured, and committed to quality craftsmanship for homes and businesses across the OKC metro.",
};

const values = [
  {
    title: "Quality Craftsmanship",
    description:
      "Every project receives meticulous attention to detail. We use premium paints and proven techniques to ensure lasting results.",
  },
  {
    title: "Honest Communication",
    description:
      "Transparent pricing, realistic timelines, and straightforward advice. No hidden fees or surprise charges.",
  },
  {
    title: "Reliability",
    description:
      "We show up on time, every time. Our reputation is built on consistency and dependability.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority. We are not finished until you are 100% happy with the results.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary-light to-secondary" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-[var(--font-dm-serif)] mb-6">
              About <span className="text-secondary">American Painting</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              American Painting is Oklahoma City&apos;s trusted painting
              company, dedicated to delivering quality craftsmanship and
              outstanding customer service on every project. From residential
              repaints to commercial build-outs, we take pride in the work we
              do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-6">
                Built on Quality, Driven by Results
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                American Painting was founded with a simple mission: provide
                Oklahoma City homeowners and businesses with painting services
                they can trust. No shortcuts, no excuses, just quality work at
                fair prices.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                From day one, we have been committed to using premium materials,
                proper preparation techniques, and skilled craftsmanship on
                every job. That dedication to excellence is what sets us apart
                in the OKC market.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, American Painting continues to grow through word-of-mouth
                referrals and repeat customers. We believe the best advertising
                is a job well done, and we work hard to earn that trust with
                every project we take on.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl" />
                <div className="relative bg-white rounded-xl p-10 shadow-lg text-center border border-gray-100">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-secondary/30">
                    <span className="text-4xl font-[var(--font-dm-serif)] text-secondary">
                      AP
                    </span>
                  </div>
                  <h3 className="text-2xl font-[var(--font-dm-serif)] text-primary mb-1">
                    American Painting
                  </h3>
                  <p className="text-accent font-semibold mb-4">
                    Oklahoma City, OK
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Professional painting services for homes and businesses
                    across the Oklahoma City metro area. Licensed, insured, and
                    committed to your complete satisfaction.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Licensed & Insured
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Serving the OKC Metro
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-6">
              What You Can Expect
            </h2>
            <div className="space-y-6 text-left">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-accent"
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
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    Detailed, Written Estimates
                  </h3>
                  <p className="text-gray-600">
                    Every project starts with a thorough on-site assessment and
                    a clear, detailed quote so you know exactly what to expect.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-accent"
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
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    Thorough Surface Preparation
                  </h3>
                  <p className="text-gray-600">
                    Proper prep is the difference between a paint job that lasts
                    and one that does not. We never skip this critical step.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-accent"
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
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    Premium Paints & Materials
                  </h3>
                  <p className="text-gray-600">
                    We use top-quality products from Sherwin-Williams and
                    Benjamin Moore for superior coverage and durability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-accent"
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
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    Clean, Respectful Work
                  </h3>
                  <p className="text-gray-600">
                    We treat your home or business with respect. We protect your
                    belongings, clean up daily, and leave your space spotless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-accent to-accent-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-[var(--font-dm-serif)] text-white mb-4">
            Ready to Work with OKC&apos;s Trusted Painting Professionals?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free estimate today and see the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+14058752475"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-accent transition-colors"
            >
              Call (405) 875-2475
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactForm />
    </>
  );
}
