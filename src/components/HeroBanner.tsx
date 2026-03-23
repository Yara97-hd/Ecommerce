import Link from "next/link";
import { heroBanner } from "@/data/siteContent";
import { ArrowRight, Smartphone } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBanner.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/60" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {heroBanner.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              {heroBanner.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={heroBanner.ctaLink}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                {heroBanner.ctaText}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right — Sell device card */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-sm w-full">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                {heroBanner.sellTitle}
              </h2>
              <p className="text-gray-300 mb-6 text-sm">
                Get the best value for your used device. Quick, easy, and secure.
              </p>
              <Link
                href={heroBanner.sellCtaLink}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                {heroBanner.sellCtaText}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
