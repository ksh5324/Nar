import React from "react";
import { Link } from "react-router-dom";

const ReturnForm = ({ rent }) => {
  return (
    <>
      <Link to={`/return/:${rent.id}`}>
        <button>{rent.id}</button>
      </Link>
    </>
  );
};

export default ReturnForm;
