import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    const response = await fetch(`http://localhost:3001/v1/singup`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    setEmail("");
    setPassword("");
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login_container">
        <form onSubmit={handleSubmit} className="login_form">
          <span className="formTitle">Iniciar sesión</span>
          <input
            type="email"
            placeholder="email"
            onChange={handleChangeEmail}
            className="login_input"
          />
          <input
            type="password"
            placeholder="password"
            onChange={handleChangePassword}
            className="login_input"
          />
          <button type="submit" className="submitButton">
            Iniciar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
