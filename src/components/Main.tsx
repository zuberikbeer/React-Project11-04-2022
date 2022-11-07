import { getRecipe } from "../services/RecipeApiServices";
import "./Main.css";

const Main = () => {
  getRecipe().then((res) => {
    console.log(res.results);
  });
  return <div className="Main">Main works</div>;
};

export default Main;
