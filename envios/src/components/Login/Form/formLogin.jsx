import React from "react";
import { onLogin } from "../../../services";
import Field from "./Field/field";
import { formStyle, submitStyle } from "./LoginStyle";

const Form = ({ titleStr, onUserLogged }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit =  (e) => {
    e.preventDefault();
    const data = {
      usuario: usernameRef.current.value,
      password: passwordRef.current.value,
    };


    onLogin(data)
    .then( user => {
      console.log("user on then",user);
        onUserLogged(user);
       
      })
      .catch( error => {
        console.error(error);
      });


      // const loggedData = onLogin(data);

      // onUserLogged(loggedData);
  };

  return (
    <>
      <h1 className="navbar justify-content-center text-info">{titleStr}</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button style={submitStyle} type="Submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
