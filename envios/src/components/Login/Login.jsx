import { appStyle } from "./Form/LoginStyle";
import React from "react";
// import { onLogin } from "../../services/servicesApi";
import Form from "./Form/formLogin";
const LoginContent = ({ titleLogin, onUserLogged }) => {

  return (
    <div style={appStyle}>
      <Form
        titleStr={titleLogin}
        onUserLogged={onUserLogged}
      />
    </div>
  );
};

export default LoginContent;
