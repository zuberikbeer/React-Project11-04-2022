import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../Context/FavoritesContext";
import Recipe from "../models/Recipe";
import "./Result.css";

interface Props {
  resultProp: Recipe;
}

const Result = ({ resultProp }: Props) => {
  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);
  return (
    <li className="Result" key={resultProp.id} title={resultProp.title}>
      <Link to={`/details/${resultProp.id}`}>
        <p>{resultProp.title}</p>
        <img
          className="ResultImg"
          src={resultProp.image}
          alt={resultProp.title}
        />
      </Link>
      {!isFav(resultProp.id) ? (
        <button
          className="fav"
          onClick={() => {
            addFavorite(resultProp);
          }}
        >
          &hearts;
        </button>
      ) : (
        <button
          className="fav notFav"
          onClick={() => {
            removeFavorite(resultProp.id);
          }}
        >
          &hearts;
        </button>
      )}
    </li>
  );
};

export default Result;
