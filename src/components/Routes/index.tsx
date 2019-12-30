import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import About from "../../pages/About";
import Gallery from "../../pages/Gallery";
import Resources from "../../pages/Resources";
import Members from "../../pages/Members";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={Blog} path="/blog" />
        <Route component={About} path="/about" />
        <Route component={Gallery} path="/gallery" />
        <Route component={Resources} path="/resources" />
        <Route component={Members} path="/members" />
      </Switch>
    </Router>
  );
};

export default Routes;
