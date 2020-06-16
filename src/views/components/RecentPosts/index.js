import React, { Component } from "react";
import { Container, Link } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../../store/ducks/postDuck";

class RecentPosts extends Component {
  render() {
    const { history } = this.props;
    const { recentPosts } = this.props.resGetPosts;

    return (
      <Container>
        <div>
          <h2>Recent Posts:</h2>
        </div>
        <div>
          {recentPosts.map((post, i) => (
            <Link
              key={`recent-post-${i}`}
              onClick={() => history.push("post", { post })}
            >
              <h3>- {post.title}</h3>
            </Link>
          ))}
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
