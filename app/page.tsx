"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  BarChart3,
  Smartphone,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Users,
  Clock,
  HeartHandshake,
  Star,
  CheckCircle,
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
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Stats counter hook ─── */
function useCounter(target: number, duration = 2000, active: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

/* ─── Stats data ─── */
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 4, suffix: "", label: "Core Services" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

/* ─── Services data ─── */
const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern frameworks like Next.js and React. SEO-optimised, lightning-fast, and built to convert.",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/30",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with interactive dashboards, visualisations, and business intelligence solutions.",
    color: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-500/30",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Scalable web and mobile applications crafted for performance, reliability, and exceptional user experiences.",
    color: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-cyan-500/30",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Grow your brand with data-driven SEO, social media, Google Ads, and content marketing strategies that deliver ROI.",
    color: "from-pink-500 to-violet-600",
    glow: "group-hover:shadow-pink-500/30",
  },
];

/* ─── Why choose us ─── */
const whyUs = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "Skilled professionals with deep expertise in cutting-edge technologies and industry best practices.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your timelines. Every project is delivered on schedule without compromising quality.",
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    desc: "We are always here for you — before, during, and after your project goes live.",
  },
];

/* ─── Stat Item component ─── */
function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(value, 1800, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-1 absolute top-1/4 left-1/5 w-96 h-96 bg-blue-600/20 dark:bg-blue-600/15 rounded-full blur-3xl" />
          <div className="orb-2 absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/20 dark:bg-violet-600/15 rounded-full blur-3xl" />
          <div className="orb-3 absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="orb-1 absolute bottom-1/3 right-1/5 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          {/* India badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 text-sm font-medium text-blue-700 dark:text-blue-300 mb-8"
          >
            <span>🇮🇳</span>
            <span>Proudly Made in India</span>
            <Star className="w-3.5 h-3.5 fill-current" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We Build{" "}
            <span className="gradient-text block sm:inline">Digital Futures</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-semibold text-blue-600 dark:text-blue-400">Techaarambh</span> — Where Technology Begins. We craft powerful websites, intelligent apps, data-driven insights, and marketing strategies that grow your business.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/projects"
              id="hero-explore-btn"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white btn-gradient rounded-2xl shadow-xl shadow-blue-500/25"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              id="hero-consult-btn"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600/20 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bounce-arrow text-gray-400 dark:text-gray-600">
              <ChevronDown className="w-8 h-8" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-16 bg-white dark:bg-[#0D0D16] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 bg-light-bg dark:bg-dark-bg grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our <span className="gradient-text">Core Services</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              End-to-end digital solutions designed to accelerate your growth.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div key={service.title} variants={fadeUp} custom={i}>
                <Link href="/services">
                  <div className={`group relative p-6 rounded-2xl border border-gray-200 dark:border-white/8 bg-white dark:bg-dark-card hover:border-blue-300 dark:hover:border-blue-700 shadow-sm hover:shadow-xl ${service.glow} transition-all duration-300 cursor-pointer h-full`}>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all duration-200">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-gray-50 dark:bg-[#0D0D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 block">
              Why Techaarambh
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Built on <span className="gradient-text">Trust & Excellence</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="text-center p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-800 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mb-5 shadow-md">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIAL / HIGHLIGHT ── */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl border border-blue-100 dark:border-blue-900/30 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 p-10 md:p-14 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 italic leading-relaxed">
              "Techaarambh transformed our online presence completely. The website they built is fast, beautiful, and has tripled our leads."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Rajesh Kumar</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CEO, RetailEase</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-white/90 text-sm font-medium mb-6 border border-white/30">
              <CheckCircle className="w-4 h-4" /> Free consultation available
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s turn your vision into a powerful digital reality. No obligations, just honest conversations.
            </p>
            <Link
              href="/contact"
              id="cta-contact-btn"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
              Let&apos;s Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
