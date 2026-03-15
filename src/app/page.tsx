import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Interior Painting",
    description: "Transform your living spaces with expert interior painting. From single rooms to entire homes, we deliver flawless finishes every time.",
    href: "/services/interior-painting",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    description: "Protect and beautify your home with premium exterior painting built to withstand the Las Vegas desert climate.",
    href: "/services/exterior-painting",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Stucco Repair",
    description: "Professional stucco crack repair and patching. We match textures seamlessly to restore your home's exterior to like-new condition.",
    href: "/services/stucco-repair",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Epoxy Floor Coatings",
    description: "Durable, professional-grade epoxy coatings for garages, workshops, and commercial spaces. Long-lasting protection with a sleek finish.",
    href: "/services/epoxy-coatings",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Pressure Washing",
    description: "Restore driveways, patios, walkways, and exterior surfaces to their original clean condition with professional pressure washing.",
    href: "/services/pressure-washing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "HOA Services",
    description: "Trusted by HOAs and property managers across Las Vegas. Large-scale exterior painting, touch-ups, and maintenance programs.",
    href: "/services/hoa-services",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const whyChooseUs = [
  {
    title: "40+ Years Experience",
    description: "Painting Las Vegas homes since 1986. Four decades of knowledge, techniques, and trust built one project at a time.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "BBB A+ Accredited",
    description: "Accredited by the Better Business Bureau since 1986 with an A+ rating. Your satisfaction is guaranteed.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "11,000+ Homes Painted",
    description: "Over eleven thousand Las Vegas homes trust American Painting. Our portfolio speaks for itself.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Golden Apple Award",
    description: "Proud recipient of the BBB Golden Apple Award in 2002, recognizing excellence in business ethics and customer service.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "American Painting did an incredible job on our entire home exterior. Brian and his team were professional, on time, and the quality was outstanding. After 40 years in business, you can tell they know exactly what they are doing.",
    source: "Angi",
  },
  {
    name: "Robert T.",
    rating: 5,
    text: "We have used American Painting for three different projects now. Interior repainting, stucco repair, and garage epoxy. Every single time, the work has been top-notch. Highly recommend to anyone in Las Vegas.",
    source: "Yelp",
  },
  {
    name: "Linda K.",
    rating: 5,
    text: "Our HOA hired American Painting for a large community repaint project. They handled everything professionally and finished ahead of schedule. The BBB A+ rating is well-deserved. Will definitely use them again.",
    source: "BBB",
  },
];

const serviceAreas = [
  "Las Vegas",
  "Henderson",
  "North Las Vegas",
  "Summerlin",
  "Spring Valley",
  "Enterprise",
  "Paradise",
  "Whitney",
  "Sunrise Manor",
  "Winchester",
];

const faqs = [
  {
    question: "How long has American Painting been in business?",
    answer: "American Painting LLC has been serving Las Vegas homeowners since 1986. That is over 40 years of trusted painting experience, with more than 11,000 homes painted. We are BBB A+ accredited and have received the Golden Apple Award for business excellence.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free, no-obligation estimates for all painting projects. Simply call us at (702) 259-6006 or fill out our contact form, and we will schedule a convenient time to assess your project and provide a detailed quote.",
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Las Vegas and the greater Las Vegas metro area, including Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, and surrounding communities.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, American Painting LLC is fully licensed and insured. We have been BBB A+ accredited since 1986, which requires maintaining proper licensing, insurance, and a commitment to resolving any customer concerns.",
  },
  {
    question: "How long does a typical painting project take?",
    answer: "Project timelines vary based on scope. A single room interior paint job typically takes 1-2 days, while a full exterior can take 3-7 days depending on the size of the home. We will provide a detailed timeline with your estimate.",
  },
  {
    question: "Do you handle stucco repair before painting?",
    answer: "Absolutely. Stucco repair is one of our specialties. We patch cracks, repair damage, and match existing textures before applying paint. This ensures a seamless, long-lasting finish that protects your home from the harsh desert climate.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                BBB A+ Accredited Since 1986
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Las Vegas&apos;s Most Trusted Painters{" "}
              <span className="text-accent">Since 1986</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Over 40 years of quality craftsmanship. 11,000+ homes painted.
              BBB Golden Apple Award winner. From interior repaints to full exterior
              transformations, American Painting delivers results that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-dark transition-colors text-center"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+17022596006"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors text-center"
              >
                Call (702) 259-6006
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-accent">40+</p>
              <p className="text-lg font-semibold text-primary mt-2">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-accent">11,000+</p>
              <p className="text-lg font-semibold text-primary mt-2">Homes Painted</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-accent">A+</p>
              <p className="text-lg font-semibold text-primary mt-2">BBB Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            America&apos;s Painting Standards, Las Vegas Roots
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Four decades of dedication to quality, honesty, and craftsmanship.
            When your home deserves the best, call the painters Las Vegas trusts most.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Schedule Your Free Estimate
          </Link>
        </div>
      </section>

      {/* About / Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Meet the Team Behind 40 Years of Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded by Brian J. Higgs in 1986, American Painting LLC has grown from a small
                family operation into one of Las Vegas&apos;s most respected painting contractors.
                With over 11,000 homes painted and a BBB A+ rating maintained for nearly four
                decades, our commitment to quality speaks for itself.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We specialize in everything from interior and exterior painting to stucco repairs,
                epoxy floor coatings, and large-scale HOA projects. Every job gets the same
                attention to detail, whether it is a single room or an entire community.
              </p>
              <Link
                href="/about"
                className="text-accent font-bold text-lg hover:underline inline-flex items-center gap-2"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">BH</span>
                </div>
                <h3 className="text-xl font-bold text-primary">Brian J. Higgs</h3>
                <p className="text-accent font-semibold mb-3">Owner & Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  40+ years of painting experience in Las Vegas. Brian founded American Painting
                  in 1986 and has personally overseen thousands of projects, building a reputation
                  for quality, reliability, and integrity.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  BBB Golden Apple Award 2002
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive painting and coating services for Las Vegas homes, businesses, and communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-accent font-semibold text-sm gap-1">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Why Las Vegas Homeowners Choose Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              When it comes to painting your home, experience and trust matter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all"
              >
                <div className="text-accent mx-auto mb-4 inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Trusted by 11,000+ Las Vegas homeowners with a 5.0 rating on Angi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{review.name}</span>
                  <span className="text-sm text-gray-400">via {review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Service Areas
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Proudly serving the Las Vegas metro area and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-gray-light text-primary px-5 py-2.5 rounded-full font-semibold text-sm border border-gray-200 hover:border-accent hover:text-accent transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-light py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about our painting services.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
