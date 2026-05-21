import HeroSection from "@/components/home/HeroSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HomeQuoteCTA from "@/components/home/HomeQuoteCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <HeroSection />
      <CategoryShowcase />
      <FeaturedProducts />
      <HomeQuoteCTA />
    </main>
  );
}