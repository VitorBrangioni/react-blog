import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const TestComp = () => <h1>Alo</h1>;

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/test">
        <TestComp />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
