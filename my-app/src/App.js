import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import cs from "./pages/cs";
import valorant from "./pages/valorant";
import freefire from "./pages/freefire";
import lol from "./pages/lol";

export default function App() {
  return (
    <Router>
      <Switch>
        <BrowserRouter>
          <Route exact path="/" component={Feed} />
          <Route path="/login" component={Login} />
          <Route path="/cs" component={cs} />
          <Route path="/valorant" component={valorant} />
          <Route path="/freefire" component={freefire} />
          <Route path="/lol" component={lol} />
        </BrowserRouter>
      </Switch>
    </Router>
  );
}
