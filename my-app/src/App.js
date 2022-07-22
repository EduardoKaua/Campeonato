import React from "react";
import { BrowserRouter as Router, Route, Switch uselocation} from "react-router-dom";
import Login from "./pages/Login";
import cs from "./pages/cs";
import valorant from "./pages/valorant";
import freefire from "./pages/freefire";
import lol from "./pages/lol";
import index from "./pages/index";
import register from "./pages/register";

function App() {
  return (

const location = uselocation

    
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route path="/register" component={register} />
        <Route path="/login" component={Login} />
        <Route path="/cs" component={cs} />
        <Route path="/valorant" component={valorant} />
        <Route path="/freefire" component={freefire} />
        <Route path="/lol" component={lol} />
      </Switch>
    </Router>
  );
}

export default App;
