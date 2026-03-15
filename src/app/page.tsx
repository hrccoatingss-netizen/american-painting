import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Interior House Painting",
    description:
      "Transform your living spaces with expert interior painting. Flawless walls, smooth ceilings, and crisp trim work that brings your vision to life.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Exterior House Painting",
    description:
      "Protect and beautify your home with premium exterior painting built to withstand Oklahoma's weather. Lasting curb appeal you can be proud of.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Commercial Painting",
    description:
      "Professional painting for offices, retail spaces, restaurants, and commercial properties. Minimal disruption, maximum impact for your business.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Cabinet Refinishing",
    description:
      "Give your kitchen a fresh, modern look without the cost of a full remodel. Expert cabinet painting and refinishing that transforms any space.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: "Deck & Fence Staining",
    description:
      "Restore and protect your outdoor wood surfaces with professional staining. We prep, clean, and apply premium stains that last through Oklahoma seasons.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Drywall Repair & Texturing",
    description:
      "Seamless drywall repairs, patching, and texture matching. We fix the damage first, then paint for a flawless, like-new finish every time.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Estimate",
    description:
      "We visit your property, discuss your vision, and provide a detailed, no-obligation quote.",
  },
  {
    step: "02",
    title: "Prep & Protect",
    description:
      "Thorough surface preparation, masking, and protection of your furniture and landscaping.",
  },
  {
    step: "03",
    title: "Professional Painting",
    description:
      "Our skilled painters apply premium paints with expert technique for a flawless finish.",
  },
  {
    step: "04",
    title: "Quality Check",
    description:
      "Final walkthrough with you to ensure every detail meets our high standards and your expectations.",
  },
];

const whyChooseUs = [
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your complete protection and peace of mind on every project.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Premium Materials",
    description:
      "We use top-tier Sherwin-Williams and Benjamin Moore paints for lasting, beautiful results.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "OKC Local Team",
    description:
      "We live and work right here in Oklahoma City. We know the local climate and what works best.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    title: "Guaranteed Results",
    description:
      "We stand behind every project. If you are not 100% satisfied, we will make it right.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "Mark D.",
    rating: 5,
    text: "American Painting did an outstanding job on our entire home exterior. The crew was professional, showed up on time every day, and the final result exceeded our expectations. Our house looks brand new. Highly recommend them to anyone in OKC.",
    source: "Google",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "We hired American Painting for our kitchen cabinets and the interior of our living room and hallways. The attention to detail was incredible. Clean lines, no drips, and they finished ahead of schedule. Already planning to have them back for the bedrooms.",
    source: "Google",
  },
  {
    name: "David & Karen W.",
    rating: 5,
    text: "After getting three quotes, we went with American Painting and could not be happier. Fair pricing, excellent communication throughout the project, and the quality speaks for itself. They even helped us pick the perfect color palette for our home.",
    source: "Google",
  },
];

const serviceAreas = [
  "Oklahoma City",
  "Edmond",
  "Norman",
  "Moore",
  "Midwest City",
  "Del City",
  "Yukon",
  "Bethany",
  "Mustang",
  "Nichols Hills",
];

