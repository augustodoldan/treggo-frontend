import { Link } from "react-router-dom";
import "./ListFilm.css";

const ListFilm = ({ film }) => {
  return (
    <div className="listFilm_container">
      <Link to={`/film/${film.uid}`} className="listFilm_link">
        <li className="listFilm_list"> {film.properties.title} </li>
      </Link>
    </div>
  );
};

export default ListFilm;
