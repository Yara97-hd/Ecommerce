"use client";

import { useState } from "react";
import Link from "next/link";
import { getBrand } from "@/data/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  User,
  Package,
  Heart,
  Settings,
  MapPin,
  CreditCard,
  LogOut,
  ChevronRight,
} from "lucide-react";

const accountSections = [
  {
    id: "overview",
    label: "Account Overview",
    icon: User,
    description: "View your account details and preferences",
  },
  {
    id: "orders",
    label: "Order History",
    icon: Package,
    description: "Track your orders and view purchase history",
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: Heart,
    description: "Your saved items and favorites",
  },
  {
    id: "addresses",
    label: "Addresses",
    icon: MapPin,
    description: "Manage your shipping and billing addresses",
  },
  {
    id: "payment",
    label: "Payment Methods",
    icon: CreditCard,
    description: "Saved payment methods and cards",
  },
  {
    id: "settings",
    label: "Account Settings",
    icon: Settings,
    description: "Update your profile and preferences",
  },
];

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const { t } = useLanguage();
  const brand = getBrand(t);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Account</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Welcome back!</p>
                <p className="text-sm text-gray-600">user@example.com</p>
              </div>
            </div>

            <nav className="space-y-2">
              {accountSections.map((section) => {
                const Icon = section.icon;
                const isExternalLink = section.id === "orders" || section.id === "wishlist";

                return isExternalLink ? (
                  <Link
                    key={section.id}
                    href={`/${section.id}`}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-50"
                  >
                    <Icon size={20} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{section.label}</p>
                      <p className="text-xs text-gray-500">{section.description}</p>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                ) : (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? "bg-primary/5 text-primary border border-primary/20"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon size={20} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{section.label}</p>
                      <p className="text-xs text-gray-500">{section.description}</p>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors">
                <LogOut size={20} />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            {activeSection === "overview" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Overview</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Package size={24} className="text-primary" />
                      <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                    </div>
                    <p className="text-gray-600 mb-4">You have 0 active orders</p>
                    <Link
                      href="/orders"
                      className="text-primary hover:text-primary-dark font-medium text-sm"
                    >
                      View all orders →
                    </Link>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart size={24} className="text-primary" />
                      <h3 className="text-lg font-semibold text-gray-900">Wishlist</h3>
                    </div>
                    <p className="text-gray-600 mb-4">0 items in your wishlist</p>
                    <Link
                      href="/wishlist"
                      className="text-primary hover:text-primary-dark font-medium text-sm"
                    >
                      View wishlist →
                    </Link>
                  </div>
                </div>

                <div className="bg-linear-to-r from-primary to-primary-dark rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Welcome to {brand.name}!</h3>
                  <p className="mb-4 opacity-90">
                    Get exclusive access to refurbished electronics with our 12-month warranty and free delivery.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              </div>
            )}

            {activeSection === "orders" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
                <div className="text-center py-12">
                  <Package size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
                  <p className="text-gray-600 mb-6">When you place your first order, it will appear here.</p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              </div>
            )}

            {activeSection === "wishlist" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>
                <div className="text-center py-12">
                  <Heart size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-600 mb-6">Save items you love for later.</p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            )}

            {activeSection === "addresses" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Address Book</h2>
                <div className="text-center py-12">
                  <MapPin size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No addresses saved</h3>
                  <p className="text-gray-600 mb-6">Add your shipping and billing addresses.</p>
                  <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                    Add Address
                  </button>
                </div>
              </div>
            )}

            {activeSection === "payment" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h2>
                <div className="text-center py-12">
                  <CreditCard size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No payment methods saved</h3>
                  <p className="text-gray-600 mb-6">Add your payment methods for faster checkout.</p>
                  <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                    Add Payment Method
                  </button>
                </div>
              </div>
            )}

            {activeSection === "settings" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                      Save Changes
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}