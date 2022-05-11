import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from '../src/pages/Home'
import CharacterDetail from '../src/pages/CharacterDetail'
import Planet from '../src/pages/Planet'
import Film from '../src/pages/Film'
import Login from '../src/pages/Login'
import Navbar from "./components/Navbar";
import Singup from "./pages/SingUp";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/planet/:id" element={<Planet />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </div>
  );
}

export default App;
