import {appStyle} from "./Form/LoginStyle";
import React from "react";
import { onLogin } from "../../services/servicesApi";
import Form from "./Form";
const LoginContent = ({titleLogin}) => {
   const handleSubmit = data => {
       // const json = JSON.stringify(data, null, 4);
        onLogin(data);
    };
    return (
      <div style={appStyle}>
        <Form titleStr={titleLogin} onSubmit={handleSubmit} />
      </div>
    );
};

export default LoginContent;
