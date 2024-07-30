// components/RecipeCard.tsx
import Link from "next/link";
import { Meal } from "../../app/types";
interface RecipeCardProps {
  recipe: Meal;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.strMeal}</div>
        <Link href={`/recipe/${recipe.idMeal}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}
