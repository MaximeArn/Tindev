/** @format */
import React from "react";
import { render } from "react-dom";
import "./styles/index.scss";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
