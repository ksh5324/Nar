import React, { useState } from "react";
import ImageUrl from "../images/RENT.png";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="Rec">
      <img src={ImageUrl}></img>
      <form method="POST">
        <div>
          <div>
            <p>이메일</p>
            <input type="email" required />
          </div>
          <div>
            <p>비밀번호</p>
            <input type="password" required />
          </div>
          <br />
        </div>
        <Link to="/login">
          <input type="submit" value="회원가입" />
        </Link>
        <Link to="/login" className="Sign-Up">
          Sign In
        </Link>
      </form>
    </div>
  );
};

export default Join;
