"use client";

import { useState } from "react";
import Link from "next/link";
import { brand, navLinks } from "@/data/siteContent";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  User,
  Globe,
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              {brand.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    link.highlight
                      ? "text-accent hover:bg-accent-light"
                      : "text-gray-700 hover:text-primary hover:bg-primary-light"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </Link>

                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in-up">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-light hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-3 animate-fade-in-up">
                  <input
                    type="text"
                    placeholder="What are you looking for..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    autoFocus
                  />
                </div>
              )}
            </div>

            <button
              className="p-2 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100 hidden sm:flex"
              aria-label="Language"
            >
              <Globe size={20} />
            </button>

            <button
              className="p-2 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100 hidden sm:flex"
              aria-label="Account"
            >
              <User size={20} />
            </button>

            <Link
              href="#"
              className="relative p-2 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => !link.children && setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium ${
                    link.highlight
                      ? "text-accent"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        );
                      }}
                    />
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="ml-4 space-y-1 mb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
