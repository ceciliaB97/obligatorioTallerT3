import React from "react";
import { onLogin } from "../../../services";
import Field from "./Field/field";
import { formStyle, submitStyle } from "./LoginStyle";
import { useDispatch } from "react-redux";
import { onUserLogged } from "../../../containers/App/actions";

const Form = () => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      usuario: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    onLogin(data)
      .then((user) => {
        console.log("user on then", user);
        sessionStorage.setItem("loggedUser", JSON.stringify(user));
        dispatch(onUserLogged(user));
        // onUserLogged(user);
      })
      .catch((error) => {
        console.error(error);
      });

    // const loggedData = onLogin(data);

    // onUserLogged(loggedData);
  };

  return (
    <>
      <div className="justify-content-center text-center">
        <h2>Sign up</h2>
      </div>
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
