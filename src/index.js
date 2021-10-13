import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";
import store from "./store";

const option = {
  position: "top right",
  type: "error",
  timeout: 3000,
  offset: "3px",
  transition: "scale",
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...option}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
