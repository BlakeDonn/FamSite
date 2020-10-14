import React from "react";
import LoginHead from "./LoginHead";
import {useHistory} from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    history.push({
      pathname: "/eval",
      state: {
        username: form.elements.email.value,
        password: form.elements.password.value,
      },
    });
  };
  return (
    <div className="App">
      <LoginHead />
      <form clasName="login-form" onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <input placeholder="email" name="email" type="text"></input>
        <input placeholder="password" name="password" type="password"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
