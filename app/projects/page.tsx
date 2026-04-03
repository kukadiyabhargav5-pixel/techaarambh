"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

type Category = "All" | "Website" | "App" | "Analytics" | "Marketing";

const categories: Category[] = ["All", "Website", "App", "Analytics", "Marketing"];

const projects = [
  {
    id: 1,
    title: "RetailEase",
    description:
      "A high-performance e-commerce website for a mid-sized retail brand. Includes product catalogue, cart, Stripe payments, and an admin dashboard.",
    category: "Website" as Category,
    tech: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
    banner: "from-blue-500 via-cyan-500 to-blue-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    impact: "3× increase in online sales",
  },
  {
    id: 2,
    title: "DataPulse Dashboard",
    description:
      "An interactive sales analytics dashboard for an FMCG company. Real-time KPIs, trend charts, and automated weekly reports via email.",
    category: "Analytics" as Category,
    tech: ["Python", "Power BI", "SQL", "Pandas"],
    banner: "from-violet-500 via-purple-500 to-violet-700",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    impact: "40% faster decisions",
  },
  {
    id: 3,
    title: "QuickDeliver App",
    description:
      "A cross-platform food delivery mobile application with real-time order tracking, restaurant management, and driver assignment system.",
    category: "App" as Category,
    tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    banner: "from-cyan-500 via-teal-500 to-cyan-700",
    badgeColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
    impact: "5K+ downloads in month 1",
  },
  {
    id: 4,
    title: "GrowLocal Campaign",
    description:
      "A comprehensive digital marketing campaign for a local restaurant chain expanding across 3 cities — SEO, Meta Ads, and Google Ads managed end-to-end.",
    category: "Marketing" as Category,
    tech: ["Meta Ads", "Google Ads", "SEMrush", "Google Analytics"],
    banner: "from-pink-500 via-rose-500 to-pink-700",
    badgeColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
    impact: "320% ROAS achieved",
  },
  {
    id: 5,
    title: "MedTrack System",
    description:
      "A secure hospital patient tracking web application with appointment scheduling, medical history records, and role-based access for doctors and staff.",
    category: "App" as Category,
    tech: ["React", "Express.js", "PostgreSQL", "JWT Auth"],
    banner: "from-emerald-500 via-green-500 to-emerald-700",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    impact: "Serving 500+ patients/day",
  },
  {
    id: 6,
    title: "StyleHub Store",
    description:
      "A fashion e-commerce platform with inventory management, wishlist, Razorpay checkout, and a headless CMS for the marketing team to manage content independently.",
    category: "Website" as Category,
    tech: ["Next.js", "Sanity CMS", "Razorpay", "Framer Motion"],
    banner: "from-amber-500 via-orange-500 to-amber-700",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    impact: "₹12L revenue in Q1",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16 lg:pt-20">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Real projects, real results. From e-commerce platforms to analytics dashboards — here&apos;s a snapshot of what we&apos;ve built.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="py-10 bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-white/5 sticky top-16 lg:top-20 z-30 backdrop-blur-xl bg-white/90 dark:bg-[#0A0A0F]/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="py-16 bg-gray-50 dark:bg-[#0D0D16] min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  className="group flex flex-col bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/8 overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Banner */}
                  <div className={`h-40 bg-gradient-to-br ${project.banner} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-24 h-24 bg-white rounded-full blur-xl" />
                      <div className="absolute bottom-2 right-4 w-16 h-16 bg-white rounded-full blur-xl" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-2xl font-black text-white/90">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.badgeColor} backdrop-blur-sm`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Impact badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                        📈 {project.impact}
                      </span>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      id={`view-project-${project.id}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 transition-all duration-200"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 dark:text-gray-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 border border-blue-100 dark:border-blue-900/30"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Let&apos;s build it together. Every great product starts with a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-base font-bold text-white btn-gradient rounded-2xl shadow-xl shadow-blue-500/25 hover:-translate-y-1 transition-transform duration-200"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
