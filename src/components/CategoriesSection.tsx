import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Grid } from "lucide-react";

const fetchCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) throw error;
  return data;
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
                  {category.icon ? (
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-12 h-12 mb-3"
                    />
                  ) : (
                    <Grid className="w-12 h-12 mb-3 text-neutral" />
                  )}
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