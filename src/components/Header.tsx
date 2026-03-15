"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Interior Residential", href: "/services/interior-painting" },
  { name: "Exterior Residential", href: "/services/exterior-painting" },
  { name: "Commercial Painting", href: "/services/commercial-painting" },
  { name: "Cabinet Painting", href: "/services/cabinet-refinishing" },
  { name: "Drywall Repair", href: "/services/drywall-repair" },
  { name: "Power Washing", href: "/services/power-washing" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-secondary">AP</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-[var(--font-dm-serif)] text-primary">
                American
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent">
                Painting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-primary font-semibold hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-primary font-semibold hover:text-accent transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-1">
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-64 border border-gray-100 mt-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-surface-alt hover:text-accent transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#contact"
              className="text-primary font-semibold hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14058752475"
              className="text-primary font-bold text-lg hover:text-accent transition-colors flex items-center gap-2"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (405) 875-2475
            </a>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-accent to-accent-warm text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-accent/20 transition-all"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-primary font-semibold py-2"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-primary font-semibold py-2"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <div className="py-2">
              <p className="text-primary font-semibold mb-2">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block pl-4 py-1.5 text-gray-600 hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <Link
              href="/#contact"
              className="block text-primary font-semibold py-2"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+14058752475"
              className="block text-accent font-bold text-lg py-2"
            >
              (405) 875-2475
            </a>
            <Link
              href="/#contact"
              className="block bg-gradient-to-r from-accent to-accent-warm text-white text-center px-6 py-3 rounded-lg font-bold"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
