import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";

const featuredRecipes = [
  {
    id: "1",
    title: "Bowl Buddha aux Légumes Rôtis",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3",
    prepTime: "30 min",
    description: "Un bowl nourrissant et coloré, rempli de légumes rôtis, de quinoa et d'une sauce tahini crémeuse."
  },
  {
    id: "2",
    title: "Curry de Pois Chiches",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3",
    prepTime: "45 min",
    description: "Un curry réconfortant aux pois chiches et légumes, parfumé aux épices indiennes."
  },
  {
    id: "3",
    title: "Salade de Quinoa Printanière",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3",
    prepTime: "20 min",
    description: "Une salade fraîche et légère, parfaite pour les beaux jours."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-4">
            Bienvenue sur mon blog de cuisine végane
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Je suis Jade, cheffe passionnée de 25 ans, et je partage ici mes meilleures recettes véganes, 
            simples et délicieuses. Ensemble, cuisinons de façon éthique et savoureuse !
          </p>
        </section>

        <section>
          <h2 className="font-outfit font-medium text-2xl mb-6">Dernières Recettes</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;