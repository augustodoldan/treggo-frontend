
import { Link } from "react-router-dom";
import './ListFilm.css'

const ListFilm = ({ film }) => {
  return (
  <div className="ListFilm_container">
    <Link  to={`/film/${film.uid}`}>
  <li> {film.properties.title} </li>
    </Link>
  </div>

  )
}

export default ListFilm
