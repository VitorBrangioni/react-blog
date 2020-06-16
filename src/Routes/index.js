import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Wrapper } from "./styles";

import BlogPage from "../../src/views/pages/BlogPage";
import PostPage from "../../src/views/pages/PostPage";

function Routes({ location }) {
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 500, exit: 1 }}
          classNames={"fade"}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <BlogPage {...props} />}
            />
            <Route
              exact
              path="/post"
              render={(props) => <PostPage {...props} />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

export default withRouter(Routes);
