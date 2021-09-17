import React, { useState } from "react";
import ImageUrl from "../images/RENT.png";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [cli, setCli] = useState(true);
  const Click = () => {
    setCli(!cli);
  };

  return (
    <div className="Rec">
      <img src={ImageUrl}></img>
      <form method="POST">
        <div>
          <div>
            <p>ID</p>
            <input type="email" required />
          </div>
          <div>
            <p>비밀번호</p>
            <input type="password" required />
          </div>
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

export default LoginForm;
