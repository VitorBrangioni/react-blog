import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../../store/ducks/postDuck";

class RecentPosts extends Component {
  render() {
    const { recentPosts } = this.props.resGetPosts;

    return (
      <Container>
        <div>
          <h2>Recent Posts:</h2>
        </div>
        <div>
          {recentPosts.map((post, i) => (
            <a href="" key={`recent-post-${i}`}>
              <h3>- {post.title}</h3>
            </a>
          ))}
          ;
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecentPosts);
