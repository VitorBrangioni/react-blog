import React, { Component } from "react";
import { Container } from "./styles";

export class RecentPosts extends Component {
  render() {
    return (
      <Container>
        <div>
          <h2>Recent Posts:</h2>
        </div>
        <div>
          <a href="">
            <h3>- Artigo 001</h3>
          </a>
          <a href="">
            <h3>- Artigo 002</h3>
          </a>
          <a href="">
            <h3>- Artigo 003</h3>
          </a>
          <a href="">
            <h3>- Artigo 003</h3>
          </a>
          <a href="">
            <h3>- Artigo 003</h3>
          </a>
        </div>
      </Container>
    );
  }
}

export default RecentPosts;
