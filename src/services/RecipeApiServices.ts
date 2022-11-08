import axios from "axios";
import ComplexSearchResponse from "../models/ComplexSearchResponse";
import DetailedRecipeResponse from "../models/DetailedRecipeResponse";

const apiKey: string = process.env.REACT_APP_RECIPE_API_KEY || "";

export const searchRecipes = (
  searchTerm: string,
  inputDiet: string,
  caloriesInput: number
): Promise<ComplexSearchResponse> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: {
        apiKey,
        query: searchTerm,
        number: 30,
        diet: inputDiet,
        maxCalories: caloriesInput,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getRecipeInformation = (
  id: string
): Promise<DetailedRecipeResponse> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { apiKey: apiKey },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
