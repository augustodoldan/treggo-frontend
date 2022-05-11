import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar_container">
      <div className="navbar_links">
        <Link to="/" className="navbar_link">
          Home
        </Link>
        <Link to="/" className="navbar_link">
          Buscar personajes
        </Link>
        <Link to="/login" className="navbar_login_link">
          <button className="navbar_login_button">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
