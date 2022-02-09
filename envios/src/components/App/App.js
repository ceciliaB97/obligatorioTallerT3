import "bootstrap-css-only";
import "./App.css";
import LoginContent from "../Login";
// import RegisterContent from "../Register";
// import Dashboard from "../Dashboard";
import React from "react";

function App() {
  return (
    <div className="App">
     
      <LoginContent titleLogin="Super Envios Login" />
    </div>
  );
}

/*
 <nav>
        <p>Env&iacute;os</p>
      </nav>
  <RegisterContent/>
      <Dashboard/>
*/

export default App;
