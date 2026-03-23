import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/siteContent";

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        Shop Certified Renewed
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-lg">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
