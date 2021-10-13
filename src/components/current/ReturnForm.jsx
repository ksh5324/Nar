import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoxNum = styled.button`
  width: 300px;
  height: 300px;
  border-radius: 50px;
  background-color: black;
`;

const ReturnForm = ({ rent }) => {
  return (
    <Link to={`/return/:${rent.id}`}>
      <BoxNum>{rent.id}</BoxNum>
    </Link>
  );
};

export default ReturnForm;
