import { products, brand, trustBadges } from "@/data/siteContent";
import { getDiscountPercent } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Shield,
  Truck,
  RefreshCw,
  CreditCard,
  Zap,
  Check,
  ShoppingCart,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={18} />,
  truck: <Truck size={18} />,
  refresh: <RefreshCw size={18} />,
  creditCard: <CreditCard size={18} />,
};

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Product not found
        </h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const discount = getDiscountPercent(product.price, product.originalPrice);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight size={14} />
        <Link
          href={`/category/${product.category}`}
          className="hover:text-primary transition-colors capitalize"
        >
          {product.category.replace(/-/g, " ")}
        </Link>
        <ChevronRight size={14} />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        <div>
          <div className="relative aspect-square bg-gray-50 rounded-3xl overflow-hidden mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.expressDelivery && (
              <div className="absolute top-4 left-4">
                <span className="bg-accent text-white text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Zap size={14} /> Express Delivery
                </span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <span className="bg-danger text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                -{discount}% vs new
              </span>
            </div>
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition-colors ${
                    i === 0 ? "border-primary" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
            {product.brand}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-500 mb-6">
            {product.color} / {product.storage} / {product.condition}
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-bold text-gray-900">
                {brand.currency} {product.price.toLocaleString()}
              </span>
              <span className="text-lg text-gray-400 line-through">
                {brand.currency} {product.originalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-success font-medium">
              You save {brand.currency}{" "}
              {(product.originalPrice - product.price).toLocaleString()} (
              {discount}% off)
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Condition
            </h3>
            <div className="flex gap-3">
              {(["Excellent", "Good", "Fair"] as const).map((cond) => (
                <button
                  key={cond}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors ${
                    product.condition === cond
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-8">
            <button
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-lg transition-all ${
                product.inStock
                  ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              <ShoppingCart size={20} />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 bg-gray-50 rounded-xl p-3"
              >
                <div className="text-primary shrink-0">
                  {iconMap[badge.icon]}
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Specifications</h3>
            <div className="space-y-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">{key}:</span>{" "}
                    <span className="text-gray-600">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You may also like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
