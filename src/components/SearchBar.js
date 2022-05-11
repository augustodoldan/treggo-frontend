import { useEffect, useState } from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ addCharacters, characters }) => {
  const [valueInput, setValueInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    return setValueInput(value);
  };

  const searchCharacter = async () => {
    const response = await fetch(
      `http://localhost:3001/v1/characters/${valueInput}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    addCharacters(data);
  };

  const handlerKeyUp = (e) => {
    if (e.keyCode === 13) {
      searchCharacter();
    }
  };

  useEffect(() => {
    searchCharacter();
  }, []);

  return (
    <div className="searchBar_container">
      <div className="searchBar_controls">
        <input
          className="searchBar_input"
          type="text"
          onChange={handleChange}
          value={valueInput}
          onKeyUp={handlerKeyUp}
        />
        <FaSpaceShuttle className="searchBar_icon" />
        <button
          className="searchBar_button"
          type="submit"
          onClick={searchCharacter}
        >
          <span className="searchBar_span">Buscar</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
