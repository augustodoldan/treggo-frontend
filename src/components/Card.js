import {useNavigate} from "react-router-dom";
import "./Card.css";
import { Link } from "react-router-dom";


const Card = ({ name, id }) => {
 
  return (
    <div id="card">
      <h1 className="card_title">{name }</h1>
      <Link to={`/characters/${id}`}> <button>Ver personaje</button> </Link>
    </div>
  );
};

export default Card;
