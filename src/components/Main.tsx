import { useEffect, useState } from "react";
import ComplexSearchResponse from "../models/ComplexSearchResponse";
import { getRecipe } from "../services/RecipeApiServices";
import "./Main.css";
import Recipe from "../models/Recipe";
import { Link } from "react-router-dom";

const Main = () => {
  const [recipeResults, setRecipeResults] = useState<Recipe[]>([]);

  useEffect(() => {
    getRecipe().then((res) => {
      setRecipeResults(res.results);
      console.log(res.results);
    });
  }, []);

  return (
    <div className="Main">
      <ul>
        {recipeResults.map((result) => (
          <li key={result.id} title={result.title}>
            <Link to={`/details/${result.id}`}>
              <p>{result.title}</p>
              <img src={result.image} alt={result.title} />
            </Link>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default Main;
