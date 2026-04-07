import Link from "next/link";
import Image from "next/image";
import { Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "iphone-15-pro-vs-14-pro",
    title: "iPhone 15 Pro vs iPhone 14 Pro: Is the Upgrade Worth It?",
    excerpt:
      "Both phones are certified renewed on Revibe — but which one gives you the best value? We break down the key differences in chip, camera, and design.",
    image:
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&q=80",
    category: "Buying Guides",
    date: "March 28, 2025",
    readTime: "5 min read",
  },
  {
    slug: "what-does-refurbished-mean",
    title: "What Does 'Refurbished' Actually Mean? A Straight Answer",
    excerpt:
      "Certified, renewed, pre-owned — the labels are confusing. Here's exactly what Revibe checks before a device earns its grade.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    category: "Education",
    date: "March 14, 2025",
    readTime: "4 min read",
  },
  {
    slug: "top-5-samsung-galaxy-value",
    title: "Top 5 Samsung Galaxy Phones for Value in 2025",
    excerpt:
      "The Galaxy S series refurbished prices have dropped significantly. Here are our picks for the best value Samsung phones available right now.",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80",
    category: "Buying Guides",
    date: "February 28, 2025",
    readTime: "6 min read",
  },
  {
    slug: "how-to-sell-your-phone",
    title: "How to Get the Best Price When Selling Your Old Phone",
    excerpt:
      "Before you hand it over, a few easy steps can boost your phone's trade-in value. Factory reset, original accessories, clean screen — here's the checklist.",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    category: "Tips & Tricks",
    date: "February 10, 2025",
    readTime: "3 min read",
  },
  {
    slug: "macbook-air-vs-pro-for-students",
    title: "MacBook Air M2 vs MacBook Pro M3: Which Is Right for Students?",
    excerpt:
      "Both are available refurbished at significant savings. We compare performance, battery, and price to help students choose the right machine.",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
    category: "Buying Guides",
    date: "January 22, 2025",
    readTime: "7 min read",
  },
  {
    slug: "sustainability-refurbished-devices",
    title: "Why Buying Refurbished is One of the Greenest Tech Choices You Can Make",
    excerpt:
      "Manufacturing a single smartphone produces around 70 kg of CO₂. Choosing refurbished keeps devices in use longer and reduces e-waste.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    category: "Sustainability",
    date: "January 8, 2025",
    readTime: "4 min read",
  },
];

const categories = ["All", "Buying Guides", "Education", "Tips & Tricks", "Sustainability"];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Revibe Blog</h1>
        <p className="text-gray-500 text-lg">
          Device guides, buying tips, and news from the refurbished tech world.
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <span
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
              cat === "All"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Featured post */}
      <div className="mb-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <Tag size={11} />
                {featured.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
              {featured.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span>{featured.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {featured.readTime}
                </span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="text-primary font-semibold text-sm hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Post grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full inline-flex items-center gap-1 mb-3">
                <Tag size={11} />
                {post.category}
              </span>
              <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
