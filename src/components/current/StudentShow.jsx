import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import apiConfig from "../../config/apiConfig";
import { RENT, RETURN } from "../../reducer/reducer";
import "../../styles/Show.scss";

const StudentShow = withRouter(({ user, student, match, history }) => {
  const alert = useAlert();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user, student);
    if (
      student.grade == null ||
      student.classTo == null ||
      student.number == null ||
      student.grade == 0 ||
      student.classTo == 0 ||
      student.num == 0
    ) {
      alert.show(<div style={{ color: "red" }}>없는 번호입니다</div>);
      return;
    }
    console.log(match.url.includes("rent"));
    if (match.url.includes("rent")) {
      if (!user) {
        axios.post(
          `${apiConfig.API_ENDPOINT}/borrow/${match.params.id}?gradeNum=${
            student.grade
          }&classNum=${student.classTo}&number=${parseInt(student.number)}`
        );
      } else {
        alert.show(
          <div style={{ color: "red" }}>우산을 빌 릴 수 없습니다</div>
        );
        return;
      }
    }

    if (match.url.includes("return")) {
      if (user) {
        axios
          .delete(
            `${apiConfig.API_ENDPOINT}/borrow?gradeNum=${
              student.grade
            }&classNum=${student.classTo}&number=${parseInt(student.number)}`
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        alert.show(<div style={{ color: "red" }}>빌린 우산이 없습니다</div>);
        return;
      }
    }
    history.push("/");
  };

  return (
    <div className="Student">
      <form onSubmit={onSubmit}>
        <div className="Info">
          {student.grade !== 0 &&
          student.classTo !== 0 &&
          student.number !== 0 ? (
            <div>
              <div>
                {student.grade}
                {student.classTo}
                {student.number}
              </div>
              <div className="InfoText">
                대여 여부: {user ? <span>네</span> : <span>아니요</span>}
              </div>
              {!user ? (
                <div className="rentP">우산 대여가 가능합니다</div>
              ) : (
                <div className="rentPP">우산 대여가 이미 되어 있습니다</div>
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
});

export default StudentShow;
