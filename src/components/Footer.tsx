"use client";

import Link from "next/link";
import { getBrand, getFooter, getTrustBadges } from "@/data/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Truck, RefreshCw, CreditCard, Mail, Phone, Facebook, Instagram } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={20} />,
  truck: <Truck size={20} />,
  refresh: <RefreshCw size={20} />,
  creditCard: <CreditCard size={20} />,
};

export default function Footer() {
  const { t } = useLanguage();
  const brand = getBrand(t);
  const footer = getFooter(t);
  const trustBadges = getTrustBadges(t);

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust badges bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  {iconMap[badge.icon]}
                </div>
                <span className="text-sm font-medium text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-white">{brand.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              {footer.about.companyName}
            </p>
            <p className="text-sm text-gray-400">
              {footer.about.description}
            </p>
            <p className="text-sm text-gray-400 mt-3">
              {footer.about.address}
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-3">
              {footer.links.aboutUs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-3">
              {footer.links.information.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {footer.contact.email}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {footer.contact.emailNote}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`tel:${footer.contact.phone}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {footer.contact.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {footer.contact.phoneHours}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={footer.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={footer.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-500">
            {footer.copyright.replace("2024", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
