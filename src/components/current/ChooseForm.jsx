import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ChooseForm.scss";

const ChooseForm = () => {
  return (
    <>
      <h1 className="ChooseTitle">Umborrow</h1>
      <p className="subTitle">대소고 우산 대여 시스템</p>
      <div>
        <Link to="/rent">
          <button className="startButton">대여하기</button>
        </Link>
        <Link to="/return">
          <button className="startButton">반납하기</button>
        </Link>
      </div>
    </>
  );
};

export default ChooseForm;
