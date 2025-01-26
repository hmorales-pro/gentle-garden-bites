import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Instagram } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-4">
              À Propos de Jade
            </h1>
            <p className="text-neutral-600 text-lg">
              Cheffe végane passionnée & créatrice de contenu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h2 className="font-outfit font-medium text-2xl mb-4">Mon Histoire</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Passionnée de cuisine depuis mon plus jeune âge, j'ai décidé de me lancer dans l'aventure 
                  du véganisme il y a maintenant 5 ans. Ce changement de vie a transformé ma façon de voir 
                  la cuisine et m'a poussée à être plus créative dans mes recettes.
                </p>
              </div>
              
              <div>
                <h2 className="font-outfit font-medium text-2xl mb-4">Ma Philosophie</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Je crois fermement qu'une cuisine éthique peut être délicieuse, accessible et conviviale. 
                  Mon objectif est de démystifier la cuisine végane et de montrer qu'elle peut être 
                  savoureuse, nutritive et adaptée à tous les budgets.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Jade dans sa cuisine"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="bg-cream/50 rounded-2xl p-8 mb-12">
            <h2 className="font-outfit font-medium text-2xl mb-6 text-center">Ce Que Vous Trouverez Ici</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-outfit font-medium text-xl mb-2">Recettes Simples</h3>
                <p className="text-neutral-600">
                  Des recettes faciles à suivre avec des ingrédients du quotidien
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-outfit font-medium text-xl mb-2">Conseils Pratiques</h3>
                <p className="text-neutral-600">
                  Des astuces pour réussir vos plats et optimiser votre temps en cuisine
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-outfit font-medium text-xl mb-2">Inspiration</h3>
                <p className="text-neutral-600">
                  Des idées créatives pour varier vos menus et découvrir de nouvelles saveurs
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-outfit font-medium text-2xl mb-6">Restons en Contact</h2>
            <p className="text-neutral-600 mb-4">
              Suivez-moi sur Instagram pour encore plus d'inspiration et de recettes au quotidien !
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral text-white px-6 py-3 rounded-lg hover:bg-neutral/90 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @lesrecettesdejade
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;