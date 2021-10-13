import React from "react";
import StudentInputForm from "../../components/current/StudentInputForm";
import StudentShow from "../../components/current/StudentShow";
import Temp from "./Temp";

const StudentInput = () => {
  return (
    <Temp>
      <StudentInputForm />
      <StudentShow />
    </Temp>
  );
};

export default StudentInput;
