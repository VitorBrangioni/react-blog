import React from "react";
import {
  Container,
  Box,
  ContainerTitle,
  ContainerBody,
  Button,
  Title,
  Body,
  ContainerButton
} from "./styles";

const Post = ({ title, body }) => {
  return (
    <Container>
      <Box>
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
        <ContainerBody>
          <Body>{body}</Body>
        </ContainerBody>
          <Button>Ler mais</Button>
      </Box>
    </Container>
  );
};

export default Post;
