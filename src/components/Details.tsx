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
    getRecipeInformation(id).then((res) => {
      setRecipe(res);
      console.log(res);
    });
  }, [id]);

  return (
    <div className="Details">
      {recipe ? (
        <div className="recipes">
          <h1>{recipe?.title}</h1>
          <img src={recipe?.image} />
          <p>
            Cooking Time:
            {recipe?.readyInMinutes > 0
              ? recipe?.readyInMinutes
              : "Information not found! :( "}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
