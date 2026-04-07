"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  dashboardStats,
  revenueChartData,
  orderStatusDistribution,
  orders,
  recentActivity,
} from "@/data/adminData";
import { getBrand } from "@/data/siteContent";
import Link from "next/link";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Clock,
  ShoppingBag,
  Truck,
  CheckCircle,
  UserPlus,
  Star,
  RotateCcw,
  AlertTriangle,
  Edit2,
  Save,
} from "lucide-react";

const activityIcons: Record<string, React.ReactNode> = {
  order: <ShoppingBag size={16} />,
  shipping: <Truck size={16} />,
  delivery: <CheckCircle size={16} />,
  customer: <UserPlus size={16} />,
  review: <Star size={16} />,
  return: <RotateCcw size={16} />,
  stock: <AlertTriangle size={16} />,
};

const activityColors: Record<string, string> = {
  order: "bg-blue-500/10 text-blue-400",
  shipping: "bg-amber-500/10 text-amber-400",
  delivery: "bg-green-500/10 text-green-400",
  customer: "bg-purple-500/10 text-purple-400",
  review: "bg-amber-500/10 text-amber-400",
  return: "bg-red-500/10 text-red-400",
  stock: "bg-orange-500/10 text-orange-400",
};

const statusColors: Record<string, string> = {
  Pending: "bg-gray-500/10 text-gray-400",
  Processing: "bg-amber-500/10 text-amber-400",
  Shipped: "bg-blue-500/10 text-blue-400",
  Delivered: "bg-green-500/10 text-green-400",
  Cancelled: "bg-red-500/10 text-red-400",
};

export default function AdminDashboard() {
  const { t } = useLanguage();
  const brand = getBrand(t);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editStats, setEditStats] = useState({ ...dashboardStats });

  const handleEditChange = (field: string, value: number) => {
    setEditStats((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveStats = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setEditMode(false);
  };

  const currentStats = editMode ? editStats : dashboardStats;

  const stats = [
    {
      label: "Total Revenue",
      value: `${brand.currency} ${currentStats.totalRevenue.toLocaleString()}`,
      change: currentStats.revenueChange,
      icon: DollarSign,
      color: "bg-emerald-500/10 text-emerald-400",
      field: "totalRevenue",
    },
    {
      label: "Total Orders",
      value: currentStats.totalOrders.toLocaleString(),
      change: currentStats.ordersChange,
      icon: ShoppingCart,
      color: "bg-blue-500/10 text-blue-400",
      field: "totalOrders",
    },
    {
      label: "Total Customers",
      value: currentStats.totalCustomers.toLocaleString(),
      change: currentStats.customersChange,
      icon: Users,
      color: "bg-purple-500/10 text-purple-400",
      field: "totalCustomers",
    },
    {
      label: "Total Products",
      value: currentStats.totalProducts.toLocaleString(),
      change: currentStats.productsChange,
      icon: Package,
      color: "bg-amber-500/10 text-amber-400",
      field: "totalProducts",
    },
  ];

  const maxRevenue = Math.max(...revenueChartData.map((d) => d.revenue));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">
            Welcome back. Here&apos;s what&apos;s happening with your store.
          </p>
        </div>
        <div className="flex gap-2">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              <Edit2 size={16} />
              Edit Stats
            </button>
          ) : (
            <>
              <button
                onClick={handleSaveStats}
                disabled={saving}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors disabled:opacity-60"
              >
                {saving ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save size={16} />
                )}
                Save
              </button>
              <button
                onClick={() => {
                  setEditMode(false);
                  setEditStats({ ...dashboardStats });
                }}
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isPositive = stat.change >= 0;
          return (
            <div
              key={stat.label}
              className={`bg-gray-900 border rounded-2xl p-5 transition-colors ${
                editMode ? "border-primary/30" : "border-gray-800 hover:border-gray-700"
              }`}
            >
              {editMode ? (
                <div className="space-y-3">
                  <label className="block text-xs font-medium text-gray-400">
                    {stat.label}
                  </label>
                  <input
                    type="number"
                    value={(editStats as any)[stat.field] || 0}
                    onChange={(e) =>
                      handleEditChange(stat.field, Number(e.target.value))
                    }
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.color}`}>
                      <Icon size={22} />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg ${
                        isPositive
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {Math.abs(stat.change)}%
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Revenue (Last 7 Days)</h2>
          <div className="flex items-end gap-3 h-48">
            {revenueChartData.map((d) => {
              const height = (d.revenue / maxRevenue) * 100;
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-gray-400 font-medium">
                    {brand.currency} {(d.revenue / 1000).toFixed(1)}k
                  </span>
                  <div className="w-full relative flex justify-center">
                    <div
                      className="w-full max-w-[48px] bg-primary/20 rounded-t-lg relative overflow-hidden transition-all duration-500 hover:bg-primary/30"
                      style={{ height: `${height}%`, minHeight: "8px" }}
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg"
                        style={{ height: "100%" }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{d.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Status Distribution */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Order Status</h2>
          <div className="space-y-4">
            {orderStatusDistribution.map((s) => {
              const totalOrders = orderStatusDistribution.reduce(
                (acc, cur) => acc + cur.count,
                0
              );
              const pct = ((s.count / totalOrders) * 100).toFixed(0);
              return (
                <div key={s.status}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                      <span className="text-gray-300">{s.status}</span>
                    </div>
                    <span className="text-gray-400">
                      {s.count} ({pct}%)
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: s.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-white">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-sm text-primary hover:text-primary-dark flex items-center gap-1 font-medium"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {orders.slice(0, 5).map((order) => (
              <Link
                key={order.id}
                href={`/admin/orders/${order.id}`}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/60 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <ShoppingBag size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {order.orderNumber}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {order.customerName}
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <p className="text-sm font-semibold text-white">
                    {brand.currency} {order.total.toLocaleString()}
                  </p>
                  <span
                    className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-md mt-1 ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-5">
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/40 transition-colors"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    activityColors[a.type]
                  }`}
                >
                  {activityIcons[a.type]}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-300 leading-snug">
                    {a.message}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                    <Clock size={10} /> {a.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
