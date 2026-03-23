"use client";

import { useRef } from "react";
import { testimonials } from "@/data/siteContent";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            150,000+ customers trust our platform
          </h2>
          <p className="text-gray-500 mt-1">See what our customers say</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-[300px] bg-white rounded-2xl border border-gray-100 p-6 shrink-0 hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star
                  key={si}
                  size={16}
                  className={
                    si < t.rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-200"
                  }
                />
              ))}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {t.name}
                </span>
              </div>
              <span className="text-xs text-gray-400">{t.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
