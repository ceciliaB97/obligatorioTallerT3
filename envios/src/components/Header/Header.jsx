import React from "react";
import "./Header.css";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              width="auto"
              height="30"
              className="d-inline-block align-top mx-3"
              alt=""
            />
            SuperEnvios
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavBar />
        </div>
        <LogoutButton />
      </nav>
    </header>
  );
};

export default Header;
