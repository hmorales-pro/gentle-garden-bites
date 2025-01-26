import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Recettes = () => {
  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-8 text-center">
          Nos Recettes
        </h1>
        <p className="text-center text-neutral-600 mb-8">
          Cette page est en cours de construction. Revenez bientôt pour découvrir toutes nos recettes !
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Recettes;