import "bootstrap-css-only";
import "./App.css";
import LoginContent from "../Login";
// import RegisterContent from "../Register";
import Dashboard from "../Dashboard";
import React, { useState } from "react";

function App() {
  const [userLogged, setUserLogged] = useState(null);

  const onUserLogged = (user) => {
    if (user && user.apiKey) {
      console.log('user aslkdjflkasd',user)
      setUserLogged(user);
    }
    else {
      //si no hay apiKey es un error
      setUserLogged(null);
    }
  };

  return (
    <>
      {/*<LoginContent titleLogin="Super Envios Login" />*/}
      {userLogged === null ? (
        <LoginContent titleStr="SuperEnvios Login" onUserLogged={onUserLogged} />
      ) : (
        <Dashboard userLogged={userLogged} />
      )}
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
