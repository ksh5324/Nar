import React from "react";
import { connect } from "react-redux";
import StudentShow from "../../components/current/StudentShow";
import StudentInput from "./StudentInput";
import Temp from "./Temp";

const ReturnPage = ({ rent }) => {
  return (
    <Temp>
      <StudentInput />
    </Temp>
  );
};

const mapStateToProps = (state) => {
  return { rent: state.rent };
};
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(ReturnPage);
