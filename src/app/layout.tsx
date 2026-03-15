import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "American Painting | Oklahoma City's Trusted Painting Professionals",
  description:
    "American Painting provides professional interior and exterior painting services in Oklahoma City, OK. Residential, commercial, cabinets, decks, and more. Licensed & insured. Call (405) 875-2475 for a free estimate.",
  keywords:
    "Oklahoma City painting contractor, house painters OKC, interior painting Oklahoma City, exterior painting OKC, commercial painting Oklahoma City, cabinet refinishing OKC, deck staining Oklahoma City",
  openGraph: {
    title: "American Painting | Oklahoma City's Trusted Painting Professionals",
    description:
      "Professional painting services for Oklahoma City homes and businesses. Licensed, insured, and committed to quality. Free estimates.",
    type: "website",
    locale: "en_US",
    url: "https://americanpaintingokc.com",
    siteName: "American Painting",
  },
  twitter: {
    card: "summary_large_image",
    title: "American Painting | OKC Painting Professionals",
    description:
      "Professional painting services for Oklahoma City homes and businesses. Licensed & insured. Free estimates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://americanpaintingokc.com",
  name: "American Painting",
  description:
    "Oklahoma City's trusted painting professionals. We provide premium interior and exterior painting, commercial painting, cabinet refinishing, deck staining, and drywall repair services. Licensed and insured.",
  url: "https://americanpaintingokc.com",
  telephone: "+14058752475",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oklahoma City",
    addressRegion: "OK",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.4676,
    longitude: -97.5164,
  },
  areaServed: [
    { "@type": "City", name: "Oklahoma City" },
    { "@type": "City", name: "Edmond" },
    { "@type": "City", name: "Norman" },
    { "@type": "City", name: "Moore" },
    { "@type": "City", name: "Midwest City" },
    { "@type": "City", name: "Del City" },
    { "@type": "City", name: "Yukon" },
    { "@type": "City", name: "Bethany" },
    { "@type": "City", name: "Mustang" },
    { "@type": "City", name: "Nichols Hills" },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="font-sans text-gray-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
