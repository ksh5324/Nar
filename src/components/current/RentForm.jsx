import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const RentForm = ({ rent }) => {
  const onClick = useCallback(() => {
    alert("이미 빌려진 우산입니다");
  }, []);
  return (
    <>
      {rent.rent === "" ? (
        <Link to={`/rent/:${rent.id}`}>
          <button>{rent.id}</button>
        </Link>
      ) : (
        <button onClick={onClick} style={{ background: "yellow" }}>
          {rent.id}
        </button>
      )}
    </>
  );
};

export default RentForm;
