import React from "react";
import { connect } from "react-redux";
import RentForm from "../../components/current/RentForm";
import Temp from "./Temp";
import "../../styles/temp.scss";
import "../../styles/temp2.scss";

const RentPage = ({ rent }) => {
  return (
    <Temp>
      <h1 className="tit">대여할 우산 선택</h1>
      <div className="frame2">
        <div className="frame">
          {rent.map((t) => (
            <RentForm key={t.id} rent={t} />
          ))}
        </div>
      </div>
    </Temp>
  );
};

const mapStateToProps = (state) => {
  return { rent: state.rent };
};

export default connect(mapStateToProps, null)(RentPage);
