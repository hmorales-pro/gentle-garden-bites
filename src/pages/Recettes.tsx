import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RecipeCard } from "@/components/RecipeCard";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const fetchRecipes = async (categorySlug?: string) => {
  let query = supabase
    .from('recipes')
    .select('*, categories!inner(*)')
    .order('created_at', { ascending: false });

  if (categorySlug) {
    query = query.eq('categories.slug', categorySlug);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Supabase error:', error);
    throw error;
  }
  return data;
};

const Recettes = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get('category');

  const { data: recipes, isLoading, error } = useQuery({
    queryKey: ['recipes', categorySlug],
    queryFn: () => fetchRecipes(categorySlug || undefined),
  });

  if (error) {
    console.error('Query error:', error);
  }

  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-8 text-center">
          {categorySlug ? `Nos ${recipes?.[0]?.categories?.name || 'Recettes'}` : 'Nos Recettes'}
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