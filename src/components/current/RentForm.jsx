import React from "react";
import { Link } from "react-router-dom";

const RentForm = ({ rent }) => {
  return (
    <>
      <Link to={`/rent/:${rent.id}`}>
        <button>{rent.id}</button>
      </Link>
    </>
  );
};

export default RentForm;
