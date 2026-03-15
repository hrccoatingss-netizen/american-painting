import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About American Painting LLC | 40+ Years Serving Las Vegas",
  description:
    "Learn about American Painting LLC, founded by Brian J. Higgs in 1986. Over 40 years of painting excellence in Las Vegas with 11,000+ homes painted and BBB A+ accreditation.",
};

const milestones = [
  { year: "1986", event: "Brian J. Higgs founds American Painting LLC in Las Vegas" },
  { year: "1986", event: "Receives BBB accreditation with A+ rating" },
  { year: "2002", event: "Awarded the BBB Golden Apple Award for business excellence" },
  { year: "2010", event: "Surpasses 5,000 homes painted milestone" },
  { year: "2020", event: "Reaches 10,000+ homes painted" },
  { year: "2026", event: "Celebrating 40 years of service with 11,000+ homes painted" },
];

const values = [
  {
    title: "Quality Craftsmanship",
    description: "Every project receives meticulous attention to detail. We use premium paints and proven techniques to ensure lasting results.",
  },
  {
    title: "Honest Communication",
    description: "Transparent pricing, realistic timelines, and straightforward advice. No hidden fees or surprise charges.",
  },
  {
    title: "Reliability",
    description: "We show up on time, every time. Our 40-year track record is built on consistency and dependability.",
  },
  {
    title: "Customer Satisfaction",
    description: "Your satisfaction is our top priority. We are not finished until you are 100% happy with the results.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              About <span className="text-accent">American Painting</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              For over 40 years, American Painting LLC has been the name Las Vegas homeowners
              trust for quality painting services. Founded in 1986 by Brian J. Higgs, we have
              painted more than 11,000 homes and earned the BBB Golden Apple Award for
              business excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                When Brian J. Higgs started American Painting in 1986, his goal was simple: provide
                Las Vegas homeowners with painting services they could trust. No shortcuts, no
                excuses, just quality work at fair prices.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                That commitment to excellence quickly set American Painting apart. Within the first
                year, we earned BBB accreditation with an A+ rating, a distinction we have maintained
                for nearly four decades. In 2002, the Better Business Bureau recognized our dedication
                with the prestigious Golden Apple Award.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, with over 11,000 homes painted, American Painting LLC remains a family-run
                business built on the same values Brian established on day one: quality, honesty,
                and a handshake you can count on.
              </p>
            </div>
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-28 h-28 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">BH</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">Brian J. Higgs</h3>
                <p className="text-accent font-semibold mb-4">Owner & Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  With over 40 years in the painting industry, Brian has personally overseen
                  thousands of projects across the Las Vegas valley. His hands-on approach and
                  commitment to quality are the foundation of American Painting&apos;s reputation.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    BBB A+ Accredited Since 1986
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Golden Apple Award 2002
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-14">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-14">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 text-right">
                  <span className="text-lg font-bold text-accent">{milestone.year}</span>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2" />
                  {i < milestones.length - 1 && (
                    <div className="absolute top-5 left-1 w-0.5 h-full bg-gray-200" />
                  )}
                </div>
                <p className="text-gray-600 text-lg pt-0.5">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work with Las Vegas&apos;s Most Trusted Painters?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 11,000+ satisfied homeowners. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+17022596006"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-accent transition-colors"
            >
              Call (702) 259-6006
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactForm />
    </>
  );
}
