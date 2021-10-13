import React from "react";
import { withRouter } from "react-router";

const Temp = withRouter(({ children, history }) => {
  return (
    <div className="temp">
      {children}
      <button className="tmpButton" onClick={() => history.push("/")}>
        뒤로가기
      </button>
    </div>
  );
});

export default Temp;
