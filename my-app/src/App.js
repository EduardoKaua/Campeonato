import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Index from "./templates/index";
import Login from "./templates/login";
import Csgo from "./templates/csgo";
import Valorant from "./templates/valorant";
import Freefire from "./templates/freefire";
import Lol from "./templates/lol";
import Register from "./templates/register";

function App() {
  return (
<Switch>

<Route exact path="/" component={Index} >
</Route>

<Route path="/register" component={Register} >
</Route>
<Redirect from="/register" to="/" />

<Route path="/login" component={Login} >
</Route>
<Redirect from="/login" to="/" />

<Route path="/cs" component={Csgo} >
</Route>
<Redirect from="/cs" to="/" />

<Route path="/valorant" component={Valorant} >
</Route>
<Redirect from="/valorant" to="/" />

<Route path="/freefire" component={Freefire} >
</Route>
<Redirect from="/freefire" to="/" />

<Route path="/lol" component={Lol} >
</Route>
<Redirect from="/lol" to="/" />

</Switch>
  );
};

export default App;