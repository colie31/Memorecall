import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux"
import DemoLogin from "./DemoLogin"

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    // const user = await login(email, password);
    const result = await dispatch(login(email, password))
    if(result.errors) setErrors(result.errors)
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div id="login-form__container">
      <form id="login-form" onSubmit={onLogin}>
        <h1>Login</h1>
        <div className="inputs">
          <div className="error-container">
            {errors.map((error, i) => (
              <div key={i}>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="form-buttons">
        <DemoLogin />
      </div>
    </div>
  );
};

export default LoginForm;
