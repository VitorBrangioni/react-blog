import React, { Component } from "react";
import Post from "../Post";
import { Container } from './styles'
// import PostsController from '../../../controllers/PostsController';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from '../../../store/ducks/postDuck';

class PostsList extends Component {

  constructor(props) {
    super(props);
    this.props.getPosts();
  }

  render() {
    console.log("posts = ", this.props.posts);
    return (
      <Container>
        <Post title="Test" body="alooo" />
        <Post title="Test" body="alooo" />
        <Post title="Test" body="alooo" />
      </Container>
    );
  }
}


const mapStateToProps = (abc) => {
  console.log(abc)
  return {
    posts: abc.PostDuck,
  };
};

// export default PostsList;

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
