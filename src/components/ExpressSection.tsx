"use client";

import { useRef } from "react";
import { products } from "@/data/siteContent";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

export default function ExpressSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const expressProducts = products.filter(
    (p) => p.expressDelivery && p.inStock
  );

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  if (expressProducts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-3xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Revibe Express
              </h2>
              <p className="text-sm text-gray-500">
                Delivery with Extra Care
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
        >
          {expressProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] max-w-[220px] shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
