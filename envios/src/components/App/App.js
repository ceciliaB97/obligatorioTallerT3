import "bootstrap-css-only";
import "./App.css";
import LoginContent from "../Login";
import RegisterContent from "../Register";
import Dashboard from "../Dashboard";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AlertDialog } from "../Error";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import AddEnvio from "../AddEnvio";

function App() {
  const userLogged = useSelector((state) => state.userLogged);
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (userLogged !== null) {
      const location =
        pathname !== "/login" && pathname !== "/"
          ? pathname
          : "/dashboard/list";
      history.push(location);
    } else {
      if (pathname !== "login") {
        history.push("/login");
      }
    }
  }, [userLogged]);

  let [errorTitle, setErrorTitle] = useState("");
  let [errorContent, setErrorContent] = useState("");

  function handleErrorCallback(error) {
    console.log("handleErrorMessage", error);
    setErrorTitle(error.title);
    setErrorContent(error.message);

    setTimeout(document.getElementById("openDialogBtn").click(), 200);
  }

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LoginContent />
        </Route>
        <Route path="/login" exact>
          <LoginContent />
        </Route>
        <Route path="/register" exact>
          <RegisterContent callback={(err) => handleErrorCallback(err)} />
        </Route>
        <Route path="/addEnvio" exact>
          <AddEnvio />
        </Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>

      <AlertDialog title={errorTitle} content={errorContent}></AlertDialog>
    </>
  );
}
/*userLogged === null ? (
         ( !register ? <LoginContent titleStr="SuperEnvios Login"/>  : 
         <RegisterContent  callback={(err) => handleErrorCallback(err)}/>)
      ) : 
        <Dashboard />*/

export default App;
