import "bootstrap-css-only";
import "./App.css";
import LoginContent from "../Login";
 import RegisterContent from "../Register";
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

  const [register, setRegister] = useState(false);

  const onClickRegister = () => {
    setRegister(!register);
  }

  return (
    <>
     <div className="justify-content-top text-right col-12 mt-3">
       { (!register ? <a className="link link-primary" href="#" onClick={onClickRegister}>Sign Up!</a> : <></> )}
     </div>
      {/*<LoginContent titleLogin="Super Envios Login" />*/}
      {userLogged === null ? (
         ( !register ? <LoginContent titleStr="SuperEnvios Login" onUserLogged={onUserLogged} />  : <RegisterContent />)
      ) : (
        <Dashboard userLogged={userLogged} />
      )}

     
    </>
  );
}

export default App;
