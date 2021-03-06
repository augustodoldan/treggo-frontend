import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Planet.css";

const Planet = () => {
  const { id } = useParams();

  const [planet, setPlanet] = useState();

  const getPlanets = async () => {
    const response = await fetch(`http://localhost:3001/v1/planet/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setPlanet(data);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <div className="planet_container">
      {planet && <h1 className="planet_title"> {planet.properties.name}</h1>}
    </div>
  );
};

export default Planet;
