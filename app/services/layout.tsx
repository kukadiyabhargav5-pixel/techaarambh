import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Website Development, Data Analytics, App Development & Digital Marketing",
  description:
    "Explore Techaarambh's core IT services: custom website development with Next.js & React, data analytics & business intelligence, mobile & web app development, and data-driven digital marketing including SEO, Google Ads & social media.",
  keywords: [
    "website development services India",
    "data analytics services",
    "app development India",
    "digital marketing services",
    "SEO services India",
    "Next.js development services",
    "React development company",
    "mobile app development India",
    "e-commerce development",
    "business intelligence solutions",
    "Google Ads management",
    "social media marketing India",
    "custom software development",
    "UI UX design services",
    "cloud deployment services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "IT Services — Website, Analytics, App Development & Marketing | Techaarambh",
    description:
      "Custom websites, data analytics dashboards, scalable apps, and ROI-driven digital marketing. End-to-end IT solutions for businesses in India.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/techaarambh_logo.png",
        width: 1200,
        height: 630,
        alt: "Techaarambh Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services — Website, Analytics, App Development & Marketing | Techaarambh",
    description:
      "Custom websites, data analytics dashboards, scalable apps, and ROI-driven digital marketing.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
