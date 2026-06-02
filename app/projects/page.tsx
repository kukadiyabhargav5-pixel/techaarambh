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
    title: "Bharti Glooms",
    description:
      "A premium fashion e-commerce website with cart, wishlist, and Razorpay checkout — built for a modern retail brand.",
    category: "Website" as Category,
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Razorpay"],
    banner: "from-rose-500 via-pink-500 to-fuchsia-600",
    badgeColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
    impact: "50+ orders in first month",
    link: "https://www.bhartiglooms.in/",
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Animated border glow */}
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

                  <div className="relative flex flex-col sm:flex-row bg-white dark:bg-[#12121C] rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/[0.06] group-hover:border-transparent">
                    {/* Gradient side / top */}
                    <div className={`relative shrink-0 ${i === 0 ? "sm:w-72" : "sm:w-56"} h-48 sm:h-auto bg-gradient-to-br ${project.banner} overflow-hidden`}>
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-white rounded-full blur-2xl" />
                        <div className="absolute bottom-4 right-4 w-20 h-20 bg-white rounded-full blur-2xl" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-black text-white/25 group-hover:text-white/40 group-hover:scale-110 transition-all duration-500">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 sm:top-4 sm:left-4 sm:right-auto">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 text-white backdrop-blur-md border border-white/20">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 sm:p-7 gap-4">
                      <div>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg border border-emerald-200/60 dark:border-emerald-700/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {project.impact}
                        </span>
                      </div>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-[11px] font-semibold rounded-lg bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-300 border border-gray-200/80 dark:border-white/[0.08]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`view-project-${project.id}`}
                        className="mt-1 w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-xl bg-gray-900 dark:bg-white/10 text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-200 shadow-sm"
                      >
                        View Live Site
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
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
