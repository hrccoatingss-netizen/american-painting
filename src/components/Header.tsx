"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Stucco Repair", href: "/services/stucco-repair" },
  { name: "Epoxy Floor Coatings", href: "/services/epoxy-coatings" },
  { name: "Pressure Washing", href: "/services/pressure-washing" },
  { name: "HOA Services", href: "/services/hoa-services" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-accent">American</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-primary">Painting</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-primary font-semibold hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-primary font-semibold hover:text-accent transition-colors">
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
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-56 border border-gray-100">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-light hover:text-accent transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#contact" className="text-primary font-semibold hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+17022596006" className="text-primary font-bold text-lg hover:text-accent transition-colors">
              (702) 259-6006
            </a>
            <Link
              href="/#contact"
              className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-accent-dark transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-primary font-semibold py-2" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block text-primary font-semibold py-2" onClick={() => setMobileOpen(false)}>
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
            <Link href="/#contact" className="block text-primary font-semibold py-2" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <a href="tel:+17022596006" className="block text-accent font-bold text-lg py-2">
              (702) 259-6006
            </a>
            <Link
              href="/#contact"
              className="block bg-accent text-white text-center px-6 py-3 rounded-lg font-bold"
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
