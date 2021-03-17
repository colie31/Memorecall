import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/auth';
import { useSelector, useDispatch } from "react-redux"

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data.errors) {
        setErrors(data.errors);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <form id="signup-form__container" onSubmit={onSignUp}>
        <h1>Sign Up Today!</h1>
        <div className="inputs">
          <div>
            {errors.map((error, i) => {
              return <div key={i}>{error}</div>;
            })}
          </div>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              placeholder="Username"
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              placeholder="Email"
              value={email}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              placeholder="Password"
              value={password}
            ></input>
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              placeholder="Confirm Password"
              value={repeatPassword}
              required={true}
            ></input>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
