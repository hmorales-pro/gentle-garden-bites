import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

interface Recipe {
  id: string;
  title: string;
  description: string;
  prep_time: string;
  image_url: string;
  ingredients: string[];
  instructions: string[];
  anecdote?: string;
  slug: string;
  created_at: string;
}

const fetchRecipe = async (year: string, month: string, slug: string): Promise<Recipe> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes/${year}/${month}/${slug}`);
  if (!response.ok) {
    throw new Error("Recette non trouvée");
  }
  return response.json();
};

const RecettePage = () => {
  const { year, month, slug } = useParams();
  
  const { data: recette, isLoading, error } = useQuery({
    queryKey: ["recipe", year, month, slug],
    queryFn: () => fetchRecipe(year!, month!, slug!),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sage/20">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">Chargement...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    toast({
      title: "Erreur",
      description: "Impossible de charger la recette",
      variant: "destructive",
    });
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

  if (!recette) return null;

  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-video w-full">
            <img
              src={recette.image_url}
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
              <span>Temps de préparation : {recette.prep_time}</span>
            </div>
            
            {recette.anecdote && (
              <div className="mb-8 p-4 bg-sage/10 rounded-lg">
                <h2 className="font-outfit font-medium text-xl mb-2">Le saviez-vous ?</h2>
                <p className="text-neutral-600">{recette.anecdote}</p>
              </div>
            )}
            
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