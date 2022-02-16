import React from "react";
import "./RegisterStyle.css";
import FormRegister from "./FormRegister";
// import { onRegister } from "../../services";

// import ReactDOM from "react-dom";
export const RegisterContent = ({callback}) => {
  
  return (
    <section className="d-flex flex-md justify-content-center register">
      <FormRegister callback = {callback}/>
    </section>
  );
};

export default RegisterContent;
