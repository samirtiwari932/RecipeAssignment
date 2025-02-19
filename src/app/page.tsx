"use client";
import { useState, useEffect } from "react";
import { Meal, MealResponse } from "./types";
import RecipeCard from "@/components/ReceipeCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<Meal[]>([]);

  useEffect(() => {
    // Retrieve recipes from local storage when the component mounts
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data: MealResponse = await response.json();
      console.log(data, "this is data");
      const fetchedRecipes = data.meals;
      setRecipes(fetchedRecipes);
      localStorage.setItem("recipes", JSON.stringify(fetchedRecipes));
      console.log(fetchedRecipes, "this is recipe");
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Search</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="w-full max-w-md p-2 border border-gray-300 rounded"
          placeholder="Search for a meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button
          variant="destructive"
          onClick={handleSearch}
          className="hover:bg-gradient-custom text-white font-bold py-2 px-4 rounded ml-2"
        >
          Search
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
