import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "American Painting LLC - Las Vegas Painting Since 1986 | 11,000+ Homes Painted",
  description:
    "American Painting LLC has been Las Vegas's most trusted painting contractor since 1986. BBB A+ accredited, 11,000+ homes painted. Interior, exterior, stucco, epoxy coatings & more. Call (702) 259-6006 for a free estimate.",
  keywords:
    "Las Vegas painting contractor, house painters Las Vegas, interior painting Las Vegas, exterior painting Las Vegas, stucco repair Las Vegas, epoxy coatings Las Vegas, BBB A+ painter",
  openGraph: {
    title: "American Painting LLC - Las Vegas Painting Since 1986",
    description:
      "40+ years of trusted painting services in Las Vegas. BBB A+ accredited, 11,000+ homes painted. Free estimates.",
    type: "website",
    locale: "en_US",
    url: "https://americanpaintingllc.com",
    siteName: "American Painting LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "American Painting LLC - Las Vegas Painting Since 1986",
    description:
      "40+ years of trusted painting services in Las Vegas. BBB A+ accredited, 11,000+ homes painted.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://americanpaintingllc.com",
  name: "American Painting LLC",
  description:
    "Las Vegas's most trusted painting contractor since 1986. BBB A+ accredited with 11,000+ homes painted. Interior, exterior, stucco repair, epoxy coatings, and more.",
  url: "https://americanpaintingllc.com",
  telephone: "+17022596006",
  email: "showup702@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2375 E Tropicana Ave, Ste 207",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89119",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.0992,
    longitude: -115.1175,
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
    sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
  },
  foundingDate: "1986",
  founder: {
    "@type": "Person",
    name: "Brian J. Higgs",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "19",
    bestRating: "5",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "BBB A+ Accreditation",
    recognizedBy: {
      "@type": "Organization",
      name: "Better Business Bureau",
    },
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
