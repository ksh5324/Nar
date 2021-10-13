import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { RENT, RETURN } from "../../reducer/reducer";

const StudentShow = withRouter(
  ({ user, um, RentUm, match, history, ReturnUm }) => {
    const index = um.find((v) => user.login == v.rent);
    const onSubmit = useCallback(
      (e) => {
        e.preventDefault();
        if (
          user.grade === null ||
          user.classTo === null ||
          user.num === null ||
          user.grade === 0 ||
          user.classTo === 0 ||
          user.num === 0
        ) {
          alert("없는 번호입니다");
          return;
        }
        if (match.url.includes("rent")) {
          if (!index) {
            RentUm(match.params.id.slice(1).toString(), user.login);
          } else {
            alert("이미 빌린 우산이 있습니다");
            return;
          }
        }
        if (match.url.includes("return")) {
          console.log(index);
          if (index) {
            ReturnUm(user.login);
          } else {
            alert("빌린 우산이 없습니다");
            return;
          }
        }
        history.push("/");
      },
      [user, um]
    );

    return (
      <div>
        <form onSubmit={onSubmit}>
          {user.grade}학년 {user.classTo}반 {user.num}번{" "}
          <button>{match.url.includes("rent") ? "대여" : "반납"}</button>
          {index ? <div>{index.rent}</div> : ""}
        </form>
      </div>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    user: state.log,
    um: state.rent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    RentUm: (index, value) => dispatch({ type: RENT, index, value }),
    ReturnUm: (value) => dispatch({ type: RETURN, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentShow);
