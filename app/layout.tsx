import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Techaarambh — Where Technology Begins | IT Services India",
  description:
    "Techaarambh is a leading IT services company in India offering Website Development, Data Analytics, Application Development, and Digital Marketing services.",
  keywords:
    "IT services India, website development, data analytics, app development, digital marketing, Techaarambh",
  openGraph: {
    title: "Techaarambh — Where Technology Begins",
    description:
      "We craft powerful websites, intelligent apps, data-driven insights, and marketing strategies that grow your business.",
    type: "website",
  },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-inter bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
