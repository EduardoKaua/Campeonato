import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import cs from "./cs";
export * from './paginas/Login';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <cs />
  </React.StrictMode>,
  document.getElementById("root")
);
