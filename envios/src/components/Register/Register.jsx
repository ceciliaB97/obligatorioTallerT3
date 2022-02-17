import React from "react";
import "./RegisterStyle.css";
import FormRegister from "./FormRegister";
import { Link } from "react-router-dom";
// import { onRegister } from "../../services";

// import ReactDOM from "react-dom";
export const RegisterContent = ({ callback }) => {
  return (
    <section className="d-flex flex-md justify-content-center register">
      <div>
        <FormRegister callback={callback} />
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <Link to="/login">Login</Link>
      </div>
    </section>
  );
};

export default RegisterContent;
