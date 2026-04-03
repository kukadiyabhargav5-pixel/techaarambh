"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Website Development",
  "Data Analytics",
  "Application Development",
  "Digital Marketing",
];

const LinkedinIcon = () => (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>);
const InstagramIcon = () => (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>);
const TwitterIcon = () => (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
const WhatsAppIcon = () => <MessageCircle className="w-4 h-4" />;

const socials = [
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
  { Icon: InstagramIcon, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  { Icon: TwitterIcon, href: "#", label: "Twitter/X", color: "hover:text-sky-400" },
  { Icon: WhatsAppIcon, href: "#", label: "WhatsApp", color: "hover:text-green-500" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-[#080810] border-t border-gray-200 dark:border-blue-900/20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-extrabold gradient-text">Techaarambh</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Where Technology Begins. We craft digital solutions that power businesses across India and beyond.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 transition-all duration-200 ${s.color} hover:border-current hover:scale-110`}
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                techaarambh78@gmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                +91 87994 95038
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                India 🇮🇳
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white btn-gradient rounded-xl shadow-md"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © 2025 Techaarambh. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Built with ❤️ in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
