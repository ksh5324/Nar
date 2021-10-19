import React, { useEffect, useState } from "react";
import RentForm from "../../components/current/RentForm";
import axios from "axios";
import Temp from "./Temp";
import "../../styles/temp.scss";
import "../../styles/temp2.scss";
import apiConfig from "../../config/apiConfig";

const RentPage = () => {
  const [umbrellas, setUmbrellas] = useState([]);

  useEffect(() => {
    axios.get(`${apiConfig.API_ENDPOINT}/getAll`).then((res) => {
      const resArray = res.data.body;
      console.log(resArray);
      setUmbrellas(resArray);
    });
  }, []);

  return (
    <Temp>
      <h1 className="tit">대여할 우산 선택</h1>
      <div className="frame2">
        <div className="frame">
          {umbrellas
            .sort((a, b) => a.umbrellaId - b.umbrellaId)
            .map((t) => (
              <RentForm key={t.umbrellaId} rent={t} />
            ))}
        </div>
      </div>
    </Temp>
  );
};

export default RentPage;
