import React, { Component } from "react";
import Post from "../Post";
import { Container } from './styles'

class PostsList extends Component {
  render() {
    return (
      <Container>
        <Post title="Test" body="alooo" />
        <Post title="Test" body="alooo" />
        <Post title="Test" body="alooo" />
      </Container>
    );
  }
}

export default PostsList;
