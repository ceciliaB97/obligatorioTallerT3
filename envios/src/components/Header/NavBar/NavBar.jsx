import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarText"
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link" to={`/dashboard/list`}>
            Listado
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/addEnvio`}>
            Agregar Envio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Graficos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
