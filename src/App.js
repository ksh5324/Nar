import React from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Count from "./components/current/Count";
import ChoosePage from "./pages/current/ChoosePage";
import RentPage from "./pages/current/RentPage";
import ReturnPage from "./pages/current/ReturnPage";
import StudentInput from "./pages/current/StudentInput";

const App = ({ User }) => {
  // const login = User.log.login;
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={ChoosePage} />
        <Route path="/rent" exact component={RentPage} />
        <Route path="/rent/:id" component={StudentInput} />
        <Route path="/return" component={ReturnPage} exact />
        <Route path="/return/:id" component={StudentInput} />
        <Route path="/15s" component={Count} />
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
