import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Données temporaires (à remplacer par une vraie source de données plus tard)
const recettes = {
  "1": {
    id: "1",
    title: "Curry de Pois Chiches",
    description: "Un plat réconfortant aux saveurs indiennes, parfait pour les soirées d'hiver. Ce curry végétalien est riche en protéines et en saveurs.",
    prepTime: "30 min",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    ingredients: [
      "400g de pois chiches cuits",
      "1 oignon",
      "2 gousses d'ail",
      "400ml de lait de coco",
      "2 c. à soupe de curry en poudre",
      "1 c. à café de curcuma",
      "Sel et poivre"
    ],
    instructions: [
      "Émincez l'oignon et l'ail",
      "Faites revenir l'oignon dans une poêle avec un peu d'huile",
      "Ajoutez l'ail et les épices",
      "Versez le lait de coco et les pois chiches",
      "Laissez mijoter 15-20 minutes"
    ]
  },
  "2": {
    id: "2",
    title: "Bowl Buddha Coloré",
    description: "Un repas équilibré et nutritif qui combine des légumes crus et cuits, des protéines végétales et des céréales complètes.",
    prepTime: "25 min",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    ingredients: [
      "100g de quinoa",
      "1 avocat",
      "100g de pois chiches rôtis",
      "1 carotte râpée",
      "Quelques feuilles d'épinards",
      "Graines de sésame",
      "Sauce tahini"
    ],
    instructions: [
      "Cuisez le quinoa selon les instructions",
      "Préparez tous les légumes",
      "Disposez harmonieusement les ingrédients dans un bol",
      "Ajoutez la sauce tahini et les graines",
      "Servez immédiatement"
    ]
  }
};

const RecettePage = () => {
  const { id } = useParams();
  const recette = recettes[id as keyof typeof recettes];

  if (!recette) {
    return (
      <div className="min-h-screen bg-sage/20">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="font-outfit font-semibold text-4xl text-center">
            Recette non trouvée
          </h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-video w-full">
            <img
              src={recette.image}
              alt={recette.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <h1 className="font-outfit font-semibold text-4xl mb-4">
              {recette.title}
            </h1>
            <p className="text-neutral-600 mb-6">
              {recette.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral mb-6">
              <span>Temps de préparation : {recette.prepTime}</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="font-outfit font-medium text-2xl mb-4">
                  Ingrédients
                </h2>
                <ul className="space-y-2">
                  {recette.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-sage rounded-full" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </section>
              
              <section>
                <h2 className="font-outfit font-medium text-2xl mb-4">
                  Instructions
                </h2>
                <ol className="space-y-4">
                  {recette.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="font-outfit font-medium text-sage">
                        {index + 1}.
                      </span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default RecettePage;