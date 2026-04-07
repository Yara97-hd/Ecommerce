import { products, type Product } from "@/data/siteContent";

/**
 * Fake API layer — replace these functions with real API calls when ready.
 * Each function simulates a network delay to mimic real behavior.
 */

const delay = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllProducts(): Promise<Product[]> {
  await delay();
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay();
  return products.find((p) => p.id === id);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  await delay();
  return products.filter((p) => p.category === category);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await delay();
  return products.filter((p) => p.featured);
}

export async function getExpressProducts(): Promise<Product[]> {
  await delay();
  return products.filter((p) => p.expressDelivery && p.inStock);
}

export async function searchProducts(query: string): Promise<Product[]> {
  await delay();
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.color.toLowerCase().includes(q)
  );
}

const priceFormatter = new Intl.NumberFormat("en-US");

export function getDiscountPercent(price: number, originalPrice: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function formatPrice(price: number, currency = "AED"): string {
  return `${currency} ${priceFormatter.format(price)}`;
}

export function formatNumber(value: number): string {
  return priceFormatter.format(value);
}
