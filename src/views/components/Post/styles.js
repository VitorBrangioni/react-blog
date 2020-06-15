import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 20px;
  height: 500px;
`;

export const Box = styled.div`
  position: relative;
  background: linear-gradient(to bottom right, #871ae5 40%, #ff5824 100%);
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(#cbcdd3, 10%);
  padding: 20px;
  height: 100%;
`;

export const ContainerTitle = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  text-align: center;
  color: white;
`;

export const ContainerBody = styled.div`
  padding: 0px 10px 0px 20px;
  position: relative;
  width: 100%;
  heigth: 100px;
  text-align: center;
  color: white;
  font-size: 1.6rem;
`;

export const ContainerButton = styled.div`
  position: relative;
  padding: 20px;
  heigth: 50px;
`;

export const Button = styled.button`
  position: absolute;
  background: #212121;
  width: 50%;
  height: 12%;
  border-radius: 20px;
  top: 80%;
  left: 25%;
  outline: 0;
  border: none;
  box-shadow: 2px 2px 10px rgba(#777777, 0.5);
  transition: all 0.5s ease-in-out;
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

export const Title = styled.h2``;

export const Body = styled.p`
  font-size: 1.8rem;
`;

export const Legend = styled.p`
  color: #212121;
  font-size: 1.6rem;
`;
