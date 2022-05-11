import { useState } from "react";
import "./SingUp.css";

const SingUp = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeFullName = (e) => {
    const { value } = e.target;
    setFullname(value);
  };
  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleChangeRepeatPassword = (e) => {
    const { value } = e.target;
    setRepeatPassword(value);
  };

  const handleSubmit = async (e) => {
    if (fullName && email && password && repeatPassword) {
      if (password == repeatPassword) {
        const response = await fetch(`http://localhost:3001/v1/singup`, {
          method: "POST",
          body: JSON.stringify({
            fullName,
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        setFullname("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
      } else {
        setError("Ambas contraseñas tienen que coincidir");
      }
    } else {
      setError("Todos los campos son obligatorios");
    }

    e.preventDefault();
  };
  return (
    <div className="singUp_container">
      <form onSubmit={handleSubmit} className="singUp_form">
        <p className="SingUp_Title">Crea tu cuenta:</p>
        <input
          type="text"
          placeholder="Nombre y Apellido"
          onChange={handleChangeFullName}
          className="singUp_input"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChangeEmail}
          className="singUp_input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleChangePassword}
          className="singUp_input"
        />
        <input
          type="password"
          placeholder="Repetir contraseña"
          onChange={handleChangeRepeatPassword}
          className="singUp_input"
        />
        {error && <p className="SingUp_error">{error}</p>}
        <button type="submit" className="singUp_Button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SingUp;
