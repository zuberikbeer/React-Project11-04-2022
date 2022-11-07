import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  return (
    <div className="Favorites">
      <Link to={"/favorites"}></Link>
    </div>
  );
};

export default Favorites;
