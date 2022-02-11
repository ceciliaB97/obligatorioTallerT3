import React from "react";
import "./RegisterStyle.css";
import FormRegister from "./FormRegister";
// import { onRegister } from "../../services";

// import ReactDOM from "react-dom";
export const RegisterContent = () => {
  
  return (
    <section className="d-flex flex-md justify-content-center register">
      <FormRegister />
    </section>
  );
};

export default RegisterContent;
