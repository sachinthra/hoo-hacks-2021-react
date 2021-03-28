import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// pages
import HomePage from "views/HomePage/HomePage.js";

function Router(props) {
  return (
    <Switch>
      <Route path="/home" render={(props) => <HomePage {...props} />} />
      <Redirect to="/home" />
    </Switch>
  );
}

export default Router;
