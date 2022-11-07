import { useState } from "react";
import "./Form.css";

interface Prop {
  setTerm: (something: string) => void;
}

const Form = () => {
  const [recipeSearch, setRecipeSearch] = useState("");

  //   return (
  //     <form className="Form">
  //       <label htmlFor="searchTerm">Search Here</label>
  //       <div className="recipe-name">
  //         <input
  //           type="text"
  //           name="searchTerm"
  //           id="searchTerm"
  //           value={}
  //           onChange={(e) => {
  //             set;
  //           }}
  //         />
  //       </div>
  //       Form works
  //     </form>
  //   );
};

export default Form;
