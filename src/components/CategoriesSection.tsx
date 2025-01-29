import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Utensils, Cake, Soup, Salad, Cookie } from "lucide-react";

const fetchCategories = async () => {
  console.log('Fetching categories...');
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
  
  console.log('Categories fetched:', data);
  return data;
};

const getCategoryIcon = (slug: string) => {
  switch (slug) {
    case 'plats':
      return <Utensils className="w-12 h-12 mb-3 text-neutral" />;
    case 'desserts':
      return <Cake className="w-12 h-12 mb-3 text-neutral" />;
    case 'entrees':
      return <Soup className="w-12 h-12 mb-3 text-neutral" />;
    case 'snacks':
      return <Cookie className="w-12 h-12 mb-3 text-neutral" />;
    case 'petit-dejeuner':
      return <Salad className="w-12 h-12 mb-3 text-neutral" />;
    default:
      return <Utensils className="w-12 h-12 mb-3 text-neutral" />;
  }
};

export const CategoriesSection = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return (
    <section className="py-16 bg-sage/20">
      <div className="container mx-auto px-4">
        <h2 className="font-outfit font-semibold text-3xl md:text-4xl mb-8 text-center">
          Catégories
        </h2>
        {isLoading ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-white/50 animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {categories?.map((category) => (
              <Link
                key={category.id}
                to={`/recettes?category=${category.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex flex-col items-center text-center">
                  {getCategoryIcon(category.slug)}
                  <h3 className="font-medium text-lg group-hover:text-neutral transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};