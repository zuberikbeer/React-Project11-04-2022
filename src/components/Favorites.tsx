import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../Context/FavoritesContext";
import "./Favorites.css";
import Main from "./Main";
import Result from "./Result";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      {favorites.map((fav) => (
        <Result key={fav.id} resultProp={fav} />
      ))}
    </div>
  );
};

export default Favorites;
