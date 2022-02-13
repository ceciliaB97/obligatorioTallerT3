import "../RegisterStyle.css";
import { onRegister } from "../../../services";
import React, { useRef, useState } from "react";

export const FormRegister = () => {
  const inputUsernameRef = useRef();
  const inputPasswordRef = useRef();
  const inputPasswordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = inputUsernameRef.current.value;
    const password = inputPasswordRef.current.value;
    const passwordConfirm = inputPasswordConfirmRef.current.value;

    if (username === "" || password === "") {
      alert("Por favor no dejar campos vacíos");
      return;
    }
    var reg = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/; //
    if (!reg.test(password)) {
      alert("Password must contain 8 characters and at least one number, one letter and one unique character");
      return;
    }

    if (password !== passwordConfirm) {
      alert("Contraseñas deben ser iguales");
      return;
    } 
    
    else {
      const data = {
        usuario: inputUsernameRef.current.value,
        password: inputPasswordRef.current.value
      };
      
      onRegister(data)
        .then((user) => {
          console.log("user on then", user);
          alert("usuario registrado exitosamente");
          // return (
          //   <>
          //     <LoginContent titleStr="SuperEnvios Login" onUserLogged={null} />
          //   </>
          // );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const [userNameValue, setUsernameValue] = useState("");

  const onUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  return (
    <div className="card">
      <div className="justify-content-center text-center">
        <h2>Sign up</h2>
        <span>Bienvenido {userNameValue}</span>
      </div>
      <section className="card-body">
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputEmail">Username</label>
          <br />
          <input
            type="text"
            name="username"
            className="form-control"
            ref={inputUsernameRef}
            value={userNameValue}
            onChange={onUsernameChange}
            required
          />
          <br />
          <label htmlFor="inputPassword">Password</label>
          <br />
          <input
            type="password"
            name="password"
            className="form-control"
            ref={inputPasswordRef}
            required
          />
          <br />
          <label htmlFor="inputPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            name="passwordConfirm"
            className="form-control"
            ref={inputPasswordConfirmRef}
            required
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

export default FormRegister;
