import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import BlogPage from '../src/views/pages/BlogPage';

const TestComp = () => <h1>Alo</h1>;

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/blog">
        <BlogPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
