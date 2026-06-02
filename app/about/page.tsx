"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Lightbulb, ShieldCheck, Eye, Heart } from "lucide-react";

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

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We constantly explore new technologies and approaches to stay ahead of the curve.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    desc: "Every line of code we write is crafted with precision, tested rigorously, and built to last.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "We keep our clients informed at every step — no surprises, no hidden costs.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "Your success is our success. We go above and beyond to exceed your expectations.",
    color: "from-pink-500 to-rose-500",
  },
];

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
  yearsIndustry: string;
  yearsDM: string;
  bio: string;
  image?: string;
}

const team: TeamMember[] = [
  {
    name: "Tirth Italiya",
    role: "Founder",
    initials: "IT",
    color: "from-blue-600 to-violet-600",
    yearsIndustry: "3+",
    yearsDM: "2+",
    bio: "Tirth Italiya leads the strategic vision and growth of Techaarambh. He is committed to architecting modern digital products that scale.",
  },
  {
    name: "Bhargav Kukadiya",
    role: "Co-Founder",
    initials: "BK",
    color: "from-violet-600 to-pink-600",
    yearsIndustry: "3+",
    yearsDM: "2+",
    bio: "Bhargav Kukadiya drives operations and customer success at Techaarambh. He ensures our digital solutions align with client business goals.",
  },
  {
    name: "Yashvi Changela",
    role: "Data Analyst",
    initials: "YC",
    color: "from-cyan-500 to-blue-600",
    yearsIndustry: "2+",
    yearsDM: "1+",
    bio: "Yashvi Changela translates complex datasets into actionable strategies, helping clients make data-driven decisions that accelerate growth.",
  },
  {
    name: "Jensi Savaliya",
    role: "Application Developer",
    initials: "JS",
    color: "from-cyan-500 to-blue-600",
    yearsIndustry: "2+",
    yearsDM: "1.5+",
    bio: "Jensi Savaliya designs and builds high-performance web and mobile apps, ensuring speed, clean code, and seamless user experiences.",
  },
  {
    name: "Vishwa Akhbari",
    role: "UIUX Designer",
    initials: "VA",
    color: "from-cyan-500 to-blue-600",
    yearsIndustry: "2+",
    yearsDM: "1.5+",
    bio: "Vishwa Akhbari crafts intuitive and stunning interfaces, blending rich aesthetics with user-centric design principles to delight users.",
  },
];

const techStack = [
  { name: "React", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400" },
  { name: "Next.js", color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200" },
  // { name: "Python", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { name: "Node.js", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  { name: "MongoDB", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  { name: "Figma", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
  { name: "TypeScript", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
  { name: "TailwindCSS", color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" },
  { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
  { name: "Firebase", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
];

function TeamCard({ member }: { member: TeamMember }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-full h-[410px] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full flip-card-inner preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center p-8">
          <div
            className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl font-extrabold text-white mb-5 shadow-xl group-hover:scale-105 transition-transform duration-300`}
          >
            {member.initials}
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {member.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {member.role}
          </p>
          <div className="absolute bottom-4 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 dark:text-blue-400 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <span>Tap to view details</span>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-white dark:bg-[#0D0D16] border border-gray-200 dark:border-white/10 p-5 flex flex-col justify-between shadow-2xl">
          {/* Inner dark-ish upper card */}
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-white/5 flex flex-col items-center w-full">
            {member.image ? (
              <div className="w-16 h-16 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden mb-3 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-xl font-bold text-white mb-3 border-2 border-white dark:border-gray-800 shadow-md`}
              >
                {member.initials}
              </div>
            )}
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-0.5">
              {member.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {member.role}
            </p>
          </div>

          {/* Stats Boxes (Industry and Company) */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="py-2.5 px-2 rounded-xl bg-gray-50 dark:bg-[#1A1A26] border border-gray-100 dark:border-white/5 text-center">
              <div className="text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold mb-1">
                Years in Industry
              </div>
              <div className="text-base font-black text-gray-900 dark:text-white">
                {member.yearsIndustry}
              </div>
            </div>
            <div className="py-2.5 px-2 rounded-xl bg-gray-50 dark:bg-[#1A1A26] border border-gray-100 dark:border-white/5 text-center">
              <div className="text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold mb-1">
                Years at DM
              </div>
              <div className="text-base font-black text-gray-900 dark:text-white">
                {member.yearsDM}
              </div>
            </div>
          </div>

          {/* Description Text */}
          <p className="mt-3.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-left px-1 flex-grow">
            {member.bio}
          </p>

          <div className="text-[10px] text-center text-gray-400 dark:text-gray-600 mt-2">
            Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 block">
              Who We Are
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">Techaarambh</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We are a passionate team of technologists, designers, and strategists on a mission to make world-class digital solutions accessible to every business in India — from startups to enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 bg-white dark:bg-[#0D0D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-900/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-5 shadow-md">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower businesses of all sizes with innovative, affordable, and reliable digital solutions. We believe technology should be an enabler — not a barrier — for growth, and we&apos;re here to bridge that gap.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/40 dark:to-purple-950/30 border border-violet-100 dark:border-violet-900/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-5 shadow-md">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become India&apos;s most trusted IT partner for growing businesses — known for technical excellence, creative thinking, and an unwavering commitment to our clients&apos; success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 block">
                Our Journey
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                The Story of <span className="gradient-text">Techaarambh</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Techaarambh was born from a simple observation: many Indian businesses were struggling to establish a meaningful digital presence due to high costs, technical complexity, and a lack of reliable partners.
                </p>
                <p>
                  Founded in 2023, we set out to change that — offering premium-quality IT services at transparent, affordable prices. Starting with website development, we quickly expanded into data analytics, app development, and digital marketing.
                </p>
                <p>
                  Today, we&apos;ve served 30+ clients across various industries, delivered 50+ projects, and built a reputation for quality, speed, and integrity. And we&apos;re just getting started.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { num: "2023", label: "Founded" },
                { num: "50+", label: "Projects" },
                { num: "30+", label: "Clients" },
                { num: "100%", label: "Satisfaction" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 text-center shadow-sm"
                >
                  <div className="text-3xl font-extrabold gradient-text mb-1">{item.num}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 bg-white dark:bg-[#0D0D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i}
                className="group p-7 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 block">
              The People Behind
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Our Expert <span className="gradient-text">Team</span>
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                custom={i}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-white dark:bg-[#0D0D16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 block">
              Tools We Master
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border border-current/20 ${tech.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
 