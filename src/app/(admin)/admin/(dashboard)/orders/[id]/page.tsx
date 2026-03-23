"use client";

import { use, useState } from "react";
import { orders, type OrderStatus } from "@/data/adminData";
import { brand } from "@/data/siteContent";
import Link from "next/link";
import {
  ArrowLeft,
  Package,
  MapPin,
  CreditCard,
  Mail,
  User,
  Clock,
  Truck,
  CheckCircle,
  XCircle,
  Loader,
} from "lucide-react";

const statusSteps: OrderStatus[] = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
];

const statusColors: Record<OrderStatus, string> = {
  Pending: "bg-gray-500/10 text-gray-400",
  Processing: "bg-amber-500/10 text-amber-400",
  Shipped: "bg-blue-500/10 text-blue-400",
  Delivered: "bg-emerald-500/10 text-emerald-400",
  Cancelled: "bg-red-500/10 text-red-400",
};

const statusIcons: Record<OrderStatus, React.ReactNode> = {
  Pending: <Clock size={18} />,
  Processing: <Loader size={18} />,
  Shipped: <Truck size={18} />,
  Delivered: <CheckCircle size={18} />,
  Cancelled: <XCircle size={18} />,
};

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const order = orders.find((o) => o.id === id);
  const [status, setStatus] = useState<OrderStatus>(
    order?.status ?? "Pending"
  );
  const [updating, setUpdating] = useState(false);

  if (!order) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg mb-4">Order not found</p>
        <Link
          href="/admin/orders"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
        >
          <ArrowLeft size={16} /> Back to Orders
        </Link>
      </div>
    );
  }

  const handleStatusChange = async (newStatus: OrderStatus) => {
    setUpdating(true);
    await new Promise((r) => setTimeout(r, 600));
    setStatus(newStatus);
    setUpdating(false);
  };

  const currentStepIndex = statusSteps.indexOf(status);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/orders"
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {order.orderNumber}
            </h1>
            <p className="text-gray-400 text-sm mt-0.5">
              Placed on {order.date}
            </p>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${statusColors[status]}`}
        >
          {statusIcons[status]}
          {status}
        </span>
      </div>

      {status !== "Cancelled" && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-base font-semibold text-white mb-5">
            Order Progress
          </h2>
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-gray-800" />
            <div
              className="absolute top-5 left-[10%] h-0.5 bg-primary transition-all duration-500"
              style={{
                width: `${
                  currentStepIndex >= 0
                    ? (currentStepIndex / (statusSteps.length - 1)) * 80
                    : 0
                }%`,
              }}
            />

            {statusSteps.map((step, i) => {
              const isComplete = i <= currentStepIndex;
              const isCurrent = i === currentStepIndex;
              return (
                <button
                  key={step}
                  onClick={() => handleStatusChange(step)}
                  disabled={updating}
                  className="relative flex flex-col items-center gap-2 z-10"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      isComplete
                        ? "bg-primary border-primary text-white"
                        : "bg-gray-900 border-gray-700 text-gray-500"
                    } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}
                  >
                    {statusIcons[step]}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      isComplete ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-base font-semibold text-white mb-4">
            Order Items
          </h2>
          <div className="space-y-3">
            {order.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-gray-800/40 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-500">
                    <Package size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.productName}
                    </p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-white">
                  {brand.currency} {item.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-4 pt-4 flex items-center justify-between">
            <span className="text-sm text-gray-400">Total</span>
            <span className="text-lg font-bold text-white">
              {brand.currency} {order.total.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-semibold text-white">Customer</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User size={16} className="text-gray-500 shrink-0" />
                <span className="text-sm text-gray-300">
                  {order.customerName}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-500 shrink-0" />
                <span className="text-sm text-gray-300">
                  {order.customerEmail}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-semibold text-white">
              Shipping Address
            </h2>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-gray-500 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-300 leading-relaxed">
                {order.shippingAddress}
              </span>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-semibold text-white">Payment</h2>
            <div className="flex items-center gap-3">
              <CreditCard size={16} className="text-gray-500 shrink-0" />
              <span className="text-sm text-gray-300">
                {order.paymentMethod}
              </span>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-semibold text-white">
              Update Status
            </h2>
            <select
              value={status}
              onChange={(e) =>
                handleStatusChange(e.target.value as OrderStatus)
              }
              disabled={updating}
              className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-primary transition-colors"
            >
              {[...statusSteps, "Cancelled" as OrderStatus].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
