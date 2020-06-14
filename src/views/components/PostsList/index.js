import React, { Component } from "react";
import Post from "../Post";
import { Container } from './styles'
import PostsController from '../../../controllers/PostsController';

class PostsList extends Component {

  constructor() {
    super();
    PostsController.getPosts();
  }

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
