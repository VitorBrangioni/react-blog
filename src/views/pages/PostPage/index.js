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
    const { title, body, author, metadata } = this.props.location.state.post;
    const { publishedAt } = metadata;

    return (
      <Container>
        <Header />
        <Main>
          <BtnClose onClick={() => history.push("/")}>
            <LineXOne />
            <LineXTwo />
          </BtnClose>
          <H1>{title}</H1>
          <BodyContainer>{body}</BodyContainer>
          <Legend>
            Author: {author.name}
          </Legend>
          <Legend>
            Data: {DateHelper.formatDatetime(publishedAt)}
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
