import HeroBanner from "@/components/HeroBanner";
import TrustBar from "@/components/TrustBar";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import ExpressSection from "@/components/ExpressSection";
import ProductSection from "@/components/ProductSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import NewsSection from "@/components/NewsSection";
import { homepageProductSections } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <TrustBar />
      <FeaturedCarousel />
      <CategoryGrid />
      <ExpressSection />

      {homepageProductSections.map((section) => (
        <ProductSection
          key={section.category}
          title={section.title}
          category={section.category}
          viewAllLink={section.viewAllLink}
        />
      ))}

      <Features />
      <Testimonials />
      <NewsSection />
    </>
  );
}
