"use client";

import { useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react";

// Mock order data for demo
const mockOrders: Record<string, {
  number: string;
  status: "processing" | "shipped" | "out_for_delivery" | "delivered";
  product: string;
  placedDate: string;
  estimatedDelivery: string;
  carrier: string;
  trackingRef: string;
  address: string;
  events: { date: string; time: string; description: string; location: string }[];
}> = {
  "RV-10042": {
    number: "RV-10042",
    status: "shipped",
    product: "iPhone 15 Pro Max · 256 GB · Black Titanium",
    placedDate: "April 5, 2025",
    estimatedDelivery: "April 8, 2025",
    carrier: "Aramex",
    trackingRef: "AX924837651AE",
    address: "Villa 14, Al Barsha 1, Dubai",
    events: [
      { date: "Apr 7", time: "09:14", description: "Shipment in transit", location: "Dubai Distribution Hub" },
      { date: "Apr 6", time: "18:30", description: "Picked up by carrier", location: "Revibe Warehouse, DIC" },
      { date: "Apr 6", time: "14:00", description: "Order packed and ready", location: "Revibe Warehouse, DIC" },
      { date: "Apr 5", time: "11:22", description: "Order confirmed & payment received", location: "revibe.me" },
    ],
  },
  "RV-10031": {
    number: "RV-10031",
    status: "delivered",
    product: "MacBook Air 13\" M2 · 256 GB · Midnight",
    placedDate: "March 28, 2025",
    estimatedDelivery: "March 30, 2025",
    carrier: "Fetchr",
    trackingRef: "FT0031928UAE",
    address: "Apt 7B, JBR, Dubai",
    events: [
      { date: "Mar 30", time: "14:52", description: "Delivered — signed by recipient", location: "JBR, Dubai" },
      { date: "Mar 30", time: "10:00", description: "Out for delivery", location: "Dubai South Depot" },
      { date: "Mar 29", time: "20:10", description: "Arrived at delivery facility", location: "Dubai South Depot" },
      { date: "Mar 28", time: "16:45", description: "Picked up by carrier", location: "Revibe Warehouse, DIC" },
      { date: "Mar 28", time: "09:30", description: "Order confirmed & payment received", location: "revibe.me" },
    ],
  },
};

const statusConfig = {
  processing: { label: "Processing", color: "text-warning bg-warning/10", step: 0 },
  shipped: { label: "Shipped", color: "text-primary bg-primary/10", step: 1 },
  out_for_delivery: { label: "Out for Delivery", color: "text-accent bg-accent/10", step: 2 },
  delivered: { label: "Delivered", color: "text-success bg-success/10", step: 3 },
};

const progressSteps = [
  { icon: Package, label: "Processing" },
  { icon: Truck, label: "Shipped" },
  { icon: MapPin, label: "Out for Delivery" },
  { icon: CheckCircle, label: "Delivered" },
];

export default function TrackPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<(typeof mockOrders)[string] | null | "not_found">(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const found = mockOrders[orderNumber.trim().toUpperCase()];
      setResult(found ?? "not_found");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Track Your Order</h1>
        <p className="text-gray-500 text-lg">
          Enter your order number to see real-time shipping status.
        </p>
      </div>

      {/* Search form */}
      <form
        onSubmit={handleSearch}
        className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Order Number
          </label>
          <input
            type="text"
            required
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="e.g. RV-10042"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="The email used to place the order"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          ) : (
            <Search size={16} />
          )}
          {loading ? "Searching…" : "Track Order"}
        </button>
        <p className="text-xs text-center text-gray-400">
          Demo: try order numbers <strong>RV-10042</strong> or <strong>RV-10031</strong>
        </p>
      </form>

      {/* Result */}
      {result === "not_found" && (
        <div className="text-center py-10 bg-gray-50 rounded-2xl">
          <Package size={40} className="text-gray-300 mx-auto mb-3" />
          <p className="font-semibold text-gray-900 mb-1">Order not found</p>
          <p className="text-sm text-gray-500">
            Check your order number and email, then try again. Orders may take up to 1 hour to appear after placement.
          </p>
        </div>
      )}

      {result && result !== "not_found" && (
        <div className="space-y-6">
          {/* Status header */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                  Order {result.number}
                </p>
                <p className="font-semibold text-gray-900 text-sm">{result.product}</p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusConfig[result.status].color}`}>
                {statusConfig[result.status].label}
              </span>
            </div>

            {/* Progress bar */}
            <div className="flex items-center justify-between mt-6 relative">
              <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-100 z-0" />
              <div
                className="absolute left-0 top-4 h-0.5 bg-primary z-0 transition-all"
                style={{ width: `${(statusConfig[result.status].step / 3) * 100}%` }}
              />
              {progressSteps.map((s, i) => {
                const Icon = s.icon;
                const active = i <= statusConfig[result.status].step;
                return (
                  <div key={s.label} className="flex flex-col items-center gap-1 z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                      active ? "bg-primary border-primary text-white" : "bg-white border-gray-200 text-gray-300"
                    }`}>
                      <Icon size={14} />
                    </div>
                    <span className={`text-xs font-medium ${active ? "text-primary" : "text-gray-400"}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-gray-100 text-sm">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Placed</p>
                <p className="font-medium text-gray-900">{result.placedDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Est. Delivery</p>
                <p className="font-medium text-gray-900">{result.estimatedDelivery}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Carrier</p>
                <p className="font-medium text-gray-900">{result.carrier} · {result.trackingRef}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Delivering to</p>
                <p className="font-medium text-gray-900">{result.address}</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-5">Shipment Timeline</h3>
            <div className="space-y-0">
              {result.events.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${i === 0 ? "bg-primary" : "bg-gray-200"}`} />
                    {i < result.events.length - 1 && (
                      <div className="w-px flex-1 bg-gray-100 my-1" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="font-medium text-gray-900 text-sm">{event.description}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {event.location} · {event.date} at {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
