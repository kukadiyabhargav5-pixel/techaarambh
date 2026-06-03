"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  BarChart3,
  Smartphone,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* ─── Animation variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Custom Vector Illustrations ─── */

function WebDevIllustration() {
  return (
    <div className="w-full max-w-[420px] aspect-[4/3] rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-3 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Browser Bar */}
      <div className="flex items-center gap-1.5 pb-3 border-b border-gray-200 dark:border-white/5">
        <div className="w-3 h-3 rounded-full bg-rose-500" />
        <div className="w-3 h-3 rounded-full bg-amber-500" />
        <div className="w-3 h-3 rounded-full bg-emerald-500" />
        <div className="ml-4 h-5 flex-grow rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-[9px] text-gray-500 dark:text-white/40 flex items-center px-3 font-mono">
          https://techaarambh.com
        </div>
      </div>
      {/* Mock Content */}
      <div className="pt-4 space-y-4 h-full text-left">
        <div className="flex justify-between items-center">
          <div className="w-16 h-4 rounded bg-blue-500/20 border border-blue-500/30" />
          <div className="flex gap-2">
            <div className="w-8 h-2 rounded bg-gray-200 dark:bg-white/10" />
            <div className="w-8 h-2 rounded bg-gray-200 dark:bg-white/10" />
            <div className="w-8 h-2 rounded bg-gray-200 dark:bg-white/10" />
          </div>
        </div>
        <div className="space-y-2 pt-2">
          <div className="h-6 w-3/4 rounded bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-80" />
          <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-white/20" />
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="h-20 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 p-2 flex flex-col justify-between">
            <div className="w-6 h-6 rounded bg-blue-500/30" />
            <div className="w-10 h-2 rounded bg-gray-200 dark:bg-white/20" />
          </div>
          <div className="h-20 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 p-2 flex flex-col justify-between">
            <div className="w-6 h-6 rounded bg-cyan-500/30" />
            <div className="w-10 h-2 rounded bg-gray-200 dark:bg-white/20" />
          </div>
          <div className="h-20 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 p-2 flex flex-col justify-between">
            <div className="w-6 h-6 rounded bg-indigo-500/30" />
            <div className="w-10 h-2 rounded bg-gray-200 dark:bg-white/20" />
          </div>
        </div>
      </div>
      {/* Floating Sparkle Card */}
      <div className="absolute right-4 top-16 bg-[#2563EB] text-white font-extrabold text-[10px] px-3 py-1.5 rounded-full shadow-lg rotate-12 animate-pulse">
        SEO 100%
      </div>
    </div>
  );
}

