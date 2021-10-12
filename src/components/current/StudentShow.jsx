import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

const StudentShow = ({ user, um }) => {
  const index = um.find((v) => user.login == v.rent);

  return (
    <div>
      {user.grade}학년 {user.classTo}반 {user.num}번
      {index ? <div>{index.rent}</div> : ""}
      <button>대여</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.log,
    um: state.rent,
  };
};

export default connect(mapStateToProps, null)(StudentShow);
