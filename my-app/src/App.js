import React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Feed from "./pages/Feed"
import Login from "./pages/Login"
import cs from "./pages/cs"

export default function App() {
  return (
    <Router>

      <Link to="/">Home</Link>
      <Link to="/cs">CS</Link>

      <Switch>
      <Route exact path="/" component={Feed}/>
      <Route path="/" component={Login}/>
      <Route path="/cs" component={cs}/>
      </Switch>
  </Router>
  );
}