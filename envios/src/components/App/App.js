import "bootstrap-css-only";
import "./App.css";
import LoginContent from "../Login";
import RegisterContent from "../Register";
import Dashboard from "../Dashboard";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AlertDialog } from "../Error";
import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

function App() {
  const userLogged = useSelector((state) => state.userLogged);

  const [register, setRegister] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (userLogged !== null) {
      const location =
        pathname !== "/login" && pathname !== "/"
          ? pathname
          : "/dashboard/list";
      history.push(location);
    }
  }, [userLogged]);

  useEffect(() => {
    if (register) {
      const location = userLogged == null ? pathname : "/register";
      history.push(location);
    }
  }, [register]);

  let [errorTitle, setErrorTitle] = useState("");
  let [errorContent, setErrorContent] = useState("");

  const onClickRegister = () => {
    setRegister(!register);
  };

  function handleErrorCallback(error) {
    console.log("handleErrorMessage", error);
    setErrorTitle(error.title);
    setErrorContent(error.message);

    setTimeout(document.getElementById("openDialogBtn").click(), 200);
  }
  /*<a className="link link-primary" href="#" onClick={onClickRegister}</a> : <></> )}*/
  return (
    <>
      <div
        id="container"
        className="justify-content-top text-right col-12 mt-3"
      >
        <Link to="/register">Sign Up!</Link>
      </div>
      {
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
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      }

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
