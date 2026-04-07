// ============================================================================
// SITE CONTENT - Edit all your images, text, and products here
// ============================================================================

import { adminSettings } from "./adminData";

// --- BRAND ---
export const getBrand = (t: (key: string) => string) => ({
  name: t("brand.name"),
  tagline: t("brand.tagline"),
  logo: "/images/logo.svg",
  currency: t("brand.currency"),
  country: t("brand.country"),
});

// --- ANNOUNCEMENT BAR ---
export const getAnnouncement = (t: (key: string) => string) => ({
  text: adminSettings.announcementText,
  enabled: adminSettings.announcementEnabled,
});

// --- NAVIGATION ---
export const getNavLinks = (t: (key: string) => string) => [
  {
    label: t("nav.eidDeals"),
    href: "/category/eid-deals",
    highlight: true,
  },
  {
    label: t("nav.iphones"),
    href: "/category/iphones",
    children: [
      { label: t("nav.iphone16Series"), href: "/category/iphone-16" },
      { label: t("nav.iphone15Series"), href: "/category/iphone-15" },
      { label: t("nav.iphone14Series"), href: "/category/iphone-14" },
      { label: t("nav.iphone13Series"), href: "/category/iphone-13" },
      { label: t("nav.iphone12Series"), href: "/category/iphone-12" },
      { label: t("nav.iphone11Series"), href: "/category/iphone-11" },
      { label: t("nav.iphoneSeSeries"), href: "/category/iphone-se" },
    ],
  },
  {
    label: t("nav.samsung"),
    href: "/category/samsung",
    children: [
      { label: t("nav.galaxyS24Series"), href: "/category/galaxy-s24" },
      { label: t("nav.galaxyS23Series"), href: "/category/galaxy-s23" },
      { label: t("nav.galaxyS22Series"), href: "/category/galaxy-s22" },
      { label: t("nav.galaxyS21Series"), href: "/category/galaxy-s21" },
      { label: t("nav.galaxyZSeries"), href: "/category/galaxy-z" },
      { label: t("nav.galaxyNoteSeries"), href: "/category/galaxy-note" },
    ],
  },
  {
    label: t("nav.macbooks"),
    href: "/category/macbooks",
    children: [
      { label: t("nav.macbookPro"), href: "/category/macbook-pro" },
      { label: t("nav.macbookAir"), href: "/category/macbook-air" },
      { label: t("nav.appleImac"), href: "/category/imac" },
    ],
  },
  {
    label: t("nav.laptops"),
    href: "/category/laptops",
    children: [
      { label: t("nav.dell"), href: "/category/dell" },
      { label: t("nav.lenovo"), href: "/category/lenovo" },
      { label: t("nav.hp"), href: "/category/hp" },
      { label: t("nav.microsoft"), href: "/category/microsoft" },
    ],
  },
  { label: t("nav.ipads"), href: "/category/ipads" },
  { label: t("nav.appleWatches"), href: "/category/apple-watches" },
  { label: t("nav.accessories"), href: "/category/accessories" },
];

// --- HERO BANNER ---
export const getHeroBanner = (t: (key: string) => string) => ({
  title: t("hero.title"),
  subtitle: t("hero.subtitle"),
  ctaText: t("hero.ctaText"),
  ctaLink: "/category/iphones",
  backgroundImage: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=1920&q=80",
  sellTitle: t("hero.sellTitle"),
  sellCtaText: t("hero.sellCtaText"),
  sellCtaLink: "/sell",
});

// --- TRUST BADGES ---
export const getTrustBadges = (t: (key: string) => string) => [
  { icon: "shield", label: t("trust.warranty") },
  { icon: "truck", label: t("trust.delivery") },
  { icon: "refresh", label: t("trust.returns") },
  { icon: "creditCard", label: t("trust.payment") },
];

// --- CATEGORIES ---
export const categories = [
  { slug: "iphones", name: "iphones" },
  { slug: "samsung", name: "samsung" },
  { slug: "macbooks", name: "macbooks" },
  { slug: "laptops", name: "laptops" },
  { slug: "ipads", name: "ipads" },
  { slug: "apple-watches", name: "apple-watches" },
  { slug: "tvs", name: "tvs" },
];

