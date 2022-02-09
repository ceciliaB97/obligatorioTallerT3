import "../RegisterStyle.css";
import { onRegister } from "../../../services";
import React, { useRef, useState } from "react";

export const Form = () => {

  const inputUsernameRef = useRef();
  const inputPasswordRef = useRef();
  const inputPasswordConfirmRef = useRef();

  const handleSubmit = (e) => {

    const username = inputUsernameRef.current.value;
    const password = inputPasswordRef.current.value;
    const passwordConfirm = inputPasswordConfirmRef.current.value;

    if (username === "" || password === "") {
      alert("Por favor no dejar campos vacíos");
    }

    if (password !== passwordConfirm) {
      alert("Contraseñas deben ser iguales");
    } else {
      
      e.preventDefault();
      const data = {
        usuario: inputUsernameRef.current.value,
        password: inputPasswordRef.current.value,
        password2: inputPasswordConfirmRef.current.value,
      };
      onRegister(data);
    }
  };

  const [userNameValue, setUsernameValue] = useState("");

  const onUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  return (
    <div className="card">
      <h2>Sign in</h2>
      <span>Bienvenido {userNameValue}</span>
      <section className="card-body">
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputEmail">Username</label>
          <br />
          <input
            type="email"
            name="username"
            className="form-control"
            ref={inputUsernameRef}
            value={userNameValue}
            onChange={onUsernameChange}
          />
          <br />
          <label htmlFor="inputPassword">Password</label>
          <br />
          <input
            type="password"
            name="password"
            className="form-control"
            ref={inputPasswordRef}
          />
          <br />
          <label htmlFor="inputPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            name="passwordConfirm"
            className="form-control"
            ref={inputPasswordConfirmRef}
          />
          <br />
          <button className="btn btn-primary">Register</button>
          <br />
          <br />
        </form>
      </section>
    </div>
  );
};

export default Form;
