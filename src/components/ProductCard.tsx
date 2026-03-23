import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/data/siteContent";
import { brand } from "@/data/siteContent";
import { getDiscountPercent } from "@/lib/api";
import { Zap } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = getDiscountPercent(product.price, product.originalPrice);

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="bg-danger text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            -{discount}% vs new
          </span>
          {!product.inStock && (
            <span className="bg-gray-800 text-white text-xs font-medium px-2.5 py-1 rounded-lg">
              Sold out
            </span>
          )}
          {product.expressDelivery && product.inStock && (
            <span className="bg-accent text-white text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
              <Zap size={10} /> Express
            </span>
          )}
        </div>

        {/* Condition badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
              product.condition === "Excellent"
                ? "bg-success/10 text-success"
                : product.condition === "Good"
                ? "bg-primary/10 text-primary"
                : "bg-warning/10 text-warning"
            }`}
          >
            {product.condition}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-gray-500 font-medium mb-1">
          {product.brand}
        </p>
        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          {product.color} / {product.storage} / {product.condition}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">
            {brand.currency} {product.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400 line-through">
            {brand.currency} {product.originalPrice.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
