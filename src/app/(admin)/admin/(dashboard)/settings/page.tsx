"use client";

import { useState } from "react";
import { adminSettings } from "@/data/adminData";
import {
  Save,
  Store,
  Mail,
  DollarSign,
  Globe,
  Truck,
  RotateCcw,
  Shield,
  Bell,
  Palette,
  Megaphone,
} from "lucide-react";

export default function AdminSettingsPage() {
  const [form, setForm] = useState({ ...adminSettings });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "shipping" | "notifications" | "announcement">("general");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors";
  const labelClass = "block text-sm font-medium text-gray-300 mb-2";

  const tabs = [
    { id: "general" as const, label: "General", icon: Store },
    { id: "shipping" as const, label: "Shipping & Returns", icon: Truck },
    { id: "notifications" as const, label: "Notifications", icon: Bell },
    { id: "announcement" as const, label: "Announcement", icon: Megaphone },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage your store preferences
          </p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-emerald-400 font-medium animate-fade-in-up">
              Settings saved!
            </span>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Save size={16} />
            )}
            Save Changes
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-gray-900 text-gray-400 border border-gray-800 hover:text-white"
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSave}>
        {/* General */}
        {activeTab === "general" && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Store size={18} className="text-primary" />
                Store Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Store Name</label>
                  <input
                    name="storeName"
                    value={form.storeName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Contact Email</label>
                  <input
                    name="storeEmail"
                    type="email"
                    value={form.storeEmail}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Currency</label>
                  <select
                    name="currency"
                    value={form.currency}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="AED">AED — UAE Dirham</option>
                    <option value="SAR">SAR — Saudi Riyal</option>
                    <option value="KWD">KWD — Kuwaiti Dinar</option>
                    <option value="USD">USD — US Dollar</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Timezone</label>
                  <select
                    name="timezone"
                    value={form.timezone}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="Asia/Dubai">Asia/Dubai (GMT+4)</option>
                    <option value="Asia/Riyadh">Asia/Riyadh (GMT+3)</option>
                    <option value="Asia/Kuwait">Asia/Kuwait (GMT+3)</option>
                    <option value="UTC">UTC (GMT+0)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Appearance */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Palette size={18} className="text-primary" />
                Appearance
              </h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Primary Brand Color</label>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary border-2 border-gray-700" />
                    <input
                      type="text"
                      value="#00b3a4"
                      readOnly
                      className={`${inputClass} max-w-[160px]`}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Change the primary color in <code className="text-gray-400">src/app/globals.css</code> under the @theme section.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Shipping & Returns */}
        {activeTab === "shipping" && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Truck size={18} className="text-primary" />
                Shipping
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>
                    Free Shipping Threshold ({form.currency})
                  </label>
                  <input
                    name="freeShippingThreshold"
                    type="number"
                    value={form.freeShippingThreshold}
                    onChange={handleChange}
                    min={0}
                    className={inputClass}
                  />
                  <p className="text-xs text-gray-500 mt-1.5">
                    Orders above this amount get free shipping
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <RotateCcw size={18} className="text-primary" />
                Returns & Warranty
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Return Period (Days)</label>
                  <input
                    name="returnDays"
                    type="number"
                    value={form.returnDays}
                    onChange={handleChange}
                    min={0}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Warranty Period (Months)</label>
                  <input
                    name="warrantyMonths"
                    type="number"
                    value={form.warrantyMonths}
                    onChange={handleChange}
                    min={0}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <Bell size={18} className="text-primary" />
              Email Notifications
            </h2>
            <div className="space-y-4">
              {[
                {
                  label: "New order received",
                  description: "Get notified when a new order is placed",
                  defaultChecked: true,
                },
                {
                  label: "Order status updated",
                  description: "Notify when order status changes",
                  defaultChecked: true,
                },
                {
                  label: "New customer registered",
                  description: "Alert when a new customer signs up",
                  defaultChecked: false,
                },
                {
                  label: "Low stock warning",
                  description: "Notify when product stock is low",
                  defaultChecked: true,
                },
                {
                  label: "Customer reviews",
                  description: "Get notified of new product reviews",
                  defaultChecked: false,
                },
                {
                  label: "Return requests",
                  description: "Alert when a customer requests a return",
                  defaultChecked: true,
                },
              ].map((item) => (
                <label
                  key={item.label}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/40 transition-colors cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    defaultChecked={item.defaultChecked}
                    className="w-5 h-5 rounded-md border-gray-600 bg-gray-800 text-primary focus:ring-primary/20 mt-0.5 cursor-pointer"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Announcement */}
        {activeTab === "announcement" && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Megaphone size={18} className="text-primary" />
                Announcement Bar
              </h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Announcement Text</label>
                  <textarea
                    name="announcementText"
                    value={form.announcementText}
                    onChange={handleChange}
                    placeholder="Enter your announcement message..."
                    rows={3}
                    className={inputClass}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This text will appear in the announcement bar at the top of your store.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="announcementEnabled"
                    checked={form.announcementEnabled}
                    onChange={(e) => setForm((prev) => ({ ...prev, announcementEnabled: e.target.checked }))}
                    className="w-5 h-5 rounded-md border-gray-600 bg-gray-800 text-primary focus:ring-primary/20 cursor-pointer"
                  />
                  <div>
                    <label className="text-sm font-medium text-gray-300 cursor-pointer">
                      Enable Announcement Bar
                    </label>
                    <p className="text-xs text-gray-500">
                      Show/hide the announcement bar on your store
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-white">Preview</h3>
              <div className="bg-primary text-white text-center py-2 px-4 text-sm font-medium rounded-lg">
                {form.announcementText || "Your announcement text will appear here"}
              </div>
              {!form.announcementEnabled && (
                <p className="text-xs text-amber-400">
                  Announcement bar is currently disabled
                </p>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
