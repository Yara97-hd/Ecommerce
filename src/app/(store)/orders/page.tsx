"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBrand } from "@/data/siteContent";
import { formatPrice } from "@/lib/api";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  ArrowLeft,
  Eye,
  RefreshCw,
} from "lucide-react";

// Mock order data - in a real app, this would come from an API
const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-04-05",
    status: "delivered",
    total: 2749,
    items: [
      {
        id: "1",
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",
        price: 2749,
        quantity: 1,
        condition: "Good",
      },
    ],
    shipping: {
      address: "123 Main St, Dubai, UAE",
      method: "Express Delivery",
      tracking: "TRK123456789",
    },
  },
  {
    id: "ORD-2024-002",
    date: "2024-03-28",
    status: "shipped",
    total: 2169,
    items: [
      {
        id: "2",
        name: "iPhone 15 Pro",
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",
        price: 2169,
        quantity: 1,
        condition: "Good",
      },
    ],
    shipping: {
      address: "456 Oak Ave, Abu Dhabi, UAE",
      method: "Standard Delivery",
      tracking: "TRK987654321",
    },
  },
  {
    id: "ORD-2024-003",
    date: "2024-03-15",
    status: "processing",
    total: 1889,
    items: [
      {
        id: "3",
        name: "iPhone 14 Pro Max",
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=600&q=80",
        price: 1889,
        quantity: 1,
        condition: "Good",
      },
    ],
    shipping: {
      address: "789 Pine Rd, Sharjah, UAE",
      method: "Express Delivery",
      tracking: null,
    },
  },
];

const statusConfig = {
  processing: {
    label: "Processing",
    color: "text-yellow-600 bg-yellow-50",
    icon: Clock,
  },
  shipped: {
    label: "Shipped",
    color: "text-blue-600 bg-blue-50",
    icon: Truck,
  },
  delivered: {
    label: "Delivered",
    color: "text-green-600 bg-green-50",
    icon: CheckCircle,
  },
};

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const { t } = useLanguage();
  const brand = getBrand(t);

  const getStatusInfo = (status: string) => {
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.processing;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/account"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          Back to Account
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
        <p className="text-gray-600">Track your orders and view purchase history</p>
      </div>

      {mockOrders.length === 0 ? (
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
      ) : (
        <div className="space-y-6">
          {mockOrders.map((order) => {
            const statusInfo = getStatusInfo(order.status);
            const StatusIcon = statusInfo.icon;

            return (
              <div key={order.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                {/* Order Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Order {order.id}</h3>
                      <p className="text-sm text-gray-600">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                        <StatusIcon size={14} />
                        {statusInfo.label}
                      </span>
                      <button
                        onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                        className="text-primary hover:text-primary-dark font-medium text-sm"
                      >
                        {selectedOrder === order.id ? "Hide Details" : "View Details"}
                      </button>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="flex items-center gap-4">
                    {order.items.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-600">
                            {item.condition} • Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <span className="text-sm text-gray-500">
                        +{order.items.length - 3} more items
                      </span>
                    )}
                  </div>
                </div>

                {/* Order Details (Expandable) */}
                {selectedOrder === order.id && (
                  <div className="p-6 bg-gray-50">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Items */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Items Ordered</h4>
                        <div className="space-y-3">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={60}
                                height={60}
                                className="rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-600">
                                  {item.condition} • Quantity: {item.quantity}
                                </p>
                                <p className="text-sm font-semibold text-primary">
                                  {formatPrice(item.price)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shipping & Total */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Shipping Address</h4>
                          <p className="text-sm text-gray-600">{order.shipping.address}</p>
                          <p className="text-sm text-gray-600">{order.shipping.method}</p>
                          {order.shipping.tracking && (
                            <p className="text-sm text-primary font-medium">
                              Tracking: {order.shipping.tracking}
                            </p>
                          )}
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-3">Order Summary</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Subtotal</span>
                              <span>{formatPrice(order.total)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Shipping</span>
                              <span>Free</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between font-semibold">
                              <span>Total</span>
                              <span>{formatPrice(order.total)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm">
                            <Eye size={16} className="inline mr-2" />
                            View Invoice
                          </button>
                          {order.status === "delivered" && (
                            <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
                              <RefreshCw size={16} className="inline mr-2" />
                              Buy Again
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}