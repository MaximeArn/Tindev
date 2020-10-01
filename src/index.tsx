import React from "react";
import { render } from "react-dom";
import "./styles/index.scss";
import App from "./components/App/App";
import { Provider } from "react-redux";

render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
