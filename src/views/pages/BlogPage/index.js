import React, { Component } from "react";
import "./styles.css";
import Header from "../../components/Header";
import PostsList from "../../components/PostsList";
import RecentPosts from "../../components/RecentPosts";
import { Main, Container, Aside } from "./styles";

export class BlogPage extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <PostsList />
        </Main>
        <Aside>
          <RecentPosts />
        </Aside>
      </Container>
    );
  }
}

export default BlogPage;
