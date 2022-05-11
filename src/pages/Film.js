import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Film.css";
import Card from "../components/Card";

const Film = () => {
  const { id } = useParams();

  const [film, setFilm] = useState();
  const [characters, setCharacters] = useState([]);

  const getFilms = async () => {
    const response = await fetch(
      `http://localhost:3001/v1/film/${id}/characters`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();

    setFilm(data);
  };

  const getCharacterById = async (characterInTheFilm) => {
    const response = await fetch(
      `http://localhost:3001/v1/characters/id/${characterInTheFilm}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setCharacters((prevState) => [...prevState, data]);
  };

  const getCharactersFilm = () => {
    film.properties.characters.forEach((character) => {
      const idCharacter = character.split("/");
      const characterInTheFilm = idCharacter[5];

      getCharacterById(characterInTheFilm);
    });
  };

  useEffect(() => {
    if (film) {
      getCharactersFilm();
    }
  }, [film]);

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="film_container">
      <div className="film_data">
        <div className="film_wrap-title">
        {film && <h1 className="film_title">{film.properties.title}</h1>}
        </div>
        <div className="film_cards"> 
        {characters &&
          characters.map((character) => (
            <Card
              name={character.properties.name}
              key={character.uid}
              id={character.uid}
              />
          ))}
              </div>
      </div>
    </div>
  );
};

export default Film;
