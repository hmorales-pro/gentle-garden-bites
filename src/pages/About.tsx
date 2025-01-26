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

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl font-medium text-neutral-800 mb-6">
              Bienvenue sur mon petit coin de paradis végan !
            </p>

            <p>
              Salut, moi c'est Jade, jeune cheffe (enfin, j'essaye !) de 25 ans, passionnée de cuisine depuis que je suis toute petite. Je suis récemment devenue végan, et autant vous dire que ce virage n'a pas été une mince affaire. Certains de mes amis m'ont regardée comme si j'avais décidé de m'inscrire à la NASA sur un coup de tête ("Quoi ? Tu ne manges plus de fromage ?!"), et ma famille a cru que j'étais tombée sur la tête ("On ne va plus jamais pouvoir t'inviter le dimanche midi ?!").
            </p>

            <p>
              Malgré toutes ces réactions (parfois très drôles, parfois un peu vexantes), je ne regrette pas d'avoir choisi cette voie. Pourquoi ? Pour plein de raisons : d'abord pour le bien-être animal (eh oui, j'ai un petit côté Brigitte Bardot en moi), ensuite pour l'environnement, et enfin pour me lancer des défis culinaires. Parce que si vous croyez que manger végan signifie se contenter d'une feuille de salade et d'un tofu fade, laissez-moi vous prouver le contraire ! Cuisiner végane, c'est l'occasion de découvrir de nouvelles saveurs, de réinventer des plats traditionnels et de s'amuser en cuisine sans faire de mal à personne.
            </p>

            <div className="bg-sage/40 p-6 rounded-lg my-8">
              <p className="text-lg font-medium italic">
                "Mon plus grand bonheur, c'est quand mes amis croquent dans mes burgers végans, lèvent un sourcil étonné, puis finissent par dire : Franchement, c'est super bon… Je vais peut-être goûter à tes trucs plus souvent !"
              </p>
            </div>

            <p>
              Au début, je me suis sentie un peu à part. Quand vous débarquez à un barbecue entre potes avec votre steak de soja, on vous juge souvent comme étant "la relou de service". Mais aujourd'hui, j'en ris beaucoup et ça me motive encore plus à créer des recettes qui mettent tout le monde d'accord.
            </p>

            <h2 className="font-outfit font-medium text-2xl mt-12 mb-6">Mes Projets & Ambitions</h2>
            
            <p>
              Sur ce blog, vous trouverez donc mes expériences culinaires (parfois un brin ratées, mais je partage aussi mes plantages, promis !) et mes inspirations végétales. Mon objectif ? Vous montrer que manger végan peut être simple, gourmand et fun.
            </p>

            <p>
              Mes envies pour les prochains mois et années ? Continuer de développer ce blog, proposer des ateliers de cuisine végan en ligne (et pourquoi pas en présentiel !), et surtout garder ma bonne humeur pour prouver que l'on peut être sérieux sur le fond (la cause animale, l'écologie) tout en gardant le sourire et un brin d'autodérision.
            </p>

            <p>
              À moyen terme, j'aimerais aussi travailler sur un livre de recettes végan et, à plus long terme… qui sait ? Peut-être ouvrir mon propre petit resto végan, un lieu convivial où on mange bien, on rit beaucoup, et on se sent tous un peu chez soi !
            </p>

            <div className="bg-cream/50 rounded-2xl p-8 my-12">
              <h2 className="font-outfit font-medium text-2xl mb-6 text-center">Ma Philosophie</h2>
              <p className="text-center text-lg mb-0">
                L'essentiel est de se régaler sans complexe et sans cruauté. Alors, on se lance ?
              </p>
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