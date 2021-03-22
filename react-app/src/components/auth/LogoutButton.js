import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom"
import { logout } from "../../store/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  const onLogout = (e) => {
    dispatch(logout())
  };

  if(!user) {
    return <Redirect to="/login_signup" />
  }

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
