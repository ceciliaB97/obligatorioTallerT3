import "bootstrap-css-only";
import "./App.css";
import LoginContent from "../Login";
 import RegisterContent from "../Register";
// import Dashboard from "../Dashboard";
import React from "react";

function App() {
  return (
    <>
     
      {/*<LoginContent titleLogin="Super Envios Login" />*/ }
      <RegisterContent/>
    </>
  );
}

/* className="f"
 <nav>
        <p>Env&iacute;os</p>
      </nav>
  <RegisterContent/>
      <Dashboard/>
*/

export default App;
