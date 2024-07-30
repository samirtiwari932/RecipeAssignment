// app/recipe/[recipeId]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Meal, MealResponse } from "@/app/types";
import Image from "next/image";

interface PageProps {
  params: {
    recipeId: string;
  };
}

export default function RecipeDetail({ params }: PageProps) {
  const [recipe, setRecipe] = useState<Meal | null>(null);
  const { recipeId } = params;

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
    return <div className="text-center text-lg">Loading...</div>;
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

  // Function to format instructions with step numbers
  const formatInstructions = (instructions: string) => {
    const steps = instructions.split("\n").filter((step) => step.trim() !== "");
    return steps.map((step, index) => (
      <div key={index} className="mb-2">
        <span className="font-bold">Step {index + 1}:</span> {step}
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{recipe.strMeal}</h1>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="relative flex flex-col gap-48">
          <div className="relative hidden md:flex w-full md:w-[560px] md:h-[314px]">
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              fill
              className="object-contain rounded-lg shadow-md"
            />
          </div>
          {recipe.strYoutube && (
            <div className="flex justify-center mb-8">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${
                  recipe.strYoutube.split("v=")[1]
                }`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        <div className="md:ml-8 flex-1">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 mb-4">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg">
                {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <div className="text-lg">
            {formatInstructions(recipe.strInstructions)}
          </div>
        </div>
      </div>
    </div>
  );
}
