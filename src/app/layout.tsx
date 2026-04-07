import type { Metadata } from "next";
import { translations } from "@/data/translations";
import "./globals.css";

const brand = translations.en.brand;

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: `Shop certified renewed electronics at ${brand.name}. Up to 60% off vs new with 12 months warranty and free delivery.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
