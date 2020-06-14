import React, { Component } from "react";
import "./styles.css";
import Header from "../../components/Header";
import PostsList from "../../components/PostsList";
import RecentPosts from "../../components/RecentPosts";
import PostsListFilters from "../../components/PostsListFilters";
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
          <PostsListFilters />
          <RecentPosts />
        </Aside>
      </Container>
    );
  }
}

export default BlogPage;
