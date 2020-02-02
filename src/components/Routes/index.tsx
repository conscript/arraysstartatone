import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Gallery from "../../pages/Gallery";
import Members from "../../pages/Members";
import Games from "../../pages/Games";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={About} path="/about" />
        <Route component={Gallery} path="/gallery" />
        <Route component={Members} path="/members" />
        <Route component={Games} path="/games" />
      </Switch>
    </Router>
  );
};

export default Routes;
