import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Team, Mission & Vision",
  description:
    "Learn about Techaarambh — a passionate team of technologists, designers, and strategists building world-class digital solutions for Indian businesses. Founded in 2023, 50+ projects delivered.",
  keywords: [
    "about Techaarambh",
    "IT company India",
    "tech team India",
    "Tirth Italiya",
    "Bhargav Kukadiya",
    "web development team",
    "startup tech company",
    "IT services startup India",
    "digital solutions company",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Techaarambh — Our Team, Mission & Vision",
    description:
      "A passionate team of technologists on a mission to make world-class digital solutions accessible to every business in India. 50+ projects, 30+ clients, founded 2023.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/techaarambh_logo.png",
        width: 1200,
        height: 630,
        alt: "Techaarambh Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Techaarambh — Our Team, Mission & Vision",
    description:
      "A passionate team of technologists on a mission to make world-class digital solutions accessible to every business in India.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
