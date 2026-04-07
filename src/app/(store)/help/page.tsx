"use client";

import { useState } from "react";
import { ChevronDown, Search, Package, RotateCcw, ShieldCheck, CreditCard, Smartphone, Truck } from "lucide-react";
import Link from "next/link";

const faqs: { category: string; icon: React.ElementType; questions: { q: string; a: string }[] }[] = [
  {
    category: "Orders & Shipping",
    icon: Truck,
    questions: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery takes 1–3 business days across the UAE. Express delivery (where available) is same-day or next-day. You'll receive a tracking link by SMS and email once your order is dispatched.",
      },
      {
        q: "Is shipping free?",
        a: "Yes — free standard delivery on all orders. Express delivery may carry a small surcharge, shown at checkout.",
      },
      {
        q: "Can I change my delivery address after placing an order?",
        a: "Contact us immediately at contact@revibe.me or call +971 4 459 7000. If your order hasn't been dispatched yet, we can update the address at no charge.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    icon: RotateCcw,
    questions: [
      {
        q: "What is Revibe's return policy?",
        a: "You have 10 days from delivery to return any device in its original condition. The device must be factory reset, in the same condition it was received, and in original packaging where possible.",
      },
      {
        q: "How long does a refund take?",
        a: "Once we receive and inspect your returned device, refunds are processed within 2–5 business days back to your original payment method.",
      },
      {
        q: "Can I exchange a device instead of returning it?",
        a: "Yes. Contact our support team within 10 days and we'll arrange an exchange for a device of equal or greater value (with a top-up if needed).",
      },
    ],
  },
  {
    category: "Warranty",
    icon: ShieldCheck,
    questions: [
      {
        q: "What does the 12-month warranty cover?",
        a: "Our warranty covers hardware faults including screen, battery, charging port, speakers, cameras, and all internal components. It does not cover accidental damage (drops, water damage) or software issues caused by user modification.",
      },
      {
        q: "How do I make a warranty claim?",
        a: "Email us at warranty@revibe.me with your order number and a description of the fault. Our team will arrange a free collection and repair or replacement within 5–10 business days.",
      },
      {
        q: "Does the warranty transfer if I sell the device?",
        a: "Revibe warranties are tied to the original order and do not transfer to a new owner.",
      },
    ],
  },
  {
    category: "Payments",
    icon: CreditCard,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and buy-now-pay-later options. Cash on delivery is not available.",
      },
      {
        q: "Is buy-now-pay-later available?",
        a: "Yes — eligible orders can be split into 0% interest instalments. Select the BNPL option at checkout to see available plans.",
      },
      {
        q: "Is it safe to pay on Revibe?",
        a: "All payments are processed through PCI-DSS compliant payment gateways. We never store your full card number on our servers.",
      },
    ],
  },
  {
    category: "Device Conditions",
    icon: Smartphone,
    questions: [
      {
        q: "What do Excellent, Good, and Fair mean?",
        a: "Excellent: minimal to no cosmetic signs of use, full functionality. Good: light scratches or scuffs not visible from 30 cm, full functionality. Fair: visible scratches or wear, full functionality — best value grade.",
      },
      {
        q: "What is the battery health of refurbished devices?",
        a: "All Revibe devices have a battery health of 80% or above. The exact battery health percentage is shown on the product page where available.",
      },
      {
        q: "Are accessories included with the device?",
        a: "Every device comes with a compatible charging cable. Original box and earphones are included where available and noted on the product page.",
      },
    ],
  },
  {
    category: "Selling Your Device",
    icon: Package,
    questions: [
      {
        q: "How do I sell my device to Revibe?",
        a: "Use the Sell page to submit your device details and get an instant quote. If you accept, we arrange a free collection and pay you within 3 business days of receiving the device.",
      },
      {
        q: "What devices do you buy?",
        a: "We buy iPhones, Samsung Galaxy phones, MacBooks, iPads, and Apple Watches. Devices must be functional (no broken screens or liquid damage) and not blacklisted.",
      },
      {
        q: "How is the price determined?",
        a: "Our quote is based on the model, storage, condition, and current market demand. The price is locked for 7 days from the date of your quote.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-medium text-gray-900 text-sm">{q}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-gray-600 text-sm leading-relaxed pb-4">{a}</p>
      )}
    </div>
  );
}

export default function HelpPage() {
  const [search, setSearch] = useState("");

  const filtered = faqs
    .map((section) => ({
      ...section,
      questions: section.questions.filter(
        (q) =>
          !search ||
          q.q.toLowerCase().includes(search.toLowerCase()) ||
          q.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((s) => s.questions.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Help Center</h1>
        <p className="text-gray-500 text-lg mb-8">
          Find answers to common questions about orders, returns, and devices.
        </p>

        {/* Search */}
        <div className="relative max-w-xl mx-auto">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search help articles…"
            className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
          />
        </div>
      </div>

      {/* FAQs */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium mb-2">No results for &quot;{search}&quot;</p>
          <p className="text-sm">Try a different search term or contact us directly.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {filtered.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.category} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <h2 className="font-semibold text-gray-900">{section.category}</h2>
                </div>
                <div className="px-6">
                  {section.questions.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Still need help? */}
      <div className="mt-12 bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Still need help?
        </h3>
        <p className="text-gray-600 mb-6">
          Our support team is available Sunday–Thursday, 9 AM–6 PM GST.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
