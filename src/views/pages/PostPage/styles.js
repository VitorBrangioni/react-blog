import styled from "styled-components";

export const Main = styled.main`
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  background: white;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 100%;
  grid-row-start: 2;
  grid-row-end: null;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 20vh 80vh;
`;

export const Aside = styled.aside`
  background: #871ae5;
  grid-column: 2/3;
  grid-row: 2 / null;
  padding: 60px 30px;
`;

export const H1 = styled.h1`
    color: #212121;
`;
