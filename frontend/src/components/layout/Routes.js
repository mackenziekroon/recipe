import React from "react";
import { Router, Link, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Homepage from "./Homepage";
import Recipes from "./Recipes";
import history from "./history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/recipes" component={Recipes} />
      </Switch>
    </Router>
  );
};

export default Routes;
