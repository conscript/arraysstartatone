import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact={true} />
      </Switch>
    </Router>
  );
};

export default Routes;