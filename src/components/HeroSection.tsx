import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="bg-sage/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-outfit font-semibold text-4xl md:text-6xl mb-6">
            Découvrez la Cuisine Végane
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl mb-8">
            Des recettes simples, délicieuses et 100% végétales pour tous les jours
          </p>
          <Link
            to="/recettes"
            className="inline-flex items-center gap-2 bg-neutral text-white px-6 py-3 rounded-lg hover:bg-neutral/90 transition-colors"
          >
            Voir les Recettes
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};