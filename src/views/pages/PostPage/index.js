import React, { Component } from "react";
import "../BlogPage/styles.css";
import Header from "../../components/Header";
import RecentPosts from "../../components/RecentPosts";
import { Main, Container, Aside, H1, BtnClose, LineXOne, LineXTwo } from "./styles";


export class PostPage extends Component {
  render() {
    const { history } = this.props;
    const { title, body } = this.props.location.state.post;

    return (
      <Container>
        <Header />
        <Main>
          <BtnClose onClick={() => history.push('blog')}>
            <LineXOne />
            <LineXTwo />
          </BtnClose>
          <H1>{title}</H1>
          <p>{body}</p>
        </Main>
        <Aside>
          <RecentPosts  history={history}/>
        </Aside>
      </Container>
    );
  }
}

export default PostPage;
