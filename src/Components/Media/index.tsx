import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 480px;
  height: 1000px;
  background-color: blue;

  @media (min-width: 481px) {
    width: 940px;
    background-color: red;
  }
`;

const Media: React.FC = () => {
  return <Container />;
};

export default Media;
