import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-8 text-center">
          À Propos
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-neutral-600 mb-6">
            Passionnée de cuisine depuis mon plus jeune âge, j'ai décidé de me lancer dans l'aventure 
            du véganisme il y a maintenant 5 ans. Ce blog est né de mon envie de partager mes découvertes, 
            mes succès comme mes échecs, et de montrer qu'une cuisine éthique peut aussi être délicieuse !
          </p>
          <p className="text-neutral-600">
            Ici, pas de prise de tête : des recettes simples, des ingrédients faciles à trouver, 
            et surtout beaucoup de bonne humeur !
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;