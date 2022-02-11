import { appStyle } from "./FormLogin/LoginStyle";
import React from "react";
// import { onLogin } from "../../services/servicesApi";
import FormLogin from "./FormLogin/formLogin";
const LoginContent = ({ titleLogin, onUserLogged }) => {

  return (
    <div style={appStyle}>
      <FormLogin
        titleStr={titleLogin}
        onUserLogged={onUserLogged}
      />
    </div>
  );
};

export default LoginContent;
