import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// pages
import Index from "../../views/Index.js";
import NucleoIcons from "../../views/NucleoIcons.js";
import LandingPage from "../../views/examples/LandingPage.js";
import ProfilePage from "../../views/examples/ProfilePage.js";
import RegisterPage from "../../views/examples/RegisterPage.js";
import HomePage from "views/HomePage/HomePage.js";
import CommentDisplayPage from "components/main/CommentDisplayPage.js";

function Router(props) {
  return (
    <Switch>
      <Route path="/home" render={(props) => <HomePage {...props} />} />
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/commentData"
        render={(props) => <CommentDisplayPage {...props} />}
      />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  );
}

export default Router;
