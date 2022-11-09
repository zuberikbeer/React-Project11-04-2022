import { FormEvent, useState } from "react";
import "./Form.css";

interface Props {
  setTerm: (something: string) => void;
  dietSelect: (something: string) => void;
  calorieSelect: (something: string) => void;
}

const Form = ({ setTerm, dietSelect, calorieSelect }: Props) => {
  const [recipeSearch, setRecipeSearch] = useState("");
  const [dietSearch, setDietSearch] = useState("");
  const [searchCalories, setSearchCalories] = useState("");
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTerm(recipeSearch);
    dietSelect(dietSearch);
    calorieSelect(searchCalories);
  };

  return (
    <form className="Form" id="form" onSubmit={submitHandler}>
      <div className="inputs">
        <label htmlFor="searchTerm"></label>
        <div className="recipe-name">
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="Search Recipe Here"
            value={recipeSearch}
            onChange={(e) => {
              setRecipeSearch(e.target.value);
            }}
          />
        </div>
        <div className="range-input">
          <label htmlFor="calories">Find by calories</label>
          <input
            type="range"
            id="calories"
            name="calories"
            min="50"
            max="2000"
            value={searchCalories}
            onChange={(e) => {
              setSearchCalories(e.target.value);
            }}
            step="10"
          />
          <p className="searchCalories">{searchCalories}</p>
        </div>
        <div className="select-input">
          <label className="select-label" htmlFor="diet">
            Choose a diet type:
          </label>
          <select
            name="diet-type"
            id="diet"
            form="form"
            value={dietSearch}
            onChange={(e) => {
              setDietSearch(e.target.value);
            }}
          >
            <option value="">No preference</option>
            <option value="gluten-free">Gluten Free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="lacto-vegetarian">Lacto-Vegetarian</option>
            <option value="ovo-vegetarian">Ovo-Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescetarian">Pescetarian</option>
            <option value="paleo">Paleo</option>
            <option value="primal">Primal</option>
            <option value="low-fodmap">Low FODMAP</option>
            <option value="whole-30">Whole30</option>
          </select>
        </div>
      </div>

      <div className="searchButton">
        <button className="actualButton">Search</button>
      </div>
    </form>
  );
};

export default Form;
