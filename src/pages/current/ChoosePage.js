import React from "react";
import ChooseForm from "../../components/current/ChooseForm";
import styled from "styled-components";
import ChooseImage from "../../images/ChooseImage.png";

const ChooseBack = styled.div`
  background-image: url(${ChooseImage});
  background-repeat: none;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-position: 100% 100%;
`;

const ChoosePage = () => {
  return (
    <ChooseBack>
      <ChooseForm />
    </ChooseBack>
  );
};

export default ChoosePage;
