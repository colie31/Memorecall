import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux"

const ProtectedRoute = props => {

  const user = useSelector(state => state.session.user)
  // if(!user) return null;

  return (
    <Route>
      {user ? props.children  : <Redirect to="/login_signup" />}
    </Route>
  )
};


export default ProtectedRoute;
