import { appStyle } from "./FormLogin/LoginStyle";
import React from "react";
// import { onLogin } from "../../services/servicesApi";
import FormLogin from "./FormLogin/formLogin";
import { Link } from "react-router-dom";

const LoginContent = ({ titleLogin }) => {
  return (
    <div style={appStyle}>
      <FormLogin titleStr={titleLogin} />
      <br/>
      <div className="d-flex justify-content-center">
      <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginContent;
