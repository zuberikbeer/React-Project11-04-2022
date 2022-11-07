import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedRecipeResponse from "../models/DetailedRecipeResponse";
import Recipe from "../models/Recipe";
import { getRecipeInformation } from "../services/RecipeApiServices";
import "./Details.css";

const Details = () => {
  const id: string = useParams().id!;
  const [recipe, setRecipe] = useState<DetailedRecipeResponse>();
  console.log(id);

  useEffect(() => {
    getRecipeInformation(id).then((res) => setRecipe(res));
  }, [id]);

  return (
    <div className="Details">
      <h1>{recipe?.title}</h1>
      <img src={recipe?.image} />
      <p>Cooking Time:{recipe?.cookingMinutes}</p>
    </div>
  );
};

export default Details;
