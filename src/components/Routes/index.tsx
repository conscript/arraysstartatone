import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import About from "../../pages/About";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={Blog} path="/blog" exact={true} />
        <Route component={About} path="/about" exact={true} />
      </Switch>
    </Router>
  );
};

export default Routes;
