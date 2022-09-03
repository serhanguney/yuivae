import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  grid-column: span 7;
`;

const Circle = styled.div`
  border-radius: 40%;
  border: 1px solid palevioletred;
  position: absolute;
  right: 0;
  left: 60%;
  top: 0;
  bottom: 0;
`;

const Image = styled.div`
  background-color: antiquewhite;
  width: 35%;
`;

export { Circle, Container, Image };
