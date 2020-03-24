import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import Layout from "./components/hoc/Layout";
import { Redirect } from "react-router-dom";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route path="*" component={NotFound} /> */}
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
{
}
