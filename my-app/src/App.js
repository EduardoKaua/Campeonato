import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import cs from "./cs/cs";
import valorant from "./valorant//valorant";
import freefire from "./free/freefire";
import lol from "./lol/lol";
import index from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={index} />
        <Route path="/login" element={Login} />
        <Route path="/cs" element={cs} />
        <Route path="/valorant" element={valorant} />
        <Route path="/freefire" element={freefire} />
        <Route path="/lol" element={lol} />
      </Routes>
    </Router>
  );
}

export default App;
