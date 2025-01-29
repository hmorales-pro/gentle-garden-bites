import { HeroSection } from "@/components/HeroSection";
import { HomeCarousel } from "@/components/HomeCarousel";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturedRecipes } from "@/components/FeaturedRecipes";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TipsSection } from "@/components/TipsSection";
import { AboutJadeSection } from "@/components/AboutJadeSection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <HomeCarousel />
      <AboutJadeSection />
      <CategoriesSection />
      <FeaturedRecipes />
      <TipsSection />
      <TestimonialSection />
    </main>
  );
};

export default Index;