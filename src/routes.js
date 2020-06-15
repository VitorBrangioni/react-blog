import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BlogPage from '../src/views/pages/BlogPage';
import PostPage from '../src/views/pages/PostPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/blog" render={ props =>  <BlogPage {...props} />} />
      <Route exact path="/post" render={ props =>  <PostPage {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
