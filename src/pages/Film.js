import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Film.css";
import Card from "../components/Card";

const Film = () => {
  const { id } = useParams();

  const [film, setFilm] = useState();
  const [characters, setCharacters] = useState([]);

  const getFilms = async () => {
    const response = await fetch(`http://localhost:3001/v1/film/${id}/characters`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
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
     setCharacters([...characters, data]); 
    };
    
    
    const getCharactersFilm = () => {
        film.properties.characters.slice(0, 1).forEach((character) => {
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
    <div id="film_container">
      {film && <h1>{film.properties.title}</h1>}
      {characters &&
        characters.map(character => 
          <Card name={character.properties.name} key={character.uid} id={character.uid} />
        )}
    </div>
  );
};

export default Film;
