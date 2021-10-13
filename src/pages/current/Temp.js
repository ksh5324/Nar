import React from "react";

const Temp = ({ children }) => {
  return (
    <div className="temp">
      {children}
      <button className="tmpButton">뒤로가기</button>
    </div>
  );
};

export default Temp;