function AnalyticsIllustration() {
  return (
    <div className="w-full max-w-[420px] aspect-[4/3] rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-4 shadow-2xl relative overflow-hidden backdrop-blur-md flex flex-col justify-between text-left">
      <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/5 pb-2">
        <span className="text-[10px] font-bold text-gray-500 dark:text-white/50 tracking-wider uppercase">Business Intelligence Dashboard</span>
        <div className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-ping" />
      </div>
      <div className="grid grid-cols-3 gap-3 my-2">
        <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
          <div className="text-[8px] text-gray-500 dark:text-white/40">Conversions</div>
          <div className="text-base font-bold text-violet-600 dark:text-violet-400">4.8%</div>
        </div>
        <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
          <div className="text-[8px] text-gray-500 dark:text-white/40">Traffic</div>
          <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">+12.4%</div>
        </div>
        <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
          <div className="text-[8px] text-gray-500 dark:text-white/40">Bounce Rate</div>
          <div className="text-base font-bold text-rose-600 dark:text-rose-400">32.1%</div>
        </div>
      </div>
      {/* SVG Growth Chart */}
      <div className="flex-grow h-24 relative flex items-end">
        <svg className="w-full h-full" viewBox="0 0 100 40">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0 35 Q 25 10, 50 25 T 100 5 L 100 40 L 0 40 Z" fill="url(#grad)" />
          <path d="M 0 35 Q 25 10, 50 25 T 100 5" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

function AppDevIllustration() {
  return (
    <div className="w-full max-w-[260px] aspect-[9/18] rounded-[36px] border-4 border-gray-200 dark:border-white/20 bg-white dark:bg-slate-950 p-3 shadow-2xl relative overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-100 dark:bg-slate-950 rounded-b-xl flex justify-center items-center">
        <div className="w-12 h-1 bg-gray-300 dark:bg-white/10 rounded-full" />
      </div>
      {/* Mobile Content */}
      <div className="h-full pt-6 flex flex-col justify-between text-left font-sans">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center pt-2">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[10px] text-cyan-600 dark:text-cyan-300 font-bold">TA</div>
            <div className="w-16 h-2 rounded bg-gray-200 dark:bg-white/10" />
          </div>
          {/* Main Card */}
          <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 space-y-2">
            <div className="w-10 h-1.5 rounded bg-cyan-500/40" />
            <div className="text-base font-bold text-gray-800 dark:text-white">$12,450</div>
            <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded">
              <div className="w-2/3 h-full bg-cyan-500 rounded" />
            </div>
          </div>
          {/* List items */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
              <div className="w-5 h-5 rounded-full bg-blue-500/30" />
              <div className="w-12 h-1.5 rounded bg-gray-300 dark:bg-white/20" />
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
              <div className="w-5 h-5 rounded-full bg-indigo-500/30" />
              <div className="w-12 h-1.5 rounded bg-gray-300 dark:bg-white/20" />
            </div>
          </div>
        </div>
        {/* Navigation Bar */}
        <div className="flex justify-around items-center py-2 border-t border-gray-200 dark:border-white/5 mt-auto">
          <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-white/40" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-white/20" />
        </div>
      </div>
    </div>
  );
}

function DigitalMarketingIllustration() {
  return (
    <div className="w-full max-w-[340px] rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-4 shadow-2xl text-left relative overflow-hidden backdrop-blur-md">
      <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-white/5 mb-3">
        <span className="text-[10px] font-bold text-gray-500 dark:text-white/50 tracking-wider uppercase">SEO & Ad Analytics</span>
        <span className="text-[9px] bg-pink-500/20 text-pink-300 py-0.5 px-2 rounded-full font-bold">ACTIVE CAMPAIGN</span>
      </div>
      
      {/* Funnel chart representation */}
      <div className="space-y-3 font-sans">
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-gray-600 dark:text-white/60">
            <span>Social Ads CTR</span>
            <span className="font-bold text-gray-800 dark:text-white">+18.5%</span>
          </div>
          <div className="w-full h-2 rounded bg-gray-200 dark:bg-white/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 to-violet-500 w-[85%]" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-gray-600 dark:text-white/60">
            <span>Email Conversion</span>
            <span className="font-bold text-gray-800 dark:text-white">4.2%</span>
          </div>
          <div className="w-full h-2 rounded bg-gray-200 dark:bg-white/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 to-violet-500 w-[60%]" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-gray-600 dark:text-white/60">
            <span>Search Rankings (Top 3)</span>
            <span className="font-bold text-gray-800 dark:text-white">12 Keywords</span>
          </div>
          <div className="w-full h-2 rounded bg-gray-200 dark:bg-white/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 to-violet-500 w-[72%]" />
          </div>
        </div>
      </div>
      
      {/* ROI Display Card */}
      <div className="mt-4 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex justify-between items-center">
        <div>
          <div className="text-[9px] text-gray-500 dark:text-white/40 uppercase">Average Campaign ROI</div>
          <div className="text-lg font-black text-gray-800 dark:text-white">3.4x Return</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-lg">
          📈
        </div>
      </div>
    </div>
  );
}

/* ─── Services Data Mapping ─── */

const serviceItems = [
  {
    id: "web",
    number: "01",
    title: "Website Development",
    subtitle: "Your Digital Front Door",
    description: "We build custom, responsive websites that look stunning and perform flawlessly. From sleek landing pages to full-scale e-commerce platforms, every pixel is crafted with purpose.",
    icon: Globe,
    iconBg: "#3B82F6", // Blue-500
    illustration: WebDevIllustration,
    features: [
      "Next.js / React Architecture",
      "SEO Optimised from Day One",
      "Mobile-First, Responsive Design",
      "Lightning-Fast Load Times",
      "CMS Integration (WordPress, Sanity)",
      "E-commerce Ready (Stripe, Razorpay)",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "WordPress", "Sanity", "Stripe"],
  },
  {
    id: "analytics",
    number: "02",
    title: "Data Analytics",
    subtitle: "Turn Data into Decisions",
    description: "Unlock the power of your data. We build interactive dashboards, automate reports, and deliver business intelligence solutions that give you a real competitive edge.",
    icon: BarChart3,
    iconBg: "#8B5CF6", // Violet-500
    illustration: AnalyticsIllustration,
    features: [
      "Interactive Dashboard Creation",
      "Data Visualisation & Charting",
      "Business Intelligence Reporting",
      "Predictive Analytics & Modelling",
      "Excel / Python Automation",
      "Custom Report Generation",
    ],
    tech: ["Python", "Power BI", "Tableau", "SQL", "Excel", "Pandas"],
  },
  {
    id: "app",
    number: "03",
    title: "Application Development",
    subtitle: "Apps That Scale With You",
    description: "From concept to launch, we develop robust web and mobile applications built for performance, security, and growth. We use modern tech stacks that stand the test of time.",
    icon: Smartphone,
    iconBg: "#06B6D4", // Cyan-500
    illustration: AppDevIllustration,
    features: [
      "Web Application Development",
      "Android & iOS Mobile Apps",
      "REST API & GraphQL Development",
      "Database Architecture & Design",
      "Cloud Deployment (AWS, Vercel)",
      "UI/UX Design & Prototyping",
    ],
    tech: ["React Native", "Flutter", "Node.js", "MongoDB", "Firebase", "AWS"],
  },
  {
    id: "marketing",
    number: "04",
    title: "Digital Marketing",
    subtitle: "Grow Your Brand Online",
    description: "We craft data-driven marketing strategies that drive real traffic, real leads, and real revenue. From SEO to paid ads, we manage it all while you focus on your business.",
    icon: TrendingUp,
    iconBg: "#EC4899", // Pink-500
    illustration: DigitalMarketingIllustration,
    features: [
      "Search Engine Optimisation (SEO)",
      "Social Media Management",
      "Google Ads (PPC) Campaigns",
      "Meta Ads (Facebook & Instagram)",
      "Content Marketing & Copywriting",
      "Email Marketing Campaigns",
    ],
    tech: ["Google Analytics", "Meta Business Suite", "SEMrush", "Mailchimp", "Canva"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 lg:pt-20 bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        {/* Glow orbs matching layout style */}
        <div className="absolute left-[10%] top-[25%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#ff6572] opacity-[0.04] dark:opacity-10 blur-[150px] rounded-full z-0" />
        <div className="absolute right-[10%] top-[25%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#ff6572] opacity-[0.04] dark:opacity-10 blur-[150px] rounded-full z-0" />
        <div className="absolute left-[15%] bottom-[10%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#e308a2] opacity-[0.04] dark:opacity-10 blur-[150px] rounded-full z-0" />
        <div className="absolute right-[15%] bottom-[10%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#e308a2] opacity-[0.04] dark:opacity-10 blur-[150px] rounded-full z-0" />
        <div className="absolute left-[50%] top-[5%] transform -translate-x-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#70b616] opacity-[0.04] dark:opacity-10 blur-[150px] rounded-full z-0" />
        <div className="absolute right-[50%] top-[5%] transform translate-x-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#70b616] opacity-[0.04] dark:opacity-10 blur-[150px] rounded-full z-0" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Our Services badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#2563EB] text-white font-nunito rounded-full text-sm font-semibold tracking-wider shadow-lg shadow-blue-500/20 mb-8 cursor-default"
            >
              Our Services
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-7xl font-bold font-pt-sans leading-tight mb-4 text-gray-900 dark:text-white">
              Showcasing Our Creative Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-[36px] md:text-[68px] font-normal font-allison text-[#2563EB] leading-none mb-6">
              with innovation, strategy, and design excellence.
            </p>

            {/* Description */}
            <p className="text-sm md:text-xl text-gray-500 dark:text-gray-400 font-nunito max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of innovative digital solutions that have helped businesses transform and grow in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DETAILED SERVICES SCROLL SECTION ── */}
      <section className="relative w-full bg-light-bg dark:bg-dark-bg py-16 border-t border-gray-250/20 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <div className="flex-shrink-0">
              <span className="px-6 py-2.5 bg-[#2563EB] font-nunito rounded-full text-xs font-bold tracking-wider text-white">
                Our Services
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-nunito text-sm md:text-[17px] leading-relaxed max-w-[900px] text-left">
              We offer a comprehensive range of IT services to help your business grow and succeed in the digital world. From custom software development and cloud solutions to cybersecurity and UI/UX design, our expert team ensures seamless digital transformation. Partner with us to enhance efficiency, drive innovation, and stay ahead of the competition.
            </p>
          </div>
        </div>

        {/* Timeline scroll container */}
        <div className="w-full relative">
          <ul className="relative">
            {serviceItems.map((service, idx) => {
              const IllustrationComponent = service.illustration;

              return (
                <li
                  key={service.id}
                  className="sticky top-0 w-full min-h-screen flex items-center justify-center bg-light-bg dark:bg-[#0A0A0F] py-20 px-4 md:px-12 border-b border-gray-250/20 dark:border-white/5"
                >
                  <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 z-10">
                    
                    {/* Left Timeline Guide Line (Desktop Only) */}
                    <div className="hidden md:block w-[1px] h-[90%] bg-gray-200 dark:bg-white/10 absolute left-[-40px] top-6">
                      <div 
                        className="w-3.5 h-3.5 rounded-full -left-[6px] top-0 absolute border border-gray-300 dark:border-white bg-light-bg dark:bg-[#0A0A0F] flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-white" />
                      </div>
                    </div>

                    {/* Left Panel: Service Details */}
                    <div className="w-full md:w-[48%] text-left space-y-4">
                      {/* Badge / Number */}
                      <span 
                        className="text-lg md:text-xl font-bold font-nunito tracking-wide"
                        style={{ color: service.iconBg }}
                      >
                        {service.number}
                      </span>

                      {/* Icon */}
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${service.iconBg}20`, border: `1px solid ${service.iconBg}40` }}
                      >
                        <service.icon className="w-6 h-6" style={{ color: service.iconBg }} />
                      </div>

                      {/* Title */}
                      <h2 
                        className="text-3xl md:text-5xl font-bold font-pt-sans leading-tight"
                        style={{ color: service.iconBg }}
                      >
                        {service.title}
                      </h2>

                      {/* Subtitle */}
                      <h3 className="text-gray-800 dark:text-white md:text-[36px] text-2xl font-normal font-allison italic opacity-90 leading-none">
                        {service.subtitle}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 font-nunito text-xs md:text-base leading-relaxed text-justify">
                        {service.description}
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Features Bullet List */}
                      <div className="pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-white/50 mb-3">
                          What We Deliver
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white btn-gradient rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          Book consultation
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Panel: Interactive Canvas Illustration */}
                    <div className="w-full md:w-[48%] flex justify-center items-center">
                      <IllustrationComponent />
                    </div>

                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-[#F8F9FF] dark:from-blue-950/40 dark:to-[#0A0A0F] border-t border-gray-250/20 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.06)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-nunito">
              Partner with Techaarambh to build scalable, elite, and high-performance tech solutions tailored to your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 dark:bg-white text-white dark:text-blue-900 font-bold text-lg rounded-2xl hover:bg-blue-700 dark:hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:-translate-y-1"
            >
              Let&apos;s Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
