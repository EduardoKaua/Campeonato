import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Feed from "./pages/Feed"
import Login from "./pages/Login"
import cs from "./cs"

export default function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Feed}/>
      <Route path="/" component={Login}/>
      <Route path="./pages/cs.js" component={cs}/>
      </Switch>
  </Router>
  );
}