import {appStyle, formStyle, labelStyle, inputStyle, submitStyle} from "./RegisterStyle";

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
      <Field ref={passwordRef} label="Confirm Password:" type="password" />
      <div>
        <button style={submitStyle} type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

const RegisterContent = () => {
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

export default RegisterContent;
