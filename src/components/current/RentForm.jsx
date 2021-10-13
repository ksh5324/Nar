import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/RentForm.scss";

const BoxNum = styled.button`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  background-color: #59d4a0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 82px;
  color: #ffffff;
  margin-right: 60px;
  border: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const RentForm = ({ rent }) => {
  const onClick = useCallback(() => {
    alert("이미 빌려진 우산입니다");
  }, []);
  return (
    <>
      {rent.rent === "" ? (
        <Link to={`/rent/:${rent.id}`}>
          <BoxNum>{rent.id}</BoxNum>
        </Link>
      ) : (
        <Link to="/rent">
          <BoxNum onClick={onClick} style={{ background: "#707070" }}>
            {rent.id}
          </BoxNum>
        </Link>
      )}
    </>
  );
};

export default RentForm;
