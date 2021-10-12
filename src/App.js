import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import ChoosePage from "./pages/current/ChoosePage";
import RentPage from "./pages/current/RentPage";
import StudentInput from "./pages/current/StudentInput";

const App = ({ User }) => {
  // const login = User.log.login;
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={ChoosePage} />
        <Route path="/rent" exact component={RentPage} />
        <Route path="/rent/:id" component={StudentInput} />
      </BrowserRouter>
      {/* {login ? (
        <BrowserRouter>
          <Route path="/" exact component={MainPage} />
          <Route path="/signin" exact component={() => <LoginPage />} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/:id" component={RentPage} />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Route path="/signup" component={SignUpPage} />
          <Route path="/" exact component={LoginPage} />
        </BrowserRouter>
      )} */}
    </>
  );
};

const mapStateToProps = (state) => {
  return { User: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
