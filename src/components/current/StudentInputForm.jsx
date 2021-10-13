import React, { useState } from "react";
import { connect } from "react-redux";
import { Login } from "../../reducer/reducer";
import "../../styles/Student.scss";

const StudentInputForm = ({ LoginTo }) => {
  const [grade, setGrade] = useState(null);
  const [classTo, setClassTo] = useState(null);
  const [number, setNumber] = useState(null);

  const onChangeGrade = (e) => {
    setGrade(e.target.value);
  };
  const onChangeClass = (e) => {
    setClassTo(e.target.value);
  };
  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    LoginTo(grade, classTo, number);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="StudentInfo">
        <select className="Select" name="grade" onChange={onChangeGrade}>
          <option value="0">0</option>
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
        </select>
        <select className="Select" name="class" onChange={onChangeClass}>
          <option value="0">0</option>
          <option value="1">1반</option>
          <option value="2">2반</option>
          <option value="3">3반</option>
        </select>
        <select className="Select" name="grade" onChange={onChangeNumber}>
          <option value="0">0</option>
          <option value="01">1번</option>
          <option value="02">2번</option>
          <option value="03">3번</option>
          <option value="04">4번</option>
          <option value="05">5번</option>
          <option value="06">6번</option>
          <option value="07">7번</option>
          <option value="08">8번</option>
          <option value="09">9번</option>
          <option value="10">10번</option>
          <option value="11">11번</option>
          <option value="12">12번</option>
          <option value="13">13번</option>
          <option value="14">14번</option>
          <option value="15">15번</option>
          <option value="16">16번</option>
          <option value="17">17번</option>
          <option value="18">18번</option>
          <option value="19">19번</option>
          <option value="20">20번</option>
        </select>
        <button className="SelectButton">확인</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.log,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginTo: (grade, classTo, number) =>
      dispatch({ type: Login, grade, classTo, number }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentInputForm);
