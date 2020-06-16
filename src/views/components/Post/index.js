import React from "react";
import { useHistory } from "react-router-dom";
import DateHelper from "../../../helpers/DateHelper";
import {
  Container,
  Box,
  ContainerTitle,
  ContainerBody,
  Button,
  Title,
  Body,
  Legend,
} from "./styles";

const Post = ({ post, testId }) => {
  const history = useHistory();
  const { title, body, author, metadata } = post;
  const { publishedAt } = metadata;

  return (
    <Container data-testid={testId}>
      <Box>
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
        <ContainerBody>
          <Body>{`${body.slice(0, 200)}...`}</Body>
          <Legend>
            <strong>Author:</strong> {author.name} | <strong>Date: </strong>
            {DateHelper.formatDatetime(publishedAt)}
          </Legend>
        </ContainerBody>

        <Button
          onClick={() => history.push("/post", { post })}
          data-testid="btn-open-post"
        >
          Ler mais
        </Button>
      </Box>
    </Container>
  );
};

export default Post;
