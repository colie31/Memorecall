import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { logout } from "../../store/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    dispatch(logout());
    history.push("/login_signup")
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
