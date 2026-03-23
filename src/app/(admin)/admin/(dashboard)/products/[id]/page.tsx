"use client";

import { use } from "react";
import { products } from "@/data/siteContent";
import ProductForm from "@/components/admin/ProductForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg mb-4">Product not found</p>
        <Link
          href="/admin/products"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    );
  }

  return <ProductForm product={product} />;
}
