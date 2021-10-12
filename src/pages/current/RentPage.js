import React from "react";
import { connect } from "react-redux";
import RentForm from "../../components/current/RentForm";

const RentPage = ({ rent }) => {
  return (
    <>
      {rent.map((t) => (
        <RentForm rent={t} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { rent: state.rent };
};
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(RentPage);
