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

const Post = ({ post }) => {
  const history = useHistory();
  const { title, body, metadata } = post;
  const { authorId, publishedAt } = metadata;

  return (
    <Container>
      <Box>
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
        <ContainerBody>
          <Body>{`${body.slice(0, 200)}...`}</Body>
          <Legend>
            Author: Vitor Brangioni. | Data:{" "}
            {DateHelper.formatDatetime(publishedAt)}
          </Legend>
        </ContainerBody>

        <Button onClick={() => history.push("/post", { post })}>
          Ler mais
        </Button>
      </Box>
    </Container>
  );
};

export default Post;
