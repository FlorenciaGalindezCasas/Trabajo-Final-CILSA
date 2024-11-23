import React, { useState } from "react";
import { register } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import "../register/Register.css";

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
      });
      if (res && res.success) {
        console.log("Registration successful");
        navigate("/login"); // Redirige al login después de registrarse exitosamente
      } else {
        console.error(res?.error || "An error occurred during registration");
      }
    } catch (error) {
      console.error(error || "An error occurred during registration");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex flex-column register">
      <div className="icon">
        <h1>REGISTRO</h1>
        <p>Crea una cuenta para manejar tus tareas!</p>
      </div>
      <div className="register-form">
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="inputUsername" className="form-label">
              Nombre de usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Ingresa nombre de usuario"
              name="username"
              value={registerData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email 
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="nombre@ejemplo.com"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Ingresa una contraseña"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="btn-register d-flex">
            <button type="submit" className="btn btn-outline-success">
              Registrarse
            </button>
          </div>
        </form>
        <div className="ingreso"><a href="/login">Ya tengo un usuario! Ingresar</a></div>
      </div>
    </div>
  );
}

export default Register;
