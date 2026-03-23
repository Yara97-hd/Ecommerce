"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { type Product, type ProductCondition } from "@/data/siteContent";
import { Save, ArrowLeft, ImagePlus, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductFormProps {
  product?: Product;
  isNew?: boolean;
}

export default function ProductForm({ product, isNew }: ProductFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    name: product?.name ?? "",
    brand: product?.brand ?? "",
    category: product?.category ?? "iphones",
    color: product?.color ?? "",
    storage: product?.storage ?? "",
    condition: (product?.condition ?? "Good") as ProductCondition,
    price: product?.price ?? 0,
    originalPrice: product?.originalPrice ?? 0,
    inStock: product?.inStock ?? true,
    featured: product?.featured ?? false,
    expressDelivery: product?.expressDelivery ?? false,
    image: product?.image ?? "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // Fake API call
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors";
  const labelClass = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {isNew ? "Add Product" : `Edit: ${product?.name}`}
            </h1>
            <p className="text-gray-400 text-sm mt-0.5">
              {isNew
                ? "Add a new product to your store"
                : "Update product details"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-emerald-400 font-medium animate-fade-in-up">
              Saved successfully!
            </span>
          )}
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Save size={16} />
            )}
            {isNew ? "Create Product" : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
            <h2 className="text-base font-semibold text-white">
              Basic Information
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className={labelClass}>Product Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. iPhone 15 Pro Max"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Brand</label>
                <input
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="e.g. Apple"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="iphones">iPhones</option>
                  <option value="samsung">Samsung</option>
                  <option value="macbooks">MacBooks</option>
                  <option value="laptops">Laptops</option>
                  <option value="ipads">iPads</option>
                  <option value="apple-watches">Apple Watches</option>
                  <option value="tvs">TVs</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Color</label>
                <input
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  placeholder="e.g. Black Titanium"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Storage</label>
                <input
                  name="storage"
                  value={form.storage}
                  onChange={handleChange}
                  placeholder="e.g. 256 GB"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
            <h2 className="text-base font-semibold text-white">Pricing</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Selling Price (AED)</label>
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  min={0}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Original Price (AED)</label>
                <input
                  name="originalPrice"
                  type="number"
                  value={form.originalPrice}
                  onChange={handleChange}
                  min={0}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Condition</label>
                <select
                  name="condition"
                  value={form.condition}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
              </div>
            </div>
            {form.price > 0 && form.originalPrice > 0 && (
              <p className="text-sm text-emerald-400">
                Discount:{" "}
                {Math.round(
                  ((form.originalPrice - form.price) / form.originalPrice) * 100
                )}
                % off — Saves AED{" "}
                {(form.originalPrice - form.price).toLocaleString()}
              </p>
            )}
          </div>

          {/* Image */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
            <h2 className="text-base font-semibold text-white">Image</h2>
            <div>
              <label className={labelClass}>Image URL</label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className={inputClass}
              />
            </div>
            {form.image && (
              <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src={form.image}
                  alt="Preview"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-semibold text-white">Status</h2>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="inStock"
                checked={form.inStock}
                onChange={handleChange}
                className="w-5 h-5 rounded-md border-gray-600 bg-gray-800 text-primary focus:ring-primary/20 cursor-pointer"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                In Stock
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
                className="w-5 h-5 rounded-md border-gray-600 bg-gray-800 text-primary focus:ring-primary/20 cursor-pointer"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Featured on Homepage
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="expressDelivery"
                checked={form.expressDelivery}
                onChange={handleChange}
                className="w-5 h-5 rounded-md border-gray-600 bg-gray-800 text-primary focus:ring-primary/20 cursor-pointer"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Express Delivery
              </span>
            </label>
          </div>

          {/* Summary */}
          {form.name && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-3">
              <h2 className="text-base font-semibold text-white">Preview</h2>
              <div className="text-sm space-y-2">
                <p className="text-gray-400">
                  <span className="text-white font-medium">{form.name}</span>
                </p>
                <p className="text-gray-400">
                  {form.brand} · {form.color} · {form.storage}
                </p>
                <p className="text-white font-semibold text-lg">
                  AED {form.price.toLocaleString()}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.inStock ? (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-red-500/10 text-red-400">
                      Out of Stock
                    </span>
                  )}
                  {form.featured && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400">
                      Featured
                    </span>
                  )}
                  {form.expressDelivery && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400">
                      Express
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
