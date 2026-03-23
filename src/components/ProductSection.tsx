import Link from "next/link";
import { products } from "@/data/siteContent";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

interface ProductSectionProps {
  title: string;
  category: string;
  viewAllLink: string;
}

export default function ProductSection({
  title,
  category,
  viewAllLink,
}: ProductSectionProps) {
  const sectionProducts = products
    .filter((p) => p.category === category)
    .slice(0, 6);

  if (sectionProducts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          {title}
        </h2>
        <Link
          href={viewAllLink}
          className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          See all
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {sectionProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
