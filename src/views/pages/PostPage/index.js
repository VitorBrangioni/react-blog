import React, { Component } from "react";
import "../BlogPage/styles.css";
import Header from "../../components/Header";
import RecentPosts from "../../components/RecentPosts";
import { Main, Container, Aside, H1 } from "./styles";

export class PostPage extends Component {
  render() {
    const { title, body } = this.props.location.state.post;

    return (
      <Container>
        <Header />
        <Main>
          <H1>{title}</H1>
          <p>{body}</p>
        </Main>
        <Aside>
          <RecentPosts />
        </Aside>
      </Container>
    );
  }
}

export default PostPage;
