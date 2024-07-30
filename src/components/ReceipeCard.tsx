// components/RecipeCard.tsx
import { Meal } from "@/app/types";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface RecipeCardProps {
  recipe: Meal;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    //   <img
    //     className="w-full h-48 object-cover"
    //     src={recipe.strMealThumb}
    //     alt={recipe.strMeal}
    //   />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{recipe.strMeal}</div>
    //     <Link href={`/recipe/${recipe.idMeal}`}>
    //       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //         View Recipe
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <div className="rounded-sm lg:w-fill w-auto shadow-lg overflow-hidden m-4 h-[600] bg-white">
      <div className="relative flex flex-col gap-4 justify-between">
        <Link href={`/recipe/${recipe.idMeal}`}>
          <div className="relative p-10 h-80 bg-slate-200 hover:opacity-55 transition hover:border-b-2 border-blue-500">
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              objectFit="center"
              fill
              quality={50}
            />
          </div>

          <div className="flex h-20 justify-start items-center">
            <span className="text-2xl text-blue-950 hover:text-3xl transition p-4 word-wrap">
              {recipe.strMeal}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