export const getCategories = (t: (key: string) => string) => [
  {
    name: t("categories.iphones"),
    slug: "iphones",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80",
  },
  {
    name: t("categories.samsung"),
    slug: "samsung",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80",
  },
  {
    name: t("categories.macbooks"),
    slug: "macbooks",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
  },
  {
    name: t("categories.laptops"),
    slug: "laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
  },
  {
    name: t("categories.ipads"),
    slug: "ipads",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
  },
  {
    name: t("categories.appleWatches"),
    slug: "apple-watches",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
  },
  {
    name: t("categories.tvs"),
    slug: "tvs",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
  },
  {
    name: t("categories.accessories"),
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
  },
];

// --- PRODUCT CONDITION TYPES ---
export type ProductCondition = "Excellent" | "Good" | "Fair";

// --- PRODUCTS ---
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  slug: string;
  image: string;
  images: string[];
  color: string;
  storage: string;
  condition: ProductCondition;
  price: number;
  originalPrice: number;
  inStock: boolean;
  featured: boolean;
  expressDelivery: boolean;
  specs: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-15-pro-max",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
    ],
    color: "Black Titanium",
    storage: "256 GB",
    condition: "Good",
    price: 2749,
    originalPrice: 4749,
    inStock: true,
    featured: true,
    expressDelivery: true,
    specs: {
      Display: "6.7-inch Super Retina XDR",
      Chip: "A17 Pro",
      Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      Battery: "Up to 29 hours video playback",
    },
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-15-pro",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",
    ],
    color: "Black Titanium",
    storage: "128 GB",
    condition: "Good",
    price: 2169,
    originalPrice: 3899,
    inStock: true,
    featured: true,
    expressDelivery: false,
    specs: {
      Display: "6.1-inch Super Retina XDR",
      Chip: "A17 Pro",
      Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      Battery: "Up to 23 hours video playback",
    },
  },
  {
    id: "3",
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-14-pro-max",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1592286927505-1def25115558?w=600&q=80",
    ],
    color: "Space Black",
    storage: "128 GB",
    condition: "Good",
    price: 1889,
    originalPrice: 4325,
    inStock: true,
    featured: true,
    expressDelivery: true,
    specs: {
      Display: "6.7-inch Super Retina XDR",
      Chip: "A16 Bionic",
      Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      Battery: "Up to 29 hours video playback",
    },
  },
  {
    id: "4",
    name: "iPhone 14 Pro",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-14-pro",
    image: "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=600&q=80",
    ],
    color: "Space Black",
    storage: "128 GB",
    condition: "Good",
    price: 2149,
    originalPrice: 3899,
    inStock: false,
    featured: true,
    expressDelivery: false,
    specs: {
      Display: "6.1-inch Super Retina XDR",
      Chip: "A16 Bionic",
      Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      Battery: "Up to 23 hours video playback",
    },
  },
  {
    id: "5",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-16-pro-max",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
    ],
    color: "Desert Titanium",
    storage: "256 GB",
    condition: "Good",
    price: 3599,
    originalPrice: 5099,
    inStock: true,
    featured: true,
    expressDelivery: true,
    specs: {
      Display: "6.9-inch Super Retina XDR",
      Chip: "A18 Pro",
      Camera: "48MP Fusion + 48MP Ultra Wide + 12MP Telephoto",
      Battery: "Up to 33 hours video playback",
    },
  },
  {
    id: "6",
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-16-pro",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=80",
    ],
    color: "Black Titanium",
    storage: "128 GB",
    condition: "Good",
    price: 2739,
    originalPrice: 4099,
    inStock: true,
    featured: true,
    expressDelivery: false,
    specs: {
      Display: "6.3-inch Super Retina XDR",
      Chip: "A18 Pro",
      Camera: "48MP Fusion + 48MP Ultra Wide + 12MP Telephoto",
      Battery: "Up to 27 hours video playback",
    },
  },
  {
    id: "7",
    name: "iPhone 13 Pro Max",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-13-pro-max",
    image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&q=80",
    ],
    color: "Graphite",
    storage: "128 GB",
    condition: "Good",
    price: 1709,
    originalPrice: 3525,
    inStock: false,
    featured: true,
    expressDelivery: false,
    specs: {
      Display: "6.7-inch Super Retina XDR",
      Chip: "A15 Bionic",
      Camera: "12MP Main + 12MP Ultra Wide + 12MP Telephoto",
      Battery: "Up to 28 hours video playback",
    },
  },
  {
    id: "8",
    name: "iPhone 13 Pro",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-13-pro",
    image: "https://images.unsplash.com/photo-1632661674596-df8be0860e02?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be0860e02?w=600&q=80",
    ],
    color: "Graphite",
    storage: "128 GB",
    condition: "Good",
    price: 1409,
    originalPrice: 2549,
    inStock: true,
    featured: false,
    expressDelivery: false,
    specs: {
      Display: "6.1-inch Super Retina XDR",
      Chip: "A15 Bionic",
      Camera: "12MP Main + 12MP Ultra Wide + 12MP Telephoto",
      Battery: "Up to 22 hours video playback",
    },
  },
  {
    id: "9",
    name: "iPhone 13",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-13",
    image: "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=600&q=80",
    ],
    color: "Midnight",
    storage: "128 GB",
    condition: "Good",
    price: 1049,
    originalPrice: 2198,
    inStock: true,
    featured: false,
    expressDelivery: false,
    specs: {
      Display: "6.1-inch Super Retina XDR",
      Chip: "A15 Bionic",
      Camera: "12MP Dual Camera",
      Battery: "Up to 19 hours video playback",
    },
  },
  {
    id: "10",
    name: "iPhone 12 Pro",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-12-pro",
    image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=600&q=80",
    ],
    color: "Graphite",
    storage: "128 GB",
    condition: "Good",
    price: 1139,
    originalPrice: 2325,
    inStock: true,
    featured: false,
    expressDelivery: true,
    specs: {
      Display: "6.1-inch Super Retina XDR",
      Chip: "A14 Bionic",
      Camera: "12MP Triple Camera",
      Battery: "Up to 17 hours video playback",
    },
  },
  {
    id: "11",
    name: "iPhone 12 Pro Max",
    brand: "Apple",
    category: "iphones",
    slug: "iphone-12-pro-max",
    image: "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?w=600&q=80",
    ],
    color: "Graphite",
    storage: "128 GB",
    condition: "Good",
    price: 1229,
    originalPrice: 2725,
    inStock: true,
    featured: false,
    expressDelivery: false,
    specs: {
      Display: "6.7-inch Super Retina XDR",
      Chip: "A14 Bionic",
      Camera: "12MP Triple Camera",
      Battery: "Up to 20 hours video playback",
    },
  },
  {
    id: "12",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "samsung",
    slug: "galaxy-s24-ultra",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    ],
    color: "Titanium Black",
    storage: "256 GB",
    condition: "Excellent",
    price: 2499,
    originalPrice: 4399,
    inStock: true,
    featured: true,
    expressDelivery: true,
    specs: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Chip: "Snapdragon 8 Gen 3",
      Camera: "200MP + 50MP + 12MP + 10MP",
      Battery: "5000 mAh",
    },
  },
  {
    id: "13",
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    category: "samsung",
    slug: "galaxy-s23-ultra",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    ],
    color: "Phantom Black",
    storage: "256 GB",
    condition: "Good",
    price: 1899,
    originalPrice: 3599,
    inStock: true,
    featured: true,
    expressDelivery: false,
    specs: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Chip: "Snapdragon 8 Gen 2",
      Camera: "200MP + 12MP + 10MP + 10MP",
      Battery: "5000 mAh",
    },
  },
  {
    id: "14",
    name: "Galaxy S22 Ultra",
    brand: "Samsung",
    category: "samsung",
    slug: "galaxy-s22-ultra",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    ],
    color: "Phantom Black",
    storage: "128 GB",
    condition: "Excellent",
    price: 1339,
    originalPrice: 2525,
    inStock: true,
    featured: false,
    expressDelivery: false,
    specs: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Chip: "Snapdragon 8 Gen 1",
      Camera: "108MP + 12MP + 10MP + 10MP",
      Battery: "5000 mAh",
    },
  },
  {
    id: "15",
    name: "Galaxy S21 Ultra",
    brand: "Samsung",
    category: "samsung",
    slug: "galaxy-s21-ultra",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
    ],
    color: "Phantom Black",
    storage: "128 GB",
    condition: "Good",
    price: 929,
    originalPrice: 1775,
    inStock: false,
    featured: false,
    expressDelivery: false,
    specs: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Chip: "Exynos 2100",
      Camera: "108MP + 12MP + 10MP + 10MP",
      Battery: "5000 mAh",
    },
  },
  {
    id: "16",
    name: "MacBook Pro 14-inch M3",
    brand: "Apple",
    category: "macbooks",
    slug: "macbook-pro-14-m3",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    ],
    color: "Space Black",
    storage: "512 GB SSD",
    condition: "Excellent",
    price: 4299,
    originalPrice: 6999,
    inStock: true,
    featured: true,
    expressDelivery: true,
    specs: {
      Display: "14.2-inch Liquid Retina XDR",
      Chip: "Apple M3 Pro",
      Memory: "18 GB Unified Memory",
      Battery: "Up to 17 hours",
    },
  },
  {
    id: "17",
    name: "MacBook Air 13-inch M2",
    brand: "Apple",
    category: "macbooks",
    slug: "macbook-air-13-m2",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
    ],
    color: "Midnight",
    storage: "256 GB SSD",
    condition: "Good",
    price: 2599,
    originalPrice: 4499,
    inStock: true,
    featured: true,
    expressDelivery: false,
    specs: {
      Display: "13.6-inch Liquid Retina",
      Chip: "Apple M2",
      Memory: "8 GB Unified Memory",
      Battery: "Up to 18 hours",
    },
  },
  {
    id: "18",
    name: "Dell Latitude 7420",
    brand: "Dell",
    category: "laptops",
    slug: "dell-latitude-7420",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    ],
    color: "Silver",
    storage: "512 GB SSD",
    condition: "Good",
    price: 1429,
    originalPrice: 2700,
    inStock: true,
    featured: false,
    expressDelivery: false,
    specs: {
      Display: "14-inch FHD",
      Processor: "Intel Core i7 11th Gen",
      Memory: "16 GB DDR4",
      Battery: "Up to 10 hours",
    },
  },
  {
    id: "19",
    name: "iPad Pro 12.9-inch M2",
    brand: "Apple",
    category: "ipads",
    slug: "ipad-pro-12-9-m2",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    ],
    color: "Space Gray",
    storage: "256 GB",
    condition: "Excellent",
    price: 2399,
    originalPrice: 4199,
    inStock: true,
    featured: true,
    expressDelivery: true,
    specs: {
      Display: "12.9-inch Liquid Retina XDR",
      Chip: "Apple M2",
      Camera: "12MP Wide + 10MP Ultra Wide",
      Battery: "Up to 10 hours",
    },
  },
  {
    id: "20",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "apple-watches",
    slug: "apple-watch-ultra-2",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
    ],
    color: "Titanium",
    storage: "64 GB",
    condition: "Good",
    price: 2199,
    originalPrice: 3699,
    inStock: true,
    featured: false,
    expressDelivery: false,
    specs: {
      Display: "49mm Always-On Retina",
      Chip: "S9 SiP",
      WaterResistance: "100m",
      Battery: "Up to 36 hours",
    },
  },
];

