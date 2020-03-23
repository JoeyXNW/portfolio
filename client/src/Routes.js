import React from "react";
import Layout from "./components/hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Portfolio from "./components/Portfolio";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </Layout>
  );
};

export default Routes;
