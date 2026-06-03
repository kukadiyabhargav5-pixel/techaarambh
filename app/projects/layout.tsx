import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects & Portfolio — Real Work, Real Results",
  description:
    "Explore Techaarambh's portfolio of delivered projects including e-commerce platforms, business websites, analytics dashboards, and mobile apps. See real client results and case studies.",
  keywords: [
    "Techaarambh portfolio",
    "IT project portfolio India",
    "web development projects",
    "e-commerce website India",
    "Bharti Glooms website",
    "Next.js projects",
    "React projects India",
    "client case studies IT",
    "website design portfolio",
    "app development portfolio",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects & Portfolio — Real Work, Real Results | Techaarambh",
    description:
      "50+ projects delivered. From e-commerce platforms to analytics dashboards — explore what we've built for our happy clients.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/techaarambh_logo.png",
        width: 1200,
        height: 630,
        alt: "Techaarambh Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects & Portfolio | Techaarambh",
    description:
      "50+ projects delivered. From e-commerce platforms to analytics dashboards — see our real client work.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
