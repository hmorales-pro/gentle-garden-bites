import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  nom_recette: string;
  image: string;
  time_preparation: string;
  slug: string;
  created_at: string;
}

export const RecipeCard = ({ nom_recette, image, time_preparation, slug, created_at }: RecipeCardProps) => {
  const date = new Date(created_at);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');

  return (
    <Link to={`/recette/${year}/${month}/${slug}`} className="group">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={nom_recette}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-neutral mb-2">
            <Clock className="h-4 w-4" />
            <span>{time_preparation}</span>
          </div>
          <h3 className="font-outfit font-medium text-lg">{nom_recette}</h3>
        </div>
      </article>
    </Link>
  );
};