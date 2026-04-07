"use client";

import { useState } from "react";
import { Smartphone, Laptop, Tablet, Watch, ChevronRight, CheckCircle, DollarSign, Truck, Zap } from "lucide-react";

const deviceTypes = [
  { id: "iphone", label: "iPhone", icon: Smartphone },
  { id: "samsung", label: "Samsung", icon: Smartphone },
  { id: "macbook", label: "MacBook", icon: Laptop },
  { id: "ipad", label: "iPad", icon: Tablet },
  { id: "apple-watch", label: "Apple Watch", icon: Watch },
];

const iphoneModels = [
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 Mini", "iPhone 13",
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 Mini", "iPhone 12",
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  "iPhone SE (3rd Gen)", "iPhone SE (2nd Gen)",
];

const samsungModels = [
  "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24",
  "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23",
  "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22",
  "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3",
  "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Galaxy Z Flip 3",
  "Galaxy Note 20 Ultra", "Galaxy Note 20",
];

const macbookModels = [
  "MacBook Pro 16\" M3 Pro/Max", "MacBook Pro 14\" M3 Pro/Max",
  "MacBook Pro 16\" M2 Pro/Max", "MacBook Pro 14\" M2 Pro/Max",
  "MacBook Air 15\" M3", "MacBook Air 13\" M3",
  "MacBook Air 15\" M2", "MacBook Air 13\" M2",
  "MacBook Pro 13\" M2", "MacBook Pro 13\" M1",
];

const storageOptions = ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB", "2 TB"];

const conditions = [
  { id: "excellent", label: "Excellent", desc: "No scratches or marks. Like new.", bonus: "+10%" },
  { id: "good", label: "Good", desc: "Minor scratches not visible from 30 cm.", bonus: "" },
  { id: "fair", label: "Fair", desc: "Visible scratches or light marks.", bonus: "-10%" },
];

const steps = [
  { icon: DollarSign, title: "Get an instant quote", desc: "Fill in your device details in under 2 minutes." },
  { icon: Zap, title: "Accept & schedule", desc: "Accept the offer and we arrange free collection from your door." },
  { icon: Truck, title: "We collect & inspect", desc: "Our team collects and verifies the device." },
  { icon: CheckCircle, title: "Get paid", desc: "Payment lands in your account within 3 business days." },
];

function getModels(deviceId: string): string[] {
  if (deviceId === "iphone") return iphoneModels;
  if (deviceId === "samsung") return samsungModels;
  if (deviceId === "macbook") return macbookModels;
  return [];
}

// Very rough mock price lookup
function getMockPrice(deviceId: string, model: string, storage: string, condition: string): number {
  const base: Record<string, number> = {
    iphone: 1200, samsung: 900, macbook: 2000, ipad: 700, "apple-watch": 500,
  };
  const conditionMultiplier = condition === "excellent" ? 1.1 : condition === "fair" ? 0.9 : 1;
  const storageBonus = storage.includes("512") ? 200 : storage.includes("1 TB") ? 400 : storage.includes("256") ? 100 : 0;
  const b = base[deviceId] ?? 800;
  return Math.round((b + storageBonus) * conditionMultiplier);
}

export default function SellPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState({ device: "", model: "", storage: "", condition: "" });
  const [quote, setQuote] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const models = getModels(selected.device);

  const handleGetQuote = () => {
    const price = getMockPrice(selected.device, selected.model, selected.storage, selected.condition);
    setQuote(price);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/10 to-primary/5 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Sell Your Device
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
          Turn your old phone or laptop into cash. Get an instant quote in under 2 minutes.
        </p>

        {/* How it works */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-4 gap-4 mt-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mb-2">
                  {i + 1}
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{s.title}</p>
                <p className="text-gray-500 text-xs">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle size={56} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re all set!</h2>
            <p className="text-gray-600 max-w-sm mx-auto mb-2">
              We&apos;ll reach out to <strong>{form.email}</strong> within 2 hours to arrange
              collection and confirm your offer of{" "}
              <strong className="text-primary">AED {quote?.toLocaleString()}</strong>.
            </p>
            <p className="text-sm text-gray-400">
              Your offer is locked for 7 days from today.
            </p>
          </div>
        ) : (
          <>
            {/* Step 1 – Device type */}
            {step >= 1 && (
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  1. What type of device are you selling?
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {deviceTypes.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => {
                        setSelected({ device: id, model: "", storage: "", condition: "" });
                        setStep(2);
                        setQuote(null);
                      }}
                      className={`flex flex-col items-center gap-2 py-4 rounded-xl border-2 text-sm font-medium transition-all ${
                        selected.device === id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <Icon size={22} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 – Details */}
            {step >= 2 && selected.device && (
              <div className="mb-8 space-y-5">
                <h2 className="text-lg font-bold text-gray-900">2. Device details</h2>

                {/* Model */}
                {models.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Model</label>
                    <select
                      value={selected.model}
                      onChange={(e) => setSelected((p) => ({ ...p, model: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                    >
                      <option value="">Select model…</option>
                      {models.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                )}

                {/* Storage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Storage</label>
                  <div className="flex flex-wrap gap-2">
                    {storageOptions.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelected((p) => ({ ...p, storage: s }))}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                          selected.storage === s
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Condition</label>
                  <div className="space-y-2">
                    {conditions.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelected((p) => ({ ...p, condition: c.id }))}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all ${
                          selected.condition === c.id
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div>
                          <span className="font-medium text-gray-900 text-sm">{c.label}</span>
                          <span className="text-gray-500 text-xs ml-2">{c.desc}</span>
                        </div>
                        {c.bonus && (
                          <span className={`text-xs font-semibold ${c.bonus.startsWith("+") ? "text-primary" : "text-danger"}`}>
                            {c.bonus}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  disabled={!selected.storage || !selected.condition || (models.length > 0 && !selected.model)}
                  onClick={handleGetQuote}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Get Instant Quote <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* Step 3 – Quote + contact */}
            {step >= 3 && quote !== null && (
              <div>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mb-8">
                  <p className="text-sm text-gray-500 mb-1">Your estimated offer</p>
                  <p className="text-5xl font-bold text-primary mb-1">AED {quote.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Locked for 7 days · Final offer after inspection</p>
                </div>

                <h2 className="text-lg font-bold text-gray-900 mb-4">3. Your contact details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Ahmed Al Rashidi"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="ahmed@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone (UAE)</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="+971 50 000 0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Accept Offer &amp; Schedule Collection
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
