"use client";

import { useState } from "react";
import { customers as initialCustomers, type Customer } from "@/data/adminData";
import { brand } from "@/data/siteContent";
import {
  Search,
  Users,
  Mail,
  Phone,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

export default function AdminCustomersPage() {
  const [customerList] = useState<Customer[]>(initialCustomers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "Active" | "Inactive">("all");
  const [sortField, setSortField] = useState<"totalSpent" | "totalOrders" | "joinedDate">("totalSpent");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [selected, setSelected] = useState<Customer | null>(null);

  const filtered = customerList
    .filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.phone.includes(search);
      const matchesStatus =
        statusFilter === "all" || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const aVal = sortField === "joinedDate" ? new Date(a[sortField]).getTime() : a[sortField];
      const bVal = sortField === "joinedDate" ? new Date(b[sortField]).getTime() : b[sortField];
      return sortDir === "desc"
        ? (bVal as number) - (aVal as number)
        : (aVal as number) - (bVal as number);
    });

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDir(sortDir === "desc" ? "asc" : "desc");
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  };

  const SortIcon = ({ field }: { field: typeof sortField }) =>
    sortField === field ? (
      sortDir === "desc" ? (
        <ChevronDown size={12} />
      ) : (
        <ChevronUp size={12} />
      )
    ) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Customers</h1>
        <p className="text-gray-400 text-sm mt-1">
          {customerList.length} total customers
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, or phone..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "Active", "Inactive"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                statusFilter === s
                  ? "bg-primary text-white"
                  : "bg-gray-900 text-gray-400 border border-gray-800 hover:text-white"
              }`}
            >
              {s === "all" ? "All" : s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4">
                  Customer
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4 hidden md:table-cell">
                  Contact
                </th>
                <th
                  className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4 cursor-pointer select-none hidden sm:table-cell"
                  onClick={() => toggleSort("totalOrders")}
                >
                  <span className="flex items-center gap-1">
                    Orders <SortIcon field="totalOrders" />
                  </span>
                </th>
                <th
                  className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4 cursor-pointer select-none"
                  onClick={() => toggleSort("totalSpent")}
                >
                  <span className="flex items-center gap-1">
                    Total Spent <SortIcon field="totalSpent" />
                  </span>
                </th>
                <th
                  className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4 cursor-pointer select-none hidden lg:table-cell"
                  onClick={() => toggleSort("joinedDate")}
                >
                  <span className="flex items-center gap-1">
                    Joined <SortIcon field="joinedDate" />
                  </span>
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-4 hidden sm:table-cell">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {filtered.map((customer) => (
                <tr
                  key={customer.id}
                  onClick={() => setSelected(customer)}
                  className="hover:bg-gray-800/40 transition-colors cursor-pointer"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {customer.name}
                        </p>
                        <p className="text-xs text-gray-500 md:hidden truncate">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <div>
                      <p className="text-sm text-gray-300">{customer.email}</p>
                      <p className="text-xs text-gray-500">{customer.phone}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-sm text-gray-300">
                      {customer.totalOrders}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold text-white">
                      {brand.currency} {customer.totalSpent.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className="text-sm text-gray-400">
                      {customer.joinedDate}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-lg ${
                        customer.status === "Active"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Users size={40} className="text-gray-700 mx-auto mb-3" />
            <p className="text-gray-400 font-medium">No customers found</p>
          </div>
        )}
      </div>

      {/* Customer Detail Slide-over */}
      {selected && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSelected(null)}
          />
          <div className="fixed top-0 right-0 h-full w-full max-w-md bg-gray-950 border-l border-gray-800 z-50 overflow-y-auto animate-slide-in-right">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    {selected.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      {selected.name}
                    </h2>
                    <span
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-lg ${
                        selected.status === "Active"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {selected.status}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Info cards */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-xl">
                  <Mail size={16} className="text-gray-500 shrink-0" />
                  <span className="text-sm text-gray-300">
                    {selected.email}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-xl">
                  <Phone size={16} className="text-gray-500 shrink-0" />
                  <span className="text-sm text-gray-300">
                    {selected.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-xl">
                  <Calendar size={16} className="text-gray-500 shrink-0" />
                  <span className="text-sm text-gray-300">
                    Joined {selected.joinedDate}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900 rounded-xl p-4 text-center">
                  <ShoppingBag
                    size={20}
                    className="text-blue-400 mx-auto mb-2"
                  />
                  <p className="text-2xl font-bold text-white">
                    {selected.totalOrders}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Total Orders</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 text-center">
                  <span className="text-emerald-400 text-lg font-bold block mb-1">
                    {brand.currency}
                  </span>
                  <p className="text-2xl font-bold text-white">
                    {selected.totalSpent.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Total Spent</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Last Order</p>
                <p className="text-sm font-medium text-white">
                  {selected.lastOrder}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
