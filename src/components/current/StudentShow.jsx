import React, { useCallback, useEffect } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { RENT, RETURN } from "../../reducer/reducer";
import "../../styles/Show.scss";

const StudentShow = withRouter(
  ({ user, um, RentUm, match, history, ReturnUm }) => {
    const alert = useAlert();
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
          alert.show(<div style={{ color: "red" }}>없는 번호입니다</div>);
          return;
        }
        if (match.url.includes("rent")) {
          if (!index) {
            RentUm(match.params.id.slice(1).toString(), user.login);
          } else {
            alert.show(
              <div style={{ color: "red" }}>우산을 빌 릴 수 없습니다</div>
            );
            return;
          }
        }
        if (match.url.includes("return")) {
          console.log(index);
          if (index) {
            ReturnUm(user.login);
          } else {
            alert.show(
              <div style={{ color: "red" }}>빌린 우산이 없습니다</div>
            );
            return;
          }
        }
        history.push("/");
      },
      [user, um]
    );

    return (
      <div className="Student">
        <form onSubmit={onSubmit}>
          <div className="Info">
            {user.grade !== 0 && user.classTo !== 0 && user.num !== 0 ? (
              <div>
                <div>
                  {user.grade}
                  {user.classTo}
                  {user.num}
                </div>
                <div className="InfoText">
                  대여 여부: {index ? <span>네</span> : <span>아니요</span>}
                </div>
                {!index ? (
                  <div className="rentP">우산 대여가 가능합니다</div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <button className="ClaBut">
              {match.url.includes("rent") ? "대여" : "반납"}
            </button>
          </div>
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
