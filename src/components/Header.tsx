import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/home">
        <h1>Goober Eats</h1>
      </Link>
    </div>
  );
};

export default Header;