// --- PRODUCT SECTIONS ON HOMEPAGE ---
export const homepageProductSections = [
  { title: "Certified Renewed iPhones", category: "iphones", viewAllLink: "/category/iphones" },
  { title: "Certified Renewed Samsung", category: "samsung", viewAllLink: "/category/samsung" },
  { title: "Certified Renewed MacBooks & Laptops", category: "macbooks", viewAllLink: "/category/macbooks" },
];

// --- FEATURES / VALUE PROPS ---
export const features = [
  {
    icon: "checkCircle",
    title: "Verified Devices",
    description: "50+ point quality check on all aspects of the device — screen, battery, speed, durability.",
  },
  {
    icon: "shield",
    title: "Risk Free",
    description: "10 days to return in case of any issue. No questions asked.",
  },
  {
    icon: "award",
    title: "Only from the Best",
    description: "Rigorous screening process — only 1 out of 4 suppliers is accepted.",
  },
  {
    icon: "headphones",
    title: "Always Here for You",
    description: "Proactive customer service to answer and solve any concern you have.",
  },
];

// --- RENEWED INFO (What is Renewed) ---
export const renewedInfo = {
  title: "What is Renewed from Revibe?",
  points: [
    "100% original pre-owned devices professionally restored to like-new condition.",
    "Backed by 70+ point inspection process for guaranteed performance.",
    "12-month warranty and 10-day return policy for peace of mind.",
    "Eco-friendly: save 56kg CO₂ emissions and 168g e-waste per device.",
    "Over 150,000+ happy customers trust our platform.",
  ],
};

