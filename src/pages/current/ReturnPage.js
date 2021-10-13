import React from "react";
import { connect } from "react-redux";
import StudentShow from "../../components/current/StudentShow";
import StudentInput from "./StudentInput";

const ReturnPage = ({ rent }) => {
  return (
    <>
      <StudentInput />
    </>
  );
};

const mapStateToProps = (state) => {
  return { rent: state.rent };
};
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(ReturnPage);
