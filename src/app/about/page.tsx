import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About American Painting | 25+ Years Family-Owned in Oklahoma City",
  description:
    "Learn about American Painting, a family-owned and operated painting company serving Oklahoma City for over 25 years. Licensed, insured, and committed to quality craftsmanship built on American values.",
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
      "We show up on time, every time. Our reputation is built on consistency and dependability over 25 years.",
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
      {/* Hero with background image */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
          alt="Beautiful American home"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/70" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-secondary-light to-secondary z-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-dm-serif)] text-white mb-6">
              25 Years of{" "}
              <span className="text-secondary">Family Values</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
              American Painting is a family-owned and operated painting company
              that has proudly served the Oklahoma City metro since 1999. Built
              on hard work, integrity, and a commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-6">
                Built on Quality, Driven by Family
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                American Painting was founded in 1999 with a simple idea: provide
                Oklahoma City homeowners and businesses with painting services
                they can trust. No shortcuts, no excuses, just quality work at
                fair prices from a family that takes pride in every brushstroke.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                For over 25 years, our family has been dedicated to using premium
                materials, proper preparation techniques, and skilled
                craftsmanship on every job. That dedication to excellence is what
                has kept our customers coming back generation after generation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, American Painting continues to grow through word-of-mouth
                referrals and repeat customers. We believe the best advertising
                is a job well done, and we work hard every day to earn the trust
                of our community.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                alt="Professional painter at work"
                loading="lazy"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-[var(--font-dm-serif)] text-secondary">25+</p>
                <p className="text-sm font-semibold uppercase tracking-wide">Years Serving OKC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all duration-300"
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
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Beautifully painted interior living room"
                loading="lazy"
                className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Promise
              </span>
              <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-8">
                What You Can Expect
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Detailed, Written Estimates",
                    desc: "Every project starts with a thorough on-site assessment and a clear, detailed quote so you know exactly what to expect.",
                  },
                  {
                    title: "Thorough Surface Preparation",
                    desc: "Proper prep is the difference between a paint job that lasts and one that does not. We never skip this critical step.",
                  },
                  {
                    title: "Premium Paints & Materials",
                    desc: "We use top-quality products from Sherwin-Williams and Benjamin Moore for superior coverage and durability.",
                  },
                  {
                    title: "Clean, Respectful Work",
                    desc: "We treat your home or business with respect. We protect your belongings, clean up daily, and leave your space spotless.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
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
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Beautiful home exterior"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-accent-warm/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-white mb-4">
            Ready to Work with OKC&apos;s Trusted Painting Family?
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Get your free estimate today and see the difference 25 years of
            family-owned quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-accent px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-50 hover:shadow-xl transition-all"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+14058752475"
              className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white hover:text-accent transition-all"
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
