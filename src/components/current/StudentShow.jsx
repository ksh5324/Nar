import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { RENT } from "../../reducer/reducer";

const StudentShow = withRouter(({ user, um, RentUm, match, history }) => {
  const index = um.find((v) => user.login == v.rent);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!index) {
        RentUm(match.params.id.slice(1).toString(), user.login);
      } else {
        return;
      }
      history.push("/");
    },
    [user, um]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        {user.grade}학년 {user.classTo}반 {user.num}번 <button>대여</button>
        {index ? <div>{index.rent}</div> : ""}
      </form>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    user: state.log,
    um: state.rent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    RentUm: (index, value) => dispatch({ type: RENT, index, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentShow);
