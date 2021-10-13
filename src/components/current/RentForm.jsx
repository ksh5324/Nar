import React, { useCallback } from "react";
import { useAlert } from "react-alert";
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
  const alert = useAlert();

  const onClick = useCallback(() => {
    alert.show(<div style={{ color: "red" }}>우산을 빌 릴 수 없습니다</div>);
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
