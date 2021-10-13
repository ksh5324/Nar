import React from "react";
import { connect } from "react-redux";
import RentForm from "../../components/current/RentForm";

const RentPage = ({ rent }) => {
  return (
    <>
      {rent.map((t) => (
        <RentForm key={t.id} rent={t} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { rent: state.rent };
};

export default connect(mapStateToProps, null)(RentPage);
