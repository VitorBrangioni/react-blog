import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  padding: 20px;
`;

export const Box = styled.div`
  position: relative;
  background: linear-gradient(to bottom right, #871ae5 40%, #ff5824 100%);
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(#cbcdd3, 10%);
  padding: 20px;
`;

export const ContainerTitle = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  height: 40%;
  top: 15%;
  color: white;
`;

export const ContainerBody = styled.div`
  padding: 0px 20px 0px 20px;
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
`;

export const Button = styled.button`
  position: relative;
  background: #212121;
  width: 50%;
  border-radius: 20px;
  left: 25%;
  outline: 0;
  border: none;
  box-shadow: 2px 2px 10px rgba(#777777, 0.5);
  transition: all 0.5s ease-in-out;
  font-size: 1.4rem;
  padding: 10px;
  color: white;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

export const Title = styled.h2`
`;

export const Body = styled.p`
`;