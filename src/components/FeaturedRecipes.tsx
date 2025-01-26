import { RecipeCard } from "./RecipeCard";

export const FeaturedRecipes = () => {
  const featuredRecipes = [
    {
      id: "1",
      title: "Curry de Pois Chiches",
      description: "Un plat réconfortant aux saveurs indiennes",
      prepTime: "30 min",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      id: "2",
      title: "Bowl Buddha Coloré",
      description: "Un repas équilibré et nutritif",
      prepTime: "25 min",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-outfit font-semibold text-3xl md:text-4xl mb-8 text-center">
          Recettes du Moment
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};