import "../RegisterStyle.css";
import { onRegister } from "../../../services";
import React, { useRef, useState } from "react";

export const FormRegister = ({callback}) => {
  const inputUsernameRef = useRef();
  const inputPasswordRef = useRef();
  const inputPasswordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = inputUsernameRef.current.value;
    const password = inputPasswordRef.current.value;
    const passwordConfirm = inputPasswordConfirmRef.current.value;

    var reg = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/; //
    if (!reg.test(password)) {
        callback({title:'Error with password validation', 
        message:'Password must contain 8 characters and at least one number, one letter and one unique character',
          closeMsg:"Close"});
    
    }
    else 
    if (password !== passwordConfirm) {
       callback({title:'Error with password validation', 
       message:'Passwords must match',
         closeMsg:"Close"});

    } 
    
    else {
      const data = {
        usuario: username,
        password: password
      };
      
      onRegister(data)
        .then((user) => {
          if (user.status !== 200) {
              callback({title:'Error during sign up process', 
              message:`There was an error trying to register the user statusCode: ${user.status}`,
                closeMsg:"Close"});
          }
          console.log("user on then", user);
        })
        .catch((error) => {
            callback({title:'Error during sign up process', 
            message:error,
              closeMsg:"Close"});
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
