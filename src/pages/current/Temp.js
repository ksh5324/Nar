import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { LOGOUT } from "../../reducer/reducer";

const Temp = withRouter(({ children, history, LogOut }) => {
  const onClick = () => {
    LogOut();
    history.push("/");
  };

  return (
    <div className="temp">
      {children}
      <button className="tmpButton" onClick={onClick}>
        뒤로가기
      </button>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    user: state.log,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogOut: () => dispatch({ type: LOGOUT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Temp);
