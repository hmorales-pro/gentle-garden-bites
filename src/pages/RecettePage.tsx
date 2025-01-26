import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Recipe {
  id: string;
  nom_recette: string;
  time_preparation: string;
  image: string;
  ingredients: string[];
  instruction: string[];
  anecdote?: string;
  story?: string;
  astuce?: string;
  slug: string;
  created_at: string;
}

const fetchRecipe = async (year: string, month: string, slug: string): Promise<Recipe> => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching recipe:', error);
    throw new Error("Recette non trouvée");
  }

  if (!data) {
    throw new Error("Recette non trouvée");
  }

  return data;
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
        <main className="container mx-auto px-4 py-8 mt-16">
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
        <main className="container mx-auto px-4 py-8 mt-16">
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
      <main className="container mx-auto px-4 py-8 mt-16">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/recettes">Recettes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{recette.nom_recette}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-video w-full">
            <img
              src={recette.image}
              alt={recette.nom_recette}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <h1 className="font-outfit font-semibold text-4xl mb-4">
              {recette.nom_recette}
            </h1>
            
            <div className="flex items-center gap-2 text-sm text-neutral mb-6">
              <span>Temps de préparation : {recette.time_preparation}</span>
            </div>
            
            {recette.anecdote && (
              <div className="mb-8 p-4 bg-sage/10 rounded-lg">
                <h2 className="font-outfit font-medium text-xl mb-2">Anecdote</h2>
                <p className="text-neutral-600">{recette.anecdote}</p>
              </div>
            )}

            {recette.story && (
              <div className="mb-8">
                <h2 className="font-outfit font-medium text-xl mb-2">L'histoire de la recette</h2>
                <p className="text-neutral-600">{recette.story}</p>
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
                  {recette.instruction.map((instruction, index) => (
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

            {recette.astuce && (
              <div className="mt-8 p-4 bg-sage/10 rounded-lg">
                <h2 className="font-outfit font-medium text-xl mb-2">Astuce du chef</h2>
                <p className="text-neutral-600">{recette.astuce}</p>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default RecettePage;