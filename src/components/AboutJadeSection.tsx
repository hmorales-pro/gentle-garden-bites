import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutJadeSection = () => {
  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit font-semibold text-3xl md:text-4xl mb-8 text-center">
            À Propos de Jade
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-medium text-neutral-800 mb-6">
              Bienvenue sur mon petit coin de paradis végan !
            </p>
            <p className="mb-6">
              Salut, moi c'est Jade, jeune cheffe (enfin, j'essaye !) de 25 ans, passionnée de cuisine depuis que je suis toute petite. Je suis récemment devenue végan, et autant vous dire que ce virage n'a pas été une mince affaire. Certains de mes amis m'ont regardée comme si j'avais décidé de m'inscrire à la NASA sur un coup de tête ("Quoi ? Tu ne manges plus de fromage ?!"), et ma famille a cru que j'étais tombée sur la tête ("On ne va plus jamais pouvoir t'inviter le dimanche midi ?!").
            </p>
            <p className="mb-6">
              Malgré toutes ces réactions (parfois très drôles, parfois un peu vexantes), je ne regrette pas d'avoir choisi cette voie. Pourquoi ? Pour plein de raisons : d'abord pour le bien-être animal (eh oui, j'ai un petit côté Brigitte Bardot en moi), ensuite pour l'environnement, et enfin pour me lancer des défis culinaires.
            </p>
            <div className="bg-sage/40 p-6 rounded-lg my-8">
              <p className="text-lg font-medium italic">
                "Si vous croyez que manger végan signifie se contenter d'une feuille de salade et d'un tofu fade, laissez-moi vous prouver le contraire !"
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-neutral hover:text-neutral/80 font-medium"
            >
              Lire la suite
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};