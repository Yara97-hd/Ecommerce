import { newsSection } from "@/data/siteContent";
import { Newspaper } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          {newsSection.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newsSection.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <Newspaper size={22} />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
