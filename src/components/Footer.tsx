import Link from "next/link";

const services = [
  { name: "Interior House Painting", href: "/services/interior-painting" },
  { name: "Exterior House Painting", href: "/services/exterior-painting" },
  { name: "Commercial Painting", href: "/services/commercial-painting" },
  { name: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
  { name: "Deck & Fence Staining", href: "/services/deck-fence-staining" },
  { name: "Drywall Repair & Texturing", href: "/services/drywall-repair" },
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

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center border border-secondary/30">
                <span className="text-sm font-bold text-secondary">AP</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-[var(--font-dm-serif)] text-white">
                  American
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
                  Painting
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Oklahoma City&apos;s trusted painting professionals. Quality
              craftsmanship for homes and businesses across the OKC metro.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
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
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-300 text-sm hover:text-secondary transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-secondary mt-0.5 shrink-0"
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
                <span>Oklahoma City, OK</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-secondary shrink-0"
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
                <a
                  href="tel:+14058752475"
                  className="hover:text-secondary transition-colors"
                >
                  (405) 875-2475
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/#contact"
                className="inline-block bg-gradient-to-r from-accent to-accent-warm text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg transition-all"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} American Painting. All rights
            reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Proudly serving the Oklahoma City metro area
          </p>
        </div>
      </div>
    </footer>
  );
}
