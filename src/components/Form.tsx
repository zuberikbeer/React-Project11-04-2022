import { FormEvent, useState } from "react";
import "./Form.css";

interface Props {
  setTerm: (something: string) => void;
}

const Form = ({ setTerm }: Props) => {
  const [recipeSearch, setRecipeSearch] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTerm(recipeSearch);
  };

  return (
    <form className="Form" onSubmit={submitHandler}>
      <label htmlFor="searchTerm">Search Here</label>
      <div className="recipe-name">
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={recipeSearch}
          onChange={(e) => {
            setRecipeSearch(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default Form;
