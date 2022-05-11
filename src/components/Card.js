import "./Card.css";
import { Link } from "react-router-dom";


const Card = ({ name, id }) => {
 
  return (
    <div className="card_container">
      <h1 className="card_title">{name }</h1>
      <Link to={`/characters/${id}`} > <button className="card_button">Ver personaje</button> </Link>
    </div>
  );
};

export default Card;
