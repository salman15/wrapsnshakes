import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInBottom = keyframes`
from {
    opacity: 0;
    top: 10px;
  }
  to {
    opacity: 1;
    top: 0px;
  }
`;

const Block = styled.div`
  box-shadow: 0 2px 19px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-radius: 62px;
  padding: 20px;
  background-image: ${props => "url(" + props.bgImage + ")"};
  background-color: black;
  background-size: 150%;
  background-position: center;
  margin: 32px 0;
  min-height: 400px;
  color: ${props => (props.color ? props.color : "white")};

  h1 {
    position: relative;
    font-size: 280px;
    font-style: italic;
    animation: ${fadeInBottom} 1s ease;
    width: 60%;
    margin: 0;
    font-weight: 100;
    text-align: center;
  }
  h2 {
    font-size: 124px;
    font-weight: 100;
    margin: 0;
  }
  h3 {
    font-weight: 100;
    font-size: 60px;
    margin: 40px 0;
  }
`;

export const ContentBlock = ({ title, bgImage, children, color }) => {
  console.log(bgImage);
  return (
    <Block bgImage={bgImage} color={color}>
      {title &&
        <h1>
          {title}
        </h1>}

      {children}
    </Block>
  );
};