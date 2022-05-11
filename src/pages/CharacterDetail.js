import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CharacterDetail.css";
import { Link } from "react-router-dom";
import ListFilm from "../components/ListFilm";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [planet, setPlanet] = useState("");
  const [films, setFilms] = useState([]);

  const getCharacterById = async () => {
    const response = await fetch(
      `http://localhost:3001/v1/characters/id/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setCharacter(data);
  };

  const getPlanet = async () => {
    const urlPlanet = character.properties.homeworld.split("/");
    const idPlanet = urlPlanet[5];
    const response = await fetch(
      `http://localhost:3001/v1/planet/${idPlanet}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setPlanet(data);
  };

  const getFilms = async () => {
    const response = await fetch(`http://localhost:3001/v1/film/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setFilms(data);
  };

  useEffect(() => {
    getCharacterById();
  }, []);

  useEffect(() => {
    if (character) {
      getPlanet();
    }
  }, [character]);

  useEffect(() => {
    if (character) {
      getFilms();
    }
  }, [character]);

  return (
    <div className="characterDetail_container">
      <div className="characterDetail_data">
        <div className="characterDetail_name">
          <h1 className="characterDetail_character-title">
            {character && character.properties.name}
          </h1>
        </div>
        <div className="characterDetail_planet">
          <div>

          <h3 className="characterDetail_planet-text">Planeta de origen </h3>
          </div>
          <Link
            to={`/planet/${planet.uid}`}
            className="characterDetail_planet-link"
          >
            <p className="characterDetail_planet-name">
              {planet && planet.properties.name}
            </p>
          </Link>
        </div>
        <div className="characterDetail_films">
          <ul>
            <h4 className="characterDetail_films-list-title">
              Peliculas donde aparece
            </h4>
            {films &&
              films.map((film) => <ListFilm film={film} key={film.uid} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
