"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProviders } from "@/components/StoreProviders";
import { useLanguage } from "@/contexts/LanguageContext";

function StoreLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { direction } = useLanguage();

  return (
    <div dir={direction} className={direction === "rtl" ? "rtl" : "ltr"}>
      <AnnouncementBar />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProviders>
      <StoreLayoutContent>{children}</StoreLayoutContent>
    </StoreProviders>
  );
}
