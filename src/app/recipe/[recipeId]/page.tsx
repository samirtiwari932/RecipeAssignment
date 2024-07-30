// app/recipe/[recipeId]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Meal, MealResponse } from "@/app/types";
interface PageProps {
  params: {
    recipeId: string;
  };
}
export default function RecipeDetail({ params }: PageProps) {
  const [recipe, setRecipe] = useState<Meal | null>(null);
  const { recipeId } = params;
  console.log(recipeId,"checker receipe ID")

  useEffect(() => {
    if (!recipeId) return;

    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        const data: MealResponse = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div className="text-center">Loading...</div>;
  }

  const ingredients = Object.entries(recipe)
    .filter(
      ([key, value]) =>
        key.startsWith("strIngredient") && value && value.length > 0
    )
    .map(([_, value]) => value);

  const measures = Object.entries(recipe)
    .filter(
      ([key, value]) =>
        key.startsWith("strMeasure") && value && value.length > 0
    )
    .map(([_, value]) => value);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{recipe.strMeal}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full md:w-1/2 h-64 object-cover rounded mb-4 md:mb-0"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <div className="md:ml-8">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 mb-4">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <p className="whitespace-pre-line">{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}
