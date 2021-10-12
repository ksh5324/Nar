import React from "react";
import { Link } from "react-router-dom";

const ChooseForm = () => {
  return (
    <>
      <h1>Umborrow</h1>
      <p>대소고 우산 대여 시스템</p>
      <Link to="/rent">
        <button>대여하기</button>
      </Link>
      <Link to="/send">
        <button>반납하기</button>
      </Link>
    </>
  );
};

export default ChooseForm;
