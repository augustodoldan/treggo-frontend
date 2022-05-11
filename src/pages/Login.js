import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {


  return (
    <div className="login">
      <div className="login_container">
        <form  className="login_form">
          <span className="formTitle">Iniciar sesión</span>
          <input
            type="email"
            placeholder="email"
            
            className="login_input"
          />
          <input
            type="password"
            placeholder="contraseña"
            
            className="login_input"
          />
          <button type="submit" className="login_submitButton">
            Iniciar
          </button>
          <p className="login_createAccount">¿No tenés una cuenta? <Link to={"/singup"} className="login_createAccount-link">Crea una!</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
