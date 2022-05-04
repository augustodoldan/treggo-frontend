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
  console.log(films);
  return (
    <div id="character_detail">
      <h1>{character && character.properties.name} </h1>
      <Link to={`/planet/${planet.uid}`}>
        <h1>{planet && planet.properties.name}</h1>
      </Link>
      <ul>
        {films && films.map((film) => <ListFilm film={film} key={film.uid} />)}
      </ul>
    </div>
  );
};

export default CharacterDetail;
