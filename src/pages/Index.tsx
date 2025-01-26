import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedRecipes } from "@/components/FeaturedRecipes";
import { TestimonialSection } from "@/components/TestimonialSection";
import { AboutJadeSection } from "@/components/AboutJadeSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutJadeSection />
        <FeaturedRecipes />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;