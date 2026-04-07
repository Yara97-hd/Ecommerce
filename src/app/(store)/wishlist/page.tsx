"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { getBrand } from "@/data/siteContent";
import { formatPrice } from "@/lib/api";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowLeft,
  Plus,
  Minus,
} from "lucide-react";

// Mock wishlist data - in a real app, this would come from an API
const mockWishlist = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",
    price: 2749,
    originalPrice: 4749,
    condition: "Good",
    inStock: true,
    expressDelivery: true,
    addedDate: "2024-04-01",
  },
  {
    id: "5",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
    price: 3599,
    originalPrice: 5099,
    condition: "Good",
    inStock: true,
    expressDelivery: true,
    addedDate: "2024-03-28",
  },
  {
    id: "6",
    name: "iPhone 16 Pro",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=80",
    price: 2739,
    originalPrice: 4099,
    condition: "Good",
    inStock: true,
    expressDelivery: false,
    addedDate: "2024-03-20",
  },
  {
    id: "14",
    name: "Galaxy S22 Ultra",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    price: 1339,
    originalPrice: 2525,
    condition: "Excellent",
    inStock: true,
    expressDelivery: false,
    addedDate: "2024-03-15",
  },
];

export default function WishlistPage() {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const brand = getBrand(t);
  const [wishlistItems, setWishlistItems] = useState(mockWishlist);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(mockWishlist.map(item => [item.id, 1]))
  );

  const removeFromWishlist = (itemId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
    const newQuantities = { ...quantities };
    delete newQuantities[itemId];
    setQuantities(newQuantities);
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantities(prev => ({ ...prev, [itemId]: newQuantity }));
    }
  };

  const handleAddToCart = (item: typeof mockWishlist[0]) => {
    addToCart(
      {
        id: item.id,
        name: item.name,
        brand: item.brand,
        category: "", // Would need to be added to mock data
        slug: item.name.toLowerCase().replace(/\s+/g, "-"),
        image: item.image,
        images: [item.image],
        color: "", // Would need to be added to mock data
        storage: "", // Would need to be added to mock data
        condition: item.condition as any,
        price: item.price,
        originalPrice: item.originalPrice,
        inStock: item.inStock,
        featured: false,
        expressDelivery: item.expressDelivery,
        specs: {},
      },
      item.condition as any,
      quantities[item.id]
    );
  };

  const getDiscountPercent = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600">{wishlistItems.length} items saved for later</p>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-6">Save items you love for later.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => {
            const discount = getDiscountPercent(item.price, item.originalPrice);

            return (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Link href={`/products/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="bg-danger text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      -{discount}% vs new
                    </span>
                    {!item.inStock && (
                      <span className="bg-gray-800 text-white text-xs font-medium px-2.5 py-1 rounded-lg">
                        Sold out
                      </span>
                    )}
                    {item.expressDelivery && item.inStock && (
                      <span className="bg-accent text-white text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Express
                      </span>
                    )}
                  </div>

                  {/* Remove from wishlist */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <Heart size={16} fill="currentColor" />
                  </button>

                  {/* Condition badge */}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
                        item.condition === "Excellent"
                          ? "bg-success/10 text-success"
                          : item.condition === "Good"
                          ? "bg-primary/10 text-primary"
                          : "bg-warning/10 text-warning"
                      }`}
                    >
                      {item.condition}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-gray-500 font-medium mb-1">{item.brand}</p>
                  <Link href={`/products/${item.id}`}>
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(item.price)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-600">Qty:</span>
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, quantities[item.id] - 1)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                        disabled={quantities[item.id] <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 py-1 text-sm font-medium min-w-10 text-center">
                        {quantities[item.id]}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, quantities[item.id] + 1)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Add to cart button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                      item.inStock
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart size={16} />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>

                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Added {new Date(item.addedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {wishlistItems.length > 0 && (
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}