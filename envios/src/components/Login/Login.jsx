import {appStyle, formStyle, labelStyle, inputStyle, submitStyle} from "./LoginStyle";

import React from "react";
// import ReactDOM from "react-dom";

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    onSubmit(data);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      <div>
        <button style={submitStyle} type="Submit">
          Login
        </button>
      </div>
    </form>
  );
};

const LoginContent = () => {
   const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
  // return <div class="loginScreen">This is the login screen.</div>;
};

export default LoginContent;
