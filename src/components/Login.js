import React, { useState } from "react";
import { Route } from "react-router";
import "../styles/Login.css";
import Join from "./Join";
import LoginBack from "./LoginBack";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="Frame">
      <LoginBack />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/join" exact component={Join} />
    </div>
  );
};

export default Login;
