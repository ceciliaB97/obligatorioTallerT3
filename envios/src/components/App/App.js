import "bootstrap-css-only";
import "./App.css";
import LoginContent from "../Login";
 import RegisterContent from "../Register";
import Dashboard from "../Dashboard";
import React, { useState } from "react";
import { AlertDialog } from "../Error";

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

let [errorTitle,setErrorTitle] = useState('');
let [errorContent,setErrorContent] = useState('');

const onClickRegister = () => {
  setRegister(!register);
}

function handleErrorCallback(error,setTitle,setError) {
      console.log("handleErrorMessage",error);
      setTitle(error.title);
      setError(error.message);

      setTimeout(document.getElementById('openDialogBtn').click(),200);
      window.localStorage.removeItem('ErrorMsg');
}

  return (
    <>
     <div id="container" className="justify-content-top text-right col-12 mt-3">
       { (!register ? <a className="link link-primary" href="#" onClick={onClickRegister}>Sign Up!</a> : <></> )}
     </div>
      {userLogged === null ? (
         ( !register ? <LoginContent titleStr="SuperEnvios Login" onUserLogged={onUserLogged} />  : 
         <RegisterContent  callback={(err) => handleErrorCallback(err,setErrorTitle,setErrorContent)}/>)
      ) : (
        <Dashboard userLogged={userLogged} />
      )}

    <AlertDialog title={errorTitle} content={errorContent}></AlertDialog>
    </>
  );
}

export default App;
