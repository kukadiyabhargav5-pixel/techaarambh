"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@techaarambh.com",
    href: "mailto:hello@techaarambh.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 87994 95038",
    href: "tel:+918799495038",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India 🇮🇳",
    href: "#",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
    color: "from-emerald-500 to-teal-500",
  },
];

// Social icon SVGs (inline since lucide-react doesn't export Linkedin/Instagram/Twitter)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const WhatsAppIcon = () => <MessageCircle className="w-5 h-5" />;

const socials = [
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn", bg: "hover:bg-blue-600", border: "hover:border-blue-600" },
  { Icon: InstagramIcon, href: "#", label: "Instagram", bg: "hover:bg-pink-500", border: "hover:border-pink-500" },
  { Icon: TwitterIcon, href: "#", label: "Twitter/X", bg: "hover:bg-sky-500", border: "hover:border-sky-500" },
  { Icon: WhatsAppIcon, href: "#", label: "WhatsApp", bg: "hover:bg-green-500", border: "hover:border-green-500" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({});

  const validate = () => {
    const e: Partial<typeof initialForm> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 20) e.message = "Message should be at least 20 characters";
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("mail sent to your mail id");
        setForm(initialForm);
      } else {
        const data = await response.json();
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof initialForm]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const inputClass = (field: keyof typeof initialForm) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white dark:bg-dark-card text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 ${errors[field]
      ? "border-red-400 dark:border-red-600"
      : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
    }`;

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
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Let&apos;s Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Have a project in mind or want to explore how we can help? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── LEFT: contact info ── */}
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">
                  Contact Information
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  Pick a medium that suits you best. We&apos;re responsive on all channels and promise to reply within 24 hours.
                </p>

                <div className="space-y-4 mb-10">
                  {contactDetails.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Socials */}
                <div>
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-white transition-all duration-200 ${s.bg} ${s.border} hover:scale-110 hover:shadow-md`}
                      >
                        <s.Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: form ── */}
            <div className="lg:col-span-3">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-card rounded-3xl border border-gray-100 dark:border-white/8 shadow-xl shadow-blue-500/5 p-8 md:p-10"
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">
                        Message Sent! 🎉
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 text-sm font-bold text-white btn-gradient rounded-xl"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      noValidate
                    >
                      <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-8">
                        Tell Us About Your Project
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            Full Name *
                          </label>
                          <input
                            id="input-name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass("name")}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            Email Address *
                          </label>
                          <input
                            id="input-email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass("email")}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            Phone (optional)
                          </label>
                          <input
                            id="input-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClass("phone")}
                          />
                        </div>

                        {/* Service dropdown */}
                        <div>
                          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            Service Interested In *
                          </label>
                          <select
                            id="input-service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={inputClass("service")}
                          >
                            <option value="">Select a service</option>
                            <option value="website">Website Development</option>
                            <option value="analytics">Data Analytics</option>
                            <option value="app">App Development</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.service && (
                            <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                          )}
                        </div>
                      </div>

                      {/* Budget */}
                      <div className="mb-5">
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Project Budget
                        </label>
                        <select
                          id="input-budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={inputClass("budget")}
                        >
                          <option value="">Select your budget range</option>
                          <option value="under25k">Under ₹25,000</option>
                          <option value="25k-75k">₹25,000 – ₹75,000</option>
                          <option value="75k-150k">₹75,000 – ₹1,50,000</option>
                          <option value="above150k">₹1,50,000+</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="mb-7">
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Message *
                        </label>
                        <textarea
                          id="input-message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className={`${inputClass("message")} resize-none`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                      </div>

                      <button
                        id="submit-contact"
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-4 text-base font-bold text-white btn-gradient rounded-2xl shadow-xl shadow-blue-500/25 disabled:opacity-70 transition-all duration-200 hover:-translate-y-0.5"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
