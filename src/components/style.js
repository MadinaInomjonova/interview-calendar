import styled from "styled-components";

const Container = styled.div`
  max-width: 90%;
  box-sizing: border-box;
  margin: 0 auto;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.content};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 40px;
`;

export { Container, Flex, Grid };
