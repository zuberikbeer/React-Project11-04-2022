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

  let cleanText = recipe?.instructions?.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="Details">
      <h1>{recipe?.title}</h1>
      {recipe ? (
        <div className="recipes">
          <div className="img-details">
            <div className="img-container">
              <img src={recipe?.image} />
            </div>

            <p className="small-details">
              Cooking Time:{" "}
              {recipe?.readyInMinutes > 0
                ? recipe?.readyInMinutes
                : "Information not found! :( "}{" "}
              mins
            </p>
            <p className="small-details">
              {" "}
              Servings:{" "}
              {recipe?.servings
                ? recipe.servings
                : "Information not found! :( "}
            </p>
            <a href={recipe.sourceUrl}>Looking for the recipe? Click here!</a>
          </div>
          <div className="clean-text">
            <p>{cleanText}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
