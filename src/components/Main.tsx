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

  useEffect(() => {
    if (searchTerm !== "") {
      searchRecipes(searchTerm).then((res) => {
        setRecipeResults(res.results);
        console.log(res.results);
      });
    }
  }, [searchTerm]);

  return (
    <main className="Main">
      <Form setTerm={setSearchTerm} />
      <ul>
        {recipeResults.map((result) => (
          <Result resultProp={result} />
        ))}
        ;
      </ul>
    </main>
  );
};

export default Main;
