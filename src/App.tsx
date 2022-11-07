import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { getRecipe } from "./services/RecipeApiServices";
import ComplexSearchResponse from "./models/ComplexSearchResponse";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Form /> */}
    </div>
  );
}

export default App;
