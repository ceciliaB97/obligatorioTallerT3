import React from "react";
import "./RegisterStyle.css";
import Form from "./Form";
import { onRegister } from "../../services";

// import ReactDOM from "react-dom";
export const Register = () => {
  
  return (
    <section className="d-flex flex-md justify-content-center register">
      <Form onSubmit={handleSubmit}/>
    </section>
  );
};

export default Register;