const faqs = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we provide free, no-obligation estimates for all painting projects. Simply call us at (405) 875-2475 or fill out our contact form, and we will schedule a convenient time to assess your project and provide a detailed quote.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Oklahoma City and the greater OKC metro area, including Edmond, Norman, Moore, Midwest City, Del City, Yukon, Bethany, Mustang, Nichols Hills, and surrounding communities.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, American Painting is fully licensed and insured. We carry general liability insurance and workers compensation to protect you and your property throughout every project.",
  },
  {
    question: "How long does a typical painting project take?",
    answer:
      "Project timelines vary based on scope. A single room interior paint job typically takes 1-2 days, while a full exterior can take 3-7 days depending on the size of the home. We will provide a detailed timeline with your estimate.",
  },
  {
    question: "What type of paint do you use?",
    answer:
      "We use premium paints from trusted brands like Sherwin-Williams and Benjamin Moore. These provide superior coverage, durability, and color retention. We will help you choose the right product for your specific project and budget.",
  },
  {
    question: "Do you help with color selection?",
    answer:
      "Absolutely. Choosing the right colors can be overwhelming, so we offer color consultation to help you find the perfect palette for your space. We can bring sample swatches and make recommendations based on your style and lighting.",
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

      {/* ==================== HERO ==================== */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary-light to-secondary" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <svg
                className="w-4 h-4 text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-white/90 tracking-wide">
                Oklahoma City&apos;s Trusted Painting Professionals
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-dm-serif)] text-white leading-tight mb-6">
              Quality You Can Trust.{" "}
              <span className="text-secondary">Results You Can See.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Professional painting services for Oklahoma City homes and
              businesses. From fresh interiors to stunning exteriors, we deliver
              craftsmanship that stands the test of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-accent to-accent-warm text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-accent/30 transition-all text-center animate-pulse-glow"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+14058752475"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (405) 875-2475
              </a>
            </div>

            {/* Social proof badges */}
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-secondary"
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
                <span className="font-semibold">Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-secondary"
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
                <span className="font-semibold">Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-semibold">OKC Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary">
                OKC
              </p>
              <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                Proud
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary">
                Pro
              </p>
              <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                Results
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary">
                100%
              </p>
              <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                Satisfaction
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary">
                Free
              </p>
              <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                Estimates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-4">
              Our Painting Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive painting and finishing services for Oklahoma City
              homes, businesses, and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent relative overflow-hidden"
              >
                {/* Red-to-navy gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-warm to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-accent mb-5 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-4">
              Our Simple Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From your first call to the final walkthrough, we make the
              painting process easy and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className="text-center relative">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-secondary/40 to-transparent" />
                )}
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-5 flex items-center justify-center">
                  <span className="text-lg font-bold text-secondary">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="bg-surface-alt py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-6">
                Oklahoma City&apos;s Painting Professionals
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                American Painting is an established Oklahoma City painting
                company dedicated to quality craftsmanship and customer
                satisfaction. We take pride in every project, whether it is a
                single room refresh or a complete commercial build-out.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As a local OKC team, we understand the unique challenges of
                Oklahoma&apos;s climate and use premium materials and proven
                techniques to ensure your paint job looks great and lasts for
                years. Our commitment to professionalism, reliability, and
                outstanding results has made us a trusted name in the community.
              </p>
              <Link
                href="/about"
                className="text-accent font-bold text-lg hover:underline inline-flex items-center gap-2 group"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl" />
                <div className="relative bg-white rounded-xl p-10 shadow-lg text-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-secondary/30">
                    <span className="text-3xl font-[var(--font-dm-serif)] text-secondary">
                      AP
                    </span>
                  </div>
                  <h3 className="text-2xl font-[var(--font-dm-serif)] text-primary mb-1">
                    American Painting
                  </h3>
                  <p className="text-accent font-semibold mb-4">
                    Oklahoma City, OK
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Professional, reliable, and committed to delivering
                    exceptional results on every painting project. Your
                    satisfaction is our guarantee.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                    <span className="bg-surface-alt text-primary px-3 py-1.5 rounded-full font-semibold">
                      Licensed
                    </span>
                    <span className="bg-surface-alt text-primary px-3 py-1.5 rounded-full font-semibold">
                      Insured
                    </span>
                    <span className="bg-surface-alt text-primary px-3 py-1.5 rounded-full font-semibold">
                      Local
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="bg-primary py-20 sm:py-24 relative overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-white mb-4">
              Why OKC Homeowners Choose Us
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              When it comes to painting your home or business, experience and
              trust matter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all"
              >
                <div className="text-secondary mx-auto mb-4 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REVIEWS ==================== */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real reviews from real Oklahoma City homeowners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{review.name}</span>
                  <span className="text-sm text-gray-400">
                    via {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Where We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-4">
            Service Areas
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Proudly serving the Oklahoma City metro area and surrounding
            communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-surface text-primary px-5 py-2.5 rounded-full font-semibold text-sm border border-gray-200 hover:border-accent hover:text-accent transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="bg-gradient-to-r from-accent to-accent-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate today. Let us show you why
            Oklahoma City homeowners trust American Painting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+14058752475"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-accent transition-colors"
            >
              Call (405) 875-2475
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="bg-surface py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-dm-serif)] text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about our painting
              services.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <ContactForm />
    </>
  );
}
