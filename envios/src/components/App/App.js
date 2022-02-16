import "bootstrap-css-only";
import "./App.css";
import LoginContent from "../Login";
 import RegisterContent from "../Register";
import Dashboard from "../Dashboard";
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { AlertDialog } from "../Error";

function App() {
  const userLogged = useSelector((state) => state.userLogged);

  // const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    if (userLogged !== null) {
     console.log("usuario ", userLogged);
    }
  }, [userLogged]);

const [register, setRegister] = useState(false);

let [errorTitle,setErrorTitle] = useState('');
let [errorContent,setErrorContent] = useState('');

const onClickRegister = () => {
  setRegister(!register);
}

function handleErrorCallback(error) {
      console.log("handleErrorMessage",error);
      setErrorTitle(error.title);
      setErrorContent(error.message);

      setTimeout(document.getElementById('openDialogBtn').click(),200);
      window.localStorage.removeItem('ErrorMsg');
}

  return (
    <>
     <div id="container" className="justify-content-top text-right col-12 mt-3">
       { (!register ? <a className="link link-primary" href="#" onClick={onClickRegister}>Sign Up!</a> : <></> )}
     </div>
      {userLogged === null ? (
         ( !register ? <LoginContent titleStr="SuperEnvios Login"/>  : 
         <RegisterContent  callback={(err) => handleErrorCallback(err)}/>)
      ) : (
        <Dashboard />
      )}

    <AlertDialog title={errorTitle} content={errorContent}></AlertDialog>
    </>
  );
}

export default App;
