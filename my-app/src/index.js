import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cs from "./cs";
export * from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <Cs />
  </React.StrictMode>,
  document.getElementById("root")
);
