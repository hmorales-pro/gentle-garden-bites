import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  description: string;
}

export const RecipeCard = ({ id, title, image, prepTime, description }: RecipeCardProps) => {
  return (
    <Link to={`/recette/${id}`} className="group">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-neutral mb-2">
            <Clock className="h-4 w-4" />
            <span>{prepTime}</span>
          </div>
          <h3 className="font-outfit font-medium text-lg mb-2">{title}</h3>
          <p className="text-neutral-600 text-sm line-clamp-2">{description}</p>
        </div>
      </article>
    </Link>
  );
};