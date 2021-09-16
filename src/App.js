import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Join from "./components/Join";
import Login from "./components/Login";
import Main from "./components/Main";
import "./styles/backGround.css";

const App = () => {
  const ImgUrl = "./images/RENT.png";
  return (
    <div className="backGround-Setting">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
      </BrowserRouter>
    </div>
  );
};

export default App;
