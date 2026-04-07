"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { orders as initialOrders, type Order, type OrderStatus } from "@/data/adminData";
import { getBrand } from "@/data/siteContent";
import Link from "next/link";
import {
  Search,
  Filter,
  Eye,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

const statusColors: Record<OrderStatus, string> = {
  Pending: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  Processing: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Shipped: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Delivered: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

const allStatuses: OrderStatus[] = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function AdminOrdersPage() {
  const { t } = useLanguage();
  const brand = getBrand(t);
  const [orderList] = useState<Order[]>(initialOrders);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | OrderStatus>("all");

  const filtered = orderList.filter((o) => {
    const matchesSearch =
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.customerEmail.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const countByStatus = (status: OrderStatus) =>
    orderList.filter((o) => o.status === status).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Orders</h1>
        <p className="text-gray-400 text-sm mt-1">
          {orderList.length} total orders
        </p>
      </div>

      {/* Status tabs */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        <button
          onClick={() => setStatusFilter("all")}
          className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
            statusFilter === "all"
              ? "bg-primary text-white"
              : "bg-gray-900 text-gray-400 border border-gray-800 hover:text-white"
          }`}
        >
          All ({orderList.length})
        </button>
        {allStatuses.map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors border ${
              statusFilter === s
                ? statusColors[s]
                : "bg-gray-900 text-gray-400 border-gray-800 hover:text-white"
            }`}
          >
            {s} ({countByStatus(s)})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by order number, customer..."
          className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4">
                  Order
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4 hidden md:table-cell">
                  Customer
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4 hidden sm:table-cell">
                  Date
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4">
                  Status
                </th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4">
                  Total
                </th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4">
                  
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {filtered.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-800/40 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-500 shrink-0">
                        <ShoppingBag size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {order.orderNumber}
                        </p>
                        <p className="text-xs text-gray-500 md:hidden">
                          {order.customerName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <div>
                      <p className="text-sm text-gray-300">
                        {order.customerName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {order.customerEmail}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-sm text-gray-400">{order.date}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <span className="text-sm font-semibold text-white">
                      {brand.currency} {order.total.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                    >
                      View <ChevronRight size={14} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <ShoppingBag size={40} className="text-gray-700 mx-auto mb-3" />
            <p className="text-gray-400 font-medium">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
}
