import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RecipeCard } from "@/components/RecipeCard";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Utensils, Cake, Soup, Salad, Cookie } from "lucide-react";

const getCategoryIcon = (slug: string) => {
  switch (slug) {
    case 'plats':
      return <Utensils className="w-6 h-6 text-neutral" />;
    case 'desserts':
      return <Cake className="w-6 h-6 text-neutral" />;
    case 'entrees':
      return <Soup className="w-6 h-6 text-neutral" />;
    case 'snacks':
      return <Cookie className="w-6 h-6 text-neutral" />;
    case 'petit-dejeuner':
      return <Salad className="w-6 h-6 text-neutral" />;
    default:
      return <Utensils className="w-6 h-6 text-neutral" />;
  }
};

const fetchCategories = async () => {
  console.log('Fetching categories in Recettes page...');
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
  
  console.log('Categories fetched in Recettes:', data);
  return data;
};

const fetchRecipes = async (categorySlug?: string) => {
  console.log('Fetching recipes with category slug:', categorySlug);
  let query = supabase
    .from('recipes')
    .select('*, categories(*)')
    .order('created_at', { ascending: false });

  if (categorySlug) {
    query = query.eq('categories.slug', categorySlug);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }

  console.log('Recipes fetched:', data);
  return data;
};

const Recettes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categorySlug = searchParams.get('category');

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: recipes, isLoading } = useQuery({
    queryKey: ['recipes', categorySlug],
    queryFn: () => fetchRecipes(categorySlug || undefined),
  });

  return (
    <div className="min-h-screen bg-sage/20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-outfit font-semibold text-4xl md:text-5xl mb-8 text-center">
          Nos Recettes
        </h1>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSearchParams({})}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                !categorySlug
                  ? 'bg-neutral text-white'
                  : 'bg-white hover:bg-neutral/10'
              }`}
            >
              <Utensils className="w-5 h-5" />
              Toutes
            </button>
            {categories?.map((category) => (
              <button
                key={category.id}
                onClick={() => setSearchParams({ category: category.slug })}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  categorySlug === category.slug
                    ? 'bg-neutral text-white'
                    : 'bg-white hover:bg-neutral/10'
                }`}
              >
                {getCategoryIcon(category.slug)}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-white/50 animate-pulse rounded-lg"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Recettes;