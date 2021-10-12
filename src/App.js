import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RentPage from "./pages/RentPage";
import SignUpPage from "./pages/SignUpPage";

const App = ({ User }) => {
  const login = User.log.login;
  return (
    <>
      {login ? (
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
      )}
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
