import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Box,
  ContainerTitle,
  ContainerBody,
  Button,
  Title,
  Body,
} from "./styles";

const Post = ({ post }) => {
  const history = useHistory();
  const { title, body } = post;

  return (
    <Container>
      <Box>
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
        <ContainerBody>
          <Body>{`${body.slice(0, 200)}...`}</Body>
        </ContainerBody>
        <Button onClick={() => history.push("/post", { post })}>
          Ler mais
        </Button>
      </Box>
    </Container>
  );
};

export default Post;
