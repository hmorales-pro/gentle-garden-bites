import { useQuery } from "@tanstack/react-query";
import { RecipeCard } from "./RecipeCard";
import { supabase } from "@/integrations/supabase/client";

const fetchLatestRecipes = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }

  return data;
};

export const FeaturedRecipes = () => {
  const { data: recipes, isLoading, error } = useQuery({
    queryKey: ['featured-recipes'],
    queryFn: fetchLatestRecipes,
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-outfit font-semibold text-3xl md:text-4xl mb-8 text-center">
          Recettes du Moment
        </h2>
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
        {recipes && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                {...recipe} 
                image={recipe.image?.startsWith('http') ? recipe.image : `${recipe.image}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};