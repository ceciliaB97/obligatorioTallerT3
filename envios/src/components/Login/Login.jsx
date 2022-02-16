import { appStyle } from "./FormLogin/LoginStyle";
import React from "react";
// import { onLogin } from "../../services/servicesApi";
import FormLogin from "./FormLogin/formLogin";
const LoginContent = ({ titleLogin }) => {

  return (
    <div style={appStyle}>
      <FormLogin
        titleStr={titleLogin}
      />
    </div>
  );
};

export default LoginContent;
