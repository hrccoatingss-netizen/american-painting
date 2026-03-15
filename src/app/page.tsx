import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Interior Residential",
    description:
      "Transform your living spaces with expert interior painting. Flawless walls, smooth ceilings, and crisp trim work that brings your vision to life.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Exterior Residential",
    description:
      "Protect and beautify your home with premium exterior painting built to withstand Oklahoma weather. Lasting curb appeal you can be proud of.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Commercial Painting",
    description:
      "Professional painting for offices, retail spaces, restaurants, and commercial properties. Minimal disruption, maximum impact.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "Cabinet Painting",
    description:
      "Give your kitchen a fresh, modern look without the cost of a full remodel. Expert cabinet painting and refinishing that transforms any space.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    title: "Drywall Repair",
    description:
      "Seamless drywall repairs, patching, and texture matching. We fix the damage first, then paint for a flawless, like-new finish every time.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
  },
  {
    title: "Power Washing",
    description:
      "Restore your home's exterior surfaces with professional power washing. Driveways, siding, decks, and patios cleaned and prepped for lasting results.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
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

const reviews = [
  {
    name: "Mark D.",
    location: "Oklahoma City, OK",
    rating: 5,
    text: "American Painting did an outstanding job on our entire home exterior. The crew was professional, showed up on time every day, and the final result exceeded our expectations. Our house looks brand new. Highly recommend them to anyone in OKC.",
    source: "Google",
  },
  {
    name: "Jennifer L.",
    location: "Edmond, OK",
    rating: 5,
    text: "We hired American Painting for our kitchen cabinets and the interior of our living room and hallways. The attention to detail was incredible. Clean lines, no drips, and they finished ahead of schedule. Already planning to have them back for the bedrooms.",
    source: "Google",
  },
  {
    name: "David & Karen W.",
    location: "Norman, OK",
    rating: 5,
    text: "After getting three quotes, we went with American Painting and could not be happier. Fair pricing, excellent communication throughout the project, and the quality speaks for itself. They even helped us pick the perfect color palette for our home.",
    source: "Google",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Beautiful interior living room painted by American Painting",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Stunning exterior home painting in Oklahoma City",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Modern kitchen with freshly painted cabinets",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    alt: "Modern home exterior painting project",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
    alt: "Beautifully painted bedroom with clean lines",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    alt: "Commercial office space freshly painted",
  },
];

const serviceAreas = [
  "Oklahoma City",
  "Moore",
  "Norman",
  "Edmond",
  "Midwest City",
  "Del City",
  "Yukon",
  "Mustang",
  "Bethany",
  "Tuttle",
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
      "We serve Oklahoma City and the greater OKC metro area, including Moore, Norman, Edmond, Midwest City, Del City, Yukon, Mustang, Bethany, Tuttle, and surrounding communities.",
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
          alt="Beautiful American home exterior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark patriotic navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/60" />
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-secondary-light to-secondary z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-40 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Badges row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/40 rounded-full px-4 py-2 text-sm font-bold text-secondary">
                25+ Years
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-bold text-white/90">
                Family-Owned
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-bold text-white/90">
                Serving OKC
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[var(--font-dm-serif)] text-white leading-[1.1] mb-6">
              American{" "}
              <span className="text-secondary">Painting</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-[var(--font-dm-serif)]">
              Oklahoma City&apos;s Family-Owned Painting Contractor Since 1999
            </p>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl">
              For over 25 years, we have been transforming homes and businesses
              across the OKC metro with premium painting services built on
              American values, hard work, and family pride.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-accent to-accent-warm text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all text-center animate-pulse-glow inline-flex items-center justify-center gap-2"
              >
                Get Your Free Estimate
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:+14058752475"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-center flex items-center justify-center gap-3"
              >
                <svg
                  className="w-6 h-6"
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
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="bg-primary border-t-4 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl font-[var(--font-dm-serif)] text-secondary">
                25+
              </p>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl font-[var(--font-dm-serif)] text-white">
                Family
              </p>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                Owned & Operated
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl font-[var(--font-dm-serif)] text-white">
                Licensed
              </p>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                & Insured
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl font-[var(--font-dm-serif)] text-white">
                Free
              </p>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                Estimates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-4">
              Our Painting Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive painting and finishing services for Oklahoma City
              homes, businesses, and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary/60 to-transparent" />
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-[var(--font-dm-serif)] text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BEFORE/AFTER ==================== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              See The Difference
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-4">
              Before & After
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nothing tells the story better than the transformation itself. See
              what 25 years of expertise can do for your home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80"
                alt="Home exterior before painting"
                loading="lazy"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block bg-gray-600 text-white text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  Before
                </span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                alt="Home exterior after painting by American Painting"
                loading="lazy"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block bg-accent text-white text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  After
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-4">
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
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-secondary/40 to-transparent" />
                )}
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-secondary">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="bg-white py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-6">
                25 Years of Family Values
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                American Painting is a family-owned and operated painting company
                that has served the Oklahoma City metro for over 25 years. What
                started as a family trade has grown into one of OKC&apos;s most
                trusted painting contractors through honest work, fair pricing,
                and results that speak for themselves.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe in the values that built this country: hard work,
                integrity, and treating people right. Every home we paint, every
                handshake we make, and every promise we keep reflects our
                commitment to doing things the American way. Your home deserves
                nothing less.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-primary text-sm">Family-Owned Since 1999</span>
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-primary text-sm">Thousands of Homes Painted</span>
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-primary text-sm">Premium Materials Only</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                alt="Professional painter at work representing American Painting"
                loading="lazy"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-[var(--font-dm-serif)] text-secondary">25+</p>
                <p className="text-sm font-semibold uppercase tracking-wide">Years in OKC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== REVIEWS ==================== */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-4">
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
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-8 text-6xl font-[var(--font-dm-serif)] text-secondary/15 leading-none">
                  &ldquo;
                </div>
                <div className="flex gap-1 mb-5">
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
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="font-bold text-primary block">{review.name}</span>
                    <span className="text-sm text-gray-400">{review.location}</span>
                  </div>
                  <span className="text-xs text-gray-400 bg-surface px-3 py-1 rounded-full font-semibold">
                    via {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PHOTO GALLERY ==================== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-4">
              Project Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse some of our recent painting projects across the Oklahoma
              City metro area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Where We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-4">
            Serving the OKC Metro
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Proudly providing premium painting services to families and
            businesses across the Oklahoma City metropolitan area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold text-base border border-gray-200 shadow-sm hover:border-accent hover:text-accent hover:shadow-md transition-all"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Beautiful modern home"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-accent-warm/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation estimate today. Let us show you why
            Oklahoma City families have trusted American Painting for over 25 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block bg-white text-accent px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-50 hover:shadow-xl transition-all"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+14058752475"
              className="inline-block border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white hover:text-accent transition-all"
            >
              Call (405) 875-2475
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="bg-surface py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-dm-serif)] text-primary mb-4">
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
