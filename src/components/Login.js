import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [cli, setCli] = useState(true);
  const Click = () => {
    setCli(!cli);
  };
  return (
    <div className="Rec">
      <form method="POST">
        <div>
          <p>ID</p>
          <input type="text" />
          <p>비밀번호</p>
          <input type="password" />
          <br />
        </div>
        <div className="login-check" onClick={Click}>
          <p>
            <span className="click">{cli === true ? "⚪" : "🔵"}</span>
            로그인 유지
          </p>
        </div>
        <Link to="/">
          <input type="submit" value="로그인" />
        </Link>
        <Link to="/join" className="Sign-Up">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
