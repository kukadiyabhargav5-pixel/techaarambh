import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get Free Consultation for Your Project",
  description:
    "Get in touch with Techaarambh for a free consultation. Reach us via email at techaarambh78@gmail.com or call +91 87994 95038. We respond within 24 hours. Website development, app development, data analytics, and digital marketing.",
  keywords: [
    "contact Techaarambh",
    "hire web developer India",
    "IT consultation India",
    "free tech consultation",
    "website development quote",
    "app development quote India",
    "digital marketing consultation",
    "hire IT company India",
    "get website built India",
    "affordable web development",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Techaarambh — Free IT Consultation",
    description:
      "Have a project in mind? Reach out for a free consultation. Email: techaarambh78@gmail.com | Call: +91 87994 95038. We respond within 24 hours.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/techaarambh_logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Techaarambh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Techaarambh — Free IT Consultation",
    description:
      "Have a project in mind? Reach out for a free consultation. We respond within 24 hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
