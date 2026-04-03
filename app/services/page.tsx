"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  BarChart3,
  Smartphone,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

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

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Website Development",
    tagline: "Your Digital Front Door",
    description:
      "We build custom, responsive websites that look stunning and perform flawlessly. From sleek landing pages to full-scale e-commerce platforms, every pixel is crafted with purpose.",
    features: [
      "Next.js / React Architecture",
      "SEO Optimised from Day One",
      "Mobile-First, Responsive Design",
      "Lightning-Fast Load Times",
      "CMS Integration (WordPress, Sanity)",
      "E-commerce Ready (Stripe, Razorpay)",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "WordPress", "Sanity", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
    border: "hover:border-blue-500/40",
    glow: "hover:shadow-blue-500/20",
    bg: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics",
    tagline: "Turn Data into Decisions",
    description:
      "Unlock the power of your data. We build interactive dashboards, automate reports, and deliver business intelligence solutions that give you a real competitive edge.",
    features: [
      "Interactive Dashboard Creation",
      "Data Visualisation & Charting",
      "Business Intelligence Reporting",
      "Predictive Analytics & Modelling",
      "Excel / Python Automation",
      "Custom Report Generation",
    ],
    tech: ["Python", "Power BI", "Tableau", "SQL", "Excel", "Pandas"],
    gradient: "from-violet-500 to-purple-600",
    border: "hover:border-violet-500/40",
    glow: "hover:shadow-violet-500/20",
    bg: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/20",
  },
  {
    id: "app",
    icon: Smartphone,
    title: "Application Development",
    tagline: "Apps That Scale With You",
    description:
      "From concept to launch, we develop robust web and mobile applications built for performance, security, and growth. We use modern tech stacks that stand the test of time.",
    features: [
      "Web Application Development",
      "Android & iOS Mobile Apps",
      "REST API & GraphQL Development",
      "Database Architecture & Design",
      "Cloud Deployment (AWS, Vercel)",
      "UI/UX Design & Prototyping",
    ],
    tech: ["React Native", "Flutter", "Node.js", "MongoDB", "Firebase", "AWS"],
    gradient: "from-cyan-500 to-blue-600",
    border: "hover:border-cyan-500/40",
    glow: "hover:shadow-cyan-500/20",
    bg: "from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20",
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Grow Your Brand Online",
    description:
      "We craft data-driven marketing strategies that drive real traffic, real leads, and real revenue. From SEO to paid ads, we manage it all while you focus on your business.",
    features: [
      "Search Engine Optimisation (SEO)",
      "Social Media Management",
      "Google Ads (PPC) Campaigns",
      "Meta Ads (Facebook & Instagram)",
      "Content Marketing & Copywriting",
      "Email Marketing Campaigns",
    ],
    tech: ["Google Analytics", "Meta Business Suite", "SEMrush", "Mailchimp", "Canva"],
    gradient: "from-pink-500 to-violet-600",
    border: "hover:border-pink-500/40",
    glow: "hover:shadow-pink-500/20",
    bg: "from-pink-50 to-violet-50 dark:from-pink-950/30 dark:to-violet-950/20",
  },
];

export default function ServicesPage() {
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
              What We Offer
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              End-to-end digital services that cover every aspect of your online presence — crafted with precision, delivered with integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-16 bg-white dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group relative rounded-3xl border-2 border-gray-100 dark:border-white/8 bg-gradient-to-br ${service.bg} p-8 md:p-12 ${service.border} hover:shadow-2xl ${service.glow} transition-all duration-400`}
            >
              {/* Accent bar */}
              <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: info */}
                <div>
                  {/* Icon + title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {service.tagline}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/15 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    id={`service-quote-${service.id}`}
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white btn-gradient rounded-xl shadow-md hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right: features */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-gray-50 dark:bg-[#0D0D16]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 block">
              How We Work
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: "01", title: "Discovery", desc: "We understand your goals, audience, and requirements in depth." },
              { step: "02", title: "Strategy", desc: "We create a tailored plan with timelines, milestones, and deliverables." },
              { step: "03", title: "Execution", desc: "Our team builds your solution with precision and constant communication." },
              { step: "04", title: "Launch & Support", desc: "We deploy, test, and provide ongoing support after go-live." },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                custom={i}
                className="relative p-7 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 text-center hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-black gradient-text mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-5">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Let&apos;s have a free consultation call. We&apos;ll understand your needs and recommend the best solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:-translate-y-1"
            >
              Book Free Call <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
