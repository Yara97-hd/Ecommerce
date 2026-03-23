"use client";

import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Bell, Search } from "lucide-react";

export default function AdminHeader() {
  const { adminEmail } = useAdminAuth();

  return (
    <header className="h-16 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Search */}
      <div className="relative max-w-md w-full hidden md:block">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search products, orders, customers..."
          className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
        />
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-gray-950" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
            {adminEmail?.charAt(0).toUpperCase() ?? "A"}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white leading-none">Admin</p>
            <p className="text-xs text-gray-500 mt-0.5">{adminEmail}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
