import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { RENT } from "../../reducer/reducer";

const StudentShow = withRouter(({ user, um, RentUm, match }) => {
  const index = um.find((v) => user.login == v.rent);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!index) {
      console.log(match.params.id.slice(1).toString());
      RentUm(match.params.id.slice(1).toString(), user.rent);
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log(user.rent);
  }, [um]);

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
