import SearchBar from "../components/SearchBar";
import "./Home.css";
import { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <div id="home">
{/*       <Navbar />
 */}      <div className="home__searchBar">
      <SearchBar addCharacters={setCharacters} characters={characters} />
      </div>
      <div className="card-container">
        {characters.map((character) => (
          <Card name={character.name} key={character.uid} id={character.uid} />
        ))}
      </div>
    </div>
  );
};

export default Home;
