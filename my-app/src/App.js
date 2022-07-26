import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import index from "./pages/index";
import Login from "./pages/Login";
import cs from "./pages/cs";
import valorant from "./pages/valorant";
import freefire from "./pages/freefire";
import lol from "./pages/lol";
import register from "./pages/register";

function App() {
  return (
<Switch>

<Route exact path="/" component={index} >
</Route>

<Route path="/register" component={register} >
</Route>
<Redirect from="/register" to="/" />

<Route path="/login" component={Login} >
</Route>
<Redirect from="/login" to="/" />

<Route path="/cs" component={cs} >
</Route>
<Redirect from="/cs" to="/" />

<Route path="/valorant" component={valorant} >
</Route>
<Redirect from="/valorant" to="/" />

<Route path="/freefire" component={freefire} >
</Route>
<Redirect from="/freefire" to="/" />

<Route path="/lol" component={lol} >
</Route>
<Redirect from="/lol" to="/" />

</Switch>
  );
};

export default App;