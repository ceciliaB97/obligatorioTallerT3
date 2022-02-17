import React from "react";
import { useDispatch } from "react-redux";
import { onLogout } from "../../../containers/App/actions";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onHandleLogout = () => {
    sessionStorage.removeItem("loggedUser");
    dispatch(onLogout());
  };
  return (
    <button className="btn btn-primary" onClick={onHandleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
