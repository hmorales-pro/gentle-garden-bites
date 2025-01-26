import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-cream">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-4">
                Bienvenue dans ma cuisine végane !
              </h1>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Moi c'est Jade, 25 ans, cheffe passionnée et un brin maladroite ! 
                Née dans une famille de restaurateurs, j'ai grandi entre les fourneaux 
                de ma grand-mère et les herbes aromatiques de mon balcon-jungle urbain.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Aujourd'hui, je réinvente la cuisine traditionnelle en version végane, 
                avec une touche de créativité et beaucoup d'amour. Parce que oui, on peut 
                être végan et gourmand ! Même si parfois, ça ne se passe pas exactement 
                comme prévu... 😅
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-outfit font-medium text-2xl mb-4">Mon Histoire</h2>
          <p className="text-neutral-600 mb-6">
            De la cuisine traditionnelle française au véganisme, mon parcours a été guidé 
            par l'envie de cuisiner de façon plus responsable, sans jamais sacrifier le goût. 
            Je partage ici mes succès (et mes ratés !) pour vous montrer qu'une cuisine 
            éthique et savoureuse est à la portée de tous.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-cream/50 p-6 rounded-lg">
              <h3 className="font-outfit font-medium mb-2">Créativité</h3>
              <p className="text-sm text-neutral-600">Des recettes traditionnelles revisitées avec une touche d'originalité</p>
            </div>
            <div className="bg-cream/50 p-6 rounded-lg">
              <h3 className="font-outfit font-medium mb-2">Simplicité</h3>
              <p className="text-sm text-neutral-600">Des instructions claires et des astuces pour réussir à coup sûr</p>
            </div>
            <div className="bg-cream/50 p-6 rounded-lg">
              <h3 className="font-outfit font-medium mb-2">Authenticité</h3>
              <p className="text-sm text-neutral-600">Des expériences partagées en toute transparence, succès comme échecs</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-outfit font-medium text-2xl mb-6 text-center">Mes Dernières Créations</h2>
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