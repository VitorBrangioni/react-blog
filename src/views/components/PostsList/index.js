import React, { Component } from "react";
import Post from "../Post";
import { Container } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../../store/ducks/postDuck";
import { PostsListLoader } from "../Loader";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.props.getPosts(null, -1);
  }

  render() {
    const { data, loading } = this.props.resGetPosts;
    if (loading) {
      return (<PostsListLoader />);
    } 
    return (
      <Container>
        {data.map((post, i) => (
          <Post post={post} key={i} />
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
