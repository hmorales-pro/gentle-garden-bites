import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RecipeCard } from "@/components/RecipeCard";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const fetchRecipes = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase error:', error);
    throw error;
  }
  return data;
};

const Recettes = () => {
  const { data: recipes, isLoading, error } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
  });

  if (error) {
    console.error('Query error:', error);
  }

  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-8 text-center">
          Nos Recettes
        </h1>
        
        {isLoading && (
          <p className="text-center text-neutral-600">
            Chargement des recettes...
          </p>
        )}
        
        {error && (
          <p className="text-center text-red-600">
            Une erreur est survenue lors du chargement des recettes.
          </p>
        )}

        {recipes && recipes.length === 0 && (
          <p className="text-center text-neutral-600">
            Aucune recette n'est disponible pour le moment.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes?.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              nom_recette={recipe.nom_recette}
              time_preparation={recipe.time_preparation}
              image={recipe.image}
              slug={recipe.slug}
              created_at={recipe.created_at}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recettes;