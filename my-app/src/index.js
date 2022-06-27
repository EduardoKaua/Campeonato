import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import cs from "./cs";
export * from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <cs />
  </React.StrictMode>,
  document.getElementById("root")
);
