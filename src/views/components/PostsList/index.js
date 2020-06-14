import React, { Component } from "react";
import Post from "../Post";
import { Container } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../../store/ducks/postDuck";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.props.getPosts();
  }

  render() {
    const { data } = this.props.resGetPosts;
    return (
      <Container>
        {data.map((post, i) => (
          <Post title={post.title} body={post.body} key={i}/>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({ PostDuck }) => {
  return {
    resGetPosts: PostDuck,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PostsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
