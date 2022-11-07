import axios from "axios";
import ComplexSearchResponse from "../models/ComplexSearchResponse";

const apiKey: string = process.env.REACT_APP_RECIPE_API_KEY || "";

export const getRecipe = (): Promise<ComplexSearchResponse> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getRecipeInformation = (
  id: string
): Promise<ComplexSearchResponse> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { apiKey: apiKey },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
