import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentInputForm from "../../components/current/StudentInputForm";
import StudentShow from "../../components/current/StudentShow";
import Temp from "./Temp";

const StudentInput = () => {
  const [student, setStudent] = useState({
    grade: null,
    classTo: null,
    number: null,
  });
  const [user, setUser] = useState(null);
  return (
    <Temp>
      <h1 className="tit">학생 정보 입력</h1>
      <p className="titp">대여를 위한 정보를 입력해주세요</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StudentInputForm
          setUser={setUser}
          student={student}
          setStudent={setStudent}
        />
        <StudentShow user={user} student={student} />
      </div>
    </Temp>
  );
};

export default StudentInput;
