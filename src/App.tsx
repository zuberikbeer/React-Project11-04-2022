import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { searchRecipes } from "./services/RecipeApiServices";
import ComplexSearchResponse from "./models/ComplexSearchResponse";
import Main from "./components/Main";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Favorites from "./components/Favorites";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
