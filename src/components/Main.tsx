import { useContext, useEffect, useState } from "react";
import ComplexSearchResponse from "../models/ComplexSearchResponse";
import {
  getRecipeInformation,
  searchRecipes,
} from "../services/RecipeApiServices";
import "./Main.css";
import Recipe from "../models/Recipe";
import Result from "./Result";
import Form from "./Form";

const Main = () => {
  const [recipeResults, setRecipeResults] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [findDiet, setFindDiet] = useState("");
  const [findCalories, setFindCalories] = useState("");

  useEffect(() => {
    searchRecipes(searchTerm, findDiet, +findCalories).then((res) => {
      setRecipeResults(res.results);
      console.log(res.results);
    });
  }, [searchTerm, findDiet, findCalories]);

  return (
    <main className="Main">
      <Form
        setTerm={setSearchTerm}
        dietSelect={setFindDiet}
        calorieSelect={setFindCalories}
      />
      <ul>
        {recipeResults.map((result) => (
          <Result key={result.id} resultProp={result} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
