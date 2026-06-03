import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const baseUrl = "https://techaarambh.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Techaarambh — Where Technology Begins | IT Services India",
    template: "%s | Techaarambh",
  },
  description:
    "Techaarambh is a leading IT services company in India offering Website Development, Data Analytics, Application Development, and Digital Marketing services. Affordable, reliable, and innovative tech solutions for startups & enterprises.",
  keywords: [
    "IT services India",
    "website development India",
    "web development company",
    "data analytics services",
    "app development India",
    "mobile app development",
    "digital marketing India",
    "SEO services India",
    "Techaarambh",
    "tech company India",
    "affordable IT solutions",
    "Next.js development",
    "React development",
    "custom software development",
    "e-commerce development India",
    "UI UX design India",
    "startup tech partner",
    "business intelligence solutions",
  ],
  authors: [{ name: "Techaarambh", url: baseUrl }],
  creator: "Techaarambh",
  publisher: "Techaarambh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Techaarambh — Where Technology Begins | IT Services India",
    description:
      "We craft powerful websites, intelligent apps, data-driven insights, and marketing strategies that grow your business. 50+ projects delivered, 30+ happy clients.",
    url: baseUrl,
    siteName: "Techaarambh",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/techaarambh_logo.png",
        width: 1200,
        height: 630,
        alt: "Techaarambh — Where Technology Begins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techaarambh — Where Technology Begins | IT Services India",
    description:
      "We craft powerful websites, intelligent apps, data-driven insights, and marketing strategies that grow your business.",
    images: ["/techaarambh_logo.png"],
    creator: "@techaarambh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Techaarambh",
  alternateName: "Techaarambh — Where Technology Begins",
  url: baseUrl,
  logo: `${baseUrl}/techaarambh_logo.png`,
  description:
    "Techaarambh is a leading IT services company in India offering Website Development, Data Analytics, Application Development, and Digital Marketing services.",
  foundingDate: "2023",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 5,
    maxValue: 10,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-87994-95038",
    contactType: "customer service",
    email: "techaarambh78@gmail.com",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  sameAs: [],
  knowsAbout: [
    "Website Development",
    "Data Analytics",
    "Application Development",
    "Digital Marketing",
    "SEO",
    "React",
    "Next.js",
    "Mobile App Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700&family=PT+Sans:wght@400;700&family=Allison&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-inter bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
