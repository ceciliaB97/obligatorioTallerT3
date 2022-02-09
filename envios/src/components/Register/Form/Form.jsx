import "../RegisterStyle.css";
import { onRegister } from "../../../services";
import React, { useRef, useState } from "react";

export const Form = () => {
  const inputUsernameRef = useRef();
  const inputPasswordRef = useRef();
  const inputPasswordConfirmRef = useRef();

  const [userNameValue, setUsernameValue] = useState("");

  const onUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(inputPasswordRef.current.value);
    console.log(inputUsernameRef.current.value);

    const username = inputUsernameRef.current.value;
    const password = inputPasswordRef.current.value;
    const passwordConfirm = inputPasswordConfirmRef.current.value;

    if (username === "") {
      alert("Por favor ingresar un nombre de usuario");
    }

    if (password === "") {
      alert("Por favor ingresar una contraseña");
    }

    if (password !== passwordConfirm) {
      alert("Contraseñas deben ser iguales");
    } else {
      console.log("Todo ok");
      const user = { name: username, pass: password };
      onRegister(user);
    }
  };

  return (
    <div className="card">
      <h2>Sign in</h2>
      <span>Bienvenido {userNameValue}</span>
      <section className="card-body">
        <form>
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
          <button className="btn btn-primary" onClick={onRegisterSubmit}>
            Register
          </button>
          <br />
          <br />
        </form>
      </section>
    </div>
  );
};

export default Form;
