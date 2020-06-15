import React, { Component } from "react";
import "../BlogPage/styles.css";
import Header from "../../components/Header";
import RecentPosts from "../../components/RecentPosts";
import DateHelper from "../../../helpers/DateHelper";
import {
  Main,
  Container,
  Aside,
  BodyContainer,
  Legend,
  H1,
  BtnClose,
  LineXOne,
  LineXTwo,
} from "./styles";

export class PostPage extends Component {
  render() {
    const { history } = this.props;
    const { title, body, metadata } = this.props.location.state.post;
    const { authorId, publishedAt } = metadata;

    return (
      <Container>
        <Header />
        <Main>
          <BtnClose onClick={() => history.push("blog")}>
            <LineXOne />
            <LineXTwo />
          </BtnClose>
          <H1>{title}</H1>
          <BodyContainer>{body}</BodyContainer>
          <Legend>
            <strong>Author: {}</strong>
          </Legend>
          <Legend>
            <strong>Data: {DateHelper.formatDatetime(publishedAt)}</strong>
          </Legend>
        </Main>
        <Aside>
          <RecentPosts history={history} />
        </Aside>
      </Container>
    );
  }
}

export default PostPage;
