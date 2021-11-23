import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";

const Count = withRouter(({ history }) => {
  const [time, setTime] = useState(5);
  const [rent, setRent] = useState(true);
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(countDown, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [time]);

  const countDown = () => {
    if (time === 0) {
      console.log("if");
      history.push("/");
    }
    setTime((prevTime) => prevTime - 1);
  };

  return (
    <div>
      <h1>완료되었습니다</h1>
      <h2>우산을 가져가세요</h2>
      <div>
        <span>{time}</span>
        <span>초뒤, 우산대여가 취소됩니다</span>
        <span>어서 우산을 가져가세요!</span>
      </div>
    </div>
  );
});

export default Count;