// --- FOOTER ---
export const getFooter = (t: (key: string) => string) => ({
  about: {
    companyName: "Revibe Technology FZ-LLC",
    description: t("footer.about"),
    address: "King Salman Bin Abdulaziz Al Saud Street, Dubai Internet City - Dubai - UAE",
  },
  links: {
    aboutUs: [
      { label: t("footer.about"), href: "/about" },
      { label: "Shop", href: "/category/iphones" },
      { label: "Our Blog", href: "/blog" },
      { label: "Become a Seller", href: "/sell" },
    ],
    information: [
      { label: "Help Center & FAQ", href: "/help" },
      { label: t("footer.contact"), href: "/contact" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: t("footer.privacy"), href: "/privacy" },
    ],
    account: [
      { label: t("account.title"), href: "/account" },
      { label: "Track Your Order", href: "/track" },
    ],
  },
  contact: {
    email: "contact@revibe.me",
    emailNote: "Reply within 1 business day",
    phone: "+971 4 459 7000",
    phoneHours: "Monday to Friday 9:30 am to 5:30 pm",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  copyright: t("footer.copyright"),
});

// --- REVIEWS / TESTIMONIALS ---
export const testimonials = [
  {
    name: "Ahmed K.",
    rating: 5,
    text: "Amazing quality! My iPhone 14 Pro looks and works like brand new. Highly recommended.",
    date: "Feb 2026",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Fast delivery and great customer service. The MacBook Air was in perfect condition.",
    date: "Jan 2026",
  },
  {
    name: "Omar R.",
    rating: 4,
    text: "Good value for money. The Samsung S23 Ultra came with all accessories. Very satisfied.",
    date: "Mar 2026",
  },
  {
    name: "Fatima H.",
    rating: 5,
    text: "I was hesitant at first but Revibe exceeded my expectations. Will buy again!",
    date: "Feb 2026",
  },
  {
    name: "Khalid A.",
    rating: 5,
    text: "Saved over 2000 AED on my iPad Pro. Battery health was 95%. Excellent deal!",
    date: "Jan 2026",
  },
  {
    name: "Noura S.",
    rating: 4,
    text: "Smooth ordering process and the product was well-packaged. Great experience overall.",
    date: "Mar 2026",
  },
];

// --- NEWS SECTION ---
export const newsSection = {
  title: "Revibe In The News",
  items: [
    "Revibe is the solution to buy second-hand devices with trust and confidence.",
    "The most trusted platform to buy second-hand electronics in the Gulf.",
    "All devices are tested in-depth and verified thoroughly to ensure best value.",
    "Revibe makes everything risk-free with a one-year warranty and free shipping.",
  ],
};
